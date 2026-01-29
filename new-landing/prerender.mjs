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

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const stripOverriddenHead = (html, helmet, extraMetaKeys = []) => {
  let output = html;

  const helmetTitle = helmet.title?.toString() ?? "";
  const helmetMeta = helmet.meta?.toString() ?? "";
  const helmetLink = helmet.link?.toString() ?? "";
  const helmetScript = helmet.script?.toString() ?? "";

  if (helmetTitle.trim()) {
    output = output.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");
  }

  const metaAttrRegex = /<meta[^>]*(?:name|property)=["']([^"']+)["'][^>]*>/gi;
  const metaKeys = new Set(extraMetaKeys);
  for (const match of helmetMeta.matchAll(metaAttrRegex)) {
    metaKeys.add(match[1]);
  }

  for (const key of metaKeys) {
    const keyRegex = new RegExp(
      `<meta\\b[^>]*\\b(?:name|property)=["']${escapeRegExp(
        key
      )}["'][^>]*>`,
      "gi"
    );
    output = output.replace(keyRegex, "");
  }

  const linkTagRegex = /<link[^>]*>/gi;
  for (const match of helmetLink.matchAll(linkTagRegex)) {
    const tag = match[0];
    const relMatch = tag.match(/\brel=["']([^"']+)["']/i);
    const hrefMatch = tag.match(/\bhref=["']([^"']+)["']/i);
    if (!relMatch || !hrefMatch) continue;
    const rel = relMatch[1];
    const href = hrefMatch[1];
    const linkRegex = new RegExp(
      `<link\\b[^>]*\\brel=["']${escapeRegExp(
        rel
      )}["'][^>]*\\bhref=["']${escapeRegExp(href)}["'][^>]*>`,
      "gi"
    );
    output = output.replace(linkRegex, "");
  }

  const scriptTagRegex = /<script[^>]*>[\s\S]*?<\/script>/gi;
  for (const match of helmetScript.matchAll(scriptTagRegex)) {
    const tag = match[0];
    const srcMatch = tag.match(/\bsrc=["']([^"']+)["']/i);
    if (!srcMatch) continue;
    const src = srcMatch[1];
    const scriptRegex = new RegExp(
      `<script\\b[^>]*\\bsrc=["']${escapeRegExp(src)}["'][^>]*>[\\s\\S]*?<\\/script>`,
      "gi"
    );
    output = output.replace(scriptRegex, "");
  }

  return output;
};

const extractMetaContent = (metaHtml, attribute, key) => {
  const pattern = new RegExp(
    `<meta\\b[^>]*\\b${attribute}=["']${escapeRegExp(
      key
    )}["'][^>]*\\bcontent=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const match = metaHtml.match(pattern);
  return match ? match[1] : "";
};

const upsertMetaProperty = (headHtml, property, content) => {
  const metaTagRegex = new RegExp(
    `<meta\\b[^>]*\\bproperty=["']${escapeRegExp(
      property
    )}["'][^>]*>`,
    "gi"
  );
  const cleaned = headHtml.replace(metaTagRegex, "").trim();
  const tag = `    <meta property="${property}" content="${content}" />`;
  return cleaned ? `${cleaned}\n${tag}` : tag;
};

const upsertMetaName = (headHtml, name, content) => {
  const metaTagRegex = new RegExp(
    `<meta\\b[^>]*\\bname=["']${escapeRegExp(name)}["'][^>]*>`,
    "gi"
  );
  const cleaned = headHtml.replace(metaTagRegex, "").trim();
  const tag = `    <meta name="${name}" content="${content}" />`;
  return cleaned ? `${cleaned}\n${tag}` : tag;
};

for (const url of routes) {
  const { appHtml, helmet } = await render(url);

  const headHtml = [
    helmet.title?.toString() ?? "",
    helmet.meta?.toString() ?? "",
    helmet.link?.toString() ?? "",
    helmet.script?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n");

  const helmetTitleText = (helmet.title?.toString() ?? "")
    .replace(/<[^>]+>/g, "")
    .trim();
  const helmetMetaHtml = helmet.meta?.toString() ?? "";
  const helmetDescription = extractMetaContent(
    helmetMetaHtml,
    "name",
    "description"
  );
  const helmetOgImage = extractMetaContent(
    helmetMetaHtml,
    "property",
    "og:image"
  );
  const helmetOgImageType = extractMetaContent(
    helmetMetaHtml,
    "property",
    "og:image:type"
  );
  const helmetTwitterImage = extractMetaContent(
    helmetMetaHtml,
    "name",
    "twitter:image"
  );

  let mergedHeadHtml = headHtml;
  if (helmetTitleText) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:title",
      helmetTitleText
    );
    mergedHeadHtml = upsertMetaName(
      mergedHeadHtml,
      "twitter:title",
      helmetTitleText
    );
  }
  if (helmetDescription) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:description",
      helmetDescription
    );
    mergedHeadHtml = upsertMetaName(
      mergedHeadHtml,
      "twitter:description",
      helmetDescription
    );
  }
  if (helmetOgImage) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:image",
      helmetOgImage
    );
  }
  if (helmetOgImageType) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:image:type",
      helmetOgImageType
    );
  }
  if (helmetTwitterImage) {
    mergedHeadHtml = upsertMetaName(
      mergedHeadHtml,
      "twitter:image",
      helmetTwitterImage
    );
  }

  const extraMetaKeys = [];
  if (helmetTitleText) {
    extraMetaKeys.push("og:title", "twitter:title");
  }
  if (helmetDescription) {
    extraMetaKeys.push("og:description", "twitter:description");
  }
  if (helmetOgImage) {
    extraMetaKeys.push("og:image");
  }
  if (helmetOgImageType) {
    extraMetaKeys.push("og:image:type");
  }
  if (helmetTwitterImage) {
    extraMetaKeys.push("twitter:image");
  }

  const html = stripOverriddenHead(template, helmet, extraMetaKeys)
    .replace("<!--app-helmet-head-->", mergedHeadHtml)
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
