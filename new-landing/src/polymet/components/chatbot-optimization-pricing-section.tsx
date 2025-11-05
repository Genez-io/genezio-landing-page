import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckIcon,
  StarIcon,
  MessageSquareIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  HeadphonesIcon,
  CodeIcon,
  TrendingUpIcon,
  ArrowRightIcon
} from "lucide-react";
import axios from "axios";
import { blockedProviders } from "@/utils/blocked-email-providers";

export function ChatbotOptimizationPricingSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    company: "",
    chatbotVolume: ""
  });

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage("");
    console.log("Chatbot Optimization Request:", formData);

    const email = formData.email.trim().toLowerCase();
    const domain = email.split("@")[1] || "";
  
    if (!domain || blockedProviders.some((p) => domain.includes(p))) {
      setErrorMessage(
        "Please use your company email address."
      );
      return;
    }

    // Handle form submission
    const data = JSON.stringify({
      company: formData.company,
      email: formData.email,
      interactions: formData.chatbotVolume,
      message: formData.message
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://1e1bf19f-113b-4eb6-b80a-75862aa6ff01.us-east-1.cloud.genez.io/pricing",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    setErrorMessage("");
    setSuccess(true);
    setFormData({ email: "", message: "", company: "", chatbotVolume: "" });
  };

  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      id="chatbot-optimization-pricing-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Complete{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Chatbot Optimization
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade platform for maximizing your chatbot's performance,
            safety, and ROI (return of investment)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features & Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Full Platform Capabilities
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: MessageSquareIcon,
                    title: "Advanced AI Testing",
                    description:
                      "Comprehensive testing scenarios including off-topic detection, offensive language filtering, and compliance monitoring"
                  },
                  {
                    icon: BarChart3Icon,
                    title: "Real-time Analytics",
                    description:
                      "Live monitoring dashboard with performance metrics, user engagement analytics, and ROI tracking"
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Compliance & Safety",
                    description:
                      "Automated compliance checks for industry regulations with real-time brand safety monitoring"
                  },
                  {
                    icon: TrendingUpIcon,
                    title: "Lead Generation",
                    description:
                      "Optimize conversation flows to maximize lead capture and conversion rates"
                  },
                  {
                    icon: CodeIcon,
                    title: "Custom Integration",
                    description:
                      "API access and custom integrations with your existing tech stack and workflows"
                  },
                  {
                    icon: HeadphonesIcon,
                    title: "Priority Support",
                    description:
                      "Dedicated account manager, priority technical support, and comprehensive training"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <StarIcon className="h-6 w-6 text-purple-500 mr-2" />

                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                    Enterprise Solution
                  </span>
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Custom
                  <span className="text-lg font-normal text-slate-500 dark:text-slate-400 ml-2">
                    pricing
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Tailored to your chatbot volume and specific requirements
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Get Custom Pricing
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Tell us about your needs and we'll create a tailored solution
                for your business
              </p>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                <CheckIcon className="inline h-5 w-5 mr-2" />
                <span className="font-semibold">Thank you!</span> We'll get back
                to you within 24 hours.
              </div>
            )}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                 {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Company Name *
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-slate-700 dark:text-slate-300"
                >
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
                <Label
                  htmlFor="chatbotVolume"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Monthly Chatbot Interactions
                </Label>
                <Input
                  id="chatbotVolume"
                  name="chatbotVolume"
                  type="text"
                  placeholder="e.g., 10,000 conversations/month"
                  value={formData.chatbotVolume}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Tell us about your chatbot optimization needs *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are your main challenges? What features are most important to you? Any specific compliance requirements?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
              >
                Get My Custom Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                We'll respond within 24 hours with a personalized proposal
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
