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

// Must match deployed origin (same as vite SITE_URL)
const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://genezio.com").replace(/\/$/, "");
const OG_IMAGE_URL = `${SITE_URL}/images/genezio-black-logo.png`;

// Default meta image tags (always injected; Helmet og:image is stripped so this wins)
// Use PNG for og:image (LinkedIn accepts JPG/PNG; some crawlers prefer PNG)
const defaultMetaImageTags = `
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${OG_IMAGE_URL}" />
    <meta property="og:image:secure_url" content="${OG_IMAGE_URL}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="Genezio - The Future is Conversational — Lead it." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${OG_IMAGE_URL}" />
`;

// Remove any og:image / twitter:image / og:type from Helmet so our intended OG image and type win.
function stripOgImageFromMeta(metaHtml) {
  if (!metaHtml || typeof metaHtml !== "string") return metaHtml;
  return metaHtml
    .replace(/<meta[^>]*property=["']og:image[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:image[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:image:[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:image:[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*name=["']twitter:image["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*name=["']twitter:image["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:type["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:type["'][^>]*\/?>/gi, "")
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

  // Prepend our OG image as the first <img> in the body. Use full 1200x627 and hide off-screen
  // so scrapers that pick "first valid image" (many ignore 1px/tiny images) use our logo, not partner logos.
  const rootContent = `<img src="${OG_IMAGE_URL}" alt="Genezio" width="1200" height="627" fetchpriority="high" style="position:absolute;left:-9999px;top:0;width:1200px;height:627px;visibility:hidden;pointer-events:none;" />${appHtml}`;

  const html = template
    .replace("<!--app-helmet-head-->", headHtml)
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${rootContent}</div>`
    );

  const filePath =
    url === "/"
      ? path.resolve(__dirname, "dist/index.html")
      : path.resolve(__dirname, "dist", `.${url}`, "index.html");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");

  console.log("Generated", filePath);
}
