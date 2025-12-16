import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  SparklesIcon,
  UsersIcon,
  HeadphonesIcon,
} from "lucide-react";

export function GenezioAgencyPlans() {
  return (
    <section className="py-20 px-6 bg-[#050506]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans for Agencies
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Manage multiple clients and deliver exceptional AI insights at scale
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Agency Growth Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="mb-8">
              <div className="text-sm text-blue-400 font-semibold mb-2">
                AGENCY GROWTH
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$999</span>
                <span className="text-white/60">/month</span>
              </div>
              <p className="text-white/60 mb-8">
                Ideal for growing agencies managing multiple client projects and
                new business pitches
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Agency Workspace Management
                  </div>
                  <div className="text-sm text-white/60">
                    Centralized dashboard to manage all clients
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    1 Active Client Workspace
                  </div>
                  <div className="text-sm text-white/60">
                    Full-featured workspace for your main client
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    10 Trial Workspaces per month
                  </div>
                  <div className="text-sm text-white/60">
                    Perfect for pitches and new client demos
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    100 Prompt Volume searches/month
                  </div>
                  <div className="text-sm text-white/60">
                    Analyze search volume trends
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Add-ons available
                  </div>
                  <div className="text-sm text-white/60">
                    Scale with additional workspaces as needed
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-medium">
              Get Started
            </Button>
          </div>

          {/* Agency Enterprise Plan */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-2 border-blue-500/50 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full">
              RECOMMENDED
            </div>
            <div className="mb-8">
              <div className="text-sm text-blue-400 font-semibold mb-2">
                AGENCY ENTERPRISE
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <p className="text-white/60 mb-8">
                Tailored solutions for agencies managing dozens of clients and
                global brands
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Agency Workspace Management
                  </div>
                  <div className="text-sm text-white/60">
                    Advanced multi-client dashboard
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SparklesIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Tailored Client & Trial Workspaces
                  </div>
                  <div className="text-sm text-white/60">
                    Custom workspace allocation based on your needs
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Dedicated Agency Partner
                  </div>
                  <div className="text-sm text-white/60">
                    Personal success manager for your agency
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SparklesIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Go-to-Market Support
                  </div>
                  <div className="text-sm text-white/60">
                    Strategic guidance for client acquisition
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeadphonesIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Premium Slack Support
                  </div>
                  <div className="text-sm text-white/60">
                    Priority support via dedicated Slack channel
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">
                    Custom Integrations
                  </div>
                  <div className="text-sm text-white/60">
                    Tailored integrations with your tech stack
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-base font-medium">
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <SparklesIcon className="w-5 h-5 text-blue-400" />

            <span className="text-white/80">
              All agency plans include full brand plan features for each
              workspace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
