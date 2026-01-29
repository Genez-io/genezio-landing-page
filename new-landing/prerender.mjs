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

// For homepage only: build a minimal head with ONLY our og:image so nothing can override it.
const HOMEPAGE_OG_HEAD = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}/" />
    <meta property="og:site_name" content="Genezio" />
    <meta property="og:title" content="Genezio — Make AI talk about your brand" />
    <meta property="og:description" content="Understand, monitor & optimize how AI mentions your brand. GEO platform for marketing teams." />
    <meta property="og:image" content="${OG_IMAGE_URL}" />
    <meta property="og:image:secure_url" content="${OG_IMAGE_URL}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="Genezio" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${OG_IMAGE_URL}" />
    <meta name="description" content="Genezio helps you understand, monitor & optimize your brand's presence in AI. Analyze visibility, track competitors & shape your narrative. Book a demo!" />
    <title>Make ChatGPT Talk About Your Brand in AI | Genezio</title>
`;

for (const url of routes) {
  const { appHtml, helmet } = await render(url);

  const isHomepage = url === "/";

  const headHtml = isHomepage
    ? HOMEPAGE_OG_HEAD
    : (() => {
        const helmetMetaRaw = helmet.meta?.toString() ?? "";
        const helmetMeta = stripOgImageFromMeta(helmetMetaRaw);
        return [
          helmet.title?.toString() ?? "",
          helmetMeta,
          defaultMetaImageTags,
          helmet.link?.toString() ?? "",
          helmet.script?.toString() ?? "",
        ]
          .filter(Boolean)
          .join("\n");
      })();

  // Prepend our OG image as the first <img> in the body so "first image" fallback is our logo.
  const rootContent = `<img src="${OG_IMAGE_URL}" alt="Genezio" width="1200" height="627" fetchpriority="high" style="position:absolute;left:-9999px;top:0;width:1200px;height:627px;visibility:hidden;pointer-events:none;" />${appHtml}`;

  let html = template
    .replace("<!--app-helmet-head-->", headHtml)
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${rootContent}</div>`
    );

  // Homepage: replace entire <head> so only our OG tags exist (no template clutter).
  if (isHomepage) {
    html = html.replace(
      /<head[^>]*>[\s\S]*?<\/head>/i,
      `<head>${HOMEPAGE_OG_HEAD}
    <link rel="icon" type="image/svg+xml" href="/polymet-logo.svg" />
    <meta name="robots" content="max-image-preview:large" />
    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-PP95P9BW");
    </script>
    <!-- End Google Tag Manager -->
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"Genezio","url":"https://genezio.com","applicationCategory":"BusinessApplication","operatingSystem":"Web Browser","description":"Genezio is a Generative Engine Optimization (GEO) platform that helps brands understand, monitor, and optimize how AI mentions them."}
    </script>
  </head>`
    );
  }

  const filePath =
    url === "/"
      ? path.resolve(__dirname, "dist/index.html")
      : path.resolve(__dirname, "dist", `.${url}`, "index.html");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");

  console.log("Generated", filePath);
}
