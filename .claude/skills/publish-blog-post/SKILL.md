---
name: publish-blog-post
description: Publish a blog post or case study on genezio.com end to end - add the markdown and cover image to new-landing, verify the rendered page, open a PR to main, ask for code review in Slack #request-code-reviews, and merge once a colleague approves. Use when the user says "publica articolul", "publish this post", "pune pe blog", uploads a .md article for the Genezio blog, or asks to ship a blog post / case study.
---

# Publish a blog post on genezio.com

The user hands over an article (usually a `.md` file with frontmatter) and often a cover
image. Run every step below without asking again, except where a step says to ask.

## 1. Gather inputs (ask only for what is missing)

- Article markdown. The file name becomes the slug: `new-landing/src/posts/<slug>.md`,
  served at `/blog/<slug>/`. Take the slug from the frontmatter `url:`.
- Cover image: 1920x1080 `.webp`, saved as `new-landing/public/images/<slug>.webp`.
  If the user sent a PNG/JPG, convert it to webp (Python PIL). If there is no image, ask.
- Author: frontmatter `author:` must match a key in `new-landing/src/lib/authors.ts`
  (name lowercased, spaces to `-`, e.g. `Paula Cionca` -> `paula-cionca`). If the author
  is missing there, ask for role, short bio, photo and LinkedIn and add an entry.
- External co-author (case studies with a customer, for EEAT): add to the frontmatter

  ```yaml
  coAuthor: Firstname Lastname
  coAuthorRole: Job title, Company
  coAuthorLinkedIn: https://www.linkedin.com/in/<handle>/
  coAuthorOrg: Company
  coAuthorOrgUrl: https://company.com/
  ```

  Verify the LinkedIn URL from a public source (e.g. the company's team page) before
  using it. Also link the co-author's name on their first quote attribution in the body.
- Date: if the frontmatter `date:` is in the past or future, mention it to the user
  in the final summary rather than silently changing it.

## 2. Add the post

Match the frontmatter shape of existing posts in `new-landing/src/posts/` (title,
metaTitle, date, tags with the category first, author, linkedIn, thumbnail, preview,
description, meta_og_url, meta_og_image, customHeader, customFooter, readTime, url).

Then regenerate the metadata (it is committed):

```bash
cd new-landing && node scripts/generate-posts-meta.js
```

## 3. Verify the page

```bash
cd new-landing && npm ci && npm run build
```

- Serve `dist/` (`python3 -m http.server` from `dist`) and screenshot
  `/blog/<slug>/` with Playwright: check the title, authors, cover image, FAQ and author box.
- Check `dist/blog/<slug>/index.html` contains the BlogPosting JSON-LD with the right author(s).
- The build rewrites `public/rss.xml`, `public/sitemap.xml`, `public/imagessitemap.xml`
  and `public/changelog.xml`. Do not commit those: `git checkout` them.

## 4. Branch, commit, push

- Start from the latest `origin/main`. Work on the session's designated branch if one is
  given, otherwise `blog/<slug>`.
- If main moved and `posts-meta.json` conflicts, take main's version and re-run
  `generate-posts-meta.js` instead of hand-merging.
- Commit message: `feat(blog): <short title>`.
- Push with `git push -u origin <branch>`. If GitHub answers 403 / "push access", stop
  and tell the user their GitHub account needs write access to
  `Genez-io/genezio-landing-page`, then reconnect at https://claude.ai/connect-github.

## 5. Open the PR to main

- Base `main`, head the branch. Title: `feat(blog): <post title>`.
- Body: what the post is, the URL it will live at (`https://genezio.com/blog/<slug>/`),
  which files changed, and how it was verified (build + screenshot).
- Subscribe to the PR's activity so reviews and CI results wake the session.

## 6. Ask for review in Slack

Post in **#request-code-reviews** (channel ID `C06CSQM0D2P`), in the same style the team
uses there:

> Please review the new blog post "<title>": <PR link>
>
> It adds `new-landing/src/posts/<slug>.md` and its cover image<, plus ...>.
> The main branch needs one approval, and the PR merges as soon as it gets one.

Keep the message timestamp so later updates go in its thread.

## 7. Merge after approval

- Wait for PR events; do not poll. Merge only when the PR has at least one approving
  review from a colleague and no failing required checks.
- **Comments on the PR: ping the user.** Whenever someone leaves a comment, an inline
  review comment, or a "changes requested" review (anyone but the user and Claude),
  send the user a Slack DM right away (`slack_send_message` with `channel_id` set to
  the user's own Slack user ID, e.g. `U03V09XG2MB` for Paula), so they know they have
  to act. The DM says who commented, quotes or summarises the comment, links to it
  (or to the PR), and says what is needed, e.g.:

  > :eyes: Comment on PR #<N> "<title>" from <reviewer>: "<short quote>"
  > <link to comment>. Needs your input: <what they ask for>.

  Also mention it in the chat. Send one DM per new comment batch, not one per event.
- Do not merge while a comment is unanswered or a review asks for changes. Make small,
  clear fixes (typos, wording, a link) on the same branch, push, reply on the comment
  thread, and reply in the Slack review thread that it is ready again. Anything that
  changes the article's substance, claims, quotes or authorship waits for the user.
- Merge with a merge commit (the repo's convention: "Merge pull request #N from ...").
- After merging, reply in the Slack thread: "Merged, live after deploy:
  https://genezio.com/blog/<slug>/", then unsubscribe from the PR.

## 8. Report to the user

Short summary in the user's language: PR link, Slack message, merge status, live URL,
and anything they still need to decide (date, co-author photo, approval from the
quoted customer).
