export type TaskPriority = "critical" | "high" | "medium" | "low";
export type TaskCategory = 
  | "Speed & Technical" 
  | "On-Page & Meta" 
  | "AI Search Readiness" 
  | "Keywords & Competitors";

export interface AuditTask {
  id: string;
  title: string;
  priority: TaskPriority;
  category: TaskCategory;
  timeToFix: string;
  impact: string;
  plainEnglishExplanation: string;
  stepByStepGuide: string[];
  codeSnippet?: string;
  status: "pending" | "fixed";
  liveMetricDetail?: string;
}

export interface LiveAuditExtractedData {
  isLiveScan: boolean;
  scannedAt: string;
  title: string;
  titleLength: number;
  titleStatus: "good" | "too_short" | "too_long" | "missing";
  description: string;
  descriptionLength: number;
  descriptionStatus: "good" | "too_short" | "too_long" | "missing";
  h1Count: number;
  h1Text: string;
  h2Count: number;
  imagesTotal: number;
  imagesMissingAlt: number;
  missingAltPercent: number;
  sampleMissingAlt: string[];
  hasCanonical: boolean;
  canonicalHref: string;
  hasOgTitle: boolean;
  hasOgImage: boolean;
  ogImage?: string;
  hasSchema: boolean;
  schemaTypes: string[];
  hasViewport: boolean;
  isHttps: boolean;
  googlePerformanceScore?: number;
  googleSeoScore?: number;
  googleAccessibilityScore?: number;
  lcp?: string;
  cls?: string;
  fcp?: string;
  dataSource: "Google PageSpeed + Live DOM" | "Live DOM Parser" | "Fallback Synthetic";
}

export interface AuditReport {
  url: string;
  businessType: string;
  overallScore: number;
  healthBreakdown: {
    technicalSpeed: number;
    onPageMeta: number;
    aiSearchReadiness: number;
    competitorKeywords: number;
  };
  summary: string;
  quickWinCount: number;
  estimatedFixTimeMinutes: number;
  tasks: AuditTask[];
  aiReadinessInsights: {
    chatGptStatus: string;
    googleAiOverviewStatus: string;
    perplexityStatus: string;
    recommendation: string;
  };
  competitorInsights: {
    topKeywordsFound: string[];
    missedOpportunities: string[];
    rivalBenchmark: string;
  };
  liveData?: LiveAuditExtractedData;
}

export interface JargonItem {
  id: string;
  term: string;
  confusingDefinition: string;
  plainEnglishDefinition: string;
  whyItMatters: string;
  actionTip: string;
  category: "Technical" | "Content" | "AI Search" | "Ranking";
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  siteCount: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  avatar: string;
  quote: string;
  rating: number;
  resultMetric: string;
  timeSaved: string;
}

export interface SampleReportPreset {
  id: string;
  title: string;
  url: string;
  businessType: string;
  iconName: string;
  initialScore: number;
  fixedScore: number;
  report: AuditReport;
}
