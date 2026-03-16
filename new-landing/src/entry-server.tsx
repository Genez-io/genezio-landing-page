import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import GenezioApp from "./App";

export function render(url: string) {
  const helmetContext = {} as { helmet: HelmetServerState };
  const appHtml = renderToString(
    // @ts-ignore
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <GenezioApp />
      </StaticRouter>
    </HelmetProvider>
  );

  // Collect Helmet data after rendering
  const helmet = helmetContext.helmet;

  return {
    appHtml,
    helmet,
  };
}
