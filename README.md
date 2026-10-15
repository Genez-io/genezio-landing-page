# landing

The landing page of https://genezio.com: React and Vite, with a static
render of each page (`new-landing/prerender.mjs`) and the functions of
Vercel in `api/`. The path `/docs` of the same site is the documentation of
`apps/docs`.

This directory came from the repository Genez-io/genezio-landing-page. The
directory is not an npm workspace of the monorepo: `new-landing` has its own
lockfile. The functions of `api/` use no package.

| Path | Content |
| --- | --- |
| `new-landing/` | The React/Vite application. `npm run build` writes `new-landing/dist`. |
| `api/` | The functions of Vercel: `contact-sales`, `website-analysis`, `leaderboard`. |
| `vercel.json` | The commands of the build, `trailingSlash`, and the redirects. The build removes `dist/server`, the bundle of the static render, thus Vercel does not publish it. |
| `scripts/dev-api.mjs` | Serves the functions of `api/` on a laptop. |
| `scripts/add-docs.mjs` | Puts the documentation under `/docs` of the output of Vercel. |

## Run it

`python start.py` starts the landing page: select `landing` in the list. The
launcher also starts the `docs` service. Open http://localhost:3335 and
http://localhost:3335/docs.

You can also start it with no Docker:

```sh
cd apps/landing/new-landing
npm install
npm run dev
```

The functions of `api/` need a second terminal: `node scripts/dev-api.mjs`
from `apps/landing`. `.env.local` in `apps/landing` holds their variables.

The server of Vite sends `/docs` to the server of Mintlify at
http://localhost:3333 (`DOCS_DEV_URL` changes it). Start that server with
`npm run dev` in `apps/docs`.

## Do not put files in /docs

The documentation owns each path under `/docs`. Do not add files in
`new-landing/public/docs`, and do not add a redirect of `/docs` in
`vercel.json`. `scripts/add-docs.mjs` stops the deployment if the landing page
has files in `/docs`.

## Deploy

| Branch | Environment | Vercel project |
| --- | --- | --- |
| `dev` | `dev` | `gta-landing-<COMPANY_DOMAIN>` of the dev environment |
| `main` | `production` | `gta-landing-<COMPANY_DOMAIN>` of production |

`.github/workflows/deploy.yaml` calls `deploy_landing.yaml` when a push changes
`apps/landing/**` or `apps/docs/**`. The projects of Vercel have no Git
connection: only the workflow deploys them. The workflow does these steps:

1. It exports the documentation (`apps/docs/README.md` gives the steps).
2. It builds the landing page with `vercel build`.
3. It runs `scripts/add-docs.mjs`. The routes of the documentation go before
   the routes of the landing page, thus `trailingSlash` does not change a path
   under `/docs`.
4. It deploys the output with `vercel deploy --prebuilt --prod`.

The workflow makes the project of Vercel if it does not exist. Set these
variables on the project in Vercel, for the production environment. The
functions read them when they run. After the deployment, the workflow calls
`/api/leaderboard`: if a variable is missing, the job fails in production and
gives a warning in dev.

| Variable | Function |
| --- | --- |
| `RESEND_API_KEY`, `MAIL_FROM` | `contact-sales`, `website-analysis` |
| `CONTACT_SALES_NOTIFY_TO`, `SLACK_CONTACT_SALES_WEBHOOK_URL` | `contact-sales` |
| `NOTIFY_TO`, `SLACK_WEBHOOK_URL` | `website-analysis`, and `contact-sales` if it has no webhook of its own |
| `GENEZIO_API_URL`, `GENEZIO_SERVICE_CLIENT_ID`, `GENEZIO_SERVICE_CLIENT_SECRET` | `leaderboard` |

To deploy by hand, run **Deploy Landing** in GitHub Actions and select the
environment. To add a custom domain, add it to the Vercel project of the
environment.
