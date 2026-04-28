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
  "/glossary/query-fan-out",

  "/increase-conversion",
  "/pricing",
  "/support-terms",
  "/terms-and-conditions",
  "/privacy-policy",
  "/about-genezio",
  "/blog",
  "/agencies",
  "/industry-leaderboards",
  "/ai-search-optimization-tool/",
  "/blog/affordable-cloud-hosting/",
  "/blog/ai-agent-examples/",
  "/blog/ai-agent-tools/",
  "/blog/aws-lambda-alternatives/",
  "/blog/common-mistakes-ai-agents-make/",
  "/blog/create-your-first-app-using-chatgpt/",
  "/blog/create-your-first-web3-app/",
  "/blog/implement-a-shopping-cart-using-typescript-redis-and-react/",
  "/blog/integrate-stripe-payments/",
  "/blog/now-available-neon-postgres/",
  "/blog/retrieval-augmented-generation-is-fixing-llm/",
  "/blog/understanding-ai-agents-101/",
  "/deploy-nextjs-apps/",
  "/deploy-nodejs-express-on-genezio-serverless/",
  "/deployment-platform/deploy-django-on-genezio-serverless/",
  "/deployment-platform/deploy-nextjs-apps/",
  "/docs/",
  "/docs/cli-tool/cli-commands/account/",
  "/docs/cli-tool/cli-commands/login/",
  "/docs/cli-tool/cli-commands/ls/",
  "/docs/features/cron-jobs/",
  "/docs/features/custom-domain-configuration/",
  "/docs/features/databases/",
  "/docs/frameworks/fastify/",
  "/docs/getting-started/",
  "/docs/integrations/",
  "/docs/integrations/neon-postgres/",
  "/docs/project-structure/",
  "/docs/project-structure/backend-environment-variables/",
  "/docs/project-structure/genezio-configuration-file/",
  "/docs/troubleshooting/",
  "/docs/tutorials/connect-to-mongo-atlas/",
  "/tags/tutorials/",
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

const stripOverriddenHead = (html, helmetTitleText, helmetMetaHtml, extraMetaKeys = []) => {
  let output = html;

  // Always strip any pre-existing title tags from the template to prevent duplicates.
  // The Helmet-managed title (with data-rh="true") will be injected via headHtmlParts.
  output = output.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");

  const metaAttrRegex = /<meta[^>]*(?:name|property)=["']([^"']+)["'][^>]*>/gi;
  const metaKeys = new Set(extraMetaKeys);
  for (const match of helmetMetaHtml.matchAll(metaAttrRegex)) {
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

  // Always strip canonical so the correct one from current page gets added
  output = output.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, "");

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
  const tag = `    <meta data-rh="true" property="${property}" content="${content}" />`;
  return cleaned ? `${cleaned}\n${tag}` : tag;
};

const upsertMetaName = (headHtml, name, content) => {
  const metaTagRegex = new RegExp(
    `<meta\\b[^>]*\\bname=["']${escapeRegExp(name)}["'][^>]*>`,
    "gi"
  );
  const cleaned = headHtml.replace(metaTagRegex, "").trim();
  const tag = `    <meta data-rh="true" name="${name}" content="${content}" />`;
  return cleaned ? `${cleaned}\n${tag}` : tag;
};

for (const url of routes) {
  const { appHtml, helmet } = await render(url);

  // React 19 + react-helmet-async v3 bypasses HelmetProvider context and leaves tags inside appHtml.
  let titleMatch = appHtml.match(/<title[^>]*>[\s\S]*?<\/title>/i);
  let metaMatches = appHtml.match(/<meta[^>]*>/ig) || [];
  let linkMatches = appHtml.match(/<link[^>]*rel=["']canonical["'][^>]*>/ig) || [];


  const headHtmlParts = [];
  if (titleMatch) {
    let titleHTML = titleMatch[0];
    if (!titleHTML.includes('data-rh="true"')) {
      titleHTML = titleHTML.replace('<title', '<title data-rh="true"');
    }
    headHtmlParts.push(titleHTML);
  }

  const processedMetaMatches = metaMatches.map(m => {
    if (!m.includes('data-rh="true"')) {
      return m.replace('<meta', '<meta data-rh="true"');
    }
    return m;
  });

  const processedLinkMatches = linkMatches.map(l => {
    if (!l.includes('data-rh="true"')) {
      return l.replace('<link', '<link data-rh="true"');
    }
    return l;
  });

  headHtmlParts.push(...processedMetaMatches, ...processedLinkMatches);

  const headHtml = headHtmlParts.join("\n");

  let cleanAppHtml = appHtml
    .replace(/<title[^>]*>[\s\S]*?<\/title>/ig, "")
    .replace(/<meta[^>]*>/ig, "")
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>/ig, "");

  const helmetTitleText = (titleMatch ? titleMatch[0] : "")
    .replace(/<[^>]+>/g, "")
    .trim();
  const helmetMetaHtml = metaMatches.join("\n");
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
  const helmetOgType = extractMetaContent(
    helmetMetaHtml,
    "property",
    "og:type"
  );
  const helmetOgImageWidth = extractMetaContent(
    helmetMetaHtml,
    "property",
    "og:image:width"
  );
  const helmetOgImageHeight = extractMetaContent(
    helmetMetaHtml,
    "property",
    "og:image:height"
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
  if (helmetOgType) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:type",
      helmetOgType
    );
  }
  if (helmetOgImageWidth) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:image:width",
      helmetOgImageWidth
    );
  }
  if (helmetOgImageHeight) {
    mergedHeadHtml = upsertMetaProperty(
      mergedHeadHtml,
      "og:image:height",
      helmetOgImageHeight
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
  if (helmetOgType) {
    extraMetaKeys.push("og:type");
  }
  if (helmetOgImageWidth) {
    extraMetaKeys.push("og:image:width");
  }
  if (helmetOgImageHeight) {
    extraMetaKeys.push("og:image:height");
  }

  const html = stripOverriddenHead(template, helmetTitleText, helmetMetaHtml, extraMetaKeys)
    .replace("<!--app-helmet-head-->", mergedHeadHtml)
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${cleanAppHtml}</div>`
    );
  const cleanedHtml = html;

  const filePath =
    url === "/"
      ? path.resolve(__dirname, "dist/index.html")
      : path.resolve(__dirname, "dist", `.${url}`, "index.html");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, cleanedHtml, "utf-8");

  console.log("Generated", filePath);
}