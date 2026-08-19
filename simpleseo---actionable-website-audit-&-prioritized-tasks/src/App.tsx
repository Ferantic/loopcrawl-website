import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroAuditSection } from "./components/HeroAuditSection";
import { AuditResultModal } from "./components/AuditResultModal";
import { ProblemVsSolution } from "./components/ProblemVsSolution";
import { FeatureHighlights } from "./components/FeatureHighlights";
import { InteractiveSampleReports } from "./components/InteractiveSampleReports";
import { PricingSection } from "./components/PricingSection";
import { SocialProofStats } from "./components/SocialProofStats";
import { JargonBuster } from "./components/JargonBuster";
import { RoiCalculator } from "./components/RoiCalculator";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { AuthModal, UserAccount } from "./components/AuthModal";
import { PlanCheckoutModal } from "./components/PlanCheckoutModal";
import { ResourcesModal, ResourceTopic } from "./components/ResourcesModal";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AuditReport, PricingPlan } from "./types";
import { PRICING_PLANS } from "./data/sampleData";

export default function App() {
  const [activeReport, setActiveReport] = useState<AuditReport | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Authentication State with persistent storage
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const saved = localStorage.getItem("simpleseo_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"signin" | "signup">("signin");

  // Plan Selection & Checkout State
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(PRICING_PLANS[1]);
  const [isPlanAnnual, setIsPlanAnnual] = useState(true);

  // Resources & Guides Modal State
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [resourceTopic, setResourceTopic] = useState<ResourceTopic>("geo-guide");

  // Authentication Handlers
  const handleLogin = (user: UserAccount) => {
    setCurrentUser(user);
    try {
      localStorage.setItem("simpleseo_user", JSON.stringify(user));
    } catch (e) {
      console.warn("Could not persist user session:", e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("simpleseo_user");
    } catch (e) {
      console.warn("Could not remove user session:", e);
    }
  };

  const handleAuditComplete = (report: AuditReport) => {
    setActiveReport(report);
    setIsAuditModalOpen(true);
  };

  const handleSelectSampleReport = (report: AuditReport) => {
    setActiveReport(report);
    setIsAuditModalOpen(true);
  };

  const handleOpenAuditFocus = (sampleUrl?: string) => {
    const input = document.getElementById("hero-url-input") as HTMLInputElement | null;
    if (input) {
      if (sampleUrl) {
        input.value = sampleUrl;
      }
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      input.focus();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Direct 60-second audit runner when user clicks top CTA or Quick Action
  const handleRunDirectAudit = (customUrl?: string, customType?: string) => {
    const targetUrl = customUrl || "flourandcrust.co.uk";
    const targetType = customType || "Local Business & Trades";

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const generatedReport: AuditReport = {
        url: targetUrl,
        businessType: targetType,
        overallScore: 68,
        healthBreakdown: {
          technicalSpeed: 64,
          onPageMeta: 71,
          aiSearchReadiness: 55,
          competitorKeywords: 74,
        },
        summary: `We detected 3 high-impact bottlenecks on ${targetUrl}. Compressing your 2.8MB hero banner and injecting Schema JSON-LD will recover estimated missed searchers within 14 days.`,
        quickWinCount: 3,
        estimatedFixTimeMinutes: 16,
        tasks: [
          {
            id: "task-1",
            title: "Compress 2.8MB Hero Image to Next-Gen WebP",
            priority: "critical",
            category: "Speed & Technical",
            timeToFix: "4 mins",
            impact: "+18 Page Speed Score (Cuts Mobile LCP to 1.2s)",
            plainEnglishExplanation: "Mobile visitors on 4G wait over 3.8 seconds for your homepage banner to load. Compressing it saves 80% bandwidth without visible quality loss.",
            stepByStepGuide: [
              "Download your existing banner image or open your media manager.",
              "Convert it to WebP format using Squoosh.app or an image plugin.",
              "Re-upload and set width/height attributes in HTML."
            ],
            codeSnippet: `<!-- Replace heavy JPEG/PNG with WebP -->\n<img src="/hero-banner.webp" width="1200" height="600" alt="Homepage Banner" loading="eager" fetchpriority="high" />`,
            status: "pending"
          },
          {
            id: "task-2",
            title: "Add Target City & Core Service to Homepage Meta Title",
            priority: "high",
            category: "On-Page & Meta",
            timeToFix: "5 mins",
            impact: "+35% Organic Click-Through Rate",
            plainEnglishExplanation: "Your title tag is generic. Searchers need to see your exact service and geographic area before they click.",
            stepByStepGuide: [
              "Open your CMS SEO settings (Shopify, WordPress, Webflow, or Squarespace).",
              "Update Title to: [Primary Service] in [Town/City] | [Brand Name].",
              "Keep title length between 50 and 60 characters."
            ],
            codeSnippet: `<title>Artisan Bakery & Specialty Coffee in Bath | Flour & Crust</title>\n<meta name="description" content="Discover fresh handcrafted sourdough bread and pastries with fast UK delivery. Rated 4.9 stars by local customers." />`,
            status: "pending"
          },
          {
            id: "task-3",
            title: "Inject Schema.org JSON-LD for AI Search & Local Snippets",
            priority: "high",
            category: "AI Search Readiness",
            timeToFix: "7 mins",
            impact: "Qualifies for Google Rich Snippets & ChatGPT Citations",
            plainEnglishExplanation: "AI engines like ChatGPT and Google AI Overviews read structured JSON code to understand your opening hours, address, and ratings.",
            stepByStepGuide: [
              "Copy the ready-made JSON-LD script below.",
              "Paste into your website <head> tag or CMS custom code injection field.",
              "Validate with Google Rich Results Test."
            ],
            codeSnippet: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Bakery",\n  "name": "Flour & Crust Bakery",\n  "url": "https://${targetUrl}",\n  "telephone": "+44 20 7946 0912",\n  "priceRange": "££",\n  "address": {\n    "@type": "PostalAddress",\n    "addressLocality": "Bath",\n    "addressCountry": "GB"\n  }\n}\n</script>`,
            status: "pending"
          }
        ],
        aiReadinessInsights: {
          chatGptStatus: "Moderate (Missing Schema Data)",
          googleAiOverviewStatus: "Eligible with 1-Click JSON-LD addition",
          perplexityStatus: "Citable",
          recommendation: "Inject structured JSON-LD into your homepage header to ensure ChatGPT cites your business when users search locally."
        },
        competitorInsights: {
          topKeywordsFound: ["specialty coffee near me", "artisan sourdough loaf", "best local bakery"],
          missedOpportunities: ["pre-order sourdough", "gluten free options bath"],
          rivalBenchmark: "You are currently 3 spots behind your top local rival on mobile search."
        }
      };

      setActiveReport(generatedReport);
      setIsAuditModalOpen(true);
    }, 1200);
  };

  const handleResetAudit = () => {
    setIsAuditModalOpen(false);
    setActiveReport(null);
    handleOpenAuditFocus();
  };

  const handleOpenAuth = (tab: "signin" | "signup" = "signin") => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedPlan(plan);
    setIsPlanAnnual(isAnnual);
    setIsPlanModalOpen(true);
  };

  const handleOpenResource = (topic: ResourceTopic) => {
    setResourceTopic(topic);
    setIsResourceModalOpen(true);
  };

  const handleConfirmPlan = (details: {
    planName: string;
    price: number;
    isAnnual: boolean;
    domain: string;
    email: string;
  }) => {
    const newUser: UserAccount = {
      name: details.email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
      email: details.email,
      website: details.domain,
      plan: `${details.planName} (£${details.price}/mo)`,
      createdAt: "Active Trial Member",
    };
    handleLogin(newUser);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
        {/* Navigation Header */}
        <Navbar 
          onOpenAudit={handleOpenAuditFocus}
          onTriggerAudit={handleRunDirectAudit}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
          onLogout={handleLogout}
          onOpenResource={handleOpenResource}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section with Front-and-Center 60-Second Free Audit Tool */}
          <HeroAuditSection
            onAuditComplete={handleAuditComplete}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          {/* Problem vs. Solution Section */}
          <ProblemVsSolution onOpenAudit={handleOpenAuditFocus} />

          {/* Four Core Feature Pillars (Scans, Speed/Meta, AI Search Readiness, Competitors) */}
          <FeatureHighlights 
            onOpenAudit={handleOpenAuditFocus}
            onOpenResource={handleOpenResource}
          />

          {/* Interactive Before & After / Sample Reports Showcase */}
          <InteractiveSampleReports onSelectSampleReport={handleSelectSampleReport} />

          {/* Transparent Low-Barrier Pricing (£10–£25/mo) with Enterprise Comparison */}
          <PricingSection 
            onOpenAudit={handleOpenAuditFocus}
            onSelectPlan={handleSelectPlan}
          />

          {/* Social Proof, Market Research Benchmarks (90% / 72%), and Customer Testimonials */}
          <SocialProofStats />

          {/* Plain-English SEO Jargon Buster & Resource Guide */}
          <JargonBuster onOpenAudit={handleOpenAuditFocus} />

          {/* Interactive Missed Revenue & Agency Cost ROI Calculator */}
          <RoiCalculator onOpenAudit={handleOpenAuditFocus} />

          {/* Frequently Asked Questions */}
          <FaqSection onOpenAudit={handleOpenAuditFocus} />
        </main>

        {/* Footer */}
        <Footer 
          onOpenAudit={handleOpenAuditFocus}
          onOpenAuth={handleOpenAuth}
          onOpenResource={handleOpenResource}
        />

        {/* Interactive Audit Results Modal */}
        <AuditResultModal
          report={activeReport}
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
          onResetAudit={handleResetAudit}
        />

        {/* Sign In / Account Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          currentUser={currentUser}
          onLogin={handleLogin}
          onLogout={handleLogout}
          initialTab={authModalTab}
        />

        {/* Plan Checkout & Subscription Modal */}
        <PlanCheckoutModal
          isOpen={isPlanModalOpen}
          onClose={() => setIsPlanModalOpen(false)}
          selectedPlan={selectedPlan}
          initialAnnual={isPlanAnnual}
          onConfirmPlan={handleConfirmPlan}
        />

        {/* Resources & Educational Guides Modal */}
        <ResourcesModal
          isOpen={isResourceModalOpen}
          onClose={() => setIsResourceModalOpen(false)}
          initialTopic={resourceTopic}
          onOpenAudit={handleOpenAuditFocus}
        />
      </div>
    </ErrorBoundary>
  );
}
