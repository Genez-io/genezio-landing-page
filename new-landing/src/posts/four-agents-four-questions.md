---
title: "Four Agents, Four Questions: How AI Actually Sees Your Brand"
metaTitle: "Four Agents, Four Questions: How AI Actually Sees Your Brand"
date: 2026-05-03
tags:
  - AI
  - AEO
  - GEO
author: Paula Cionca
linkedIn: https://www.linkedin.com/in/paula-cionca/

thumbnail: /images/four-agents-four-questions.webp
preview: For modern brands, appearing in an AI response is only the baseline. Discover why AI visibility can still mean losing the deal, and explore the 4-agent framework marketing leaders use to track AI recommendations.
# meta data start
description: AI visibility isn't enough. Discover how Genezio's 4 AI agents—Prompter, Recommender, Comparer, and Introspector—help brands win AI search recommendations.
meta_og_url: "https://genezio.com/blog/four-agents-four-questions"

meta_og_image: "https://genezio.com/images/four-agents-four-questions.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 5
url: /four-agents-four-questions/
---

![Visibility Is Half the Picture](/images/four-agents-four-questions.webp)

Most marketing teams I talk to ask the same question first: *are we showing up in ChatGPT?*

It's a fair question. It's also the easiest one to answer, and the least useful.

Visibility in AI is the floor. It tells you whether you exist in the model's world. It doesn't tell you whether you'd ever get recommended, how you stack up when a real customer compares you to competitors—because [visibility is only half the picture](/blog/visibility-is-half-the-picture/). It doesn't tell you what the model fundamentally believes about your brand.

To answer the questions that actually matter, you have to stop running prompts and start simulating customers.

That's what the four Genezio agents do. Each one answers a different question. Each one belongs to a different stage of how seriously a team is treating AI as a channel.

Here's how to think about them.

## 1\. The Prompter, "Are we showing up at all?"

The prompter is the baseline. It runs a fixed list of generic, third-person prompts against the major AI engines and counts how often a brand appears in the response.

*"Best CRM software 2026."* *"Top European banks for digital nomads."* *"Most reliable home insurance in the UK."*

This is what almost every [GEO tool](/blog/aeo-vs-geo/) on the market does today. It's useful as a pulse check. If a brand never shows up here, there's a basic visibility problem and the rest doesn't matter yet.

But the prompter has two limits that no one talks about.

First, no real customer ever types a prompt that clean. A buyer doesn't say *"best CRM software 2026."* A buyer says *"we're 40 people, we just outgrew HubSpot, half the team is on the road, what should we look at."* The prompt is the map, not the territory.

Second, the prompter has no persona. The same generic prompt gives every brand the same scoreboard, regardless of who is actually buying. A retail bank in Berlin and a private bank in Geneva get measured against the same question, and they shouldn't be.

The prompter is fine for a pulse check. It is not enough to make a decision on.

## 2\. The Recommender, "When a real B2C customer asks AI for a recommendation, do we get picked?"

This is where the persona-based approach starts.

The recommender simulates a full multi-turn conversation as a configured customer persona, not a prompt, a person. It uses the kind of context a real human carries into a conversation: their age, their geography, their constraints, their priors, their objections.

Let's say the marketing team in question is at a European retail bank. The B2C target is a 32-year-old woman in Berlin, recently relocated, looking for a current account. The recommender doesn't run *"best bank in Germany."* It runs the conversation she'd actually have:

*"I just moved to Berlin from Madrid, I work remotely for a US company, paid in USD. I want a bank where I can keep both EUR and USD, low international transfer fees, decent app. N26 and Deutsche Bank are the obvious ones, what would you suggest?"*

Then the persona pushes back, asks about hidden fees, asks about Revolut, asks about international transfers. The conversation runs three, four, five turns, exactly the way a real prospect talks to ChatGPT or Perplexity tonight.

What you get back isn't a visibility score. It's a recommendation rate: across thousands of simulated conversations as that persona, how often did the brand get recommended at the moment of decision, with a confidence interval that tells you how much to trust the number.

[Visibility says 'you appeared.' Recommendation says 'you were chosen.'](/blog/ai-recommendation-vs-ai-visibility/) Those are different numbers. The gap between them is where most brands lose business they don't even know they had.

For an in-house marketing team, this is the first agent that connects to a revenue signal. It tells you which personas are converting in AI conversations and which aren't, and that's a number a CMO can act on.

## 3\. The Comparer, "When a B2B buyer puts us head-to-head with our competitors, what does AI actually say?"

The comparer is the recommender's B2B sibling. Same persona-based, multi-turn architecture, tuned for the comparative question that defines B2B buying.

The reality of B2B is that buyers almost never start with an open question. By the time AI enters the process, the shortlist is already in the buyer's head, they know exactly who they're choosing between. The question they're asking the model isn't *"who should I consider?"* It's *"how do these three actually stack up?"* That's a fundamentally different conversation, and it's the one the comparer simulates.

Take a procurement manager at a mid-sized European bank evaluating fraud detection vendors. She has a budget. She has compliance constraints (DORA, GDPR, data residency). She has integration requirements (Murex, Temenos, whatever's already in the stack). And she has three vendors on her shortlist.

The comparer simulates her conversation. Not *"what's the best fraud detection software"*, that's the prompter's job. The comparer runs:

*"We're a mid-sized European bank, around €15B AUM. We're shortlisting Vendor A, Vendor B, and our brand for transaction-monitoring fraud detection. We need DORA compliance, we run Murex on the trading side, hard constraint on EU data residency. Walk me through how these three compare."*

Then the AI answers. And that answer is the data.

Inside that answer, the marketing team finds out:

– Which competitors AI groups the brand with (and which it doesn't) – What strengths the model attributes to each vendor – What weaknesses it surfaces about the brand that no one would ever write on their own website – Which sources it cites to justify those positions

That's not a vanity metric. That's competitive intelligence delivered by the same engine that buyers are using to build their shortlist. If the AI is telling procurement teams that *"Vendor A is generally considered weaker on fraud explainability,"* there's a content problem you can fix this quarter, and a confidence interval that tells you how often the model says it.

The comparer doesn't tell you whether you're visible. It tells you whether you're winning the head-to-head, and what story is being told about you when buyers compare.

## 4\. The Introspector, "What does AI fundamentally believe about our brand?"

The first three agents simulate customers. The introspector goes one layer deeper. It interrogates the model directly, about you.

*"What is brand X known for?"* *"What are brand X's weaknesses?"* *"Who would you recommend brand X to, and who would you steer away?"* *"What sources shape your understanding of brand X?"*

This isn't customer simulation. It's brand health diagnostics on the entity itself, the way the model represents the brand internally, before any specific question is asked.

A B2C example: the marketing team at a heritage automotive brand that's been investing heavily in EV positioning for three years. The recommender tells them whether they get picked when someone asks for an EV recommendation. The comparer tells them how they stack up against Tesla, BMW, and Polestar in a buyer conversation.

The introspector tells them something the other two can't: when the model thinks of the brand, in the absence of any specific prompt, what does it think of?

If the answer comes back *"reliable family combustion engines, premium German engineering, conservative styling"*, three years of EV positioning haven't moved the entity representation. The model still thinks of the brand the way it did in 2019\. That's a finding a CMO can take to a CEO. It's not *"we have an AI visibility problem."* It's *"the story the model tells about us hasn't caught up to the story we've been telling for three years."*

The B2B version of this gap is just as common, dressed differently. An enterprise software vendor has spent five years repositioning around cloud, every keynote, every campaign, every product release. The introspector asks the model what it knows. The answer: *"traditional on-prem software, complex implementations, long deployment cycles."* Five years of repositioning haven't entered the entity representation. The model is still describing the brand the way it was, not the way it's been pitching itself.

That's the question the introspector exists to answer for any team, B2B or B2C, that has invested in shifting how the brand is perceived: not just *"how does the model see us,"* but *"what do we need to change to move it."*

That gap, between intended brand and represented brand, is the gap the introspector measures. And it's the gap most marketing teams don't realize they have.

## Which question is your team actually trying to answer?

These four agents map to four progressively harder questions:

– **Prompter**, Are we even on the map? *(visibility)* – **Recommender**, When real B2C customers ask, do we win the recommendation? *(persona-based revenue signal)* – **Comparer**, When B2B buyers compare us to competitors, what story is being told? *(competitive intelligence)* – **Introspector**, What does the model fundamentally believe about us, before anyone asks? *(brand health at the entity level)*

Most teams stop at the first one because it's the easiest tool to buy. The output looks tidy. There's a number that goes up or down each week. It fits in a slide.

But the questions that change quarterly outcomes are the next three.

If your team is preparing a board update on AI as a channel, the prompter alone can't carry it. *"Visibility went from 14% to 22%"* is a meeting-filler, not a decision. *"Recommendation rate among our target B2C persona moved from 9% to 27% after we changed the way we describe pricing on the homepage"*, that's a decision. *"AI tells procurement managers we're weaker on explainability than Vendor A; here are the three pieces of content that fix it"*, that's a quarter of work.

Single-prompt tracking is the floor. The four-agent setup is what you build on top of it once AI stops being a dashboard and starts being a channel.

The marketing teams that figure that out first are the ones writing next year's case studies.  
