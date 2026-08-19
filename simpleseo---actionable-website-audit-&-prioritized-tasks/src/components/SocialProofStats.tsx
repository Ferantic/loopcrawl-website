import React from "react";
import { Sparkles, Star, Quote, TrendingUp, CheckCircle2, Award } from "lucide-react";
import { BENCHMARK_STATS, TESTIMONIALS } from "../data/sampleData";

export const SocialProofStats: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Benchmark Statistics Strip */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-200/60">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
              <span>Market Research & Data</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Why Prioritized SEO Matters in 2025/2026
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENCHMARK_STATS.map((statItem, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {statItem.stat}
                  </span>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    {statItem.label}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 mt-4 block border-t border-slate-200 pt-2 font-medium">
                  {statItem.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div className="mt-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-200/60">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Real Customer Stories</span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Loved by Solo Founders, Cafés, Trades & Boutique Stores
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Hear how small business owners fixed their websites and gained customers without hiring expensive agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:bg-slate-50 transition-colors"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div>
                  {/* Result Pill */}
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{testimonial.resultMetric}</span>
                  </div>

                  {/* Author Card */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.role} • {testimonial.business}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
