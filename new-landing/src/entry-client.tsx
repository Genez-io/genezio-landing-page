import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import GenezioApp from "./App";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <GenezioApp />
    </BrowserRouter>
  </React.StrictMode>
);
