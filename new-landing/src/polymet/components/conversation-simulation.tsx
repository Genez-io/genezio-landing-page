import React, { useState, useEffect } from "react";
import {
  MessageCircleIcon,
  BotIcon,
  UserIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "chatbot";
  content: string;
  timestamp: string;
}

interface TestResult {
  status: "passed" | "failed";
  insights: string[];
  score: number;
}

export function ConversationSimulation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const scenario = {
    title: "Premium Account Inquiry",
    description:
      "Test chatbot's ability to handle premium banking service inquiries and provide accurate pricing information"
  };

  const persona = {
    name: "Sarah Chen",
    role: "High-net-worth individual",
    background: "Tech executive looking for premium banking services"
  };

  const conversationFlow = [
    {
      id: "1",
      sender: "user" as const,
      content:
        "Hi, I'm interested in your premium banking services. What can you offer?",
      timestamp: "10:30 AM"
    },
    {
      id: "2",
      sender: "chatbot" as const,
      content:
        "Hello! I'd be happy to help you with our premium banking options. We offer exclusive wealth management services, priority customer support, and competitive interest rates.",
      timestamp: "10:30 AM"
    },
    {
      id: "3",
      sender: "user" as const,
      content: "What are the fees for premium accounts?",
      timestamp: "10:31 AM"
    },
    {
      id: "4",
      sender: "chatbot" as const,
      content:
        "Our premium account has a monthly fee of $25, but this is waived if you maintain a minimum balance of $10,000. You'll get unlimited transactions, premium customer support, and exclusive investment opportunities.",
      timestamp: "10:31 AM"
    },
    {
      id: "5",
      sender: "user" as const,
      content: "That sounds good. Can you help me open an account today?",
      timestamp: "10:32 AM"
    },
    {
      id: "6",
      sender: "chatbot" as const,
      content:
        "Absolutely! I can start the application process for you. I'll need some basic information to get started. Would you like to proceed with the premium account application?",
      timestamp: "10:32 AM"
    }
  ];

  const finalTestResult: TestResult = {
    status: "passed",
    insights: [
      "Chatbot provided accurate pricing information",
      "Successfully guided customer toward account opening",
      "Maintained professional tone throughout conversation",
      "Compliance requirements met for financial disclosures"
    ],

    score: 92
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (currentStep < conversationFlow.length) {
        setMessages((prev) => [...prev, conversationFlow[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      } else if (!showResult) {
        // Show test result after conversation ends
        setTimeout(() => {
          setTestResult(finalTestResult);
          setShowResult(true);
        }, 1000);
      } else {
        // Reset after showing result
        setTimeout(() => {
          setMessages([]);
          setCurrentStep(0);
          setTestResult(null);
          setShowResult(false);
        }, 4000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep, isPlaying, conversationFlow.length, showResult]);

  const getSenderIcon = (sender: string) => {
    switch (sender) {
      case "user":
        return <UserIcon className="w-4 h-4" />;

      case "chatbot":
        return <BotIcon className="w-4 h-4" />;

      default:
        return <MessageCircleIcon className="w-4 h-4" />;
    }
  };

  const getSenderColor = (sender: string) => {
    switch (sender) {
      case "user":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200";
      case "chatbot":
        return "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200";
    }
  };

  const getSenderName = (sender: string) => {
    switch (sender) {
      case "user":
        return persona.name;
      case "chatbot":
        return "Bank Chatbot";
      default:
        return sender;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 max-w-lg mx-auto">
      {/* Test Scenario Header */}
      <div className="mb-6">
        {/* Enhanced Test Scenario Display */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-4 mb-4 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Scenario: {scenario.title}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {scenario.description}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Persona Display */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-blue-900 dark:text-blue-100 text-base">
                  User Persona: {persona.name}
                </span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-1">
                Role: {persona.role}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Background: {persona.background}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getSenderColor(
                message.sender
              )}`}
            >
              {getSenderIcon(message.sender)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {getSenderName(message.sender)}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {message.timestamp}
                </span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {message.content}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator when conversation is active */}
        {isPlaying && currentStep < conversationFlow.length && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />

                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-100" />

                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 italic">
              Typing...
            </span>
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-center">
          <div className="text-center">
            <div
              className={`text-2xl font-bold ${
                showResult && testResult
                  ? testResult.status === "passed"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                  : "text-slate-400 dark:text-slate-500"
              }`}
            >
              {showResult && testResult
                ? testResult.status === "passed"
                  ? "✓ PASSED"
                  : "✗ FAILED"
                : "Analyzing..."}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Test Status
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
