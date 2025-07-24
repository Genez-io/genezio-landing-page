import React from "react";
import { UsersIcon, BuildingIcon, CheckCircleIcon } from "lucide-react";

export function ServiceDeliverySection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How do we do this?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Independent testing + insights tailored for the enterprise
            </p>
          </div>

          {/* Service Delivery Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Through Partners */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Through Our Partners
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Work with our certified partner network to implement AI testing
                solutions tailored to your industry and specific needs.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Industry-specific expertise and customization
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Local support and implementation guidance
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Ongoing maintenance and optimization
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Find a Partner
              </button>
            </div>

            {/* Direct Enterprise Service */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <BuildingIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Direct Enterprise Service
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Work directly with our team for comprehensive AI testing
                solutions designed for large-scale enterprise deployments.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    White-glove implementation and support
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Custom agent development and training
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Dedicated account management
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Contact Enterprise Sales
              </button>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Independent Testing You Can Trust
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Our platform provides unbiased, comprehensive testing that helps
                you identify issues before they impact your business. Whether
                through our partner network or direct service, we deliver the
                insights you need to deploy AI with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
