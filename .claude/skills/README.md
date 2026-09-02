# Firecrawl skills

Official Firecrawl agent skills from the [`firecrawl/skills`](https://github.com/firecrawl/skills)
catalog, installed at project level so every Claude Code session in this repo picks them up
automatically. Versions are pinned in `skills-lock.json` at the repo root.

## What's installed

**Core (the `firecrawl` CLI)** — `firecrawl` is the router skill; it delegates to the rest.

| Skill | Use for |
| --- | --- |
| `firecrawl-search` | Web search with full page content, when no URL is known |
| `firecrawl-scrape` | A known URL → clean markdown (handles JS-rendered pages) |
| `firecrawl-map` | Discover a site's URLs / find the right subpage |
| `firecrawl-crawl` | Bulk-extract a whole site section |
| `firecrawl-agent` | Autonomous multi-page extraction into a JSON schema |
| `firecrawl-interact` | Clicks, forms, login, pagination, infinite scroll |
| `firecrawl-monitor` | Recurring checks + webhook/email alerts on page changes |
| `firecrawl-download` | Save a site or section as local files |
| `firecrawl-parse` | Local files (PDF, DOCX, XLSX, HTML) → markdown |
| `firecrawl-research-index` | Papers: PubMed, bioRxiv, medRxiv, arXiv |
| `firecrawl-developer-index` | Library/API/error questions from issues, PRs, docs |

**Workflows** — `firecrawl-workflows` routes to these deliverable-producing skills:
`firecrawl-seo-audit`, `firecrawl-competitive-intel`, `firecrawl-lead-research`,
`firecrawl-deep-research`, `firecrawl-website-design-clone`, `firecrawl-qa`.

The catalog has 33 skills. The remaining ones (app-integration `firecrawl-build-*`, plus
`firecrawl-lead-gen`, `firecrawl-shop`, `firecrawl-market-research`,
`firecrawl-company-directories`, `firecrawl-knowledge-base`, `firecrawl-knowledge-ingest`,
`firecrawl-dashboard-reporting`, `firecrawl-research-papers`, `firecrawl-demo-walkthrough`)
were left out to keep session context lean — add any of them with the `skills add` command below.

## Setup

The skills drive the `firecrawl` CLI, which needs to be installed and authenticated once per
machine:

```bash
npm install -g firecrawl-cli@latest
firecrawl login          # browser auth; or export FIRECRAWL_API_KEY=fc-...
firecrawl --status       # auth state, concurrency limit, remaining credits
```

CLI output goes to `.firecrawl/`, which is gitignored.

> **Claude Code on the web / remote sandboxes:** `api.firecrawl.dev` is blocked by the default
> network egress policy, so the CLI returns HTTP 403 there. The Firecrawl MCP server
> (`firecrawl_search`, `firecrawl_developer_search`, `firecrawl_research_*`) still works, since
> it is reached through Anthropic's MCP proxy. Run the CLI-backed skills locally, or allow
> `api.firecrawl.dev` in the environment's network policy.

## Maintenance

```bash
npx skills list                                   # what's installed
npx skills update                                 # update to latest
npx skills add firecrawl/skills --full-depth --list          # browse the catalog
npx skills add firecrawl/skills --full-depth --copy --skill <name>   # add one more
```

Skills run with full agent permissions — review a skill's `SKILL.md` before relying on it.
