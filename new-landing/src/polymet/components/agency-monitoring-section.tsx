import { BarChart3Icon, BellIcon, FilterIcon, PieChartIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isWorkEmail } from "@/lib/work-email";
import { useState } from "react";

export function AgencyMonitoringSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const ZOHO_FORM_BASE = "https://forms.zohopublic.eu/genezio1/form/IndustryReportUK";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedIndustry || !email) {
      return;
    }

    if (!isWorkEmail(email)) {
      setEmailError(
        "Please use your work email. Free inboxes like Gmail or Outlook aren't accepted."
      );
      return;
    }

    setEmailError("");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Option 2: Direct form submission (requires correct endpoint and field names)
      const form = document.createElement("form");
      form.method = "POST";
      // Try different possible endpoints:
      // Option A: formperma URL
      form.action = `${ZOHO_FORM_BASE}/formperma/qSA39uMeRrOgilhwxH5VK30jDRp58OiflOnixL6yjmE`;
      // Option B: htmlform/submit (uncomment to try)
      // form.action = `${ZOHO_FORM_BASE}/htmlform/submit`;
      form.target = "zoho_hidden_iframe";
      form.style.display = "none";
      form.setAttribute("accept-charset", "UTF-8");
      form.setAttribute("enctype", "application/x-www-form-urlencoded");

      // Add form fields - UPDATE THESE NAMES to match your Zoho form field names
      // To find field names: Inspect the Zoho form and check input "name" attributes
      const emailField = document.createElement("input");
      emailField.type = "hidden";
      emailField.name = "Email"; // UPDATE THIS - common names: "Email", "EmailAddress", "SingleLine1", etc.
      emailField.value = email;
      form.appendChild(emailField);

      const industryField = document.createElement("input");
      industryField.type = "hidden";
      industryField.name = "Industry"; // UPDATE THIS - common names: "Industry", "Dropdown1", "SingleLine2", etc.
      industryField.value = selectedIndustry;
      form.appendChild(industryField);

      // Create or get hidden iframe
      let iframe = document.getElementById("zoho_hidden_iframe") as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "zoho_hidden_iframe";
        iframe.name = "zoho_hidden_iframe";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        iframe.style.position = "absolute";
        iframe.style.visibility = "hidden";
        document.body.appendChild(iframe);
      }

      // Handle form submission
      const handleIframeLoad = () => {
        setSubmitStatus("success");
        setIsSubmitting(false);
        setTimeout(() => {
          setIsOpen(false);
          setEmail("");
          setSelectedIndustry(null);
          setSubmitStatus("idle");
          if (form.parentNode) {
            form.parentNode.removeChild(form);
          }
        }, 2000);
        iframe.removeEventListener("load", handleIframeLoad);
      };

      iframe.addEventListener("load", handleIframeLoad);
      document.body.appendChild(form);
      form.submit();

      // Fallback: assume success after 2 seconds if no error
      setTimeout(() => {
        if (submitStatus === "idle" && isSubmitting) {
          setSubmitStatus("success");
          setIsSubmitting(false);
          setTimeout(() => {
            setIsOpen(false);
            setEmail("");
            setSelectedIndustry(null);
            setSubmitStatus("idle");
          }, 2000);
        }
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const industries = [
    { name: "E-commerce", brands: 12 },
    { name: "SaaS", brands: 8 },
    { name: "Healthcare", brands: 6 },
    { name: "Finance", brands: 10 },
    { name: "Real Estate", brands: 5 },
    { name: "Education", brands: 7 },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] px-6 md:px-8 lg:px-16">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Right content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Monitor industry insights
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              We monitor dozens of industry reports daily. Get for free industry report.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FilterIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Industry segmentation
                  </h3>
                  <p className="text-white/60">
                    Group brands and compare performance by vertical.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <BarChart3Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Unified reporting
                  </h3>
                  <p className="text-white/60">
                    Consolidated reports across all clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <PieChartIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Real-time alerts
                  </h3>
                  <p className="text-white/60">
                    Instant notifications for portfolio changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Industry Report CTA */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="mt-8 w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-xl transition-colors duration-200 h-12">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Get Free Industry Report
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0E0E10] border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">Get Free Industry Report</DialogTitle>
                  <DialogDescription className="text-white/60">
                    Choose an industry and enter your email to receive a comprehensive AI visibility report
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-3">
                    <Label className="text-white">Select Industry</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={selectedIndustry === "banking" ? "default" : "outline"}
                        className={selectedIndustry === "banking" ? "bg-emerald-400 hover:bg-emerald-300 text-black font-semibold" : "border border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white"}
                        onClick={() => setSelectedIndustry("banking")}
                      >
                        Banking
                      </Button>
                      <Button
                        type="button"
                        variant={selectedIndustry === "education" ? "default" : "outline"}
                        className={selectedIndustry === "education" ? "bg-emerald-400 hover:bg-emerald-300 text-black font-semibold" : "border border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white"}
                        onClick={() => setSelectedIndustry("education")}
                      >
                        Education
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        disabled
                        className="border-white/10 bg-white/5 text-white/40 cursor-not-allowed"
                      >
                        Healthcare
                        <span className="ml-2 text-xs">(Soon)</span>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        disabled
                        className="border-white/10 bg-white/5 text-white/40 cursor-not-allowed"
                      >
                        E-commerce
                        <span className="ml-2 text-xs">(Soon)</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      required
                      disabled={isSubmitting}
                      aria-invalid={!!emailError}
                      className={`bg-white/5 text-white placeholder:text-white/40 ${
                        emailError
                          ? "border-red-500/60 focus-visible:border-red-500/60"
                          : "border-white/10"
                      }`}
                    />
                    {emailError && (
                      <p className="text-xs text-red-400">{emailError}</p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                      Success! Your request has been submitted.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedIndustry || !email || isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Report to Email"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Left visual */}
          <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative rounded-2xl bg-[#0A0A0C] border border-white/10 p-6 md:p-8">
              {/* Industry grid */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-white/60 mb-4">
                  Portfolio overview
                </div>
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                      <span className="text-white font-medium">
                        {industry.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-sm">
                        {industry.brands} brands
                      </span>
                      <div className="w-16 h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-emerald-400"
                          style={{
                            width: `${(industry.brands / 12) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-emerald-400 shadow-2xl">
                <div className="flex items-center gap-2">
                  <BellIcon className="w-4 h-4 text-black" />
                  <span className="text-sm font-semibold text-black">
                    3 new insights
                  </span>
                </div>
              </div>

              {/* Subtle glow for depth */}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}