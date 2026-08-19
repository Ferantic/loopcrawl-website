import React, { useState } from "react";
import { TrendingUp, Sparkles, PoundSterling, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAudit }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(1500);
  const [avgCustomerValue, setAvgCustomerValue] = useState(45);

  // Industry estimation formulas:
  // ~4% of visitors convert when site is optimized, but 45% lost due to mobile speed lag and poor meta titles
  const missedCustomersPerMonth = Math.max(1, Math.round((monthlyVisitors * 0.04) * 0.45));
  const missedRevenuePerMonth = missedCustomersPerMonth * avgCustomerValue;
  const annualAgencyCost = 1500 * 12; // £18,000
  const simpleSeoAnnualCost = 15 * 12; // £180
  const annualToolSavings = (120 * 12) - simpleSeoAnnualCost; // vs £120/mo tool = £1,260

  return (
    <section id="roi-calculator" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
            <span>ROI & Savings Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            How Much Revenue Is Your Website <br />
            <span className="text-indigo-600">Leaving on the Table?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Slide the numbers below to calculate your estimated missed monthly revenue from unoptimized speed, missing titles, and absent AI schemas.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sliders Input Column */}
            <div className="md:col-span-7 space-y-7">
              
              {/* Slider 1: Monthly Visitors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Estimated Monthly Website Visitors:
                  </label>
                  <span className="text-base font-extrabold text-indigo-400 font-mono">
                    {monthlyVisitors.toLocaleString()} visits
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="20000"
                  step="100"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>200</span>
                  <span>10,000</span>
                  <span>20,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Customer / Order Value */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Average Customer Value (or Sale):
                  </label>
                  <span className="text-base font-extrabold text-emerald-400 font-mono">
                    £{avgCustomerValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>£10</span>
                  <span>£250</span>
                  <span>£500+</span>
                </div>
              </div>

              {/* Breakdown Note */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>The 15-Minute Recovery Plan:</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Fixing your top 3 slow image files and adding target local city names to your meta tags can recover up to <strong>£{missedRevenuePerMonth.toLocaleString()}</strong> in sales every month.
                </p>
              </div>

            </div>

            {/* Calculations & Results Column */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-800 to-slate-800/90 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Estimated Missed Revenue
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300 font-heading">
                    ~£{missedRevenuePerMonth.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    (~{missedCustomersPerMonth} missed paying customers/mo)
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Tool Cost Savings vs Semrush:</span>
                    <span className="font-bold text-emerald-400 font-mono">+£{annualToolSavings.toLocaleString()}/yr</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Agency Retainer Savings:</span>
                    <span className="font-bold text-emerald-400 font-mono">+£{annualAgencyCost.toLocaleString()}/yr</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200" />
                  <span>Recover This Revenue (Free Audit)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  100% free • Instant 60-second site scan
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
