import React from "react";
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ListChecks, 
  HelpCircle, 
  Sparkles, 
  Clock, 
  PoundSterling,
  AlertTriangle,
  Zap
} from "lucide-react";

interface ProblemVsSolutionProps {
  onOpenAudit: () => void;
}

export const ProblemVsSolution: React.FC<ProblemVsSolutionProps> = ({ onOpenAudit }) => {
  return (
    <section id="problem-solution" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>The Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            No Complex Dashboards. <br />
            <span className="text-indigo-600">Just Clear, Prioritized Tasks to Rank Higher.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Traditional SEO tools were engineered for enterprise marketing agencies with full-time analysts. 
            If you run a real business, you need <strong>actionable steps</strong>, not overwhelming data.
          </p>
        </div>

        {/* Comparison Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* THE OLD WAY CARD */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Traditional SEO Tools</h3>
                    <p className="text-xs text-slate-500">Ahrefs, Semrush, Enterprise Suites</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-100/80 px-3 py-1 rounded-full border border-rose-200">
                  £120–£150 / mo
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">50-Page PDF Reports</strong>
                    <span className="text-xs text-slate-500">200+ raw charts that leave non-technical business owners paralyzed and confused.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Dense Technical Jargon</strong>
                    <span className="text-xs text-slate-500">Throws terms like 'canonicalization loops' and 'orphan URLs' without explaining why it matters.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">No Prioritization</strong>
                    <span className="text-xs text-slate-500">Gives you a list of 1,400 warnings without telling you which 2 items actually bring customers.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Expensive Enterprise Contracts</strong>
                    <span className="text-xs text-slate-500">Costs £1,400+ per year for complex feature suites that 95% of small businesses never touch.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Result: You spend hours deciphering graphs instead of growing your business.
            </div>
          </div>

          {/* THE SIMPLESEO WAY CARD */}
          <div className="bg-indigo-50/40 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/80 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-indigo-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-indigo-200/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/20">
                    <ListChecks className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">The SimpleSEO Way</h3>
                    <p className="text-xs text-indigo-800 font-medium">Built for Small Businesses & Founders</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-300">
                  £10–£25 / mo
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Prioritized 3-Step Weekly Tasks</strong>
                    <span className="text-xs text-slate-600">No endless lists. You get 3 high-impact items with exact time estimates (e.g. 4 mins).</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Plain-English Explanations</strong>
                    <span className="text-xs text-slate-600">Every task explains why it matters to your real customers and revenue in plain English.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Copy-Paste Fix Snippets</strong>
                    <span className="text-xs text-slate-600">Ready-made Schema JSON-LD, meta tags, and redirect rules generated for your exact site.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">AI Search Readiness (GEO) Included</strong>
                    <span className="text-xs text-slate-600">Ensure your business gets cited when shoppers ask ChatGPT, Claude, and Google AI Overviews.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-indigo-200 flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-950">
                Fix in 15 minutes a week.
              </span>
              <button
                type="button"
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                <span>Run Free 60-Sec Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
