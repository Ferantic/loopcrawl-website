import React, { useState } from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Clock,
  TrendingUp,
  PoundSterling
} from "lucide-react";
import { PRICING_PLANS } from "../data/sampleData";
import { PricingPlan } from "../types";

interface PricingSectionProps {
  onOpenAudit: () => void;
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onOpenAudit,
  onSelectPlan,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Transparent Low-Barrier Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            SEO That Fits a Small Business Budget. <br />
            <span className="text-indigo-600">Starting at Just £10/Month.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Stop paying £120–£150/month for complex enterprise suites. Get everything you need to rank higher with zero lock-in contracts.
          </p>

          {/* Billing Interval Toggle (Annual vs Monthly) */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-950 text-indigo-200">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                  plan.highlight
                    ? "bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-500/10 ring-4 ring-indigo-500/10 -translate-y-1"
                    : "bg-white border border-slate-200 shadow-md hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-600 text-white shadow-sm tracking-wide uppercase">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {plan.siteCount}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading">
                      £{price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month {isAnnual && "(billed annually)"}
                    </span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Included in Plan:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className={feature.startsWith("Everything in") ? "font-bold text-slate-900" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.highlight
                        ? "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-md shadow-indigo-600/25"
                        : "bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white shadow-sm"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    14-day free trial • Cancel anytime with 1 click
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON CALLOUT VS ENTERPRISE TOOLS */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Small Business Price Guarantee</span>
              </div>
              <h3 className="text-xl font-bold font-heading">
                Why pay £1,400+/year for enterprise data you don't need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                SimpleSEO delivers 100% of the actionable outcomes for <strong>less than 15% of the cost</strong>. Save over £1,200 annually while cutting your weekly SEO workload down to 15 minutes.
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end flex-shrink-0">
              <span className="text-xs text-slate-400">Average Annual Savings:</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-heading">
                £1,248 / year
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">vs Ahrefs / Semrush Standard</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
