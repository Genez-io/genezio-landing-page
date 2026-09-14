---
title: "ChatGPT Decides Who You Compete Against Before It Reads a Single Page."
metaTitle: "ChatGPT Fanout: How AI Picks Your Competitors Before Searching"
type: research
date: 2026-06-09 
tags:
  - AI Research
  - ChatGPT
  - Brand Visibility
  - Competitive Analysis
  - AI Search Optimization
author: Bogdan Vlad
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad/ 

thumbnail: /images/chatgpt-fanout-brand-injection.webp
preview: ChatGPT injects competitors into internal search before loading web results. We analyzed 220K fanouts to reveal how AI picks competitors (9.9% rate) & trusted sources by industry.
# meta data start
description: ChatGPT decides your competitors before reading. Fanout injects competitors (9.9%) & industry sources. 220K fanouts analyzed. 97% searched brands survive.
meta_og_url: "https://genezio.com/research/chatgpt-fanout-brand-injection/"

meta_og_image: "https://genezio.com/images/chatgpt-fanout-brand-injection.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 6
url: /research/chatgpt-fanout-brand-injection/
---

![chatgpt fanout brand injection](/images/chatgpt-fanout-brand-injection.webp)


Someone asks ChatGPT, "If I want the best value for my weekly shop in the UK, which supermarkets should I look at?" They name no brand. It's an open question.

Before a single web result loads, ChatGPT runs this internal search:

*UK supermarket price comparison which is cheapest Tesco Aldi Lidl Sainsbury's Asda Morrisons 2026*

The user named no one, but ChatGPT named six chains and a year. None of that came off the web. It came from what the model already believed about the grocery market, and what it trusts to judge it, before looking anything up.

That internal search is called a **query fanout**. It is the hidden phase of AI search that almost nobody tracks.

At [Genezio](https://genezio.com), we captured 220,000 query fanouts from ChatGPT and matched 40,000 back to the exact prompts that triggered them.

Below are two critical findings—followed by an industry breakdown of the sources AI trusts most.

## The fanout decides who's in the running

A search-enabled model doesn't simply look up what you typed.

Instead, it expands your prompt into several parallel web queries—the query fanout. These queries are built before any live web results return.

They draw on three signals:
- Your original prompt
- The model's pre-training knowledge
- What it remembers about you from current and past chats

If a brand appears in the fanout that was not in your prompt, the model put it there from its own priors.

The first thing it adds is competitors. In 11.9% of fanouts, ChatGPT volunteered a brand the user had never mentioned, and nearly all of them (9.9%) were competitors.

This rate rises with buying intent, peaking when the user asks the model for a recommendation:

| What the user is doing | Fanouts volunteering a competitor |
| :---- | :---- |
| Asking an open question | 10.1% |
| Comparing brands they named | 6.1% |
| **Asking the model to recommend** | **16.5%** |

The second finding is even more decisive: **whatever the model searches for, it tends to keep**.

Of all brands ChatGPT searched for in its fanouts, **97% survived into the final answer**. Only 3% got dropped along the way.

In practice, being searched for means being recommended.

Any brand not included in the fanout must fight its way in from whatever web pages happen to get retrieved—a far weaker position. You cannot see any of this without tracking the fanout itself.

## What the model trusts, by industry

This is where the real leverage lies.

The fanout doesn't only inject competitors. It also injects the specific sources the model trusts to evaluate your category.

When ChatGPT adds "Reddit", "Trustpilot", or "CQC" to a search, it reveals where it validates brands. These trusted authorities change dramatically by vertical.

Find your industry in the table below. The middle column shows where the model goes to validate brands. The right column shows who it benchmarks you against:

| Industry | Sources the model reaches for | Who it benchmarks you against |
| :---- | :---- | :---- |
| **AI / developer tools** | GitHub (16%), Reddit, generic reviews | GitHub Copilot, Cursor, Tabnine, Codeium |
| **Cybersecurity / antivirus** | Reddit, AV-TEST / AV-Comparatives, reviews (15%) | Tenable, Qualys, Intruder, Invicti |
| **Blockchain / infrastructure** | GitHub, official docs, Reddit | QuickNode, Infura, Chainstack, Moralis |
| **Healthcare / care homes** | CQC (10–11%), reviews (35%), Trustpilot | sector-specific regulated providers |
| **Baby / child products** | ADAC (11%), Mumsnet (9%), Reddit (11%) | category incumbents like Cybex, Joie, Britax |
| **Travel / airport lounges** | Booking.com (11%), Reddit (8%) | DragonPass, LoungeKey, the Priority Pass set |
| **Consumer electronics** | Reddit (8–12%), reviews, YouTube | category leaders by spec |
| **Fashion / apparel** | reviews (18%), Reddit, Trustpilot | high-street and DTC peers |
| **Lending / consumer finance** | Trustpilot (4%), reviews (42%), Feefo | direct lender competitors |
| **Sales / B2B SaaS** | G2, Gartner, reviews | Highspot, Seismic, Mindtickle |
| **Automotive** | Reddit, reviews (12%), NCAP and spec sites | same-segment models |
| **Grocery / retail** | reviews (21%), Which?, Reddit | the major chains |

Two key takeaways emerge across the table:

1. **"Reviews" is the baseline requirement.** ChatGPT adds "reviews" to a large share of queries across almost every industry. Having an active presence on review sites is the entry fee for AI search.

2. **Named authorities are strictly vertical-specific:**
   - **Developer tools:** GitHub decides.
   - **Care homes:** CQC decides.
   - **Baby products:** ADAC and Mumsnet decide.
   - **Travel:** Booking.com and Reddit decide.

Targeting the wrong authority in your vertical leads to wasted effort.

## So what do you do about it

### 1. Win your industry's primary authority

Focus on your vertical's trusted sources rather than trying to be everywhere at once:
- **Care homes** must be rated on CQC and leading review portals.
- **Antivirus tools** require AV-TEST scores and Reddit community discussions.
- **Developer tools** depend on GitHub repositories and developer subreddits.

You cannot rewrite the query the model decides to run. But you can make sure you are what it finds when it runs it.

### 2. Build pages for the queries AI already fires

ChatGPT rarely searches a brand name alone. Instead, it pairs your category with three core dimensions:
- **Reviews** (18% of queries)
- **Comparisons** (18% of queries)
- **Pricing** (10% of queries)

The model is actively running searches like *"best [category] reviews"*, *"[your brand] vs [rival]"*, and *"[your brand] pricing"*.

If you do not publish pages that address these queries, the model searches and your brand simply does not appear. Build the comparison and pricing assets it actively seeks out.

### 3. Protect against the 25% "coin-flip" drop

When users ask ChatGPT to compare two brands, the model searches for only one of them in **25% of head-to-head comparisons**.

Which brand gets omitted is roughly a coin flip (50.4% vs 44.5%). Being the larger, more established brand is no defense.

In tests comparing Uniqlo against Marks & Spencer, the model ran queries like *"Marks & Spencer clothing quality, durability, reviews"*, leaving Uniqlo out entirely. Uniqlo reached the final answer only if retrieved third-party pages happened to mention them.

### 4. Optimize category dimensions, not just comparison pages

Creating a standard comparison page is not enough. The model queried a specific attribute—durability—paired only with the competitor's name.

To prevent being dropped, your brand must be prominent across the specific product dimensions and trusted sources AI queries for your industry.

### 5. Continuously monitor query fanouts

Fanouts are never permanent. ChatGPT revises its internal queries on every run, influenced by model updates, session context, and live web data.

The only way to know whether your brand is being searched or skipped is to monitor fanouts over time using realistic customer personas.

[Genezio](https://genezio.com) runs multi-turn conversations simulating your target buyer personas, captures live query fanouts, and measures real recommendation rates.

[Book a strategy call](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC) with our team to see which competitors and sources AI injects into conversations about your brand.

---

### Methodology

We analyzed query fanouts captured directly from ChatGPT's live search engine—the internal web queries generated before any results return.

- **Corpus Size:** 220,193 query fanouts captured from ChatGPT.
- **Prompt Verification:** 40,000 fanouts matched to exact user prompts across cohorts totaling 31,470 prompts.
- **Volunteered Brands:** Brands appearing in the fanout that were not in the user prompt, categorized into own-brand vs. competitors using alias-aware matching.
- **Survival Rate:** Percentage of searched brands retained in the final answer at the conversation level (97% survival).
- **One-Sided Comparisons:** In 21,608 comparer conversations, ChatGPT researched only one brand in 25.4% of tests (dropped own brand 50.4%, dropped competitor 44.5%).
- **Scope & Limitations:** Data is observational and focused on ChatGPT, which exposes its internal search queries. For comparison, Perplexity volunteers a competitor in just 0.6% of fanouts.
