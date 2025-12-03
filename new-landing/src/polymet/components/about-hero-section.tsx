import { Button } from "@/components/ui/button";
import { MessageSquareIcon, TrendingUpIcon, SparklesIcon } from "lucide-react";

export function AboutHeroSection() {
    return (
        <section className="relative bg-[#050506] pt-40 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                        <SparklesIcon className="w-4 h-4 text-blue-400" />

                        <span className="text-sm text-blue-400 font-medium">
                            About Genezio
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        The New Marketing
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Currency is Conversation
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
                        style={{
                            paddingRight: "7px",
                            paddingLeft: "7px",
                            marginRight: "25px",
                            marginLeft: "25px",
                        }}
                    >
                        Genezio is an AI platform for marketing teams, focused on optimizing
                        brand presence within AI-driven conversations. Genezio
                        Conversational Optimization Platform runs multi-turn dialogues to
                        measure how often and how meaningfully a brand appears in
                        intent-driven discussions, distinguishing between general visibility
                        and specific model beliefs. It delivers actionable insights, helping
                        companies strengthen their positioning within critical
                        customer-journey conversations.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={() => window.location.href = "/"}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Visual indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
                            <MessageSquareIcon className="w-8 h-8 text-blue-400" />

                            <div className="text-2xl font-bold text-white">AI-Driven</div>
                            <div className="text-sm text-white/60">Conversation Analysis</div>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
                            <TrendingUpIcon className="w-8 h-8 text-purple-400" />

                            <div className="text-2xl font-bold text-white">Real-Time</div>
                            <div className="text-sm text-white/60">Brand Visibility</div>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
                            <SparklesIcon className="w-8 h-8 text-blue-400" />

                            <div className="text-2xl font-bold text-white">Actionable</div>
                            <div className="text-sm text-white/60">Insights & Benchmarks</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
