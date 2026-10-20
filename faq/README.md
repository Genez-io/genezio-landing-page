# faq.genezio.com

The FAQ of Genezio: a static single-page app with no build step. The HTML
holds no text. The app script writes the list of questions, then each article
loads its body from `data/<id>.json` and, after 2.5 seconds, the "Good to
know" box from `data/related/<id>.json`.

The site is also a test of the crawlers of the answer engines. The app sends
the same beacons as the pages of genezio.com, cross-origin, to
`https://genezio.com/api/v1/collect/` (an alias of `api/render-probe.js`). A
quote of an article id (`GZ-2179`), of a body or of a "Good to know" text in an
AI answer shows how far the client of that engine went:

| Text | Exists only after |
| --- | --- |
| question titles and summaries | the app script runs |
| article body, "Article GZ-…" | the script runs and fetches JSON |
| "Good to know" | the script runs, waits 2.5 s, and fetches JSON |

## Edit and deploy

The articles are in `_src/content.py`. Each claim restates a fact of
genezio.com. After a change:

```sh
python3 faq/_src/build.py
vercel deploy --prod --cwd faq --scope genezio
```

The Vercel project is `genezio-faq` (team Genezio), with the domain
`faq.genezio.com`. The workflow Deploy of this repository does not deploy it.
`.vercelignore` keeps `_src/` and this file out of the deployment.
