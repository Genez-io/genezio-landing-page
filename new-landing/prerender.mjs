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
  "/aboutgenezio",
];

const template = fs.readFileSync(
  path.resolve(__dirname, "dist/index.html"),
  "utf-8"
);

// importăm bundle-ul SSR generat de Vite
const { render } = await import("./dist/server/entry-server.js");

for (const url of routes) {
  const appHtml = await render(url);

  const html = template.replace(
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
