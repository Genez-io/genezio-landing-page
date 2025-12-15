export function GenezioFooter() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-white text-xl font-semibold">
                <img src="/images/logo-white.svg" alt="Genezio Logo" className="h-8 w-auto" />
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Conversational Optimization Platform
              <br />
              that powers your brand visibility in AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/conversational-brand-presence"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Increase Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="/increase-conversion"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Increase Conversion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Increase In-Chat Shopping (soon)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a
                  href="/support-terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Support Terms
                </a>
              </li>
              <li>
                <a
                  href="/data-processing-agreement"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Data Processing Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Genezio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
