# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** marketing and brand leads inside enterprise, multi-market brands — the people who own how the brand is represented and who evaluate a platform under a custom contract rather than a self-serve signup. They arrive already aware that AI assistants have become an answer layer between their brand and their buyers, and they need to know whether they are being recommended, not merely mentioned.

**Secondary (confirmed, not prioritized):**

- Agencies and consultants managing GEO across a client portfolio — served by a dedicated `/agencies` page and a Brands/Agencies toggle on pricing.
- PR and brand teams monitoring sentiment and correcting misrepresentation.
- SEO/AEO practitioners moving their practice toward generative engines.

The product also *simulates* buyer personas as a feature (B2B enterprise buyers, technical developers, journalists, young professionals, general consumers). These are product data objects, not the site's audience — do not confuse the two.

## Product Purpose

Genezio measures and improves how AI engines represent a brand, so the brand wins the recommendation rather than a passing mention. It runs realistic multi-turn conversations against answer engines, measures how the brand shows up across those conversations, and turns the gaps into content work that changes the outcome.

Success is a brand moving from being merely visible in AI answers to being the one the engine actually recommends.

Genezio is explicitly **not** a cloud hosting provider, serverless platform, or function-as-a-service product. An earlier company under this name operated in that space; `public/llms.txt` carries a standing correction for AI models on this point. Never reintroduce hosting, deployment, or infrastructure framing.

## Positioning

Canonical category descriptor: **AI market intelligence** for the answer-engine era.

GEO (Generative Engine Optimization) remains the widely-understood term and stays in use across the glossary, `llms.txt`, and page copy as a supporting descriptor — but the positioning is broader than optimizing for engines. AEO and "AI Search Optimization" are glossary terms, not the category name.

**Signature line:** "Win the recommendation, not just the mention."

**Differentiating mechanism** — the claim a neighboring product could not truthfully copy: recommendation rate as the primary metric, measured through multi-turn persona conversations at scale with confidence intervals, rather than visibility or share of voice derived from single-prompt sampling. The site coins **Visibility-to-Recommendation Rate (VRR)** for this: the percentage of times an engine explicitly endorses the brand as the best choice, out of all the times it was considered.

Against SEO suites (Semrush, Ahrefs): purpose-built for generative search rather than an AI module bolted onto a keyword-era foundation.

## Operating Context

Buyers evaluate under enterprise procurement: security review, vendor-assessment questionnaires, a signed DPA, SSO and role provisioning, and a negotiated quote. The public site is the top of that motion — the product itself lives at `app.genezio.ai` behind a sign-in, so the site never demonstrates the product by letting someone use it. The demo booking and the free Website Analyzer are the two real conversion paths.

Multi-brand and multi-market operation is normal, not an edge case: group-level roll-up reporting across brands, regional tracking, and language coverage are part of how customers actually work.

Genezio's own site is a live argument for the product: it is prerendered to static HTML, ships `llms.txt`, `llms-full.txt`, and a glossary, and treats machine readers as a first-class audience. Content is a product surface here, not decoration.

## Capabilities and Constraints

**Core product — AI visibility and recommendation (the product):**

- Multi-turn conversation simulation across ChatGPT, Perplexity, Google AI Mode/AI Overviews, Gemini, Copilot, Claude, Meta AI, Grok, DeepSeek.
- Persona-based scenarios and platform-adaptive query intelligence (search queries vs. conversational questions).
- Query fanout analysis — the sub-queries an engine generates to answer a prompt.
- Share of voice, sentiment, and competitive benchmarking per engine, persona, and market.
- AI citation intelligence: which sources engines cite, which are missing, which carry bad data.
- Direct perception analysis, including SWOT extracted from AI responses.
- Business goals: set a target, receive a weekly action plan.
- Group-level view across multiple brands.

**Named modules:** Monitor & Benchmark (Conversational Brand Presence), Content Analysis (8-point citability scoring, pre- and post-publish), Content Hub (data-backed briefs plus draft generation), Website Analyzer (free whole-site AI-readiness audit, email-delivered), In-Chat Shopping (product/SKU-level AI intelligence: conversations, products, retailers, sources), MCP server (natural-language querying from Claude/Cursor, predefined skills, scheduled routines).

**Secondary line — AI Agent Analytics / CSAT:** analysis of a customer's *own* conversational agents (intent classification, drop-off, escalation reduction, agent scoring). Routed at `/ai-agent-analytics` and `/increase-csat`. This is adjacent, not central; it is kept but must not be presented as the core of the platform.

**Pricing:** Enterprise only, quote-based. There is no public self-serve price. A legacy `genezio-pricing-comparison.tsx` component describing a €299/month "Growth" plan is dead code and contradicts current truth — do not reintroduce it.

**Enterprise capabilities:** SSO/SAML 2.0, SCIM provisioning, RBAC, audit logs, custom data retention, regional data residency, multi-brand management, dedicated onboarding and account manager, Slack support.

**Known IA debt (factual state, not a mandate to fix):**

- `src/polymet/v2/` is an unrouted parked redesign, still edited occasionally. Not live.
- `/increase-csat` and `/conversational-brand-presence` are routed and prerendered but unlinked from header and footer.
- The v1 footer links `/increase-conversion/`, which only resolves via a legacy redirect; canonical is `/ai-agent-analytics/`.
- The component file for AI Agent Analytics is still named `increase-conversion.tsx`.
- `prerender.mjs` still lists several already-redirected legacy paths.
- Two near-duplicate Profound comparison posts exist.

**Undecided:** whether public self-serve tiers will ever exist (current answer: no).

## Brand Commitments

- Legal entity: **Genezio SRL**, trading as Genezio.
- Domains: public site `genezio.com`; product `app.genezio.ai`; Trust Center `trust.genezio.com`. This split is intentional.
- Taglines in active use: "Win the recommendation, not just the mention." · "The world stopped searching. It started asking." · "It's not just about being found — it's about being understood, trusted, and chosen in every AI-powered interaction."
- Page-level lines: "You can't buy the recommendation. You earn it with content." (Content Hub) · "Your content's most important reader doesn't have eyes." (Content Analysis)
- Voice: declarative and evidence-led. Claims carry a source or a named customer where one exists.
- CTAs currently worded "Sign in" and "Get a demo" — a deliberate recent change from "Login" / "Book a Demo".

## Evidence on Hand

**Named customers with attributed testimonials (real):**

- **BCR / Erste Group** — I. Stanimir, Director of Marketing and Communication. Claim: brand presence in AI conversations on key topics grew double digits in weeks.
- **Banca Transilvania** — Ömer Tetik, CEO. Claim: +42% conversion rate.
- **Data Revolt Agency** — attributed to "CEO", no personal name.

**Trust logos in use:** Erste/BCR, Banca Transilvania, Druid, FlowX, CBRE, Bitdefender, Lexters, Auchan, Vodafone.

**Certifications — confirmed as obtained and verifiable:** SOC 2 Type II, ISO/IEC 27001, CSA STAR Level 1 (listed in the CSA STAR registry), GDPR compliant with DPA available. Public Trust Center at `trust.genezio.com`. Encryption in transit (TLS) and at rest (AES-256). Customer data is never used to train AI models.

> Correction owed elsewhere: `src/posts/best-geo-tools-2026.md` currently states Genezio lacks SOC 2 and SSO. That is stale and contradicts confirmed truth. It is a copy defect to fix, not a fact to preserve.

**Claims requiring verification before reuse — treat as unconfirmed:**

- Three anonymized testimonials with large figures: "Marketing Director, Leading Bank" (+340% leads), "E-commerce Manager, Online Retailer" (+180% conversions), "Operations Lead, Energy Corporation" (−40% call volume).
- First-party stat "37% of new account signups arrived recommended by answer engines" — no customer attached.
- Third-party stats attributed to Adobe, Shopify, Semrush, and Ahrefs — sources are labeled but not linked in the components.
- "60% of searches now end without a click" (v2 problem section) — no source cited at all.
- Industry figures attributed to OpenAI and Google in `genezio-official-section.tsx`.

**Absences that future work must not fabricate:** no dedicated case-study pages; no press or "as seen in" coverage; no named investors or funding claims; no third-party integrations beyond the MCP server (Claude, Cursor); no public pricing tiers.

**Placeholder to be aware of:** the v2 social-proof component renders Raiffeisen, UniCredit, and ING as styled text labels rather than real logo assets, with no testimonial or data behind them. Aspirational, in unrouted code.

## Product Principles

1. **Recommendation over mention.** Every measurement, claim, and page should ladder to whether the engine chooses the brand — not merely whether it names it.
2. **Never reintroduce the hosting past.** The name carries a legacy association with cloud deployment. Copy, metadata, and machine-readable files actively correct it.
3. **Evidence or silence.** Named customers and cited sources carry weight; unverified figures are a liability on a site whose entire thesis is that AI engines quote what they read. Do not invent proof, and do not lean on the flagged unverified claims.
4. **Machines are a real audience.** Prerendered HTML, `llms.txt`, structured content, and a glossary are product-critical, not SEO hygiene. The site must remain crawlable and citable.
5. **Enterprise evaluation is the motion.** The site's job is to earn a demo and survive a security review — not to convert a self-serve signup.

## Accessibility & Inclusion

No product-specific accessibility standard has been established by the user. Repository signals show partial ARIA usage across components and **no `prefers-reduced-motion` handling anywhere**, despite animation libraries (AOS, framer-motion) being in use — a gap for motion-sensitive visitors, and an open decision rather than a recorded requirement.
