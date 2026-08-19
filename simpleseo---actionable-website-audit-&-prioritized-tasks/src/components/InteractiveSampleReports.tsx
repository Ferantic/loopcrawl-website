import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  FileText, 
  Check, 
  Copy, 
  ShoppingBag, 
  Briefcase, 
  Utensils, 
  Bot, 
  AlertCircle,
  Eye,
  SlidersHorizontal
} from "lucide-react";
import { SAMPLE_REPORT_PRESETS } from "../data/sampleData";
import { AuditReport } from "../types";

interface InteractiveSampleReportsProps {
  onSelectSampleReport: (report: AuditReport) => void;
}

export const InteractiveSampleReports: React.FC<InteractiveSampleReportsProps> = ({
  onSelectSampleReport,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>("preset-bakery");
  const [viewMode, setViewMode] = useState<"simple" | "traditional">("simple");

  const currentPreset = SAMPLE_REPORT_PRESETS.find((p) => p.id === selectedPresetId) || SAMPLE_REPORT_PRESETS[0];

  return (
    <section id="sample-reports" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Sample Reports</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            See Exactly What You Get. <br />
            <span className="text-indigo-600">No Fluff. Just 15-Minute Fixes.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Toggle between our plain-English checklist and the confusing 50-page enterprise PDF reports to see the difference.
          </p>
        </div>

        {/* Business Niche Selector Pills & View Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-8">
          
          {/* Niche Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SAMPLE_REPORT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSelectedPresetId(preset.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  selectedPresetId === preset.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                }`}
              >
                <span>{preset.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  selectedPresetId === preset.id ? "bg-slate-800 text-indigo-300" : "bg-slate-200 text-slate-600"
                }`}>
                  Score: {preset.initialScore}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle Switch */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => setViewMode("simple")}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "simple"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SimpleSEO Action List</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("traditional")}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "traditional"
                  ? "bg-slate-800 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Traditional 50-Page Audit</span>
            </button>
          </div>

        </div>

        {/* INTERACTIVE PREVIEW CONTAINER */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Header of preview window */}
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <div className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                Sample Audit Preview: <strong className="text-white">{currentPreset.url}</strong>
              </span>
            </div>

            <button
              type="button"
              onClick={() => onSelectSampleReport(currentPreset.report)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors cursor-pointer"
            >
              <span>Open Full Interactive Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* VIEW 1: THE SIMPLESEO WAY */}
          {viewMode === "simple" && (
            <div className="p-6 sm:p-8 bg-white">
              {/* Summary strip */}
              <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-950">
                      SEO Health Score: {currentPreset.initialScore}/100
                    </span>
                    <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md">
                      Fixes take ~{currentPreset.report.estimatedFixTimeMinutes} mins
                    </span>
                  </div>
                  <p className="text-xs text-indigo-900/80">
                    {currentPreset.report.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">After 3 Fixes:</span>
                    <span className="text-sm font-extrabold text-indigo-600">
                      {currentPreset.fixedScore}/100 (Est. +45% traffic)
                    </span>
                  </div>
                </div>
              </div>

              {/* Actionable prioritized tasks */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Prioritized 3-Step Weekly Action List:
                </h4>

                {currentPreset.report.tasks.slice(0, 3).map((task, idx) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                          task.priority === "critical"
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}>
                          {task.priority} Priority
                        </span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.timeToFix}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-indigo-700">
                        {task.impact}
                      </span>
                    </div>

                    <h5 className="text-sm font-bold text-slate-900 mb-1">
                      {task.title}
                    </h5>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      <strong>Why it matters:</strong> {task.plainEnglishExplanation}
                    </p>

                    {task.codeSnippet && (
                      <div className="bg-slate-900 rounded-xl p-2.5 text-indigo-300 font-mono text-[11px] overflow-x-auto border border-slate-800">
                        <span className="text-slate-400 block mb-1 font-sans text-[10px]">
                          ✓ Copy-Paste Snippet:
                        </span>
                        {task.codeSnippet}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: TRADITIONAL 50-PAGE ENTERPRISE REPORT */}
          {viewMode === "traditional" && (
            <div className="p-6 sm:p-8 bg-slate-100/80 font-mono text-xs text-slate-600 space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-900 font-sans mb-4">
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>The Overwhelming Enterprise Agency Experience:</span>
                </div>
                <p className="text-xs text-rose-700">
                  Notice how difficult it is to know where to begin. 140 different metrics with zero plain-English guidance.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-slate-400">PDF Report Page 1 of 54 • Crawl Depth 4</div>
                <div className="font-bold text-slate-800">
                  HTTP Status 301 vs 302 Redirection Chains & Canonicals:
                </div>
                <div className="text-[11px] text-slate-500">
                  Found 43 non-200 responses. Relative href attribute pointing to /cat/29?filter=asc lacked rel=prev/next tag. Server latency TTFB 480ms exceeds 90th percentile threshold.
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px]">
                  <div className="p-2 bg-slate-50 border rounded-lg">DOM Depth: 32</div>
                  <div className="p-2 bg-slate-50 border rounded-lg">INP: 184ms</div>
                  <div className="p-2 bg-slate-50 border rounded-lg">Robots.txt regex: Valid</div>
                </div>
              </div>

              <div className="text-center pt-2 font-sans">
                <button
                  type="button"
                  onClick={() => setViewMode("simple")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Switch Back to SimpleSEO Prioritized Task List</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
