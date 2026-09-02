# CLAUDE.md

## Web search and page fetching

Use **Firecrawl MCP** as the default for all web search.

| Need | Tool |
| --- | --- |
| Web / news / image search | `mcp__Firecrawl__firecrawl_search` |
| Technical search (repos, GitHub issues, PRs, docs) | `mcp__Firecrawl__firecrawl_developer_search` |
| Academic literature, citation graph, paper full text | `mcp__Firecrawl__firecrawl_research_*` |
| Reading the content of a specific page | `WebFetch` |

Do **not** use the Genezio MCP web tools (`google_search_ui`, `crawl_website`)
for general web research. The Genezio MCP servers are for brand, topic,
competitor, citation and CDN-log data on the Genezio platform — use them only
for that.

The Firecrawl connector exposes the search tools only; there is no
`firecrawl_scrape` / `crawl` / `map` / `extract`. To pull the content of a page,
use `WebFetch`.
