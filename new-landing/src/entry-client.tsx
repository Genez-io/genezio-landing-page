import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import GenezioApp from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

const hasSSRContent =
  rootElement.childNodes.length > 0 &&
  Array.from(rootElement.childNodes).some(
    (node) => node.nodeType === Node.ELEMENT_NODE
  );

const app = (
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

if (hasSSRContent) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
