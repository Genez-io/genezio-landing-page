import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";

export function GenezioHeaderV2() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/ai-search-optimization-tool/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">genezio</span>
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="default"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Book a Call
              </Link>
            </Button>

            <Button
              size="default"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
              asChild
            >
              <Link to="https://app.genezio.ai/sign-up?coupon=EXPLOREGENEZIO" className="flex items-center gap-2">
                Get Started for Free
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

