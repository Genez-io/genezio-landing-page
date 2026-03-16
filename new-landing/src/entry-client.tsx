import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import GenezioApp from "./App";

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
