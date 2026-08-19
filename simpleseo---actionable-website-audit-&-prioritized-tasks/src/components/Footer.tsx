import React from "react";
import { Sparkles, Heart, Globe, ShieldCheck, ArrowUp, ArrowRight, User } from "lucide-react";
import { ResourceTopic } from "./ResourcesModal";

interface FooterProps {
  onOpenAudit: () => void;
  onOpenAuth: (tab?: "signin" | "signup") => void;
  onOpenResource: (topic: ResourceTopic) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenAudit,
  onOpenAuth,
  onOpenResource,
}) => {
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white font-heading">
                Simple<span className="text-indigo-400">SEO</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Actionable SEO made simple for small businesses, freelancers, and solo founders. Fix high-impact bottlenecks in 15 minutes a week without 50-page PDF confusion.
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent £10–£25/mo pricing • Cancel anytime</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-heading">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("audit-tool")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Free 60-Sec Audit
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("problem-solution")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why SimpleSEO
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("features")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Core Features
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("sample-reports")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sample Reports
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("pricing")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pricing (£10–£25)
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenAuth("signin")} 
                  className="hover:text-indigo-400 font-semibold transition-colors cursor-pointer text-left flex items-center gap-1 text-indigo-300"
                >
                  <User className="w-3 h-3" />
                  <span>Member Sign In</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Educational */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-heading">
              Educational Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("jargon-buster")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SEO Jargon Buster
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenResource("schema-snippets")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Schema JSON-LD Snippets
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenResource("geo-guide")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Search (GEO) Blueprint
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenResource("vitals-blueprint")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Core Web Vitals Blueprint
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("roi-calculator")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ROI & Missed Revenue Calculator
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection("faq")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Action Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-heading">
              Get Started Free
            </h4>
            <button
              type="button"
              onClick={onOpenAudit}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30 text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Run Free Website Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-slate-500 leading-tight">
              Test any website URL instantly with 0 registration. 15-minute weekly fixes.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SimpleSEO. Built for small businesses, freelancers, and solo founders.</p>
          
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenResource("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenResource("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer font-medium text-slate-400"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
