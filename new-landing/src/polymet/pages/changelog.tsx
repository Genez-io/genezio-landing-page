import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, ArrowUpRightIcon, LinkIcon } from "lucide-react";

import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  ChangelogEntry,
  ChangelogTag,
  formatChangelogDate,
  formatChangelogRailDate,
  formatChangelogYear,
  getChangelogEntries,
} from "@/lib/changelog";

const entries = getChangelogEntries();

const CHANGELOG_TITLE = "Genezio Changelog: Product Updates & Release Notes";
const CHANGELOG_DESCRIPTION =
  "Read the newest platform updates and product features. Check the changelog to see what is new.";

const changelogItemList = {
  "@type": "ItemList",
  itemListElement: entries.map((entry, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: entry.title,
    url: `https://genezio.com/changelog/#${entry.slug}`,
  })),
};

const FILTERS: ("All" | ChangelogTag)[] = [
  "All",
  "New",
  "Improved",
  "Fixed",
  "API",
  "Integrations",
];

/* Tag badge. Emerald is the single brand accent, so only the tags that mean
   "something appeared" get it; the rest stay neutral to keep releases scannable. */
function TagBadge({ tag }: { tag: ChangelogTag }) {
  const accented = tag === "New";

  const tone = accented
    ? "bg-emerald-400/10 border-emerald-400/25 text-emerald-300"
    : "bg-white/[0.06] border-white/10 text-white/70";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${tone}`}
    >
      {tag}
    </span>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
          : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function ReleaseEntry({ entry }: { entry: ChangelogEntry }) {
  return (
    <article
      id={entry.slug}
      className="relative scroll-mt-28 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-14"
    >
      {/* Date rail — the day shows when the entry knows it; see changelog.ts */}
      <div className="mb-6 lg:mb-0">
        <div className="lg:sticky lg:top-28">
          <time
            dateTime={entry.date}
            className="block text-sm font-semibold text-white"
          >
            <span className="lg:hidden">{formatChangelogDate(entry)}</span>
            <span className="hidden lg:block lg:text-2xl lg:font-semibold lg:tracking-[-0.02em]">
              {formatChangelogRailDate(entry)}
            </span>
          </time>
          <div className="mt-1 hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/35 lg:block">
            {formatChangelogYear(entry.date)}
          </div>
          <a
            href={`#${entry.slug}`}
            aria-label={`Link to ${entry.title}`}
            className="mt-4 hidden items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-emerald-400 lg:inline-flex"
          >
            <LinkIcon className="h-3.5 w-3.5" />
            Copy link
          </a>
        </div>
      </div>

      {/* Timeline rule + release body */}
      <div className="relative pb-16 md:pb-20 lg:border-l lg:border-white/10 lg:pl-14">
        {/* Marker on the rule, matching the square bullet used across the site */}
        <span className="absolute -left-[3.5px] top-2 hidden h-1.5 w-1.5 rounded-[2px] bg-emerald-400 lg:block" />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {entry.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-semibold leading-snug tracking-[-0.02em] text-white md:text-3xl">
          <a
            href={`#${entry.slug}`}
            className="transition-colors hover:text-emerald-400"
          >
            {entry.title}
          </a>
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {entry.summary}
        </p>

        {entry.image && (
          <img
            src={entry.image.src}
            alt={entry.image.alt}
            loading="lazy"
            className="mt-8 w-full rounded-2xl border border-white/10"
          />
        )}

        <div className="mt-10 space-y-10">
          {entry.highlights.map((highlight) => (
            <div key={highlight.title}>
              <h3 className="mb-2.5 text-lg font-semibold text-white">
                {highlight.title}
              </h3>

              <p className="max-w-2xl leading-relaxed text-white/60">
                {highlight.description}
              </p>

              {highlight.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {highlight.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex max-w-2xl gap-3 leading-relaxed text-white/55"
                    >
                      <span className="mt-[0.6rem] h-1 w-1 flex-shrink-0 rounded-[1px] bg-emerald-400/70" />
                      <span>
                        <LabelledItem text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {highlight.image && (
                <img
                  src={highlight.image.src}
                  alt={highlight.image.alt}
                  loading="lazy"
                  className="mt-6 w-full rounded-xl border border-white/10"
                />
              )}

              {highlight.link && (
                <Link
                  to={highlight.link.href}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {highlight.link.label}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {entry.otherUpdates && entry.otherUpdates.length > 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0A0A0C] p-6">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Other updates
            </div>
            <ul className="space-y-2.5">
              {entry.otherUpdates.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-white/55"
                >
                  <span className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-[1px] bg-white/30" />
                  <span>
                    <LabelledItem text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

/** Renders "Benefit: detail" with the benefit in bold; plain text otherwise. */
function LabelledItem({ text }: { text: string }) {
  const match = text.match(/^([^:]{2,80}):\s(.+)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <strong className="font-semibold text-white/85">{match[1]}:</strong>{" "}
      {match[2]}
    </>
  );
}

export function Changelog() {
  const [activeFilter, setActiveFilter] = useState<"All" | ChangelogTag>("All");

  const visibleEntries = useMemo(
    () =>
      activeFilter === "All"
        ? entries
        : entries.filter((entry) => entry.tags.includes(activeFilter)),
    [activeFilter],
  );

  // Only offer filters that actually match something.
  const availableFilters = useMemo(
    () =>
      FILTERS.filter(
        (filter) =>
          filter === "All" ||
          entries.some((entry) => entry.tags.includes(filter)),
      ),
    [],
  );

  const latest = entries[0];

  return (
    <>
      <PolymetSEO
        title={CHANGELOG_TITLE}
        description={CHANGELOG_DESCRIPTION}
        canonicalPath="/changelog/"
        pageType="CollectionPage"
        mainEntity={changelogItemList}
      />

      <div className="min-h-screen bg-[#050506]">
        {/* Hero */}
        <section className="px-6 pt-32 pb-12 md:px-8 md:pb-16 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <HeroEyebrow className="mx-auto mb-6 w-fit">
              Product updates
            </HeroEyebrow>

            <h1 className="mb-5 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
              Genezio <span className="text-emerald-400">Changelog</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/60 md:text-xl">
              Every capability we have shipped — from the first evaluation
              agents to AI Share of Voice, the Fact Checker and enterprise-grade
              coverage.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/changelog.xml"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
              >
                Subscribe to updates
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {latest && (
                <a
                  href={`#${latest.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-colors hover:border-emerald-400/40"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Latest: {formatChangelogDate(latest)}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 md:px-8 lg:px-16">
          <div className="mx-auto max-w-5xl border-b border-white/10 pb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {availableFilters.map((filter) => (
                <FilterChip
                  key={filter}
                  label={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Releases */}
        <section className="px-6 pt-16 pb-24 md:px-8 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-5xl">
            {visibleEntries.length === 0 ? (
              <p className="py-16 text-center text-white/50">
                No releases tagged “{activeFilter}” yet.
              </p>
            ) : (
              visibleEntries.map((entry) => (
                <ReleaseEntry key={entry.slug} entry={entry} />
              ))
            )}
          </div>
        </section>

        <GenezioCtaSection />
      </div>
    </>
  );
}
