import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import GenezioApp from "./App";

export function render(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <GenezioApp />
    </StaticRouter>
  );

  // Collect Helmet data after rendering
  const helmet = Helmet.renderStatic();

  return {
    appHtml,
    helmet,
  };
}
