import { CheckIcon, MinusIcon, XIcon } from "lucide-react";

type Cell = "yes" | "partial" | "no";

export function GenezioHomeComparison() {
  const cols = ["Genezio", "Legacy SEO suites", "Point AEO tools"];
  const rows: { label: string; cells: Cell[] }[] = [
    { label: "All answer engines (ChatGPT, Gemini, Perplexity, AI Overviews, Copilot)", cells: ["yes", "no", "partial"] },
    { label: "Recommendation share, not just mentions", cells: ["yes", "no", "partial"] },
    { label: "Realistic multi-turn conversations, per persona & market", cells: ["yes", "no", "partial"] },
    { label: "Content Analysis, crawlability & citable-content", cells: ["yes", "partial", "no"] },
    { label: "Content Hub, data-backed briefs & generation", cells: ["yes", "no", "partial"] },
    { label: "In-Chat Shopping, AI product intelligence", cells: ["yes", "no", "no"] },
    { label: "Group-level portfolio reporting", cells: ["yes", "partial", "no"] },
    { label: "Enterprise security, SOC 2 / SSO / DPA & dedicated AM", cells: ["yes", "partial", "no"] },
  ];

  const Icon = ({ v }: { v: Cell }) =>
    v === "yes" ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
        <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
      </span>
    ) : v === "partial" ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
        <MinusIcon className="h-3.5 w-3.5 text-white/40" />
      </span>
    ) : (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.03] border border-white/5">
        <XIcon className="h-3.5 w-3.5 text-white/25" />
      </span>
    );

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            The comparison
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            How is Genezio different from the tools you already have?
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-5">
            SEO suites measure the old web. Point tools cover a slice of AI.
            Genezio is the enterprise platform for the whole answer-engine
            channel.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 w-[46%]" />
                {cols.map((c, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center text-sm font-bold ${
                      i === 0 ? "text-emerald-400" : "text-white/60"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-t border-white/10"
                >
                  <td className="p-4 text-sm text-white/80 leading-snug">
                    {row.label}
                  </td>
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`p-4 text-center ${
                        ci === 0 ? "bg-emerald-500/[0.04]" : ""
                      }`}
                    >
                      <div className="flex justify-center">
                        <Icon v={cell} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
