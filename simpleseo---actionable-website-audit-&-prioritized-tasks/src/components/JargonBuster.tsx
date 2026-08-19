import React, { useState } from "react";
import { Search, BookOpen, Sparkles, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { JARGON_BUSTER_ITEMS } from "../data/sampleData";

interface JargonBusterProps {
  onOpenAudit?: () => void;
}

export const JargonBuster: React.FC<JargonBusterProps> = ({ onOpenAudit }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Technical", "AI Search", "Ranking"];

  const filteredItems = JARGON_BUSTER_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.plainEnglishDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.actionTip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="jargon-buster" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>SEO Jargon Buster</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            SEO Terms Translated Into <br />
            <span className="text-indigo-600">Plain, Simple English.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            No confusing agency acronyms. Here is what technical SEO buzzwords actually mean for your business and revenue.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any SEO term (e.g. Schema, Canonical, LCP, Crawl Budget)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm shadow-xs transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat} Terms
              </button>
            ))}
          </div>
        </div>

        {/* Jargon Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {item.term}
                  </h3>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    {item.category}
                  </span>
                </div>

                {/* Confusing Agency Definition (strikethrough / contrast) */}
                <div className="p-3 bg-rose-50/60 border border-rose-100 rounded-2xl mb-3 text-xs text-rose-900/80">
                  <span className="font-bold text-rose-800 block mb-0.5">Agency Jargon Definition:</span>
                  <p className="line-through opacity-75">{item.confusingDefinition}</p>
                </div>

                {/* Plain English Translation */}
                <div className="p-3.5 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl mb-4 text-xs sm:text-sm text-indigo-950">
                  <span className="font-bold text-indigo-800 block mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Plain-English Translation:
                  </span>
                  <p className="leading-relaxed">{item.plainEnglishDefinition}</p>
                </div>
              </div>

              {/* Action Tip */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
                <strong className="text-slate-900">⚡ What to do: </strong>
                <span>{item.actionTip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below jargon buster */}
        {onOpenAudit && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs sm:text-sm text-slate-700 font-medium">
                Don't want to worry about acronyms? We translate everything automatically.
              </span>
              <button
                type="button"
                onClick={onOpenAudit}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Run Free 60s Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
