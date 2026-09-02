# CLAUDE.md

## Web search and page fetching

Use **Firecrawl MCP** as the default for all web search.

| Need | Tool |
| --- | --- |
| Web / news / image search | `mcp__Firecrawl__firecrawl_search` |
| Technical search (repos, GitHub issues, PRs, docs) | `mcp__Firecrawl__firecrawl_developer_search` |
| Academic literature, citation graph, paper full text | `mcp__Firecrawl__firecrawl_research_*` |

Do **not** use the Genezio MCP web tools (`google_search_ui`, `crawl_website`)
for general web research. The Genezio MCP servers are for brand, topic,
competitor, citation and CDN-log data on the Genezio platform — use them only
for that.

### Reading the full content of a page

The Firecrawl connector exposes the search tools only — there is no
`firecrawl_scrape` / `crawl` / `map` / `extract`. `firecrawl_search` returns an
indexed snapshot of a page (title, URL, and an excerpt that is often just the
opening section), not the full body.

In web/cloud sessions `WebFetch` is not a dependable fallback: outbound HTTPS
goes through a policy-enforcing egress proxy, and many hosts are refused with
`EGRESS_BLOCKED` (antena3.ro, for one). Firecrawl is unaffected, because
connector traffic is relayed via `mcp-proxy.anthropic.com`, which bypasses that
policy.

So when a task needs the complete text of a page, try `WebFetch` and expect it
may be blocked. If it is, ask how to proceed rather than silently substituting
the Genezio crawler. Full Firecrawl scrape/crawl/map/extract is available in a
local terminal session, where the Firecrawl MCP server is configured directly.
