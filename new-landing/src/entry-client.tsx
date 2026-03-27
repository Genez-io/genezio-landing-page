import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import GenezioApp from "./App";

// Pre-hydration cleanup: remove SSR-injected head tags so react-helmet-async
// becomes the sole owner and doesn't create duplicates during hydration.
document.querySelectorAll('title[data-rh="true"], meta[data-rh="true"], link[data-rh="true"]').forEach(el => el.remove());

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  // @ts-ignore
  <React.StrictMode>
    {/* @ts-ignore */}
    <HelmetProvider>
      <BrowserRouter>
        <GenezioApp />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
