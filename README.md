# genezio-landing-page

The landing page of https://genezio.com: React and Vite, with a static
render of each page (`new-landing/prerender.mjs`) and the functions of
Vercel in `api/`. The path `/docs` of the same site is the documentation.
The repository Genez-io/genezio-code builds the documentation (`apps/docs`),
and this repository adds it to each deployment.

`new-landing` has its own lockfile. The functions of `api/` use no package.

| Path | Content |
| --- | --- |
| `new-landing/` | The React/Vite application. `npm run build` writes `new-landing/dist`. |
| `api/` | The functions of Vercel: `contact-sales`, `website-analysis`, `leaderboard`, and the `credentials*` of the GEO certification. |
| `new-landing/public/certified-geo-expert/` | The Certified GEO Expert test and its verification page: static HTML outside React. `bank.json` holds the questions and the answer key, for the page and for `api/credentials.js`. |
| `vercel.json` | The commands of the build, `trailingSlash`, and the redirects. The build removes `dist/server`, the bundle of the static render, thus Vercel does not publish it. |
| `scripts/dev-api.mjs` | Serves the functions of `api/` on a laptop. |
| `scripts/add-docs.mjs` | Puts the documentation under `/docs` of the output of Vercel. |

## Run it

```sh
cd new-landing
npm install
npm run dev
```

The functions of `api/` need a second terminal: `node scripts/dev-api.mjs`
from the root of the repository. `.env.local` at the root holds their
variables.

The server of Vite sends `/docs` to the server of Mintlify at
http://localhost:3333 (`DOCS_DEV_URL` changes it). Start that server with
`npm run dev` in `apps/docs` of genezio-code.

## Certified GEO Expert

`/certified-geo-expert/` is a test with a credential at the end. The page is
static HTML, and React does not render it. The credentials are in Upstash
Redis: connect an Upstash database to both Vercel projects (Storage →
Upstash), which sets `KV_REST_API_URL` and `KV_REST_API_TOKEN`.

| Function | Does |
| --- | --- |
| `POST /api/credentials` | Scores the answers against `bank.json` and stores the credential, active at once. No email is sent. |
| `GET /api/credentials?id=…` | The public record of an active credential. Never the email. |
| `POST /api/credentials-admin` | Get, find by email, revoke, delete, withdraw the consent to be contacted. Needs `Authorization: Bearer $CREDENTIALS_ADMIN_TOKEN`; without that variable it answers 404. |

The claim form has an optional, unticked box: Genezio may email the holder
with follow-up questions. A holder who ticks it is a lead, and the team hears
of it on Slack (`SLACK_CERTIFICATION_WEBHOOK_URL`, or `SLACK_WEBHOOK_URL`).
Nothing confirms the address, thus a lead may give one that is not theirs.
The record keeps the text and
the time of the consent; `CONSENT_TEXT` in `api/_credentials.js` must match the
box of the page.

To change the questions, edit `bank.json`: the page, the verification page and
the API read the counts from it. The right option of each question is `a`; the
page shuffles the options for each visitor.

Vite serves the page at
http://localhost:5173/certified-geo-expert/index.html (with no `index.html`,
the React app answers).

## Do not put files in /docs

The documentation owns each path under `/docs`. Do not add files in
`new-landing/public/docs`, and do not add a redirect of `/docs` in
`vercel.json`. `scripts/add-docs.mjs` stops the deployment if the landing page
has files in `/docs`.

## Deploy

| Branch | GitHub environment | Vercel project | Documentation |
| --- | --- | --- | --- |
| `dev` | `dev` | `gta-landing-internal-gta` | `s3://docs-builds/dev/docs.tar.gz` |
| `main` | `production` | `gta-landing-app` | `s3://docs-builds/main/docs.tar.gz` |

`.github/workflows/deploy.yaml` runs on a push to `dev` or to `main`.
genezio-code also starts it on the same branch after it puts a new build of
the documentation in S3. Only the workflow deploys: `vercel.json` turns off
the deployments of the Git connection of Vercel
(`git.deploymentEnabled: false`), because they have no documentation.

A pull request to `dev` or to `main` gets a preview. The preview has the
documentation of the base branch, and it is a deployment of
`gta-landing-internal-gta` that is not production. A comment on the pull
request gives its URL. A pull request from a fork gets no preview, because it
gets no secrets.

The workflow does these steps:

1. It downloads the build of the documentation from S3. The bucket has
   versioning, and the metadata `commit` of a version gives the commit of
   genezio-code that built it.
2. It builds the landing page with `vercel build`.
3. It runs `scripts/add-docs.mjs`. The routes of the documentation go before
   the routes of the landing page, thus `trailingSlash` does not change a path
   under `/docs`.
4. It deploys the output with `vercel deploy --prebuilt --prod`.

Each GitHub environment needs these secrets: `VERCEL_TOKEN`,
`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. The AWS user needs
`s3:GetObject` on `arn:aws:s3:::docs-builds/*`.

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

To deploy by hand, run **Deploy** in GitHub Actions on the branch. To add a custom domain, add it to the Vercel project of the
environment.
