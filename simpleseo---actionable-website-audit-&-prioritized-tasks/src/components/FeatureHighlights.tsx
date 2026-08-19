import React, { useState } from "react";
import { 
  Zap, 
  Bot, 
  Smartphone, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Search, 
  BellRing, 
  Code2, 
  Eye,
  ArrowRight
} from "lucide-react";

interface FeatureHighlightsProps {
  onOpenAudit?: () => void;
  onOpenResource?: (topic: "geo-guide" | "schema-snippets" | "vitals-blueprint") => void;
}

export const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ 
  onOpenAudit,
  onOpenResource,
}) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "scans",
      icon: Zap,
      badge: "Zero Maintenance",
      title: "Automated Weekly & Monthly Scans",
      tagline: "Continuous health monitoring that only alerts you when something actually matters.",
      description: "Our background crawler monitors your website weekly for sudden speed regressions, missing title tags, or newly broken links. No need to log in daily or worry about Google algorithm changes.",
      ctaLabel: "Run Free Health Scan",
      actionType: "audit",
      bullets: [
        "Automatic background crawl of every public page",
        "Instant email alerts if a critical link breaks or speed drops",
        "Weekly 3-item prioritized checklist delivered to your inbox",
        "Historical SEO health score tracking over time"
      ],
      mockPreview: (
        <div className="bg-slate-900 rounded-xl p-4 text-white text-xs font-mono border border-slate-800 space-y-3 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>● Automated Scan: Complete</span>
            <span>Today, 08:30 AM</span>
          </div>
          <div className="space-y-2 text-slate-300 font-sans">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>32 Pages Crawled • 0 Critical Downtime</span>
            </div>
            <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-amber-400 font-bold block mb-0.5">NEW PRIORITY TASK:</span>
              <p className="text-xs text-white">Homepage banner photo resized: Page speed improved by 1.2s (+8 score)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "technical",
      icon: Smartphone,
      badge: "Core Vitals",
      title: "Core Technical & On-Page SEO Checks",
      tagline: "Speed diagnostics, mobile-friendliness, metadata, and broken link crawler.",
      description: "Google prioritizes websites that load in under 2.5 seconds on mobile and have clean metadata. We test your real Core Web Vitals (LCP, CLS), crawl for 404 broken links, and audit all meta descriptions in plain English.",
      ctaLabel: "View Core Web Vitals Guide",
      actionType: "vitals",
      bullets: [
        "Mobile page speed diagnostic & WebP image compression advice",
        "Title tag & Meta description length checker",
        "Broken link crawler (finds 404s before customers do)",
        "Heading structure audit (H1, H2, H3 hierarchy check)"
      ],
      mockPreview: (
        <div className="bg-slate-900 rounded-xl p-4 text-white text-xs border border-slate-800 space-y-3 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>Mobile Speed Diagnostic</span>
            <span className="text-emerald-400 font-bold">Fast (1.2s LCP)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-slate-800">
              <span className="text-slate-400 block">Mobile Responsive</span>
              <span className="text-emerald-400 font-bold">✓ 100% Passed</span>
            </div>
            <div className="p-2 rounded bg-slate-800">
              <span className="text-slate-400 block">Broken Links</span>
              <span className="text-emerald-400 font-bold">0 Detected</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-search",
      icon: Bot,
      badge: "Future-Proof",
      title: "AI Search Readiness (GEO / LLM Optimization)",
      tagline: "Ensure your brand is cited and recommended by ChatGPT & Google AI Overviews.",
      description: "Search is shifting. When potential customers ask ChatGPT or Perplexity for local recommendations, LLMs rely on structured Schema.org JSON-LD and semantic answers. We test your AI citation readiness and generate the exact code needed.",
      ctaLabel: "Read AI Search (GEO) Blueprint",
      actionType: "geo",
      bullets: [
        "ChatGPT & Claude web search visibility assessment",
        "Google AI Overviews (SGE) citation readiness rating",
        "1-Click Copy-Paste Schema.org JSON-LD generator",
        "Entity authority & semantic Q&A optimization tips"
      ],
      mockPreview: (
        <div className="bg-slate-900 rounded-xl p-4 text-white text-xs border border-slate-800 space-y-2.5 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>AI Search Assistant Preview</span>
            <span className="text-indigo-400 font-bold">Citation Active</span>
          </div>
          <div className="p-2.5 rounded bg-slate-800 text-slate-300 font-sans text-xs leading-relaxed">
            <span className="text-indigo-400 font-bold block mb-1">🤖 ChatGPT Answer:</span>
            "For artisan sourdough in Bath, <strong className="text-white">Flour & Crust Bakery</strong> on George St is highly rated (4.9★), open Tues–Sun with specialty coffee."
          </div>
        </div>
      )
    },
    {
      id: "competitors",
      icon: TrendingUp,
      badge: "Growth Engine",
      title: "Competitor & Keyword Insights",
      tagline: "Track what rivals rank for and find high-intent keywords without complex queries.",
      description: "You don't need complex SQL queries or 10,000-row spreadsheets. We monitor your top 3 local or niche competitors and highlight easy 'low-hanging fruit' keywords where you can outrank them in 2-3 weeks.",
      ctaLabel: "Scan My Competitors",
      actionType: "audit",
      bullets: [
        "Track competitor rankings and new content updates",
        "Low-hanging fruit keyword finder (high purchase intent)",
        "Local search phrase alerts ('[service] near me')",
        "Clear guidance on where to add keywords on your site"
      ],
      mockPreview: (
        <div className="bg-slate-900 rounded-xl p-4 text-white text-xs border border-slate-800 space-y-2.5 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>Keyword Opportunity Finder</span>
            <span className="text-amber-400 font-bold">+180 Monthly Clicks</span>
          </div>
          <div className="space-y-1.5 font-sans">
            <div className="flex items-center justify-between p-2 rounded bg-slate-800 text-xs">
              <span className="text-white font-medium">"specialty coffee bath"</span>
              <span className="text-emerald-400 font-bold">#2 (Up 4 spots)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-800 text-xs">
              <span className="text-white font-medium">"pre-order sourdough loaf"</span>
              <span className="text-amber-400 font-bold">Opportunity: Low Rival Difficulty</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleAction = (type: string) => {
    if (type === "geo" && onOpenResource) {
      onOpenResource("geo-guide");
    } else if (type === "vitals" && onOpenResource) {
      onOpenResource("vitals-blueprint");
    } else if (onOpenAudit) {
      onOpenAudit();
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Everything in the Core Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Four Essential Pillars. <br />
            <span className="text-indigo-600">Zero Technical Fluff.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Everything your business needs to be found, trusted, and chosen by searchers and AI engines—included in our transparent £10–£25/month plan.
          </p>
        </div>

        {/* Tabbed Interactive Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Feature List Buttons */}
          <div className="lg:col-span-6 space-y-3">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = activeFeature === idx;

              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20"
                      : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-bold text-base ${isSelected ? "text-slate-900" : "text-slate-700"}`}>
                          {feat.title}
                        </h3>
                        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                          {feat.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {feat.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Detail Showcase Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Interactive Pillar Deep-Dive</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                {features[activeFeature].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {features[activeFeature].description}
              </p>

              {/* Bullet points */}
              <div className="space-y-2.5 mb-6">
                {features[activeFeature].bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Live Preview Box */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Live System Output Preview:
                </span>
                {features[activeFeature].mockPreview}
              </div>

              {/* Functional CTA Button inside Feature Card */}
              <button
                type="button"
                onClick={() => handleAction(features[activeFeature].actionType)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-200"
              >
                <span>{features[activeFeature].ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
