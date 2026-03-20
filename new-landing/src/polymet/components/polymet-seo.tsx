import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface PolymetSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
}

export function PolymetSEO({ title, description, canonicalPath, ogImage, ogUrl, ogType = "website", schema }: PolymetSEOProps) {
  const url = canonicalPath ? `https://genezio.com${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}` : undefined;

  useEffect(() => {
    // CSR Fallback to bypass React 19 Document Hoisting & react-helmet-async conflicts.
    // Helmet asynchronously flushes and removes native tags during CSR. 
    // We hydrate them manually via DOM API to ensure they persist visually and for JS crawlers.
    const timeout = setTimeout(() => {
      document.title = title;
      
      const setMeta = (attr: string, key: string, content: string) => {
        let el = document.querySelector(`meta[${attr}="${key}"]`);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attr, key);
          document.head.appendChild(el);
        }
        el.setAttribute("content", content);
      };

      setMeta("name", "description", description);
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", description);
      setMeta("property", "og:type", ogType);
      setMeta("property", "og:site_name", "Genezio");
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", description);
      
      if (ogImage) setMeta("property", "og:image", ogImage);

      const finalOgUrl = ogUrl || url;
      if (finalOgUrl) setMeta("property", "og:url", finalOgUrl);

      if (url) {
        let linkEl = document.querySelector('link[rel="canonical"]');
        if (!linkEl) {
          linkEl = document.createElement("link");
          linkEl.setAttribute("rel", "canonical");
          document.head.appendChild(linkEl);
        }
        linkEl.setAttribute("href", url);
      }

      // Inject JSON-LD schema
      if (schema) {
        let scriptEl = document.querySelector('script[data-polymet-schema]');
        if (!scriptEl) {
          scriptEl = document.createElement("script");
          scriptEl.setAttribute("type", "application/ld+json");
          scriptEl.setAttribute("data-polymet-schema", "true");
          document.head.appendChild(scriptEl);
        }
        scriptEl.textContent = JSON.stringify(schema);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [title, description, ogImage, ogUrl, ogType, url, schema]);

  const finalOgUrl = ogUrl || url;

  return (
    // @ts-ignore
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Genezio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {finalOgUrl && <meta property="og:url" content={finalOgUrl} />}
      {url && <link rel="canonical" href={url} />}
      {schema && (
        <script type="application/ld+json" data-polymet-schema="true">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
