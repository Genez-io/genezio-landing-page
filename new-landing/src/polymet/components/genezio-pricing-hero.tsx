import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SearchIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  BarChartIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "lucide-react";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";

const blockedProviders = [
  "gmail",
  "googlemail",
  "yahoo",
  "outlook",
  "hotmail",
  "icloud",
  "aol",
  "protonmail",
  "mail.com",
  "zoho",
  "wacold",
  "zudpck",
  "email",
];

function isCompanyEmail(email: string): boolean {
  if (!email || !email.includes("@")) return false;
  const domain = email.split("@")[1].toLowerCase();

  for (const provider of blockedProviders) {
    const p = provider.toLowerCase();
    if (
      domain === p ||
      domain.endsWith("." + p) ||
      domain.startsWith(p + ".")
    ) {
      return false;
    }
  }

  return true;
}

interface GenezioPricingHeroProps {
  selectedAudience: "brands" | "agencies";
  onAudienceChange: (audience: "brands" | "agencies") => void;
}
const brandFeatures = [
  {
    icon: SearchIcon,
    title: "Brand Presence Monitoring",
    description:
      "Track how your brand appears across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews",
  },
  {
    icon: TrendingUpIcon,
    title: "Actionable Optimization Insights",
    description:
      "Get data-driven recommendations to improve your AI-driven brand discovery and visibility",
  },
  {
    icon: BarChartIcon,
    title: "Brand Perception Analysis",
    description:
      "Understand how AI perceives and positions your brand, including sentiment analysis and key attributes highlighted in responses",
  },
  {
    icon: MessageSquareIcon,
    title: "Persona-Based Scenario Generation",
    description:
      "Generate multi-turn conversations from the perspective of different user personas with dedicated scenarios to see how your brand performs across various customer journeys",
  },
  {
    icon: ShieldIcon,
    title: "Competitive Positioning Intelligence",
    description:
      "See how you stack up against competitors in your industry and identify opportunities to differentiate your brand in AI responses",
  },
];

const agencyFeatures = [
  {
    icon: SearchIcon,
    title: "All Features for Brands",
    description:
      "Access to all brand monitoring features including AI platform tracking, optimization insights, perception analysis, scenario testing, and competitive intelligence",
  },
  {
    icon: TrendingUpIcon,
    title: "Agency Workspace Management",
    description:
      "Manage multiple client workspaces with team collaboration tools, role-based permissions, and centralized billing for seamless agency operations",
  },
  {
    icon: BarChartIcon,
    title: "One Dashboard to Monitor All Clients",
    description:
      "Track all your clients' brands from a single unified dashboard with cross-client analytics, comparative insights, and portfolio-wide performance metrics",
  },
];

export function GenezioPricingHero({
  selectedAudience,
  onAudienceChange,
}: GenezioPricingHeroProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }

    if (!isCompanyEmail(formData.email)) {
      alert("Please use your company email address.");
      return;
    }

    if (!formData.company) {
      alert("Please enter your company name.");
      return;
    }

    if (!formData.interest) {
      alert("Please select your interest.");
      return;
    }

    const message = `Interest in: ${formData.interest}\n${formData.message}`;
    // Handle form submission
    const data = JSON.stringify({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: message,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://1e1bf19f-113b-4eb6-b80a-75862aa6ff01.us-east-1.cloud.genez.io/demo",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    setIsSubmitting(true);

    await axios
      .request(config)
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsSubmitting(false);
  };

  const features = selectedAudience === "brands" ? brandFeatures : agencyFeatures;

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden bg-[#0A0A0B]">
      <Helmet>
        <title>Genezio Pricing: Flexible plans for your brand journey</title>
        <meta
          name="description"
          content="Get flexible plans for Genezio's Brand Presence platform. Track & optimize your AI brand visibility across ChatGPT, Claude, Gemini & more. Request a demo!"
        />
      </Helmet>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mt-8 md:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Flexible plans for your brand journey
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Get in touch to find the right plan for your team — and grow as your AI brand visibility
            expands.
          </p>
        </div>

        {/* Audience Toggle */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/10">
            <button
              onClick={() => onAudienceChange("brands")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "brands"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => onAudienceChange("agencies")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "agencies"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Agencies
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Column - What's Included */}
          <div className="space-y-6 md:space-y-8">
            {/* Custom Pricing Card - Moved to top */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                Custom pricing
              </h3>
              <p className="text-lg md:text-xl font-semibold text-blue-400 text-center mb-2">
                {selectedAudience === "brands" ? "Starting at 499€" : "Starting at 999€"}
              </p>
              <p className="text-sm md:text-base text-white/60 text-center">
                {selectedAudience === "brands"
                  ? "Everything you need to dominate AI search results"
                  : "Everything your agency needs to deliver exceptional AI presence for all clients"}
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
              What's Included
            </h2>
            <div className="space-y-4 md:space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-sm md:text-base text-white/60 mb-6 md:mb-8">
              Complete the form below to request a custom offer or schedule a personalized demo of
              our platform
            </p>

            {isSubmitted ? (
              <div className="text-left bg-green-600/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Thank you for your submission!
                </h3>
                <p className="text-white/60">
                  We appreciate your interest and will get back to you within 24 hours.
                </p>
              </div>
            ) : null}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Work Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company Name *
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-white mb-2">
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-md px-3 focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none"
                >
                  <option value="" className="bg-[#0A0A0B] text-white/60">
                    Select an option
                  </option>
                  <option value="custom-offer" className="bg-[#0A0A0B] text-white">
                    Getting a custom offer
                  </option>
                  <option value="demo" className="bg-[#0A0A0B] text-white">
                    Scheduling a demo
                  </option>
                  <option value="both" className="bg-[#0A0A0B] text-white">
                    Both offer and demo
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Additional Information (optional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs, team size, or any specific questions you have..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
              >
                Submit Request
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-white/50 text-center">
                We'll get back to you within 24 hours to discuss your needs.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
