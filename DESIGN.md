---
name: Genezio
description: Enterprise AI market intelligence, rendered as an instrument panel for the answer-engine era.
colors:
  void: "#050506"
  band: "#0E0E10"
  surface: "#0A0A0C"
  signal: "#02F8A2"
  signal-bright: "#4FFAB8"
  signal-deep: "#00E191"
  ink: "#FFFFFF"
  hairline: "rgba(255,255,255,0.10)"
  hairline-strong: "rgba(255,255,255,0.20)"
typography:
  display:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "3.05rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.95rem"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  gutter: "1.5rem"
  gutter-md: "2rem"
  gutter-lg: "4rem"
  section: "6rem"
  section-md: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "#000000"
    rounded: "{rounded.xl}"
    padding: "1.25rem 1.5rem"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.signal-bright}"
    textColor: "#000000"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "1.25rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "2rem"
  label-eyebrow:
    textColor: "rgba(255,255,255,0.50)"
    typography: "{typography.label}"
---

# Design System: Genezio

## Overview

**Creative North Star: "The Instrument Panel"**

Genezio measures something invisible — what machines say about a brand when nobody is watching. The interface is built like the readout of a precision instrument: a near-black chassis, hairline rules that organize without decorating, and a single luminous green that means *signal*. Nothing glows unless it carries a reading.

The density is editorial rather than dashboard-like. Sections breathe at a fixed rhythm (`py-24 md:py-32`), the container holds at `max-w-7xl` with `px-6 md:px-8 lg:px-16` gutters, and type is set on a slightly reduced 15px root so the whole surface reads calmer and denser than a default Tailwind build. The result should feel like something an enterprise buyer would trust with a board slide: exact, unhurried, quietly expensive.

Depth comes almost entirely from tonal layering — three near-black steps that a casual eye reads as one — not from shadows. Sixty-six shadow utilities across twenty-two thousand lines is the measure of this restraint: shadows appear on menus and CTAs, where an element genuinely floats, and nowhere else.

**Key Characteristics:**
- Near-black chassis with a single emerald signal color
- Hairline borders at 10% white as the primary structural device
- Flat by default; depth via three tonal steps, not elevation
- 15px root size — the whole system scales ~6% down from browser default
- Inter Variable with alternate glyphs enabled (`cv02 cv03 cv04 cv11 ss01`)

## Colors

A monochrome instrument face with one live indicator.

### Primary

- **Signal Green** (#02F8A2): The single accent. Primary CTA fills, active states, data-positive indicators, the dot in a group label, key metric emphasis. It appears on well under 10% of any screen by area, and that scarcity is what makes it read as a reading rather than a decoration. `emerald-400` accounts for 306 of 397 accent usages; the neighbors exist only as hover and depth variants.
- **Signal Bright** (#4FFAB8): Hover state for primary buttons and links. Never a resting fill.
- **Signal Deep** (#00E191): Pressed states and small-area fills where #02F8A2 would vibrate against black.

### Neutral

- **Void** (#050506): The page. Not pure black — a faint blue-violet cast that keeps large fields from reading as a hole. Set on the layout wrapper (105 uses, mostly redundant repeats on page roots).
- **Band** (#0E0E10): Alternate section background, used to stripe stacked sections apart (62 uses). Barely lighter than Void; the separation is felt more than seen.
- **Surface** (#0A0A0C): The card plane (96 uses), almost always with `border border-white/10 rounded-2xl`. Counter-intuitively *darker* than Band — cards sink into a striped section rather than lifting off it.
- **Ink** (#FFFFFF): Headings and primary text (625 uses).
- **Hairline** (rgba(255,255,255,0.10)): The dominant structural line — 538 uses. Card borders, dividers, input strokes.
- **Hairline Strong** (rgba(255,255,255,0.20)): Emphasis borders and ghost-button strokes.

### Text Opacity Ladder

Body copy is white at reduced opacity rather than a gray ramp, so text tints correctly against every surface:

- **60%** — body and paragraph text (275 uses, the default)
- **70–80%** — emphasized body, lead paragraphs
- **50%** — labels, eyebrow text, captions
- **40%** and below — metadata, timestamps, disabled

### Named Rules

**The One Signal Rule.** Emerald means "a reading, a result, or the next action." It is never used to make a section look designed. If an element is emerald and carries no data and no action, it is wrong.

**The Three-Step Rule.** There are exactly three background values: Void `#050506` for the page, Band `#0E0E10` to stripe sections apart, Surface `#0A0A0C` for cards. A fourth tone is not a new token; it is drift. Anything nested deeper than a card uses a translucent white overlay (`bg-white/5`, 294 uses), not another opaque hex.

**The No-Gray Rule.** Secondary text is `text-white/60`, never `text-zinc-400` or a gray hex. Opacity keeps text harmonized with whatever sits behind it. *This rule is aspirational, not descriptive:* `text-zinc-400` still appears 173 times against 275 for `text-white/60`, a second vocabulary inherited from an earlier pass. New work uses the opacity ladder; existing zinc values are a known migration, not a precedent.

## Typography

**Display Font:** Inter Variable (with Inter, system-ui, sans-serif)
**Body Font:** Inter Variable — the same face throughout
**Label/Mono Font:** system mono stack, reserved for code and machine-readable output only

**Character:** One face, worked hard. Personality comes from the variable axis and Inter's alternate glyph set (`cv02 cv03 cv04 cv11 ss01`), which swaps in a single-storey `a`, straighter digits, and a cleaner `l` — a quieter, more editorial Inter than the default. Distinction is earned through weight and spacing discipline, not through a second typeface.

### Hierarchy

- **Display** (600, `text-6xl` / 3.05rem, line-height 1.05, tracking -0.02em): Page-defining hero headlines. One per page.
- **Headline** (600, `text-4xl`–`text-5xl` / 1.95–2.5rem, tracking -0.02em): Section headings. `text-4xl` is the workhorse (116 uses).
- **Title** (600, `text-lg`–`text-xl`): Card headings, subsection titles.
- **Body** (400, 1rem, line-height ~1.65): Paragraphs, at `text-white/60`. Hold measure to 65–75ch — `max-w-3xl` (62 uses) is the established container for prose.
- **Label** (600, `text-xs`, uppercase, tracking 0.2em, `text-white/50`): Group labels, category tags, table headers. 46 uses; this is a real system element.

### Named Rules

**The Semibold Default Rule.** Headings are `font-semibold` (365 uses), not `font-bold` (247). Bold is reserved for emphasis inside a heading or for numerals in data. Reaching for bold on every heading flattens the hierarchy the weight step is supposed to create.

**The Balanced Heading Rule.** `h1`–`h4` carry `text-wrap: balance` and `letter-spacing: -0.02em` globally. Never leave a one-word orphan on a heading's last line; if balance does not fix it, rewrite the heading.

**The Label Is Not An Eyebrow Rule.** The uppercase tracked label marks a *group* — a SWOT quadrant, a nav column, a table header. It is never a decorative kicker floating above a section heading to announce the section. The heading carries its own weight.

## Layout

A single centered column system, not a grid framework.

- **Container:** `max-w-7xl` (79 uses) for full sections; `max-w-3xl` (62 uses) for prose; `max-w-2xl` (36) for centered intros.
- **Gutters:** `px-6 md:px-8 lg:px-16` — 85 uses, effectively invariant. Any section using different horizontal padding is drift.
- **Section rhythm:** `py-24 md:py-32` is the standard (28 uses); `py-16 md:py-28` for tighter secondary sections. Compact bands (trust logos, breadcrumbs) use `py-5 md:py-6`.
- **Root scale:** `html { font-size: 15px }`. Every rem-based value inherits this ~6% reduction. Do not compensate with larger Tailwind steps.
- **Breakpoints:** Tailwind defaults. `md` (768px) carries most of the layout shift; `lg` (1024px) mainly widens gutters.
- **Vertical grouping:** more space above a heading than below it. Related content tightens; distinct groups separate generously.

### Named Rules

**The Invariant Gutter Rule.** `px-6 md:px-8 lg:px-16` on every section wrapper. Left edges must align down the entire page — a section that indents differently breaks the instrument-panel read more than any color mistake.

## Elevation & Depth

This system is **flat by default**. Depth is tonal: `#050506` recedes, `#0E0E10` advances, a hairline border separates. Shadows are the exception, not the vocabulary — roughly forty utilities across the whole codebase.

### Shadow Vocabulary

- **Menu** (`shadow-2xl`): Header dropdowns and popovers only, where a panel genuinely floats over content.
- **Action** (`shadow-lg`): Primary CTA buttons, giving the one interactive element on a section slight physical presence.

### Named Rules

**The Earned Shadow Rule.** A shadow means "this element is above the page plane" — a menu, a dialog, a button you press. A card sitting in a grid is not above the page; it gets `#0E0E10` and a hairline instead.

**The No Halo Rule.** Shadows carry offset and blur. A zero-offset colored glow around an emerald element is decoration, and this system does not use it.

## Shapes

Soft-rectangular, consistently. Radius scales with the element's size rather than with its importance:

- **`rounded-lg`** (10px, 145 uses): Small controls, inputs, badges.
- **`rounded-xl`** (12px, 183 uses): Buttons and medium panels — the default.
- **`rounded-2xl`** (16px, 141 uses): Cards, dropdown menus, large containers.
- **`rounded-full`** (158 uses): Pills, avatars, status dots, icon chips.

Borders are 1px at 10% white. A colored or thicker border is not part of this language.

**The Hairline Signature.** The system's one distinctive structural element: a 1px horizontal rule that fades to transparent at both ends (`bg-gradient-to-r from-transparent via-white/10 to-transparent`), used to separate stacked sections. It reads as an instrument seam rather than a divider line. It currently lives as a page-local `Hairline()` function inside `security.tsx` and is not shared — promoting it to the component library is the obvious next extraction.

## Components

### Buttons

- **Shape:** Softly rounded (`rounded-xl`, 12px)
- **Primary:** Signal Green fill with **black** text, `px-7 py-6`, `text-base font-semibold`, `transition-colors duration-200`. The recipe `bg-emerald-400 hover:bg-emerald-300 text-black … font-semibold rounded-xl` appears across 32 files — this is the system's most-repeated element. Black on emerald is deliberate; white would fail contrast at this brightness.
- **Hover / Focus:** Lightens to Signal Bright (`hover:bg-emerald-300`) over 200ms. Focus uses the global ring.
- **Ghost:** `border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10`, white text, same padding and radius. Note the **2px** stroke — the ghost button is the one place this system doubles a border. Used for the secondary action beside a primary CTA.

### Cards / Containers

- **Corner Style:** `rounded-2xl` (16px)
- **Background:** Surface (`#0A0A0C`), or transparent over Void with a hairline border
- **Shadow Strategy:** None — see The Earned Shadow Rule
- **Border:** 1px `border-white/10`, resolving to `border-white/20` on hover for interactive cards
- **Internal Padding:** `p-6` to `p-8`, scaling up at `sm:`

### Navigation

- Fixed dark bar over Void. Nav items are `text-white/60`, resolving to full white on hover. Dropdown mega-menus use Surface at `rounded-2xl` with a hairline border, a rotated square notch pointing at the trigger, and `shadow-2xl`. Mobile collapses to a full-height sheet carrying the same link set.

### Focus Ring (global)

Defined once in `index.css`, not per component:

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #050506, 0 0 0 4px rgba(16, 185, 129, 0.5);
  border-radius: 4px;
}

```

A dark inner ring separates the element from a translucent emerald outer ring, so focus stays visible on both Void and Surface. **Never add `focus:outline-none` to a component without providing a replacement** — the global ring is the system's answer, and components should inherit it rather than restate it.

### Text Selection (global)

`::selection` is emerald at 28% with white text. Browser defaults are themed rather than inherited; this is part of the finish.

## Do's and Don'ts

### Do:

- **Do** use `px-6 md:px-8 lg:px-16` on every section wrapper so left edges align down the page.
- **Do** express secondary text as `text-white/60` and let opacity do the tinting.
- **Do** keep the accent at or under 10% of a screen's area. Its rarity is what makes it mean something.
- **Do** reach for a hairline border (`border-white/10`) before reaching for a shadow.
- **Do** set section rhythm with `py-24 md:py-32`.
- **Do** use `font-semibold` for headings and reserve `font-bold` for genuine emphasis.
- **Do** let the global `:focus-visible` ring handle keyboard focus.

### Don't:

- **Don't** introduce a fourth background tone. Void, Band, Surface — anything deeper is a translucent white overlay.
- **Don't** use gray text values (`text-zinc-400`, `text-gray-500`) — they desynchronize from the surface behind them.
- **Don't** apply gradients to text. Emphasis comes from weight, size, or the accent color.
- **Don't** place a decorative uppercase kicker above a section heading. The tracked label marks a group, not a section announcement.
- **Don't** add `focus:outline-none` without an explicit replacement ring.
- **Don't** put a shadow on a card that sits in the page flow.
- **Don't** compensate for the 15px root by bumping every Tailwind size up a step.
