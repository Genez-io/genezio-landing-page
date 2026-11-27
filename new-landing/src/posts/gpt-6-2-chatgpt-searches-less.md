---
title: "GPT-6.2 Gives Your Brand Fewer Chances to Show Up in ChatGPT"
metaTitle: "GPT-6.2 Gives Brands Fewer Chances in ChatGPT: Data From 24,584 Chats"
type: research
date: 2026-11-27
tags:
  - AI Research
  - ChatGPT
  - GPT-6.2
  - Fan-out Queries
  - AI Visibility
author: Cristi Miloiu
linkedIn: https://www.linkedin.com/in/cristi-miloiu-3a174a267

thumbnail: /images/gpt-6-2-chatgpt-searches-less.webp
preview: "On November 24, paid ChatGPT accounts moved to GPT-6.2. Overnight, the share of answers built on a single web search doubled, from 21% to 43%. Free accounts did not change."
# meta data start
description: "GPT-6.2 answers paid ChatGPT users with one web search twice as often as GPT-6 did. A before-and-after study of 24,584 conversations, with free accounts as the control."
meta_og_url: "https://genezio.com/research/gpt-6-2-chatgpt-searches-less/"

meta_og_image: "https://genezio.com/images/gpt-6-2-chatgpt-searches-less.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 8
url: /research/gpt-6-2-chatgpt-searches-less/
---

![Paid ChatGPT now answers from one search twice as often](/images/gpt-6-2-chatgpt-searches-less.webp)

On November 24, OpenAI moved paid ChatGPT accounts to its new model, GPT-6.2. From that day, ChatGPT answers paid users from **a single web search twice as often as before: 43% of answers, up from 21%**. Free accounts, which stayed on the older model, did not change.

That matters for every brand that wants to be in ChatGPT's answers. Fewer searches means fewer ways in. If your page does not match the one search that ChatGPT runs, there is no second search to find it.

We measured this in 24,584 ChatGPT conversations. Here is what changed, what did not, and what to do about it.

## The short version

- **ChatGPT runs fewer searches per answer for paid users.** Single-search answers doubled, from 21% to 43%.
- **The number of sources did not drop.** Each answer still cites about 27 web pages. ChatGPT gets them from fewer, longer searches.
- **The change sits in ChatGPT's fast mode.** That is the mode it uses for quick, everyday questions, the questions where buyers compare brands.
- **Most of each search comes from the conversation, not from the question.** 84% of the words in ChatGPT's searches are not in the user's last message.
- **Free and paid users reach the same sources by different roads.** Different models, different searches, and ads only on the free plan.

## First: what is a fan-out search?

When you ask ChatGPT a question that needs fresh information, it does not send your question to the web as it is. It writes its own web searches first, reads the results, and then writes the answer. These hidden searches are called fan-out queries, because one question fans out into several searches.

The fan-out decides which pages ChatGPT can read. A page that no search finds cannot be cited, however good it is. For GEO (Generative Engine Optimization), the fan-out is the front door.

![Illustration: GPT-6 runs three searches for a question, GPT-6.2 runs one longer search, and both answers cite about the same number of sources](/images/gpt-6-2-fanout-explained.webp)

With GPT-6.2, that front door got narrower.

## What happened on November 24

Genezio talks to ChatGPT every day on behalf of the brands we track. We do not send single prompts. We run full conversations, several turns long, as the customer personas of each brand. We do this on free accounts and on paid accounts, and we keep the full technical record of every answer: the model that wrote it, the account plan, and every web search that ChatGPT ran.

Until November 23, every paid answer in our data came from GPT-6. On November 24, the first GPT-6.2 answer appeared at 00:49 UTC. By the end of that day, 95% of paid answers came from the new model. From November 25, 99% did. Not one free answer came from GPT-6.2. This matches OpenAI's announcement, which lists the paid plans only.

This gave us a clean experiment that we did not plan. The same personas kept asking the same kinds of questions about the same brands. Only the paid accounts got the new model. The free accounts show what would have happened without it, like the placebo group in a drug trial. Thus we can separate the effect of GPT-6.2 from everything else that changed that week.

## One search became the most common case

Before the switch, most paid answers started with two or three searches. After the switch, one search became the most common case.

![Paid accounts: share of answers by number of web searches, GPT-6 against GPT-6.2](/images/gpt-6-2-searches-distribution.webp)

On free accounts, the picture barely moved: 40% of answers used one search before, 37% after. When we remove that small drift, GPT-6.2 accounts for a jump of **25 percentage points** in single-search answers, and for **0.42 fewer searches** in each answer.

## Fewer searches, the same number of sources

We expected fewer searches to mean fewer sources. That is not what happened. Paid answers now cite slightly more pages than before (27.3 against 25.3), from slightly more websites (11.7 against 10.7). The answers also got longer.

GPT-6.2 does not read less of the web. It gets there through fewer, longer searches, and it reads more of what each search returns. Think of it as fewer doors into the same room.

For a brand, this moves the bottleneck. Before, a page could get into the answer through any of two or three searches. Now it must match the one search that ChatGPT writes, and it must rank well inside that one list of results. A page that matched only the second or third angle of a question has lost its way in.

## The change sits in ChatGPT's fast mode

ChatGPT decides how much effort to put into each question. Behind the scenes, it labels each answer with a mode. Four modes are common in our data: instant search (the fast path for everyday questions), full search, shopping and local.

![Paid accounts: searches per answer by ChatGPT mode, GPT-6 against GPT-6.2](/images/gpt-6-2-searches-by-mode.webp)

Almost all of the change is in instant search. There, GPT-6.2 runs 1.6 searches per answer, down from 2.6. When ChatGPT decides that a question needs a full search, it still runs as many searches as before.

Instant search is the most common mode on paid accounts in our data. It is also the mode for the short, practical questions that buyers ask when they compare options: "which one is cheaper?", "is it good for families?", "does it have parking?". These are the moments when a brand gets picked or skipped.

## The question is not the query

Real buyers do not ask one complete question. They ask, read, and then follow up: "does it have quiet rooms and decent wifi?". That message names no hotel. ChatGPT still has to search for one.

In our data, ChatGPT turned that follow-up into a search for "[hotel name] Athens quiet rooms soundproofing Wi-Fi guest reviews". The hotel name came from an earlier turn of the conversation. This is the normal case. Across all answers, **84% of the words in ChatGPT's searches are not in the user's last message**. They come from earlier turns, from what ChatGPT knows about the user, or from ChatGPT's own expansion of the question.

GPT-6.2 did not change this part. It still builds its searches from the whole conversation. It just builds fewer of them.

This is why a single prompt is a poor test of AI visibility. A tool that sends "best hotel in Athens" sees one search. A real buyer who talks to ChatGPT for four turns triggers searches that name the shortlist, the conditions and the competitors from earlier in the conversation. On GPT-6.2, a follow-up often gets only one search, so that one search decides which pages make it into the answer.

## Free and paid: different roads, same destination

GPT-6.2 also widened a gap that already existed between free and paid users. To make a fair comparison, we compared free and paid answers for the same brands, brand by brand, after November 25.

| Same brands, Nov 25–27 | Free | Paid |
| --- | --- | --- |
| Answers from a single search | 36% | 44% |
| Answers where a search names the year | 62% | 48% |
| Answers where ChatGPT checks a brand's own site (`site:`) | 8% | 15% |
| Answers in the fast "instant search" mode | 6% | 31% |
| Answers written by a smaller model (`-mini`) | 10% | 0% |
| Conversations with an ad | 3.4% | 0% |
| Web pages cited per answer | 27.0 | 27.2 |

The road is different. Free users get more searches, more searches with a year in them, a smaller model on one answer in ten, and all of the ads we saw. Paid users get the fast mode, more checks on brand websites, and now the new model.

The destination is mostly the same. Both plans cite the same number of pages from the same number of websites. We also compared the ten most cited websites for each brand on the two plans. They overlap as much as two random halves of the free conversations overlap with each other. We found no evidence that free and paid users see a different set of top sources.

## What this means for your brand

**Answer the whole question on one page.** GPT-6.2 writes longer, more specific searches, such as "best family travel insurance for a trip to Greece, compare medical and cancellation cover, reviews". A page that answers that full question beats several thin pages that each answer one piece of it.

**Rank inside the list, not only on it.** ChatGPT now reads more results from fewer searches. Your position in that one list of results matters more than your presence across many lists.

**Do not rely on the date for freshness.** Searches with a year in them dropped by 10 points on paid accounts. Keep your content current, but do not count on "2026" in a title to get you in.

**Watch the pages that talk about you.** ChatGPT checks brand websites less often with GPT-6.2 (15% of answers, down from 18%). Reviews, comparisons and directories carry more of the answer.

**Reset your baseline to November 24.** If your share of voice or recommendation rate in ChatGPT moved this week, check the model before you change your content. A trend line that crosses November 24 compares two different systems.

**Track both plans.** Free accounts show you the ads and the small-model answers. Paid accounts show you the new model first. GPT-6.2 reached paid users first, and the free plan may follow.

## For the data people

This section is for the analysts who want to check our work.

**Data.** 24,584 ChatGPT conversations from November 23 to November 27, 2026, about the brands tracked on Genezio. Every conversation is a multi-turn conversation run by a configured customer persona, with web search on.

**Fields.** For each answer, we read the account plan, the model, the mode, the fan-out queries, the search results and the cited URLs from the raw event stream of the answer. We put Team and Plus accounts together as "paid", because both moved to GPT-6.2 on the same day.

**Design.** "Before" is every conversation before the first GPT-6.2 answer (November 24, 00:49 UTC). "After" is November 25 to 27, so the rollout day is not in the comparison. The effect of GPT-6.2 is the change on paid accounts minus the change on free accounts (a difference-in-differences). The 95% confidence intervals come from 500 bootstrap resamples of each group.

| Metric | Free, before | Free, after | Paid, before | Paid, after | Effect (95% CI) |
| --- | --- | --- | --- | --- | --- |
| Searches per answer | 2.03 | 2.10 | 2.34 | 1.99 | −0.42 (−0.48 to −0.35) |
| Answers with one search | 40.3% | 37.1% | 21.5% | 43.0% | +24.8 pts (+21.6 to +27.8) |
| Words per search | 14.2 | 13.9 | 12.4 | 13.5 | +1.3 (+1.1 to +1.5) |
| Answers with a search that names a year | 66.7% | 66.6% | 57.8% | 47.9% | −9.9 pts (−13.2 to −7.0) |
| Answers with a `site:` search | 7.6% | 8.7% | 18.4% | 14.6% | −4.9 pts (−7.0 to −2.7) |
| Cited URLs per answer | 25.2 | 25.5 | 25.3 | 27.3 | +1.6 (+0.5 to +2.6) |
| Cited domains per answer | 11.5 | 11.6 | 10.7 | 11.7 | +0.9 (+0.4 to +1.3) |

By mode, the effect on searches per answer is −1.18 for instant search, −0.02 for full search, −0.27 for shopping and −0.44 for local.

**Words from outside the message.** For each answer, we took the words of four or more letters in all its searches and counted the share that does not occur in the user's current message.

**Free against paid.** For November 25–27, we averaged each metric per brand and per plan, and compared the plans brand by brand (every brand with at least five answers on each plan). For the overlap of sources, we compared the ten most cited domains per brand on each plan (Jaccard 0.43), against two random halves of the same plan (also 0.43), for every brand with at least 20 answers on each plan.

**Limits.** Our questions come from persona conversations about tracked brands, not from a random sample of all ChatGPT traffic. The window after the rollout is three days long. We will run the same analysis again in December to see if the effect holds. We publish only aggregate numbers, and no brand in this study is named.
