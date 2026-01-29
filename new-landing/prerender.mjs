import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aici pui rutele statice pe care vrei să le generezi ca HTML.
// Pentru cele cu :slug ai nevoie de o listă de slug-uri concrete (vezi mai jos).
const routes = [
  "/", // https://genezio.com/

  "/conversational-brand-presence",
  "/data-processing-agreement",
  "/glossary",

  "/glossary/ai-brand-perception",
  "/glossary/ai-citation",
  "/glossary/ai-competitive-analysis",
  "/glossary/ai-marketing-platform",
  "/glossary/ai-marketing-software",
  "/glossary/ai-mention-sentiment",
  "/glossary/ai-persona-targeting",
  "/glossary/ai-platform",
  "/glossary/ai-platforms-for-business",
  "/glossary/ai-prompt-engineering",
  "/glossary/ai-recommendation-score",
  "/glossary/ai-search-optimization",
  "/glossary/ai-training-data",
  "/glossary/ai-visibility",
  "/glossary/answer-engine-optimization",
  "/glossary/chat-gpt-citations",
  "/glossary/chatgpt-prompt-engineering",
  "/glossary/conversation-analysis",
  "/glossary/conversation-intelligence-platform",
  "/glossary/conversation-intelligence-software",
  "/glossary/conversational-ai-platform",
  "/glossary/conversational-brand-presence",
  "/glossary/conversational-funnel",
  "/glossary/conversational-intent",
  "/glossary/conversational-keyword",
  "/glossary/enterprise-ai-platform",
  "/glossary/enterprise-ai-software",
  "/glossary/generative-ai-platform",
  "/glossary/generative-engine-optimization",
  "/glossary/generative-response",
  "/glossary/llm-optimisation",
  "/glossary/llm-prompt-engineering",
  "/glossary/multi-turn-conversation",
  "/glossary/prompt-engineering",
  "/glossary/source-attribution",
  "/glossary/structured-data-for-ai",

  "/increase-conversion",
  "/pricing",
  "/support-terms",
  "/terms-and-conditions",
  "/privacy-policy",
  "/policy",
  "/aboutgenezio",
  "/blog",
  "/agencies",
];

// Dynamically add blog post routes
const postsDir = path.resolve(__dirname, "src/posts");
if (fs.existsSync(postsDir)) {
  const postFiles = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
  postFiles.forEach((file) => {
    const slug = file.replace(".md", "");
    routes.push(`/blog/${slug}`);
  });
  console.log(`Added ${postFiles.length} blog post routes.`);
} else {
  console.warn("Posts directory not found:", postsDir);
}

// Dynamically add author routes
const authorFile = path.resolve(__dirname, "src/lib/authors.ts");
if (fs.existsSync(authorFile)) {
  const content = fs.readFileSync(authorFile, "utf-8");
  const authorMatches = content.matchAll(/"([a-z0-9-]+)":\s*\{/g);
  let authorCount = 0;
  for (const match of authorMatches) {
    // Basic validation to avoid matching non-author keys that might look similar
    // The structure is quite specific: "slug": {
    const slug = match[1];
    if (["social", "stats", "expertise"].includes(slug)) continue;

    routes.push(`/blog/author/${slug}`);
    authorCount++;
  }
  console.log(`Added ${authorCount} author routes.`);
} else {
  console.warn("Author file not found:", authorFile);
}

const template = fs.readFileSync(
  path.resolve(__dirname, "dist/index.html"),
  "utf-8"
);

// importăm bundle-ul SSR generat de Vite
const { render } = await import("./dist/server/entry-server.js");

// Default meta image tags (used as fallback if not set in Helmet)
const defaultMetaImageTags = `
    <meta property="og:image" content="https://genezio.com/images/genezio-black-logo.jpg" />
    <meta property="og:image:secure_url" content="https://genezio.com/images/genezio-black-logo.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Genezio - The Future is Conversational — Lead it." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://genezio.com/images/genezio-black-logo.jpg" />
`;

// Remove any og:image / twitter:image from Helmet output so our intended image is never overwritten (e.g. by "first image" behavior)
function stripOgImageFromMeta(metaHtml) {
  if (!metaHtml || typeof metaHtml !== "string") return metaHtml;
  return metaHtml
    .replace(/<meta[^>]*property=["']og:image[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:image[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:image:[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:image:[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*name=["']twitter:image["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*name=["']twitter:image["'][^>]*\/?>/gi, "")
    .replace(/\n\s*\n/g, "\n")
    .trim();
}

for (const url of routes) {
  const { appHtml, helmet } = await render(url);

  const helmetMetaRaw = helmet.meta?.toString() ?? "";
  const helmetMeta = stripOgImageFromMeta(helmetMetaRaw);

  const headHtml = [
    helmet.title?.toString() ?? "",
    helmetMeta,
    defaultMetaImageTags,
    helmet.link?.toString() ?? "",
    helmet.script?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n");

  const html = template
    .replace("<!--app-helmet-head-->", headHtml)
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${appHtml}</div>`
    );

  const filePath =
    url === "/"
      ? path.resolve(__dirname, "dist/index.html")
      : path.resolve(__dirname, "dist", `.${url}`, "index.html");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");

  console.log("Generated", filePath);
}
