import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarIcon,
  CheckIcon,
  UserIcon,
  BuildingIcon,
  PhoneIcon,
  MailIcon
} from "lucide-react";
import axios from "axios";
import { blockedProviders } from "@/utils/blocked-email-providers";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setErrorMessage("");

    // Client-side quick block for common free email providers (UX only)
    const email = (formData.email || "").trim().toLowerCase();
    const domain = email.split("@")[1] || "";
    if (!domain || blockedProviders.some((p) => domain.includes(p))) {
      setErrorMessage(
        "Please use your company email address."
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    console.log(" Request:", formData);
    // Handle form submission
    const data = JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://1e1bf19f-113b-4eb6-b80a-75862aa6ff01.us-east-1.cloud.genez.io/demo",
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

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
      onClose();
    }, 3000);
  };

  const isFormValid = formData.fullName && formData.email && formData.company;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
              <CheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Demo Booked Successfully!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We'll respond within 24 hours with a personalized proposal and
              demo scheduling options.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 w-full">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                📧 Check your email for confirmation details
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            Book Your Demo
          </DialogTitle>
          <DialogDescription>
            Schedule a personalized demo to see how Genezio can maximize your
            chatbot's ROI. We'll respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200 rounded-lg">
              {errorMessage}
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="bg-white dark:bg-slate-900"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <MailIcon className="w-4 h-4" />
              Business Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john.doe@company.com"
              required
              className="bg-white dark:bg-slate-900"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center gap-2">
              <BuildingIcon className="w-4 h-4" />
              Company *
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company Name"
              required
              className="bg-white dark:bg-slate-900"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className="bg-white dark:bg-slate-900"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your chatbot needs</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe your current chatbot setup, challenges, and what you'd like to achieve..."
              rows={4}
              className="bg-white dark:bg-slate-900 resize-none"
            />
          </div>

          {/* Info Box */}
          {/* <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              What to expect:
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• 30-minute personalized demo</li>
              <li>• ROI analysis for your specific use case</li>
              <li>• Custom implementation roadmap</li>
              <li>• Q&A with our AI optimization experts</li>
            </ul>
          </div> */}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Booking Demo...
                </div>
              ) : (
                "Book Demo"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
