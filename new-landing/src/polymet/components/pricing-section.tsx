import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  MessageSquareIcon,
  BarChart3Icon,
  TrendingUpIcon,
  HeadphonesIcon,
  CodeIcon,
} from "lucide-react";

export function PricingSection() {
  const [brandAnalysisOpen, setBrandAnalysisOpen] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);
  const [brandWebsite, setBrandWebsite] = useState("");
  const [brandEmail, setBrandEmail] = useState("");
  const [salesMessage, setSalesMessage] = useState("");
  const [salesEmail, setSalesEmail] = useState("");

  const handleBrandAnalysisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle brand analysis form submission
    console.log("Brand Analysis Request:", { brandWebsite, brandEmail });
    setBrandAnalysisOpen(false);
    setBrandWebsite("");
    setBrandEmail("");
  };

  const handleContactSalesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact sales form submission
    console.log("Contact Sales Request:", { salesMessage, salesEmail });
    setContactSalesOpen(false);
    setSalesMessage("");
    setSalesEmail("");
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ideal Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade solutions designed for growing businesses ready to
            optimize their AI investments
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Brand Presence Tool */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-blue-300 dark:hover:border-blue-600">
            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center">
                  <BarChart3Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Brand Presence Tool
                </h3>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    $499
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">
                    per month
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400">
                  Boost your brand presence across LLMs like ChatGPT, Claude,
                  and Gemini
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Monitor brand presence across ChatGPT, Claude, and Gemini",
                  "Ensure consistent messaging across platforms",
                  "Optimize for AI-driven discovery",
                  "Real-time brand mention tracking",
                  "Monthly comprehensive reports",
                  "Competitive analysis insights",
                ].map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />

                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Dialog
                  open={brandAnalysisOpen}
                  onOpenChange={setBrandAnalysisOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0">
                      Get Free Brand Analysis Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        Get Your Free Brand Analysis Report
                      </DialogTitle>
                      <DialogDescription>
                        Enter your website and email to receive a comprehensive
                        brand presence analysis.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleBrandAnalysisSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="website">Website URL</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={brandWebsite}
                          onChange={(e) => setBrandWebsite(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={brandEmail}
                          onChange={(e) => setBrandEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        style={{ backgroundColor: "#2563eb" }}
                      >
                        Get My Free Report
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Dialog
                  open={contactSalesOpen}
                  onOpenChange={setContactSalesOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full py-3 text-lg font-semibold bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      Contact Us
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Tell us about your needs and we'll get back to you with
                        a custom solution.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleContactSalesSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message</Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us about your chatbot optimization needs..."
                          value={salesMessage}
                          onChange={(e) => setSalesMessage(e.target.value)}
                          required
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email Address</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={salesEmail}
                          onChange={(e) => setSalesEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Full Platform */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>

            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center">
                  <StarIcon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Full Platform Access
                </h3>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    Custom
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">
                    pricing
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400">
                  Complete chatbot optimization platform with all capabilities
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Advanced AI testing scenarios",
                  "Real-time monitoring & alerts",
                  "Custom compliance monitoring",
                  "Lead generation optimization",
                  "Advanced analytics & reporting",
                  "Priority support & training",
                ].map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />

                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Dialog
                open={contactSalesOpen}
                onOpenChange={setContactSalesOpen}
              >
                <DialogTrigger asChild>
                  <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0">
                    Contact Sales
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Contact Our Sales Team</DialogTitle>
                    <DialogDescription>
                      Tell us about your needs and we'll get back to you with a
                      custom solution.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={handleContactSalesSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your chatbot optimization needs..."
                        value={salesMessage}
                        onChange={(e) => setSalesMessage(e.target.value)}
                        required
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sales-email">Email Address</Label>
                      <Input
                        id="sales-email"
                        type="email"
                        placeholder="your@email.com"
                        value={salesEmail}
                        onChange={(e) => setSalesEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      style={{ backgroundColor: "#9333ea" }}
                    >
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
