import { Link } from "react-router";
import { ArrowRightIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function IndustryLeaderboardBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative mt-16 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border-b border-blue-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5">
        <div className="flex items-center justify-center gap-3">
          {/* Message */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-400 font-bold">
              🎉 Industry Leaderboards Now Public!
            </span>
            <span className="hidden md:inline text-white/70">
              See how top competitors perform in AI visibility across 5 UK industries
            </span>
          </div>

          {/* CTA Link */}
          <Link
            to="/industry-leaderboards/"
            className="flex items-center gap-1.5 text-sm text-white font-semibold hover:text-blue-300 transition-colors group px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <span>View Leaderboards</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <XIcon className="w-4 h-4 text-white/50 hover:text-white/80" />
          </button>
        </div>
      </div>
    </div>
  );
}