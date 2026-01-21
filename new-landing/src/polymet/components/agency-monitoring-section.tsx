import { BarChart3Icon, BellIcon, FilterIcon, PieChartIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function AgencyMonitoringSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndustry && email) {
      // Handle form submission
      console.log("Submitting:", { industry: selectedIndustry, email });
      setIsOpen(false);
      setEmail("");
      setSelectedIndustry(null);
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
    <section className="relative py-12 md:py-24 bg-[#0E0E10] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Right content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Monitor{" "}
              <span className="text-blue-400">
                industry insights
              </span>
            </h2>
            <p className="text-base md:text-xl text-white/60 mb-8 leading-relaxed">
              We monitor dozens of industry reports daily. Get for free industry report.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <FilterIcon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    Industry segmentation
                  </h3>
                  <p className="text-white/60">
                    Group brands and compare performance by vertical.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <BarChart3Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Unified reporting
                  </h3>
                  <p className="text-white/60">
                    Consolidated reports across all clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <PieChartIcon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
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
                <Button className="mt-8 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white h-12">
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
                        className={selectedIndustry === "banking" ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white"}
                        onClick={() => setSelectedIndustry("banking")}
                      >
                        Banking
                      </Button>
                      <Button
                        type="button"
                        variant={selectedIndustry === "education" ? "default" : "outline"}
                        className={selectedIndustry === "education" ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white"}
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
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!selectedIndustry || !email}
                  >
                    Send Report to Email
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Left visual */}
          <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative rounded-2xl bg-blue-500/10 border border-white/10 p-6 md:p-8">
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
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
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
                          className="h-full rounded-full bg-blue-400"
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
              <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-blue-600 shadow-2xl">
                <div className="flex items-center gap-2">
                  <BellIcon className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    3 new insights
                  </span>
                </div>
              </div>

              {/* Glow effects */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-blue-400 blur-2xl opacity-50" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}