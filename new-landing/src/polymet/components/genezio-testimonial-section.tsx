import { LinkedinIcon, QuoteIcon } from "lucide-react";
import bcrLogo from "../../assets/bcr.svg";

export function GenezioTestimonialSection() {
    return (
        <section className="relative py-20 md:py-32 bg-[#050506]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Main Testimonial Card */}
                <div className="relative bg-gradient-to-br from-[#0E0E10] to-[#1A1A1F] border border-white/5 rounded-3xl overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative p-8 md:p-16 mt-10 md:mt-0">
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
                                        "Creating powerful brands that customers trust is changing
                                        and being present in AI conversations is now a strategic
                                        part of that change.
                                    </p>

                                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                                        With Genezio, brand presence in AI conversations on key
                                        topics grew for BCR by{" "}
                                        <span className="text-blue-400 font-semibold">
                                            double digits in just a few weeks
                                        </span>
                                        . That visibility matters because it ensures that BCR
                                        clients receive accurate and consistent answers. And that
                                        consistency builds trust, because customers get clear,
                                        reliable guidance when it truly counts."
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
                                                src={bcrLogo}
                                                alt="BCR - Banca Comercială Română"
                                                className="h-10 w-auto"
                                            />

                                        </div>
                                    </div>

                                    {/* Person Info */}
                                    <div className="flex items-start gap-4">
                                      <a
                                        href="https://www.linkedin.com/in/ionutstanimir/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 group"
                                      >
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                                          <img
                                            src="/images/ionut-stanimir.webp"
                                            alt="I. Stanimir"
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                      </a>

                                        <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-lg font-semibold text-white">
                          I. Stanimir
                        </p>
                        <a
                          href="https://www.linkedin.com/in/ionutstanimir/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-blue-400 transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">
                        Director of Marketing and Communication
                      </p>
                    </div>
                                    </div>
                                </div>

                                {/* Bottom Section - Metric */}
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <div className="inline-flex flex-col items-start px-6 py-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                        <p className="text-3xl font-bold text-blue-400 mb-1">2x</p>
                                        <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                                            Growth in Weeks
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
