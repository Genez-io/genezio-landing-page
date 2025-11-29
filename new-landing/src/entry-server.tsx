import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import GenezioApp from "./App";

export function render(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <GenezioApp />
    </StaticRouter>
  );

  return appHtml;
}
