import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  EyeIcon,
  LockIcon,
  AlertTriangleIcon,
} from "lucide-react";

export function BrandSafetySection() {
  const safetyFeatures = [
    {
      icon: ShieldCheckIcon,
      title: "Preventive Testing",
      description: "Be notified of potential threats before they escalate.",
      stats: "configurable scenarios",
    },
    {
      icon: EyeIcon,
      title: "Automated Compliance Checks",
      description:
        "Continuous monitoring ensures your chatbot stays within regulatory boundaries across all industries and jurisdictions.",
      stats: "99.8% compliance rate",
    },
    {
      icon: LockIcon,
      title: "Data Privacy Safeguards",
      description:
        "Enterprise-grade encryption and privacy controls protect sensitive customer information at every touchpoint.",
      stats: "SOC 2 Type II certified",
    },
    {
      icon: AlertTriangleIcon,
      title: "Risk Mitigation",
      description:
        "Proactive identification and prevention of potential brand risks before they impact your reputation.",
      stats: "90% risk reduction",
    },
  ];

  const complianceStandards = [
    { name: "GDPR", status: "Compliant" },
    { name: "SOC 2", status: "Compliant" },
    { name: "ISO 27001", status: "Certified" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <ShieldCheckIcon className="w-4 h-4 mr-2" />
            Enterprise Security & Compliance
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Your Brand Safety is{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade security, compliance monitoring, and risk
            management built into every aspect of our platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content - Features */}
          <div className="space-y-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {index === 0 ? "Preventive Testing" : feature.title}
                      </h3>
                      <div className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                        {feature.stats}
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Content - Security Dashboard */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Security Dashboard
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

                  <span className="text-sm text-slate-400">
                    All Systems Secure
                  </span>
                </div>
              </div>

              {/* Security Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Threat Detection
                  </div>
                  <div
                    className="text-2xl font-bold text-green-400"
                    style={{ color: "#ffffff" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs text-green-400"
                    style={{ color: "#f8fafc" }}
                  >
                    ✓ Active
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Compliance Score
                  </div>
                  <div
                    className="text-2xl font-bold text-blue-400"
                    style={{ color: "#ffffff" }}
                  >
                    99.8%
                  </div>
                  <div
                    className="text-xs text-blue-400"
                    style={{ color: "#f8fafc" }}
                  >
                    ↗ Excellent
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Data Encryption
                  </div>
                  <div
                    className="text-2xl font-bold text-purple-400"
                    style={{ color: "#f8fafc" }}
                  >
                    AES-256
                  </div>
                  <div
                    className="text-xs text-purple-400"
                    style={{ color: "#f8fafc" }}
                  >
                    ✓ Enabled
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">Uptime</div>
                  <div
                    className="text-2xl font-bold text-yellow-400"
                    style={{ color: "#f8fafc" }}
                  >
                    99.99%
                  </div>
                  <div
                    className="text-xs text-yellow-400"
                    style={{ color: "#f8fafc" }}
                  >
                    ✓ SLA Met
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <div className="text-sm text-slate-400 mb-3">
                  Recent Security Events
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      Automated compliance check
                    </span>
                    <span className="text-green-400">✓ Passed</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Risk assessment scan</span>
                    <span className="text-green-400">✓ Clean</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Data privacy audit</span>
                    <span className="text-green-400">✓ Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              SOC 2 Certified
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="bg-slate-800/30 rounded-2xl border border-slate-700 p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Compliance Standards We Meet
            </h3>
            <p className="text-slate-300">
              Certified and compliant with major industry standards and
              regulations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-600 hover:border-green-500/50 transition-colors group"
              >
                <div className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                  {standard.name}
                </div>
                <div className="text-xs text-green-400 font-medium">
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon
                className="h-6 w-6 text-green-400"
                style={{ color: "#f8fafc" }}
              />

              <span className="text-slate-300">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <LockIcon
                className="h-6 w-6 text-blue-400"
                style={{ color: "#f8fafc" }}
              />

              <span className="text-slate-300">Data Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <EyeIcon
                className="h-6 w-6 text-purple-400"
                style={{ color: "#ffffff" }}
              />

              <span className="text-slate-300">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
