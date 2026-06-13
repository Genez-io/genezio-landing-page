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
meta_og_url: "https://genezio.com/blog/chatgpt-fanout-brand-injection/"

meta_og_image: "https://genezio.com/images/chatgpt-fanout-brand-injection.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 6
url: /chatgpt-fanout-brand-injection/
---

![chatgpt fanout brand injection](/images/chatgpt-fanout-brand-injection.webp)


Someone asks ChatGPT, "If I want the best value for my weekly shop in the UK, which supermarkets should I look at?" They name no brand. It's an open question.

Before a single web result loads, ChatGPT runs this internal search:

*UK supermarket price comparison which is cheapest Tesco Aldi Lidl Sainsbury's Asda Morrisons 2026*

The user named no one, but ChatGPT named six chains and a year. None of that came off the web. It came from what the model already believed about the grocery market, and what it trusts to judge it, before it had looked anything up.

That internal search is called a query fanout, and it's the part of AI search that almost nobody is tracking. At [Genezio](https://genezio.com), we captured 220,000 of them from ChatGPT and matched 40,000 back to the exact prompts that produced them. There are two findings worth your time here, and then the part you can actually use: a map of what the model trusts, broken down by industry.

## The fanout decides who's in the running

A search-enabled model doesn't go looking for what you typed. It expands your prompt into a handful of web queries (that's the fanout) and those get built before any result comes back. They draw on three things: your prompt, the model's training knowledge, and whatever it remembers about you, both from earlier in the chat and across past sessions. So if something shows up in the fanout that wasn't in your prompt, the model put it there from its own priors.

The first thing it puts there is competitors. In 11.9% of fanouts, ChatGPT volunteered a brand the user had never mentioned, and nearly all of those (9.9%) were competitors. That rate isn't flat, either. It rises with buying intent, and it peaks at the exact moment the user hands the decision to the model:

| What the user is doing | Fanouts volunteering a competitor |
| :---- | :---- |
| Asking an open question | 10.1% |
| Comparing brands they named | 6.1% |
| **Asking the model to recommend** | **16.5%** |

The second thing is the one that should make you care. Whatever the model searches for, it tends to keep. Of the brands ChatGPT searched for in its fanouts, 97% made it into the final answer and only 3% got dropped along the way. In practice, being searched for is being recommended. Any brand that wasn't searched for has to fight its way in from whatever pages got retrieved, which is a much weaker position to be in. That's the whole game, really, and you can't see any of it unless you're capturing the fanout itself.

## What the model trusts, by industry

This is where the leverage is. The fanout doesn't only inject competitors. It also injects the sources the model trusts to judge your category. When it tacks "Reddit" or "Trustpilot" or "CQC" onto a search, it's showing you where it's about to go looking. And those sources aren't the same from one industry to the next. We measured them.

Find your row. The middle column is where the model goes to validate brands in your space. The right column is who it lines you up against.

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

Two things hold across the whole table. One is that "reviews" is the model's default. It appends some version of "reviews" to a big share of fanouts in nearly every category, which makes review presence the price of entry no matter what you sell. The other is that the *named* authority is highly specific to the vertical. GitHub is what decides developer tools. CQC decides UK care homes. ADAC and Mumsnet decide baby products. Booking.com decides travel. Chase the wrong one and you've spent the effort for nothing.

## So what do you do about it

Start with your industry's named source rather than trying to be everywhere at once. A care home needs to be rated on CQC and the review sites. An antivirus needs AV-TEST results and a presence in the Reddit threads. A developer tool lives or dies on GitHub and Reddit. Find your row above and get your brand properly represented in the one or two places the model actually pulls from. You can't change the query the model decides to run, but you can make sure you're what it finds when it runs it.

Then go after the queries it's already firing. ChatGPT rarely searches your name on its own. It searches your category plus a dimension it adds, and the three it adds most are reviews (18%), a comparison (18%), and pricing (10%). It's out there running "best \[category\] reviews," "\[your brand\] vs \[rival\]," and "\[your brand\] pricing" whether or not you've thought about it. If you don't have a page that wins those specific searches, the model runs them and you're just not in the results. Build the comparison and pricing pages it's demonstrably looking for.

The last one is about the fights you lose by default. When a user names two brands to compare, ChatGPT researches only one of them in 25% of head-to-heads, and which one gets dropped is roughly a coin flip, so being the bigger name is no protection. We saw it across a run of "Uniqlo vs Marks & Spencer" comparisons: the user pitted the two against each other, but the model fired fanouts like "Marks & Spencer clothing quality, durability, reviews," with Uniqlo's name nowhere in them. Uniqlo still made the written answer, but only by surfacing from retrieved pages, never because the model searched for it.

The fix isn't a "Uniqlo vs M\&S" page, because that's not what the model searched for. It searched for a durability question with only the rival's name attached. So what saves you from getting skipped is being unmissable on the dimension the model queried and the sources it trusts for your category, so even a search built around your competitor turns you up.

It isn't something you check once and file away. ChatGPT rewrites its fanouts on every run and reaches into memory each time, so the sources and competitors it pulls from keep moving. The only way to know whether you're being volunteered or skipped is to watch the fanouts over time, run as the personas your actual customers represent. That's the thing [Genezio](https://genezio.com) is built to do. It runs full multi-turn conversations as your real customer personas, captures the fanouts as they happen, and reports recommendation rates with proper confidence intervals rather than a single snapshot. The fanout is the earliest point at which your brand's fate gets decided, so it's the earliest point worth watching.

---

### Methodology

We analyzed query fanouts captured from ChatGPT's live search, meaning the model's own internal web queries, the ones generated before any result returns. The mention and survival rates draw on a 220,193-fanout corpus, and the volunteered-brand analysis comes from two prompt-verified cohorts totaling 31,470 prompts. "Volunteered" means a brand that appears in the fanout but not in the user's prompt, matched alias-aware and split into the user's own brand versus competitors. Survival is measured against the platform's extracted answer brands, at the conversation level. The per-industry figures are the share of each industry's fanouts that named a given source or competitor; we show a percentage where a source clears a meaningful threshold, and the industries come from the brands in our cohorts. The named competitor sets and the strongest named authorities are exact; "reviews" is generic and counted by keyword. The one-sided-comparison rate (25.4%) comes from 21,608 comparer conversations, measured across all of a prompt's fanouts; which of the two brands gets dropped is close to even (own 50.4%, competitor 44.5%). The data is observational and skews heavily to ChatGPT, since it's the engine that exposes its fanouts. For contrast, Perplexity volunteers a competitor just 0.6% of the time.
