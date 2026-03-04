import { AlertCircleIcon, MessageSquareIcon, SearchIcon, EyeOffIcon, TrendingDownIcon, BotIcon } from "lucide-react";

export function GenezioProblemsSection() {
  const queries = [
    { text: "What is the best CRM for enterprise?", user: "CTO" },
    { text: "Compare [Your Brand] vs [Competitor].", user: "Buyer" },
    { text: "Is [Your Brand] legit?", user: "Customer" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm">
              <AlertCircleIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">The Hidden Problem</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Win every search. <br />
              From{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                traditional SEO to AI Discovery
              </span>
            </h2>
          </div>

          {/* Visual split comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Google Search - Success */}
            <div className="relative group">
              <div className="rounded-2xl border border-border bg-card p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <SearchIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Google Search</div>
                    <div className="text-xs text-muted-foreground">You're visible ✓</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full w-full" />
                  <div className="h-3 bg-muted rounded-full w-5/6" />
                  <div className="h-3 bg-muted rounded-full w-4/6" />
                </div>
              </div>
            </div>

            {/* AI Chat - Problem */}
            <div className="relative group">
              <div className="rounded-2xl border border-border bg-card p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <EyeOffIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">AI Chat</div>
                    <div className="text-xs text-muted-foreground">You're invisible ✗</div>
                  </div>
                </div>
                <div className="space-y-2 opacity-30">
                  <div className="h-3 bg-muted rounded-full w-full" />
                  <div className="h-3 bg-muted rounded-full w-5/6" />
                  <div className="h-3 bg-muted rounded-full w-4/6" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats callout */}
          <div className="mb-12 relative">
            <div className="relative p-8 rounded-2xl border border-border bg-card backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <TrendingDownIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    60% of searches
                  </div>
                  <p className="text-lg text-muted-foreground">
                    now end without a click. Your customers are asking AI agents:
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Query examples - Chat interface style */}
          <div className="space-y-3">
            {queries.map((query, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-gradient-to-r from-card to-muted/20 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <BotIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs text-muted-foreground">{query.user} asks:</div>
                    <p className="text-foreground font-medium">{query.text}</p>
                  </div>
                  <MessageSquareIcon className="w-5 h-5 text-muted-foreground/50 group-hover:text-purple-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

