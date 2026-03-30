import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { authors } from "@/lib/authors";

interface PolymetSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
  authorName?: string;
  datePublished?: string;
  tags?: string[];
  termName?: string;
  termDefinition?: string;
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

export function PolymetSEO({
  title,
  description,
  canonicalPath,
  ogImage,
  ogUrl,
  ogType = "website",
  schema,
  authorName,
  datePublished,
  tags,
  termName,
  termDefinition,
}: PolymetSEOProps) {
  const url = canonicalPath
    ? `https://genezio.com${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`
    : undefined;

  const generatedSchema = useMemo(() => {
    const baseOrg = {
      "@type": "Organization",
      name: "Genezio",
      url: "https://genezio.com",
      logo: "https://genezio.com/images/logo-dark.svg",
      sameAs: [
        "https://linkedin.com/company/genezio",
        "https://x.com/genezioai",
      ],
    };

    const baseApp = {
      "@id": "https://genezio.com/#software",
      "@type": "SoftwareApplication",
      name: "Genezio",
      applicationCategory: "Generative Engine Optimization, AI Agents Testing",
      operatingSystem: "Cloud",
      description: "Track how AI engines see your brand and optimize your presence to win more recommendations",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "16",
      },
    };

    const path = canonicalPath || "";
    let defaultGraph: unknown[] = [];

    if (path === "/" || path === "") {
      defaultGraph = [baseOrg, baseApp];
    } else if (path === "/pricing" || path === "/pricing/") {
      defaultGraph = [
        baseOrg,
        {
          ...baseApp,
          offers: [
            {
              "@type": "Offer",
              name: "Growth",
              description: "For scaling teams",
              price: "299",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              name: "Enterprise",
              description: "For large-scale operations",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "0",
                priceCurrency: "EUR",
                description: "Custom/Contact for quote",
              },
            },
            {
              "@type": "Offer",
              name: "Agency",
              description: "For partners managing multiple clients",
              price: "999",
              priceCurrency: "EUR",
            },
          ],
        },
      ];
    } else if (path.startsWith("/blog/author/")) {
      const authorKey = path.split("/blog/author/")[1]?.replace(/\/$/, "");
      const authorData = authorKey ? authors[authorKey] : null;

      const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: authorData?.name || authorName || title,
        jobTitle: authorData?.role || "Expert contributor at Genezio",
        url: url,
        description: authorData?.bio || undefined,
        image: authorData?.image ? `https://genezio.com${authorData.image}` : undefined,
        sameAs: authorData?.social
          ? [authorData.social.linkedin, authorData.social.twitter].filter(Boolean)
          : undefined,
        knowsAbout: authorData?.stats?.expertise || undefined,
        worksFor: baseOrg,
      };
      return schema ? { "@context": "https://schema.org", "@graph": [personSchema, schema] } : personSchema;
    } else if (path.startsWith("/blog/")) {
      const authorKey = authorName ? slugify(authorName) : null;
      const authorData = authorKey ? authors[authorKey] : null;

      const personSchema = {
        "@type": "Person",
        name: authorData?.name || authorName || "Genezio Team",
        jobTitle: authorData?.role || "Expert contributor at Genezio",
        url: authorData
          ? `https://genezio.com/blog/author/${slugify(authorData.name)}/`
          : authorName
            ? `https://genezio.com/blog/author/${slugify(authorName)}/`
            : "https://genezio.com/",
        description: authorData?.bio || undefined,
        image: authorData?.image ? `https://genezio.com${authorData.image}` : undefined,
        sameAs: authorData?.social
          ? [authorData.social.linkedin, authorData.social.twitter].filter(Boolean)
          : undefined,
        knowsAbout: authorData?.stats?.expertise || undefined,
        worksFor: baseOrg,
      };

      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description: description,
        datePublished: datePublished,
        keywords: tags ? tags.join(", ") : undefined,
        author: personSchema,
        publisher: baseOrg,
      };
      return schema ? { "@context": "https://schema.org", "@graph": [articleSchema, schema] } : articleSchema;
    } else if (path.startsWith("/glossary/")) {
      const termSchema = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: termName || title,
        description: termDefinition || description,
        inDefinedTermSet: "https://genezio.com/glossary/",
      };
      return schema ? { "@context": "https://schema.org", "@graph": [termSchema, schema] } : termSchema;
    }

    if (schema) {
      if (defaultGraph.length > 0) {
        return {
          "@context": "https://schema.org",
          "@graph": [...defaultGraph, schema],
        };
      }
      return {
        "@context": "https://schema.org",
        "@graph": [schema],
      };
    }

    if (defaultGraph.length > 0) {
      return {
        "@context": "https://schema.org",
        "@graph": defaultGraph,
      };
    }

    return null;
  }, [schema, canonicalPath, title, description, url, authorName, datePublished, tags, termName, termDefinition]);

  const finalOgUrl = ogUrl || url;

  return (
    <>
      {/* @ts-ignore */}
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
      </Helmet>
      {generatedSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generatedSchema) }} />
      )}
    </>
  );
}
