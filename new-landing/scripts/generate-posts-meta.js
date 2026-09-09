import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.resolve(__dirname, "../src/posts");
const outputFile = path.resolve(__dirname, "../src/lib/posts-meta.json");

if (!fs.existsSync(postsDir)) {
  console.error("Posts directory not found:", postsDir);
  process.exit(1);
}

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
const meta = [];

function extractFirstTag(content) {
  const tagMatch = content.match(/tags:\s*\n\s*-\s*(.*)/);
  if (tagMatch) return tagMatch[1].trim();
  return "General";
}

function extractAllTags(content) {
  const tagsSection = content.match(/tags:\s*\n((?:\s*-\s*.+\n?)*)/);
  if (!tagsSection) return [];
  const tagLines = tagsSection[1].match(/\s*-\s*(.+)/g);
  if (!tagLines) return [];
  return tagLines.map((line) => line.replace(/\s*-\s*/, "").trim()).filter(Boolean);
}

files.forEach((file) => {
  const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return;

  const block = match[1];
  const fm = {};
  block.split("\n").forEach((line) => {
    const [k, ...v] = line.split(":");
    if (k && v.length > 0) {
      let val = v.join(":").trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      fm[k.trim()] = val;
    }
  });

  if (fm.draft === "true") return;

  const id = file.replace(".md", "");
  const category = extractFirstTag(content);
  const tags = extractAllTags(content);

  meta.push({
    id,
    title: fm.title || "Untitled",
    excerpt: fm.preview || fm.description || "No description",
    description: fm.description || fm.preview || "",
    category,
    postType: fm.type === "research" ? "research" : undefined,
    readTime: fm.readTime ? `${fm.readTime} min read` : "5 min read",
    date: fm.date
      ? new Date(fm.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Recent",
    timestamp: fm.date ? new Date(fm.date).getTime() : 0,
    author: fm.author || "Genezio Team",
    metaOgImage: fm.meta_og_image || "",
    metaOgUrl: fm.meta_og_url || "",
    metaTitle: fm.metaTitle || undefined,
    tags,
  });
});

// Sort by timestamp descending
meta.sort((a, b) => b.timestamp - a.timestamp);

fs.writeFileSync(outputFile, JSON.stringify(meta, null, 2), "utf-8");
console.log(`Successfully generated ${outputFile} with ${meta.length} posts.`);
