import React, { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Zap, 
  Bot, 
  TrendingUp, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp,
  X,
  ExternalLink,
  Globe,
  Gauge,
  FileCode2,
  Image as ImageIcon,
  Heading,
  CheckCircle,
  AlertCircle,
  Share2,
  Lock,
  Layers,
  Search
} from "lucide-react";
import { AuditReport, AuditTask, TaskPriority } from "../types";

interface AuditReportViewProps {
  report: AuditReport;
  onClose?: () => void;
  onResetAudit?: () => void;
  isModal?: boolean;
}

export const AuditReportView: React.FC<AuditReportViewProps> = ({
  report: initialReport,
  onClose,
  onResetAudit,
  isModal = false,
}) => {
  const [tasks, setTasks] = useState<AuditTask[]>(initialReport.tasks);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);
  const [expandedTaskId, setExpandedTaskId] = useState<string>(initialReport.tasks[0]?.id || "");
  const [activeTab, setActiveTab] = useState<"inspection" | "tasks" | "ai-search" | "competitors">("inspection");

  const live = initialReport.liveData;

  // Calculate live score as user checks off tasks
  const fixedCount = tasks.filter((t) => t.status === "fixed").length;
  const totalTasks = tasks.length;
  const scoreBoost = Math.round((fixedCount / (totalTasks || 1)) * (98 - initialReport.overallScore));
  const currentScore = Math.min(99, initialReport.overallScore + scoreBoost);

  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const nextStatus = task.status === "fixed" ? "pending" : "fixed";
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  const getPriorityBadge = (priority: TaskPriority) => {
    switch (priority) {
      case "critical":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Critical
          </span>
        );
      case "high":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            High
          </span>
        );
      case "medium":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Quick Win
          </span>
        );
    }
  };

  return (
    <div
      id="audit-report-container"
      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-w-3xl w-full mx-auto flex flex-col max-h-[88vh]"
    >
      {/* Compact Report Header */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {live?.isLiveScan ? "Live Website Scan" : "Interactive Audit Report"}
              </span>
              {live?.dataSource && (
                <span className="text-[10px] text-slate-400 font-mono">
                  via {live.dataSource}
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg font-bold font-heading text-white truncate flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span className="truncate">{initialReport.url}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {onResetAudit && (
              <button
                type="button"
                onClick={onResetAudit}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Audit</span>
              </button>
            )}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close report"
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Compact Health Score Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-3 pt-3 border-t border-slate-800/80">
          {/* Main Score Wheel */}
          <div className="sm:col-span-5 bg-slate-800/70 rounded-xl p-2.5 border border-slate-700/60 flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-700"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={`transition-all duration-700 ${
                    currentScore >= 85 ? "text-emerald-400" : currentScore >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}
                  strokeDasharray={`${currentScore}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-base font-extrabold text-white leading-none">
                  {currentScore}
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white">Overall SEO Health</span>
                {fixedCount > 0 && (
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950 px-1 py-0.2 rounded border border-emerald-800">
                    +{scoreBoost} pts
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-300 truncate">
                {fixedCount === totalTasks
                  ? "All tasks fixed! Score boosted."
                  : `${totalTasks - fixedCount} tasks left (~${initialReport.estimatedFixTimeMinutes}m total)`}
              </p>
            </div>
          </div>

          {/* Breakdown Mini Indicators */}
          <div className="sm:col-span-7 grid grid-cols-4 gap-1.5 text-center">
            <div className="bg-slate-800/40 rounded-xl p-1.5 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block truncate">Speed</span>
              <span className="text-xs font-bold text-white block">{initialReport.healthBreakdown.technicalSpeed}</span>
              <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${initialReport.healthBreakdown.technicalSpeed}%` }} />
              </div>
            </div>

            <div className="bg-slate-800/40 rounded-xl p-1.5 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block truncate">Meta</span>
              <span className="text-xs font-bold text-white block">{initialReport.healthBreakdown.onPageMeta}</span>
              <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${initialReport.healthBreakdown.onPageMeta}%` }} />
              </div>
            </div>

            <div className="bg-slate-800/40 rounded-xl p-1.5 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block truncate">AI GEO</span>
              <span className="text-xs font-bold text-emerald-300 block">{initialReport.healthBreakdown.aiSearchReadiness}</span>
              <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${initialReport.healthBreakdown.aiSearchReadiness}%` }} />
              </div>
            </div>

            <div className="bg-slate-800/40 rounded-xl p-1.5 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block truncate">Keywords</span>
              <span className="text-xs font-bold text-white block">{initialReport.healthBreakdown.competitorKeywords}</span>
              <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: `${initialReport.healthBreakdown.competitorKeywords}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-xs font-bold flex-shrink-0 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab("inspection")}
          className={`pb-2.5 px-2 flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "inspection"
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Live Site Findings</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tasks")}
          className={`pb-2.5 px-2 flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "tasks"
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>15-Min Fixes ({tasks.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ai-search")}
          className={`pb-2.5 px-2 flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "ai-search"
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Bot className="w-3.5 h-3.5 text-indigo-600" />
          <span>AI Search (GEO)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("competitors")}
          className={`pb-2.5 px-2 flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "competitors"
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Keywords & Rivals</span>
        </button>
      </div>

      {/* Scrollable Main Content Area */}
      <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
        
        {/* TAB 0: LIVE SITE FINDINGS (REAL GOOGLE PAGESPEED + DOM INSPECTION) */}
        {activeTab === "inspection" && (
          <div className="space-y-3 text-xs">
            
            {/* Google PageSpeed & Core Web Vitals Card */}
            <div className="bg-slate-900 text-white rounded-xl p-3.5 border border-slate-800">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-sm text-white">Google PageSpeed & Core Web Vitals</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Google API Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center mb-3">
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 block">Performance</span>
                  <span className={`text-base font-extrabold block ${
                    (live?.googlePerformanceScore ?? initialReport.healthBreakdown.technicalSpeed) >= 80 ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {live?.googlePerformanceScore ?? initialReport.healthBreakdown.technicalSpeed}/100
                  </span>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 block">Google SEO</span>
                  <span className={`text-base font-extrabold block ${
                    (live?.googleSeoScore ?? initialReport.healthBreakdown.onPageMeta) >= 80 ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {live?.googleSeoScore ?? initialReport.healthBreakdown.onPageMeta}/100
                  </span>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 block">Accessibility</span>
                  <span className="text-base font-extrabold text-emerald-400 block">
                    {live?.googleAccessibilityScore ?? 88}/100
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-slate-800">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px]">Largest Contentful Paint (LCP):</span>
                  <span className="font-mono font-bold text-slate-200">{live?.lcp || "2.1 s"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px]">Layout Shift (CLS):</span>
                  <span className="font-mono font-bold text-slate-200">{live?.cls || "0.04"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px]">First Contentful Paint (FCP):</span>
                  <span className="font-mono font-bold text-slate-200">{live?.fcp || "1.2 s"}</span>
                </div>
              </div>
            </div>

            {/* Real Meta Tags & HTML Inspector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              
              {/* Title Tag */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Title Tag</span>
                  </span>
                  {live?.titleStatus === "good" ? (
                    <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded border border-emerald-200">
                      {live.titleLength} Chars • Optimal
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold bg-rose-50 text-rose-700 px-1.5 py-0.2 rounded border border-rose-200">
                      {live?.titleLength ?? 0} Chars • {live?.titleStatus === "missing" ? "Missing" : live?.titleStatus === "too_short" ? "Too Short" : "Too Long"}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 font-mono break-all line-clamp-2">
                  {live?.title || "No <title> tag found on page"}
                </p>
                <p className="text-[10px] text-slate-500">
                  Ideal length: 50–60 characters with core service & location.
                </p>
              </div>

              {/* Meta Description */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Meta Description</span>
                  </span>
                  {live?.descriptionStatus === "good" ? (
                    <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded border border-emerald-200">
                      {live.descriptionLength} Chars • Optimal
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold bg-amber-50 text-amber-700 px-1.5 py-0.2 rounded border border-amber-200">
                      {live?.descriptionLength ?? 0} Chars • {live?.descriptionStatus === "missing" ? "Missing" : live?.descriptionStatus === "too_short" ? "Too Short" : "Too Long"}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 font-mono break-all line-clamp-2">
                  {live?.description || "No <meta name='description'> found"}
                </p>
                <p className="text-[10px] text-slate-500">
                  Ideal length: 140–160 characters with clear call to action.
                </p>
              </div>

              {/* Headings Structure */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Heading className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Heading Hierarchy</span>
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    live?.h1Count === 1 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    {live?.h1Count ?? 1} H1 Tag{live?.h1Count === 1 ? " (Optimal)" : " (Needs Fix)"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 truncate">
                  <span className="text-slate-400 font-mono">H1:</span> {live?.h1Text || "No H1 detected"}
                </p>
                <p className="text-[10px] text-slate-500">
                  {live?.h2Count ?? 0} H2 subheadings detected on page.
                </p>
              </div>

              {/* Images & Missing Alt */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Image Alt Attributes</span>
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    (live?.imagesMissingAlt ?? 0) === 0
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    {live?.imagesMissingAlt ?? 0}/{live?.imagesTotal ?? 0} Missing ({live?.missingAltPercent ?? 0}%)
                  </span>
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 truncate">
                  {live?.sampleMissingAlt && live.sampleMissingAlt.length > 0 
                    ? `Missing: ${live.sampleMissingAlt.join(", ")}` 
                    : "All scanned images have alt attributes"}
                </p>
                <p className="text-[10px] text-slate-500">
                  Alt text helps visually impaired visitors & ranks in Google Images.
                </p>
              </div>

              {/* Canonical Tag */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Canonical & Social Tags</span>
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    live?.hasCanonical 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    {live?.hasCanonical ? "Canonical OK" : "Canonical Missing"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 truncate">
                  {live?.canonicalHref || "No <link rel='canonical'> specified"}
                </p>
                <p className="text-[10px] text-slate-500">
                  Open Graph: {live?.hasOgTitle ? "og:title present" : "missing og:title"} • {live?.hasOgImage ? "og:image present" : "missing og:image"}
                </p>
              </div>

              {/* Schema JSON-LD */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Schema.org JSON-LD</span>
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    live?.hasSchema 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-rose-50 text-rose-700 border-rose-200"
                  }`}>
                    {live?.hasSchema ? "Schema Active" : "No Schema Found"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 truncate">
                  {live?.schemaTypes && live.schemaTypes.length > 0 
                    ? `Types: ${live.schemaTypes.join(", ")}` 
                    : "No structured entities for AI engines"}
                </p>
                <p className="text-[10px] text-slate-500">
                  Required for ChatGPT & Google AI Overview citation cards.
                </p>
              </div>

            </div>

            {/* Quick Action to Fixes */}
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-bold text-indigo-950 block">Ready to fix these issues?</span>
                <span className="text-[11px] text-indigo-800">We generated a 15-minute checklist with copy-paste code.</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("tasks")}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 1: PRIORITIZED TASKS */}
        {activeTab === "tasks" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">
                15-Minute Action Checklist ({fixedCount}/{totalTasks} Completed)
              </span>
              <span className="text-[11px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-semibold">
                Click task to view fix & code
              </span>
            </div>

            {/* Task Item Cards */}
            <div className="space-y-2.5">
              {tasks.map((task, idx) => {
                const isExpanded = expandedTaskId === task.id;
                const isFixed = task.status === "fixed";

                return (
                  <div
                    key={task.id}
                    className={`rounded-xl border transition-all ${
                      isFixed
                        ? "bg-slate-50/80 border-slate-200 opacity-75"
                        : isExpanded
                        ? "bg-white border-indigo-500 shadow-sm ring-1 ring-indigo-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Task Header Row */}
                    <div 
                      className="p-3 sm:p-3.5 flex items-start justify-between gap-2.5 cursor-pointer"
                      onClick={() => setExpandedTaskId(isExpanded ? "" : task.id)}
                    >
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        {/* Interactive Checkbox */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTaskStatus(task.id);
                          }}
                          className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                            isFixed
                              ? "bg-emerald-600 text-white"
                              : "border-2 border-slate-300 hover:border-indigo-500 bg-white"
                          }`}
                          aria-label={isFixed ? "Mark as pending" : "Mark as fixed"}
                        >
                          {isFixed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1">
                            <span className="w-4 h-4 rounded bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            {getPriorityBadge(task.priority)}
                            <span className="inline-flex items-center gap-0.5 text-[10px] text-slate-500 font-medium bg-slate-100 px-1.5 py-0.5 rounded">
                              <Clock className="w-2.5 h-2.5" />
                              {task.timeToFix}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              • {task.category}
                            </span>
                          </div>

                          <h4 className={`text-xs sm:text-sm font-bold truncate ${isFixed ? "line-through text-slate-500" : "text-slate-900"}`}>
                            {task.title}
                          </h4>

                          <p className="text-[11px] text-indigo-700 font-medium mt-0.5">
                            ⚡ {task.impact}
                          </p>

                          {task.liveMetricDetail && (
                            <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
                              🔍 {task.liveMetricDetail}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Expand / Collapse Icon */}
                      <button
                        type="button"
                        aria-label="Expand task details"
                        className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer flex-shrink-0"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Expanded Task Instructions */}
                    {isExpanded && (
                      <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/60 rounded-b-xl space-y-2.5 text-xs">
                        
                        {/* Plain English "Why this matters" */}
                        <div className="bg-white rounded-lg p-2.5 border border-slate-200/80">
                          <h5 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-indigo-600" />
                            Why this matters:
                          </h5>
                          <p className="text-slate-700 text-xs leading-relaxed">
                            {task.plainEnglishExplanation}
                          </p>
                        </div>

                        {/* Step-by-Step Instructions */}
                        <div>
                          <h5 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            How to fix ({task.timeToFix}):
                          </h5>
                          <ol className="space-y-1 list-decimal list-inside text-xs text-slate-700">
                            {task.stepByStepGuide.map((step, sIdx) => (
                              <li key={sIdx}>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Copyable Code Snippet */}
                        {task.codeSnippet && (
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold text-slate-600 font-mono">
                                Copy & Paste Code:
                              </span>
                              <button
                                type="button"
                                onClick={() => handleCopyCode(task.id, task.codeSnippet!)}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 cursor-pointer"
                              >
                                {copiedSnippetId === task.id ? (
                                  <>
                                    <Check className="w-3 h-3 text-indigo-600" />
                                    <span>Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Copy Snippet</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-2.5 bg-slate-900 text-indigo-300 rounded-lg text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-tight border border-slate-800 max-h-32">
                              {task.codeSnippet}
                            </pre>
                          </div>
                        )}

                        {/* Fixed / Toggle CTA */}
                        <div className="pt-1 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => toggleTaskStatus(task.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isFixed
                                ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isFixed ? "Mark Incomplete" : "Mark as Fixed (+Boost Score)"}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: AI SEARCH READINESS (GEO) */}
        {activeTab === "ai-search" && (
          <div className="space-y-3 text-xs">
            <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3">
              <div className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-indigo-950 text-xs sm:text-sm">
                    AI Search Engine Readiness (GEO)
                  </h4>
                  <p className="text-indigo-900/80 mt-0.5 text-xs leading-relaxed">
                    AI platforms like ChatGPT and Google AI Overviews read structured data to cite local businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">ChatGPT Search</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                    live?.hasSchema 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    {live?.hasSchema ? "Schema Ready" : "Needs Schema"}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  {initialReport.aiReadinessInsights.chatGptStatus}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Google AI Overview</span>
                  <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200">
                    Partial
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  {initialReport.aiReadinessInsights.googleAiOverviewStatus}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Perplexity</span>
                  <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">
                    Ready
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  {initialReport.aiReadinessInsights.perplexityStatus}
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-800">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Recommendation:
              </h5>
              <p className="text-slate-200 text-xs leading-relaxed">
                {initialReport.aiReadinessInsights.recommendation}
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: COMPETITORS & KEYWORDS */}
        {activeTab === "competitors" && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <h5 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                  Keywords Found:
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {initialReport.competitorInsights.topKeywordsFound.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-white text-slate-800 border border-slate-200 text-[11px] font-medium"
                    >
                      🎯 {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <h5 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  Missed Ranking Opportunities:
                </h5>
                <ul className="space-y-1 text-[11px] text-slate-700">
                  {initialReport.competitorInsights.missedOpportunities.map((opp, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-0.5">Rival Benchmark:</span>
              <p>{initialReport.competitorInsights.rivalBenchmark}</p>
            </div>
          </div>
        )}

      </div>

      {/* Compact Report Footer */}
      <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 flex-shrink-0">
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold text-slate-900">
            Automate weekly 15-minute SEO scans for £10–£25/mo
          </p>
          <p className="text-[11px] text-slate-500">
            No enterprise lock-in contracts. Cancel anytime.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            if (onClose) onClose();
            const el = document.getElementById("pricing");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm cursor-pointer"
        >
          <span>View Pricing Plans</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
