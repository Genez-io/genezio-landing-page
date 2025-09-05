import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckIcon,
  BarChart3Icon,
  TrendingUpIcon,
  MessageSquareIcon,
  SearchIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "lucide-react";
import axios from "axios";
import { BrandPresencePricingSection } from "./brand-presence-pricing-section";

const STORAGE_KEY = "brandPopupDismissed";

const BrandPopup = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Check if dismissed before
    const dismissed = localStorage.getItem(STORAGE_KEY);

    if (!dismissed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 10000); // open after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen) {
      // Save dismissal to localStorage
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.TargetEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    console.log(" Request:", formData);
    // Handle form submission
    const data = JSON.stringify({
      email: formData.email,
      website: formData.website,
      message: formData.message,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://1e1bf19f-113b-4eb6-b80a-75862aa6ff01.us-east-1.cloud.genez.io/scan",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    setSuccess(true);
    setFormData({ email: "", message: "", website: "" });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[950px]  max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section
          className="py-5 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
          id="chatbot-optimization-pricing-section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Limited Offer: Free
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ms-2">
                  Brand Presence Audit
                </span>
              </h2>
              <p className="text-md text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Get your AI-powered brand presence analysis. Ensure your brand is accurately
                represented across ChatGPT, Claude, Gemini, and other AI platforms. (edited)
              </p>
            </div>

            <div className="grid items-center lg:grid-cols-2 gap-12 ">
              {/* Features & Benefits */}
              <div className="space-y-8">
                <div className="space-y-5 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    What's Included
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        icon: SearchIcon,
                        title: "AI Platform Monitoring",
                        description:
                          "Track how your brand appears across ChatGPT, Claude, Gemini, and other LLMs",
                      },
                      {
                        icon: MessageSquareIcon,
                        title: "Brand Consistency",
                        description:
                          "Ensure consistent messaging and accurate information across all platforms",
                      },
                      {
                        icon: TrendingUpIcon,
                        title: "Optimization Insights",
                        description:
                          "Get actionable recommendations to improve your AI-driven brand discovery",
                      },
                      {
                        icon: BarChart3Icon,
                        title: "Comprehensive Reports",
                        description:
                          "Monthly detailed reports with brand presence analytics and competitive insights",
                      },
                      {
                        icon: ShieldCheckIcon,
                        title: "Brand Protection",
                        description:
                          "Real-time alerts for brand misrepresentation or negative mentions",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <p className="text-xs text-slate-500 dark:text-slate-400 text-left">
                      Discover how our Brand Presence product can drive long-term impact for your
                      business — click{" "}
                      <a
                        href="https://genezio.com/brand-presence/"
                        className="text-blue-600 dark:text-blue-400"
                      >
                        here
                      </a>{" "}
                      to learn more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                    <CheckIcon className="inline h-5 w-5 mr-2" />
                    <span className="font-semibold">Thank you!</span> We'll get back to you within
                    24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-slate-700 dark:text-slate-300 text-sm">
                      Website URL *
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                      Tell us about your brand (optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What industry are you in? What are your main brand concerns with AI platforms?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                  >
                    Get My Free Analysis Report
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default BrandPopup;
