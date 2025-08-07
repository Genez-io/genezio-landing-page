import React from "react";
import {
  ShieldIcon,
  AlertTriangleIcon,
  FileTextIcon,
  LockIcon,
  ExternalLinkIcon
} from "lucide-react";

export function RiskManagementSection() {
  const risks = [
    {
      title: "Regulatory Compliance",
      description:
        "Ensure AI systems meet EU AI Act requirements and executive order guidelines",
      icon: (
        <FileTextIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ),

      color: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Data Security",
      description:
        "Protect sensitive information and prevent data leakage in AI interactions",
      icon: <LockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,

      color: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Content Safety",
      description:
        "Monitor and prevent harmful, biased, or inappropriate AI-generated content",
      icon: (
        <AlertTriangleIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
      ),

      color: "bg-red-100 dark:bg-red-900/30"
    },
    {
      title: "Operational Risk",
      description:
        "Identify and mitigate AI system failures before they impact business operations",
      icon: (
        <ShieldIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
      ),

      color: "bg-green-100 dark:bg-green-900/30"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="risk">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-md font-medium mb-4">
              {/* <ShieldIcon className="w-4 h-4 mr-2" /> */}
              Mitigate Risk
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Regulatory and Compliance Risk Management
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Modeled after EU AI Act and the 2023 Executive Order on Artificial
              Intelligence
            </p>
          </div>

          {/* Risk Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {risks.map((risk, index) => (
              <div
                key={index}
                className={`rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-md transition-all hover:shadow-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${risk.color} flex items-center justify-center`}
                  >
                    {risk.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common Risks Reference */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Comprehensive Risk Coverage
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our platform addresses all common risks managed by Genezio,
                ensuring your AI systems are compliant, secure, and reliable
                across all regulatory frameworks.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div
                  className={`rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md transition-all hover:shadow-lg`}
                >
                  <div className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    EU AI Act Compliance
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    High-risk AI system requirements
                  </div>
                </div>
                <div
                  className={`rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md transition-all hover:shadow-lg`}
                >
                  <div className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    Executive Order 2023
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Federal AI safety standards
                  </div>
                </div>
                <div
                  className={`rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md transition-all hover:shadow-lg`}
                >
                  <div className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    Industry Standards
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Sector-specific requirements
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <p className="text-md text-slate-600 dark:text-slate-300 mb-2">
              <strong>Research insight:</strong> Accenture’s Banking Technology Report 2024 reports that 75% of banks fear regulatory fines stemming from unverified AI responses. The same report states that failure to validate chatbot content regularly can lead to compliance breaches that might cost banks millions due to penalties or litigation.
            </p>
            <a
              href="https://arxiv.org/pdf/2312.13871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Research Paper <ExternalLinkIcon className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
