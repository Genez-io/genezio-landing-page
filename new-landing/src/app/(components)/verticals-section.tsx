'use client';

import React from "react";
import { ShoppingCartIcon, LandmarkIcon, HeartIcon } from "lucide-react";

export function VerticalsSection() {
  const verticals = [
    {
      title: "E-commerce",
      description:
        "Ensure AI-powered shopping assistants provide accurate product information and recommendations while maintaining compliance with consumer protection regulations.",
      icon: (
        <ShoppingCartIcon
          className="w-12 h-12 text-purple-600 dark:text-purple-400"
        />
      ),

      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-700",
      iconBg: "bg-purple-100 dark:bg-purple-800",
    },
    {
      title: "Banking & Finance",
      description:
        "Validate that financial AI agents deliver accurate information about products, rates, and regulations while protecting sensitive customer data.",
      icon: (
        <LandmarkIcon
          className="w-12 h-12 text-blue-600 dark:text-blue-400"
        />
      ),

      color: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconBg: "bg-blue-100 dark:bg-blue-800",
    },
    {
      title: "Healthcare",
      description:
        "Test AI systems to ensure they provide medically accurate information, maintain patient privacy, and comply with healthcare regulations.",
      icon: (
        <HeartIcon
          className="w-12 h-12 text-red-600 dark:text-red-400"
        />
      ),

      color: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-700",
      iconBg: "bg-red-100 dark:bg-red-800",
    },
  ];

  return (
    <section
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Genezio Agents Across Industries
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Our AI Validation platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className={`rounded-xl ${vertical.color} border ${vertical.borderColor} p-8 transition-all hover:shadow-lg`}
              id={`gwhjqf_${index}`}
            >
              <div
                className="flex flex-col items-center text-center"
                id={`bpjebx_${index}`}
              >
                <div
                  className={`p-4 rounded-full ${vertical.iconBg} mb-6`}
                  id={`34ebqr_${index}`}
                >
                  {vertical.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
                  id={`m2ths1_${index}`}
                >
                  {vertical.title}
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-300"
                  id={`ftwfmx_${index}`}
                >
                  {vertical.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
