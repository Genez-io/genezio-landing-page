---
title: "Zero query overlaps between GPT-5.2 (API) and ChatGPT.com"
date: 2026-02-04
tags:
  - AI Visibility
  - GPT 5.2
  - ChatGPT API
  - Research
author: Bogdan Ripa
linkedIn: https://www.linkedin.com/in/bogdanripa/

thumbnail: /images/zero-query-overlaps.webp
preview: Zero query overlaps found between GPT-5.2 API and ChatGPT.com. Our study of 3,645 conversations reveals distinct search behaviors.
# meta data start
description: Zero query overlaps found between GPT-5.2 API and ChatGPT.com. Our study of 3,645 conversations reveals distinct search behaviors and what they mean.
meta_og_url: "https://genezio.com/blog/zero-query-overlaps/"

meta_og_image: "https://genezio.com/images/zero-query-overlaps.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 6
url: /zero-query-overlaps/
---

![Zero query overlaps between GPT-5.2 (API) and ChatGPT.com](/images/zero-query-overlaps.webp)

## TL;DR

Over the last 27 days we used Genezio to run 3,645 conversations in the UK banking space and compare two execution paths:
* **GPT-5.2 via API**
* **ChatGPT.com via the web interface (UI)**

What we wanted to understand was not "which model is smarter", but something much more practical for brands: **When a scenario is identical, do the two paths search the web the same way, and therefore build answers from the same evidence?**

The short version: **no**. In this research, the API and the UI behaved like two different "web research engines," generating different search queries and pulling meaningfully different sets of pages.

Below is the analysis that matters for AI Visibility measurement.

## How we measured "what the model did" (without reading every answer)

When ChatGPT (or the API) decides to use the web, there are two observable footprints you can capture at scale:

1.  **Query fanouts:** the *search-like* queries the system generates behind the scenes (often multiple per conversation).
2.  **Sources (or citations):** the URLs it ends up using/citing as evidence for the response.

Genezio captures both, per scenario and per run, letting you compare behavior across execution paths.

This post focuses on those two signals because they are:
* Quantifiable at scale.
* Directly tied to the final answer (different evidence leads to a different recommendations/mentions).

## Finding 1: Query fanouts didn't overlap at all

Across all runs:
* **Total unique query fanouts:** 3,856
* **ChatGPT.com-only fanouts:** 2,785 (72.2%)
* **GPT-5.2-only fanouts:** 1,071 (27.8%)
* **Fanouts used by both:** 0

That last number is the headline: **not a single query appeared in both paths** in our dataset.

### What the query shape suggests

Even from the examples, you can see a stylistic difference:
* **ChatGPT.com UI fanouts** skew *longer, more descriptive, more "comparison-style"* queries (e.g., "ranked by how quickly and easily new customers can open an account online").
* **API fanouts** skew *shorter, more canonical, often with explicit year ranges and brand terms* (e.g., "customer service satisfaction ranking 2026", "Barclays personal loan representative APR…").

There's also a repeat-pattern difference:
* **UI:** 3,131 fanout *instances* across 2,785 unique queries, so **1.12 uses/query**.
* **API:** 1,440 fanout *instances* across 1,071 unique queries, so **1.34 uses/query**.

**Interpretation:** the UI generates *more varied* queries; the API repeats *fewer "standard"* queries more often.

## Finding 2: The API crawled more unique pages, but the UI reused a smaller set more heavily

Across all runs, we saw **5,701 unique source URLs**.

**Breakdown:**
* **Sources used by ChatGPT.com:** 2,843 unique URLs (49.9% of all sources)
* **Sources used by GPT-5.2 API:** 3,562 unique URLs (62.5% of all sources)
* **Used by both:** 704 (12.3%)

So the API touched **more unique pages** overall.

But when we look at **how often** pages were used:
* **Total source-uses (citations/events):**
    * UI: 37,448
    * API: 27,817

And the UI was more concentrated:
Top 50 sources account for **28.0%** of UI source-uses vs **23.0%** for API source-uses.

**Interpretation:**
* **API** behaves more like an explorer: *more distinct pages*, fewer repeats.
* **UI** behaves more like a curator: *fewer distinct pages*, reused more often.

## Finding 3: The UI and API "trusted" different kinds of websites

This shows up clearly in the "UI-only" and "API-only" lists:
* **UI-only sources** are dominated by *review/aggregator and comparison content*.
* **API-only sources** include more *first-party bank pages* and more "specialist / niche" pages.

To quantify "first-party tilt," we did a lightweight domain-based classification (domains containing common bank names like nationwide/hsbc/barclays/etc.):

**API pulled ~4.4× more source-uses from bank-like domains** than the UI did (10,345 vs 2,333).

Even within the 704 overlapping sources, the weighting is wildly different. For example:
* Some comparison pages are heavily UI-weighted (e.g., one URL was cited 234 times in UI vs once in API).
* Some bank product pages are heavily API-weighted (e.g., one URL was cited 130 times in API vs once in UI).

This is exactly what you'd expect if the two paths have different retrieval heuristics (or different "web research stacks"), even when the scenario is the same.

If we dig even deeper into the data, here is what we see:

| Domain type | UI share of source-uses | API share of source-uses | What it means |
| :--- | :--- | :--- | :--- |
| **Bank / issuer (first-party)** | 6.1% | 36.0% | API over-indexes on bank-owned sites (~4.4× vs UI) |
| **News / media** | 7.2% | 21.2% | API cites media ~2.2× more |
| **Comparison / aggregator** | 32.2% | 11.0% | UI leans heavily toward comparison content (~3× vs API) |
| **Reference (e.g., Wikipedia)** | 5.1% | 0.9% | UI uses reference far more |
| **Government / regulator** | 2.2% | 2.2% | Similar |
| **Other** | 47.2% | 28.6% | UI has a much larger “long tail” |

## Finding 4: Differences persisted across topics and scenarios

The data we looked at includes multiple topics, each with a few scenarios, and the same "split-brain" behavior shows up repeatedly:
* **Zero overlap in query fanouts** holds per topic (not just globally).
* The **balance** of source usage varies by topic (some topics are UI-heavier, others API-heavier), suggesting that retrieval divergence interacts with the subject matter.

## Examples: what each path actually searched for and cited

To make the differences tangible, here are real “top” examples from our dataset.

### Query fanouts (what the system searched for)

**ChatGPT.com UI (more “comparison-style”, longer):**
* “top UK banks for innovation in mobile banking features…” (33×)
* “UK banks ranked by how quickly and easily new customers can open an account online” (8×)
* “UK banks best business banking accounts and digital tools for SMEs…” (8×)

**GPT-5.2 API (more “keyword/year/product”, shorter):**
* “UK banks top cashback credit cards 2025” (26×)
* “UK bank customer service satisfaction ranking 2025 2026” (17×)
* “Barclays personal loan representative APR apply online…” (9×)

### Sources (what got cited/used)

**ChatGPT.com UI (aggregators/comparisons):**
* `https://moneyzine.com/uk/banking/best-online-banks-uk/` (350x)
* `https://www.monito.com/en/wiki/best-online-banks-uk` (336x)
* `https://www.compareremit.com/money-transfer-tips/best-online-banks-in-the-united-kingdom/` (295x)

**GPT-5.2 API (more first-party + niche):**
* `https://www.nationwide.co.uk/loans/loan-rates` (130x)
* `https://classiads.co.uk/best-mobile-banking-apps-in-the-uk-for-2025/` (125x)
* `https://www.yourmoney.com/saving-banking/challenger-brands-top-bank-customer-satisfaction-table/` (105x)

**Shared, but weighted differently:**
* `https://www.ft.com/content/bd7d806c-5028-4a93-a04b-81c72af6bb95` (296x UI vs 505x API)
* `https://www.gov.uk/government/news/how-does-your-bank-rank-cma-releases-satisfaction-survey-ratings` (256x UI vs 282x API)
* `https://moneyweek.com/personal-finance/bank-accounts/best-and-worst-uk-banks-for-online-banking` (384x UI vs 55x API)

## What this means for "AI Visibility" as a KPI

If you define **AI Visibility** as:
> "How likely is my brand to be mentioned/recommended in the experience real users actually have in ChatGPT?"

…then **the execution path matters**.

This research shows that:
1.  The UI and API don't just phrase queries differently, they often end up in **different evidence universes** (different queries, different pages, different weighting).
2.  When the evidence changes, **rankings, comparisons, and brand mentions will change** - even if the prompt/scenario is identical.

So the practical recommendation is:

### For AI Visibility Scoring, prioritize the ChatGPT.com web interface runs

If your goal is to measure how a brand appears **to end users inside ChatGPT**, you should compute your AI Visibility Score primarily from **web-interface scenario runs**, because that's the surface your customers use, and (based on this research) it does not behave like the API in its web retrieval.

## When the API is still valuable

The GPT-5.2 API path can still be extremely useful for:
* **Controlled experiments** (repeatability, parameter control)
* **Monitoring a wider evidence set** (it crawls more unique pages here)
* **First-party content diagnostics** (it over-indexed on bank-owned domains)

But: **don't assume API-based measurements translate 1:1 to the UI experience.**

## Bottom line

In this UK banking study (3,645 conversations, 27 days), the ChatGPT.com UI and the GPT-5.2 API behaved like two different web-research systems:

* **0% overlap** in query fanouts (3,856 unique fanouts; none shared).
* **Different web coverage** (API touched more unique pages; UI reused fewer pages more heavily).
* **Different source preference** (UI skewed to aggregators; API skewed more toward bank domains and niche sources).

If you care about measuring your brand's real **AI Visibility in ChatGPT**, you should treat **the web interface** as the primary measurement surface, and use the API as a complementary diagnostic lens, not a proxy.

If you’d like to validate any of this yourself, we’re sharing the raw dataset used for the analysis (a ZIP containing the three JSON files), so you can recompute the stats, slice by topic/scenario/time, and explore the query fanouts and source domains directly; we encourage you to draw your own conclusions about how ChatGPT.com and the GPT-5.2 API behave, and if you spot something interesting (or something we missed), we’d love to hear it and incorporate it into a follow-up.