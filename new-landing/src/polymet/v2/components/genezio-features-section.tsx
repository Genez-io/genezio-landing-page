import { PieChartIcon, MessageCircleIcon, UsersIcon, LinkIcon, BellIcon } from "lucide-react";

export function GenezioFeaturesSection() {
  const features = [
    {
      icon: PieChartIcon,
      title: "The AI Rank Tracker",
      headline: 'Convert more Leads by Improving Your "Share of Voice" in AI.',
      description:
        "Don't guess. Know exactly how often your brand is mentioned across ChatGPT, Perplexity, Gemini, Claude, Google AI Overview, and Google AI Mode compared to your competitors.",
      visual: "pie-chart",
    },
    {
      icon: MessageCircleIcon,
      title: "Multi-Turn Simulation Engine",
      headline: "Get Actionable Insights from Real Conversations.",
      description:
        "Go beyond one-shot prompts. Genezio runs full, realistic multi-turn dialogues to see how AI handles follow-up questions about your pricing, features, and bad reviews.",
      visual: "conversation",
    },
    {
      icon: UsersIcon,
      title: "Persona-Based Analysis",
      headline: "See what a CTO sees vs. what a Student sees.",
      description:
        "AI answers change based on the user. Test your visibility across specific personas, from \"Enterprise B2B Buyer\" to \"Technical Developer.\"",
      visual: "personas",
    },
    {
      icon: LinkIcon,
      title: "Citation Intelligence",
      headline: "Find the Best Citation to Increase Your Visibility in AI Search.",
      description:
        "Identify which sources AI engines cite most (TechCrunch, Forbes, or your own blog). Spot missing citations and \"hallucinated\" bad data before it hurts your sales.",
      visual: "citations",
    },
    {
      icon: BellIcon,
      title: "Monitor Citations",
      headline: "Be Aware when Your Content is Cited by AI Engines",
      description:
        "Don't just track the web, track your work. Add your own specific URLs (new blog posts, press releases, or help docs) to monitor exactly when AI engines ingest your content and how they use it to answer user questions.",
      benefit:
        "Prove the ROI of your content marketing by showing how your articles drive AI recommendations.",
      visual: "monitoring",
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                dominate AI Search
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to track, analyze, and optimize your brand's presence across
              all major AI engines.
            </p>
          </div>

          {/* Features grid */}
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-muted/50">
                      <Icon className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium">{feature.title}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {feature.headline}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {feature.benefit && (
                      <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-purple-500">💡 Benefit:</span> {feature.benefit}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <FeatureVisual type={feature.visual} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "pie-chart") {
    return (
      <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl">
        <div className="aspect-square max-w-sm mx-auto relative">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Pie chart segments */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgb(168 85 247)"
              strokeWidth="40"
              strokeDasharray="251 251"
              transform="rotate(-90 100 100)"
              className="drop-shadow-[0_0_12px_rgb(168_85_247)]"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="40"
              strokeDasharray="126 251"
              strokeDashoffset="-251"
              transform="rotate(-90 100 100)"
              opacity="0.6"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="40"
              strokeDasharray="63 251"
              strokeDashoffset="-377"
              transform="rotate(-90 100 100)"
              opacity="0.3"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">58%</div>
              <div className="text-xs text-muted-foreground">Your Brand</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>Your Brand (58%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 opacity-60" />
            <span>Competitor A (25%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted opacity-30" />
            <span>Others (17%)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "conversation") {
    return (
      <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl space-y-4">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <p className="text-sm">What's the best CRM for enterprise?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-lg border border-border bg-muted/50 px-4 py-2">
            <p className="text-sm text-muted-foreground">
              Based on features and reviews,{" "}
              <span className="font-semibold text-foreground">Your Brand</span> is highly
              recommended...
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <p className="text-sm">How does it compare to Competitor X?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-lg border border-border bg-muted/50 px-4 py-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Your Brand</span> offers better
              integration options and pricing flexibility...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "personas") {
    const personas = ["Young Professional", "B2B Buyer", "Developer", "Journalist"];
    return (
      <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl">
        <div className="grid grid-cols-2 gap-4">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-muted/30 p-4 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mb-3">
                {persona[0]}
              </div>
              <div className="text-sm font-medium mb-2">{persona}</div>
              <div className="text-xs text-muted-foreground">Visibility: {85 - i * 10}%</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "citations") {
    const sources = [
      { name: "TechCrunch", count: 24, color: "purple-500" },
      { name: "Forbes", count: 18, color: "blue-500" },
      { name: "Your Blog", count: 31, color: "cyan-500" },
      { name: "Industry News", count: 12, color: "muted" },
    ];
    return (
      <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl space-y-4">
        <div className="text-sm font-semibold mb-4">Top Citation Sources</div>
        {sources.map((source, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>{source.name}</span>
              <span className="font-semibold">{source.count}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-${source.color} rounded-full`}
                style={{ width: `${(source.count / 31) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "monitoring") {
    return (
      <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl space-y-4">
        <div className="text-sm font-semibold mb-4">Recent Citations</div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium mb-1">Your blog post cited by ChatGPT</div>
              <div className="text-xs text-muted-foreground truncate">blog.yourbrand.com/article-{i}</div>
              <div className="text-xs text-muted-foreground mt-1">{i} hours ago</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

