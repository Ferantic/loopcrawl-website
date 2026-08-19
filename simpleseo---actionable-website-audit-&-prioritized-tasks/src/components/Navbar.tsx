import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  Bot, 
  Code2, 
  Zap, 
  Calculator, 
  HelpCircle, 
  User, 
  LogOut,
  ShieldCheck,
  TrendingUp,
  FileText
} from "lucide-react";
import { UserAccount } from "./AuthModal";
import { ResourceTopic } from "./ResourcesModal";

interface NavbarProps {
  onOpenAudit: (sampleUrl?: string) => void;
  onTriggerAudit?: (sampleUrl?: string) => void;
  onOpenAuth: (tab?: "signin" | "signup") => void;
  currentUser: UserAccount | null;
  onLogout: () => void;
  onOpenResource: (topic: ResourceTopic) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAudit, 
  onTriggerAudit,
  onOpenAuth,
  currentUser,
  onLogout,
  onOpenResource,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setResourcesDropdownOpen(false);
    
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAuditAction = () => {
    setMobileMenuOpen(false);
    if (onTriggerAudit) {
      onTriggerAudit();
    } else {
      scrollToSection("audit-tool");
      onOpenAudit();
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/70 backdrop-blur-xs py-4 sm:py-5 border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Tagline */}
          <button 
            type="button"
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none" 
            id="nav-logo"
          >
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-heading">
                  Simple<span className="text-indigo-600">SEO</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  Fix, Don't Analyze
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden md:block">
                Actionable SEO for small businesses & founders
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => {
                scrollToSection("audit-tool");
                onOpenAudit();
              }}
              className="hover:text-indigo-600 transition-colors cursor-pointer py-1"
            >
              Free Audit Tool
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("problem-solution")}
              className="hover:text-indigo-600 transition-colors cursor-pointer py-1"
            >
              Why SimpleSEO
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="hover:text-indigo-600 transition-colors cursor-pointer py-1"
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("sample-reports")}
              className="hover:text-indigo-600 transition-colors cursor-pointer py-1"
            >
              Sample Reports
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className="hover:text-indigo-600 transition-colors cursor-pointer py-1"
            >
              Pricing (£10–£25)
            </button>

            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer py-1"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Guides & Tools
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      scrollToSection("jargon-buster");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">SEO Jargon Buster</div>
                      <div className="text-[11px] text-slate-400">Plain-English translations of 20+ terms</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenResource("geo-guide");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">AI Search & GEO Guide</div>
                      <div className="text-[11px] text-slate-400">How to get cited in ChatGPT & AI Overviews</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenResource("schema-snippets");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Schema JSON-LD Snippets</div>
                      <div className="text-[11px] text-slate-400">Copy-paste local business code</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenResource("vitals-blueprint");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Core Web Vitals Blueprint</div>
                      <div className="text-[11px] text-slate-400">Fast mobile speed & WebP tips</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      scrollToSection("roi-calculator");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">ROI & Savings Calculator</div>
                      <div className="text-[11px] text-slate-400">Calculate missed monthly revenue</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      scrollToSection("faq");
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-indigo-50/70 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Frequently Asked Questions</div>
                      <div className="text-[11px] text-slate-400">Contracts, guarantees, and speed</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right CTA Area (Sign In & Free 60s Audit) */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              /* Logged In User Profile Menu */
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-900 hover:bg-indigo-100 transition-all cursor-pointer shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span>{currentUser.name}</span>
                  <ChevronDown className="w-3 h-3 text-indigo-600" />
                </button>

                {userMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100 text-xs">
                      <div className="font-bold text-slate-900">{currentUser.name}</div>
                      <div className="text-slate-500 font-mono text-[11px] truncate">{currentUser.email}</div>
                      <span className="inline-block mt-1 text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {currentUser.plan}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        onOpenAuth("signin");
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-slate-50 text-xs text-slate-700 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Account Settings</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        handleAuditAction();
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-slate-50 text-xs text-slate-700 flex items-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Run New Scan</span>
                    </button>

                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-rose-50 text-xs text-rose-600 flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Sign In Button */
              <button
                type="button"
                onClick={() => onOpenAuth("signin")}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}

            {/* Free 60s Audit CTA */}
            <button
              type="button"
              onClick={handleAuditAction}
              id="nav-cta-audit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all shadow-md shadow-indigo-200 cursor-pointer"
            >
              <Search className="w-4 h-4 text-indigo-200" />
              <span>Free 60s Audit</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleAuditAction}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-indigo-600"
            >
              Free Audit
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-3 bg-white rounded-3xl shadow-2xl border border-slate-200 space-y-1.5 animate-in slide-in-from-top-2 duration-150">
            <button
              type="button"
              onClick={() => {
                scrollToSection("audit-tool");
                onOpenAudit();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Free Audit Tool
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("problem-solution")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Why SimpleSEO
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Features & AI Search Readiness
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("sample-reports")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Sample Reports (Interactive)
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Pricing (£10–£25/mo)
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("jargon-buster")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              SEO Jargon Buster
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResource("geo-guide");
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              🤖 AI Search (GEO) Blueprint
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("faq")}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              FAQ
            </button>

            {/* Mobile Auth & Audit Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              {currentUser ? (
                <div className="flex items-center justify-between p-2 bg-indigo-50 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{currentUser.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{currentUser.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="text-xs font-bold text-rose-600 hover:underline"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth("signin");
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Sign In / Create Account
                </button>
              )}

              <button
                type="button"
                onClick={handleAuditAction}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Run Free 60s Website Audit</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
