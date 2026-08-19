import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  BookOpen, 
  Code2, 
  Check, 
  Copy, 
  Bot, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  FileText,
  Search
} from "lucide-react";

export type ResourceTopic = 
  | "geo-guide" 
  | "schema-snippets" 
  | "vitals-blueprint" 
  | "privacy" 
  | "terms";

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: ResourceTopic;
  onOpenAudit: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({
  isOpen,
  onClose,
  initialTopic = "geo-guide",
  onOpenAudit,
}) => {
  const [activeTopic, setActiveTopic] = useState<ResourceTopic>(initialTopic);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialTopic) {
      setActiveTopic(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const schemaLocalBusiness = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://yourwebsite.com/logo.png",
  "telephone": "+44 20 7946 0912",
  "email": "info@yourbusiness.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 High Street",
    "addressLocality": "London",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00"
    }
  ],
  "priceRange": "££"
}`;

  const schemaFaq = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can I see SEO improvements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixing technical speed bottlenecks and title tags can yield indexation and ranking gains within 1 to 3 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a £150/month enterprise SEO tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Small businesses only need to focus on the top 3-5 high-impact technical and on-page fixes each month."
      }
    }
  ]
}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-400/30">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Knowledge Base & Plain-English Guides</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            SimpleSEO Resource Center
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Practical guides and copy-paste templates designed for small businesses and non-technical founders.
          </p>

          {/* Tab Navigation */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTopic("geo-guide")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTopic === "geo-guide"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              🤖 AI Search (GEO) Guide
            </button>

            <button
              type="button"
              onClick={() => setActiveTopic("schema-snippets")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTopic === "schema-snippets"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              📋 Schema JSON-LD Snippets
            </button>

            <button
              type="button"
              onClick={() => setActiveTopic("vitals-blueprint")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTopic === "vitals-blueprint"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              ⚡ Core Web Vitals Blueprint
            </button>

            <button
              type="button"
              onClick={() => setActiveTopic("privacy")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTopic === "privacy"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              🔒 Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => setActiveTopic("terms")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTopic === "terms"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              📜 Terms of Service
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm leading-relaxed">
          
          {/* TOPIC 1: AI SEARCH (GEO) GUIDE */}
          {activeTopic === "geo-guide" && (
            <div className="space-y-5">
              <div className="p-4 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl">
                <h3 className="font-bold text-indigo-950 text-base mb-1 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  What is Generative Engine Optimization (GEO)?
                </h3>
                <p className="text-xs sm:text-sm text-indigo-900/80">
                  When potential customers ask ChatGPT, Perplexity, or Google AI Overviews questions like <em>"best sourdough bakery in Bath"</em> or <em>"affordable commercial cleaner near me"</em>, the AI doesn't read standard blue links. It queries structured semantic entities and citations.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <h4 className="font-bold text-slate-900 text-base font-heading">
                  The 3 Golden Rules for AI Citations:
                </h4>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-bold text-indigo-700 block">1. Embed Structured Schema.org JSON-LD</span>
                  <p className="text-slate-600">
                    Always embed explicit business data (Address, Price Range, Opening Hours, Services). AI crawlers parse structured JSON-LD with 99% accuracy vs crawling messy HTML text.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-bold text-indigo-700 block">2. Answer Specific Questions with Direct Headings (H2 / H3)</span>
                  <p className="text-slate-600">
                    Include clear Q&A sections on your landing pages (e.g., "Do you offer vegan catering?", "How much does a boiler service cost?"). LLMs lift direct 2-sentence answers straight into their summaries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-bold text-indigo-700 block">3. Keep NAP (Name, Address, Phone) 100% Consistent</span>
                  <p className="text-slate-600">
                    Your Google Business Profile, Apple Maps, and website footer must have matching punctuation and phone numbers. LLMs cross-reference citation trust across 3+ sources before recommending you.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAudit();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Check Your Site's AI Readiness in 60s</span>
                </button>
              </div>
            </div>
          )}

          {/* TOPIC 2: SCHEMA SNIPPETS */}
          {activeTopic === "schema-snippets" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1 font-heading">
                  1-Click Copy-Paste Schema.org JSON-LD Snippets
                </h3>
                <p className="text-xs text-slate-500">
                  Paste these inside your website's <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">&lt;head&gt;</code> tag or into your WordPress / Shopify SEO code injection settings.
                </p>
              </div>

              {/* Local Business Schema */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-900 text-white">
                <div className="px-4 py-2.5 bg-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">LocalBusiness Schema (For Shops, Trades, Cafés)</span>
                  <button
                    type="button"
                    onClick={() => handleCopy("local", schemaLocalBusiness)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[11px] transition-colors cursor-pointer"
                  >
                    {copiedKey === "local" ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "local" ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>
                <pre className="p-4 text-indigo-300 font-mono text-xs overflow-x-auto">
                  {schemaLocalBusiness}
                </pre>
              </div>

              {/* FAQ Page Schema */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-900 text-white">
                <div className="px-4 py-2.5 bg-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">FAQPage Schema (For Ranking in Rich Snippets)</span>
                  <button
                    type="button"
                    onClick={() => handleCopy("faq", schemaFaq)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[11px] transition-colors cursor-pointer"
                  >
                    {copiedKey === "faq" ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "faq" ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>
                <pre className="p-4 text-indigo-300 font-mono text-xs overflow-x-auto">
                  {schemaFaq}
                </pre>
              </div>
            </div>
          )}

          {/* TOPIC 3: CORE WEB VITALS BLUEPRINT */}
          {activeTopic === "vitals-blueprint" && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base font-heading">
                How to Score 90+ on Core Web Vitals Without a Developer
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">LCP (Largest Contentful Paint)</span>
                  <span className="text-emerald-700 font-semibold block mb-1">Target: &lt; 2.5s</span>
                  <p className="text-emerald-800/80">Compress your top hero banner photo to under 150KB in modern WebP format.</p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs">
                  <span className="font-bold text-indigo-900 block mb-1">CLS (Cumulative Layout Shift)</span>
                  <span className="text-indigo-700 font-semibold block mb-1">Target: &lt; 0.1</span>
                  <p className="text-indigo-800/80">Always specify width & height HTML attributes on image tags to prevent jumping.</p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs">
                  <span className="font-bold text-purple-900 block mb-1">INP (Interaction to Next Paint)</span>
                  <span className="text-purple-700 font-semibold block mb-1">Target: &lt; 200ms</span>
                  <p className="text-purple-800/80">Remove unused tracking scripts and chat widgets on mobile screens.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
                <span className="font-bold text-slate-800 block">3 Quick Wins You Can Do in 10 Minutes:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Use free tools like Squoosh.app to convert PNGs to modern WebP images.</li>
                  <li>Enable browser caching in your hosting settings (Cloudflare, cPanel, or Netlify).</li>
                  <li>Lazy-load images below the fold using <code className="bg-slate-200 px-1 py-0.5 rounded">loading="lazy"</code>.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TOPIC 4: PRIVACY POLICY */}
          {activeTopic === "privacy" && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base font-heading">
                SimpleSEO Privacy Policy (Plain English)
              </h3>
              <p className="text-slate-600">
                Last updated: August 2026. We believe privacy should be as straightforward as our SEO checklists.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">1. Public Audit Data</span>
                  <p className="text-xs text-slate-600">When you run a free 60-second website audit, our crawler only reads publicly available HTML, metadata, and page speed statistics that search engines index.</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">2. No Spam & No Data Brokering</span>
                  <p className="text-xs text-slate-600">We will never sell, rent, or trade your email address or business domain to third-party ad networks or marketing agencies.</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">3. Cookie & Analytics Transparency</span>
                  <p className="text-xs text-slate-600">We use minimal session cookies strictly necessary to maintain your login session and deliver your audit reports. No invasive cross-site ad trackers.</p>
                </div>
              </div>
            </div>
          )}

          {/* TOPIC 5: TERMS OF SERVICE */}
          {activeTopic === "terms" && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base font-heading">
                SimpleSEO Terms of Service
              </h3>
              <p className="text-slate-600">
                Transparent and fair terms for small businesses and solo creators.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">1. 14-Day Risk-Free Trial</span>
                  <p className="text-xs text-slate-600">All paid plans (£10–£25/mo) come with a full 14-day free trial. If you cancel before the trial period concludes, you will not be charged a single penny.</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">2. Zero Contract Lock-In</span>
                  <p className="text-xs text-slate-600">Cancel or change your subscription plan at any time with 1 click in your account settings. There are no cancellation penalties or hidden maintenance fees.</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">3. Automated Scans & Fair Use</span>
                  <p className="text-xs text-slate-600">Automated weekly scans are scheduled during off-peak hours to avoid burdening your web server bandwidth.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-500">Need specific help? Contact founder support anytime.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
