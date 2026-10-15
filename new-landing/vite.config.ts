import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// ES Module equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // `vite` serves the client alone, thus a call to `/api/...` from the dev
  // server would come back as the HTML of the page. `scripts/dev-api.mjs`
  // serves the functions of `api/`, and this sends those calls to it, so the
  // page uses the same paths in development as on Vercel.
  //
  // On genezio.com, /docs is the documentation of genezio-code. The dev server
  // of Mintlify serves it on port 3333, with its files at the root (/_next,
  // /favicons, /logo), thus the dev server sends these paths to it too.
  // DOCS_DEV_URL names the server of Mintlify on another host.
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true
      },
      ...Object.fromEntries(
        // A key that starts with ^ is a regular expression. A prefix such as
        // "/logo" also takes /logo-black.svg of the landing page.
        ["^/docs(/|$)", "^/_next/", "^/favicons/", "^/logo/"].map((path) => [
          path,
          {
            target: process.env.DOCS_DEV_URL || "http://localhost:3333",
            changeOrigin: true,
            ws: true
          }
        ])
      )
    }
  },
  build: {
    rollupOptions: {
      input: "index.html"
    }
  },
  ssr: {
    noExternal: ["react-router", "react-tweet", "react-helmet-async"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "(components)": path.resolve(__dirname, "./src/(components)")
    }
  }
});
