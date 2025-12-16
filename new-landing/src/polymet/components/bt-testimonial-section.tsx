import { QuoteIcon } from "lucide-react";
import btLogo from "../../assets/bt.svg";

export function BtTestimonialSection() {
    return (
        <section className="relative py-20 md:py-32 bg-[#050506]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Main Testimonial Card */}
                <div className="relative bg-gradient-to-br from-[#0E0E10] to-[#1A1A1F] border border-white/5 rounded-3xl overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative p-8 md:p-16">
                        {/* Quote Icon and Tag */}
                        <div className="flex items-center gap-4 mb-8">
                            <QuoteIcon className="w-12 h-12 text-blue-500/20" />

                            <p className="text-sm font-medium text-white/40 uppercase tracking-wider">
                                Customer Success Story
                            </p>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16">
                            {/* Testimonial Text */}
                            <div>
                                <blockquote className="space-y-6">
                                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                                        "As we focus on advancing the strategic AI adoption roadmap,
                                        our priority remains the customer. Genezio helps us live our
                                        values at scale during this transformation.
                                    </p>

                                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                                        By making our marketing chatbots consistently accurate and
                                        relevant, the platform strengthens the trust our customers
                                        place in Banca Transilvania and reflects our commitment to{" "}
                                        <span className="text-blue-400 font-semibold">
                                            responsibility, ethics, and respect
                                        </span>{" "}
                                        in every digital interaction."
                                    </p>
                                </blockquote>
                            </div>

                            {/* Attribution Sidebar */}
                            <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12">
                                {/* Top Section - Logo & Person */}
                                <div className="space-y-8">
                                    {/* Company Logo */}
                                    <div>
                                        <div className="inline-flex items-center rounded-xl shadow-lg">
                                            <img
                                                src={btLogo}
                                                alt="Banca Transilvania"
                                                className="h-20 w-auto"
                                            />
                                        </div>
                                    </div>

                                    {/* Person Info */}
                                    <div>
                                        <p className="text-lg font-semibold text-white mb-2">
                                            Ömer Tetik
                                        </p>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            Chief Executive Officer
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Section - Metric */}
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <div className="inline-flex flex-col items-start px-6 py-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                        <p className="text-3xl font-bold text-blue-400 mb-1">
                                            +42%
                                        </p>
                                        <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                                            Conversion Rate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
