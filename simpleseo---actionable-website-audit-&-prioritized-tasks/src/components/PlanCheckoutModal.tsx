import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Mail, 
  Lock, 
  Building2, 
  Clock,
  Zap,
  CheckCircle2
} from "lucide-react";
import { PricingPlan } from "../types";
import { PRICING_PLANS } from "../data/sampleData";

interface PlanCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  initialAnnual?: boolean;
  onConfirmPlan: (planDetails: {
    planName: string;
    price: number;
    isAnnual: boolean;
    domain: string;
    email: string;
  }) => void;
}

export const PlanCheckoutModal: React.FC<PlanCheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan: initialPlan,
  initialAnnual = true,
  onConfirmPlan,
}) => {
  const [activePlanId, setActivePlanId] = useState<string>(initialPlan?.id || "growth");
  const [isAnnual, setIsAnnual] = useState(initialAnnual);
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("Local Business");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialPlan) {
      setActivePlanId(initialPlan.id);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find(p => p.id === activePlanId) || PRICING_PLANS[1];
  const price = isAnnual ? currentPlan.annualMonthlyPrice : currentPlan.monthlyPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim() || !email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onConfirmPlan({
        planName: currentPlan.name,
        price,
        isAnnual,
        domain: domain.trim(),
        email: email.trim(),
      });
    }, 900);
  };

  const handleCloseModal = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-7 text-white relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>14-Day Free Trial • No Credit Card Required</span>
          </div>

          <h2 className="text-2xl font-bold font-heading">
            {isSuccess ? "Welcome to SimpleSEO!" : `Start with ${currentPlan.name}`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {isSuccess 
              ? "Your automated weekly crawlers and AI search trackers are now active." 
              : "Get your prioritized 15-minute weekly checklist with zero lock-in contracts."}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            /* SUCCESS CONFIRMATION VIEW */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  14-Day Free Trial Successfully Activated
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We've initiated an automated deep crawl for <strong>{domain}</strong>. Your first plain-English 15-minute action checklist will be delivered to <strong>{email}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Selected Plan:</span>
                  <span className="font-bold text-slate-900">{currentPlan.name} (£{price}/mo)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>First Billing Date:</span>
                  <span className="font-bold text-emerald-600">14 Days from today (Cancel anytime)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Scans Included:</span>
                  <span className="font-bold text-slate-900">Weekly automated speed & AI search audits</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all cursor-pointer"
                >
                  Go to Action Checklist
                </button>
              </div>
            </div>
          ) : (
            /* CHECKOUT FORM VIEW */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Plan Switcher Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Plan:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => {
                    const isSelected = activePlanId === plan.id;
                    const p = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setActivePlanId(plan.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? "text-indigo-900" : "text-slate-800"}`}>
                            {plan.name}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                        </div>
                        <div className="text-base font-extrabold text-slate-900 font-heading">
                          £{p}<span className="text-[10px] font-normal text-slate-500">/mo</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {plan.siteCount}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Billing Toggle (Annual vs Monthly) */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-slate-700">Billing Interval:</span>
                  <span className="text-slate-500">{isAnnual ? "Annual (Save 20%)" : "Monthly"}</span>
                </div>
                <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs">
                  <button
                    type="button"
                    onClick={() => setIsAnnual(false)}
                    className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      !isAnnual ? "bg-slate-900 text-white font-bold" : "text-slate-600"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAnnual(true)}
                    className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      isAnnual ? "bg-indigo-600 text-white font-bold" : "text-slate-600"
                    }`}
                  >
                    Annual (-20%)
                  </button>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Website URL to Monitor & Optimize
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="e.g. mybusiness.co.uk"
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Business Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@business.co.uk"
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Category
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Local Business">Local Business & Trades</option>
                      <option value="E-Commerce Store">E-Commerce & Online Retail</option>
                      <option value="Freelancer / Portfolio">Freelance & Consulting</option>
                      <option value="SaaS & Digital">SaaS & Digital Products</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guarantee Strip */}
              <div className="p-3.5 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-950">
                  <span className="font-bold block mb-0.5">14-Day Free Risk-Free Trial Guarantee</span>
                  <span>You won't be charged today. Enjoy 14 full days of automated weekly scans, plain-English fixes, and competitor tracking. Cancel anytime in 1 click.</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-200"
                >
                  <span>{isSubmitting ? "Activating 14-Day Free Trial..." : "Start 14-Day Free Trial Now"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>✓ Instant activation</span>
          <span>✓ Zero contract lock-in</span>
          <span>✓ Dedicated founder support</span>
        </div>

      </div>
    </div>
  );
};
