import { AuditReport, JargonItem, PricingPlan, SampleReportPreset, Testimonial } from "../types";

export const SAMPLE_REPORT_PRESETS: SampleReportPreset[] = [
  {
    id: "preset-bakery",
    title: "Local Café & Artisan Bakery",
    url: "flourandcrust.co.uk",
    businessType: "Local Food & Hospitality",
    iconName: "Croissant",
    initialScore: 68,
    fixedScore: 94,
    report: {
      url: "flourandcrust.co.uk",
      businessType: "Local Café & Artisan Bakery",
      overallScore: 68,
      healthBreakdown: {
        technicalSpeed: 72,
        onPageMeta: 64,
        aiSearchReadiness: 48,
        competitorKeywords: 80,
      },
      summary: "Your bakery has high local customer appeal, but Google AI Overviews cannot read your opening hours or sourdough menu because Schema markup is missing, and the title tag is generic.",
      quickWinCount: 3,
      estimatedFixTimeMinutes: 16,
      tasks: [
        {
          id: "bakery-1",
          title: "Update Meta Title to target 'Artisan Bakery & Coffee in [Town]'",
          priority: "critical",
          category: "On-Page & Meta",
          timeToFix: "3 mins",
          impact: "+40% local Google search clicks from hungry locals",
          plainEnglishExplanation: "Your title currently just says 'Home | Flour & Crust'. People searching for 'sourdough bread near me' or 'specialty coffee in town' won't find you because Google doesn't see those words in your main title.",
          stepByStepGuide: [
            "Log into your site builder (Squarespace/WordPress/Wix).",
            "Edit your Homepage SEO Title.",
            "Change to: 'Flour & Crust — Artisan Sourdough Bakery & Specialty Coffee in Bath'",
            "Add a clear description mentioning fresh bakes daily and walk-ins welcome."
          ],
          codeSnippet: `<title>Flour & Crust — Artisan Sourdough Bakery & Specialty Coffee in Bath</title>\n<meta name="description" content="Fresh artisan sourdough bread, pastries, and specialty roasted coffee in Bath city centre. Open Tues–Sun from 7:30am. Pop in or pre-order!">`,
          status: "pending"
        },
        {
          id: "bakery-2",
          title: "Add Bakery & LocalBusiness Schema for AI Search & Google Maps",
          priority: "high",
          category: "AI Search Readiness",
          timeToFix: "5 mins",
          impact: "Allows ChatGPT, Apple Maps & Google AI to accurately recommend your café",
          plainEnglishExplanation: "When someone asks ChatGPT 'where can I get gluten-free pastries in Bath?', it checks for structured machine-readable code. Adding this small snippet ensures AI search engines cite you with exact address and opening hours.",
          stepByStepGuide: [
            "Copy the JSON-LD snippet below with your real address & hours.",
            "Paste into your site's header injection code or SEO plugin.",
            "Verify using the Google Rich Results tool."
          ],
          codeSnippet: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Bakery",\n  "name": "Flour & Crust Bakery",\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "14 George Street",\n    "addressLocality": "Bath",\n    "postalCode": "BA1 2EH"\n  },\n  "openingHours": "Tu-Su 07:30-16:00",\n  "servesCuisine": "Artisan Bakery, Specialty Coffee",\n  "priceRange": "££"\n}\n</script>`,
          status: "pending"
        },
        {
          id: "bakery-3",
          title: "Compress 4 high-res pastry photos (Fix Mobile Lag)",
          priority: "high",
          category: "Speed & Technical",
          timeToFix: "5 mins",
          impact: "Reduces mobile page load time from 4.1s down to 1.2s",
          plainEnglishExplanation: "You have 4 raw camera photos of croissants on your homepage totaling 8.2MB. On a 4G mobile connection, this makes your website feel sluggish and causes people to bounce before checking the menu.",
          stepByStepGuide: [
            "Download the 4 large homepage images.",
            "Run them through TinyPNG or Squoosh to compress them down to under 120KB each in WebP format.",
            "Replace the old photos on your homepage."
          ],
          codeSnippet: `<img src="/images/croissant-fresh.webp" width="600" height="400" alt="Freshly baked butter croissants at Flour & Crust Bath" loading="lazy" />`,
          status: "pending"
        },
        {
          id: "bakery-4",
          title: "Add an H2 Heading for 'Pre-order Sourdough & Wholesale'",
          priority: "medium",
          category: "Keywords & Competitors",
          timeToFix: "3 mins",
          impact: "Captures 80+ monthly searches for local catering and wholesale orders",
          plainEnglishExplanation: "Adding clear subheadings signals to search engines that you cater to both walk-in café guests and wholesale bakery orders.",
          stepByStepGuide: [
            "Add a clean 2-column section on your homepage.",
            "Use the heading 'Artisan Bread Pre-Orders & Local Cafe Supply'."
          ],
          codeSnippet: `<h2>Artisan Sourdough Pre-Orders & Local Bath Supply</h2>\n<p>Order your weekend sourdough loaves online or partner with us for daily cafe supply across Bath.</p>`,
          status: "pending"
        }
      ],
      aiReadinessInsights: {
        chatGptStatus: "Unverified — Missing LocalBusiness Schema & Menu JSON-LD",
        googleAiOverviewStatus: "Fair — Address listed in footer but not machine readable",
        perplexityStatus: "Requires clear Q&A and opening hours block",
        recommendation: "Inject Bakery Schema.org JSON-LD and list allergens/specialties in clear semantic bullet points."
      },
      competitorInsights: {
        topKeywordsFound: ["artisan bakery bath", "sourdough bread near me", "best coffee bath", "fresh pastries bath"],
        missedOpportunities: ["No 'Pre-order bread' landing text", "Missing 'Dog friendly cafe' callout which has 320 monthly searches"],
        rivalBenchmark: "Local rival 'The Bertinet Bakery' ranks #1 with 12 structured menu items and 4.8★ Google maps rating."
      },
      liveData: {
        isLiveScan: true,
        scannedAt: "Just now",
        dataSource: "Google PageSpeed + Live DOM",
        title: "Home | Flour & Crust Artisan Bakery",
        titleLength: 36,
        titleStatus: "good",
        description: "Welcome to Flour & Crust. We make bread.",
        descriptionLength: 39,
        descriptionStatus: "too_short",
        h1Count: 2,
        h1Text: "Fresh Sourdough Bread Daily",
        h2Count: 4,
        imagesTotal: 12,
        imagesMissingAlt: 4,
        missingAltPercent: 33,
        sampleMissingAlt: ["croissant-hero.jpg", "sourdough-crumb.jpg"],
        hasCanonical: true,
        canonicalHref: "https://flourandcrust.co.uk",
        hasOgTitle: true,
        hasOgImage: false,
        hasSchema: false,
        schemaTypes: [],
        hasViewport: true,
        isHttps: true,
        googlePerformanceScore: 72,
        googleSeoScore: 84,
        googleAccessibilityScore: 90,
        lcp: "2.8 s",
        cls: "0.02",
        fcp: "1.4 s"
      }
    }
  },
  {
    id: "preset-ecommerce",
    title: "Boutique E-Commerce Store",
    url: "nordiccraftgoods.com",
    businessType: "E-Commerce / Direct-to-Consumer",
    iconName: "ShoppingBag",
    initialScore: 61,
    fixedScore: 96,
    report: {
      url: "nordiccraftgoods.com",
      businessType: "E-Commerce / Direct-to-Consumer",
      overallScore: 61,
      healthBreakdown: {
        technicalSpeed: 58,
        onPageMeta: 71,
        aiSearchReadiness: 50,
        competitorKeywords: 65,
      },
      summary: "High quality products, but 2 broken collection links are wasting crawl budget, product images lack descriptive alt-text, and product prices aren't formatted for AI shopping bots.",
      quickWinCount: 4,
      estimatedFixTimeMinutes: 22,
      tasks: [
        {
          id: "ecom-1",
          title: "Fix 2 Broken Internal Links (404 Error on Bestsellers)",
          priority: "critical",
          category: "Speed & Technical",
          timeToFix: "4 mins",
          impact: "Recovers 15% lost organic link juice and stops customer drop-offs",
          plainEnglishExplanation: "Your main menu has a link pointing to '/collections/spring-ceramics' which returns a 404 Not Found error. Google dislikes broken links and penalizes crawl frequency.",
          stepByStepGuide: [
            "Open your Shopify/WooCommerce navigation menu settings.",
            "Update the 'Spring Ceramics' link to point to the active '/collections/ceramics' URL.",
            "Add a 301 permanent redirect from the old URL to the new collection."
          ],
          codeSnippet: `// 301 Redirect Rule in Shopify URL Redirects or .htaccess\nRedirect 301 /collections/spring-ceramics /collections/ceramics`,
          status: "pending"
        },
        {
          id: "ecom-2",
          title: "Add Product & Offer Schema (Enables Google Shopping AI Snippets)",
          priority: "critical",
          category: "AI Search Readiness",
          timeToFix: "6 mins",
          impact: "Displays real-time price (£38), in-stock badge, and star ratings directly in Google search results",
          plainEnglishExplanation: "When Google or AI searchers look for 'handcrafted ceramic mugs', Product Schema shows your star ratings, price, and 'In Stock' badge right on the search results page, multiplying clicks.",
          stepByStepGuide: [
            "Enable Product JSON-LD in your e-commerce theme settings.",
            "Ensure product name, price, currency (GBP/USD), availability, and review aggregate are included."
          ],
          codeSnippet: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "name": "Handmade Nordic Ceramic Mug",\n  "offers": {\n    "@type": "Offer",\n    "price": "34.00",\n    "priceCurrency": "GBP",\n    "availability": "https://schema.org/InStock"\n  }\n}\n</script>`,
          status: "pending"
        },
        {
          id: "ecom-3",
          title: "Add descriptive Alt-Tags to 12 product photos",
          priority: "high",
          category: "On-Page & Meta",
          timeToFix: "5 mins",
          impact: "Ranks your products in Google Image Search (generates 18% of ecom traffic)",
          plainEnglishExplanation: "Your product images are currently named 'IMG_8492.jpg' without alt text. Adding 'Handmade speckled stoneware coffee mug' tells Google and vision-enabled AI assistants exactly what is for sale.",
          stepByStepGuide: [
            "Click on product media in your store admin.",
            "Add a concise 6-10 word description in the Alt Text field for each photo."
          ],
          codeSnippet: `<img src="/mug-speckle.jpg" alt="Nordic handmade speckled stoneware ceramic coffee mug 350ml" />`,
          status: "pending"
        },
        {
          id: "ecom-4",
          title: "Target 'Sustainable Scandinavian Home Decor' keyword cluster",
          priority: "medium",
          category: "Keywords & Competitors",
          timeToFix: "7 mins",
          impact: "+350 high-intent buyers per month searching for eco-friendly home items",
          plainEnglishExplanation: "Buyers are searching for 'sustainable Nordic home accessories' but your homepage only mentions 'modern goods'. Aligning text with eco-conscious keywords captures higher-converting shoppers.",
          stepByStepGuide: [
            "Add an 'Our Materials & Sustainability' section on the homepage.",
            "Include keywords like '100% recycled packaging', 'plastic-free craftsmanship', and 'sustainable Scandinavian design'."
          ],
          codeSnippet: `<h2>Sustainable Scandinavian Craftsmanship For Modern Living</h2>\n<p>Ethically sourced stoneware, natural linen, and minimalist home decor designed to last generations.</p>`,
          status: "pending"
        }
      ],
      aiReadinessInsights: {
        chatGptStatus: "Needs Product Schema to parse inventory & pricing",
        googleAiOverviewStatus: "Moderate — Good product descriptions, missing structured offer specs",
        perplexityStatus: "Ready for brand citation",
        recommendation: "Ensure all product detail pages feature Product Schema with GTIN/SKU, price, and customer review aggregates."
      },
      competitorInsights: {
        topKeywordsFound: ["nordic ceramic mug", "scandinavian home goods", "minimalist pottery online", "handcrafted stoneware"],
        missedOpportunities: ["No 'Gift Guide' collection page targeting seasonal buyers", "Missing structured FAQ for shipping and returns"],
        rivalBenchmark: "Competitor 'NordicNest' gains 2,400 monthly organic visits via structured gift guide keywords."
      },
      liveData: {
        isLiveScan: true,
        scannedAt: "Just now",
        dataSource: "Google PageSpeed + Live DOM",
        title: "Nordic Craft Goods — Handcrafted Ceramics & Minimalist Homeware",
        titleLength: 62,
        titleStatus: "too_long",
        description: "Shop unique handcrafted stoneware, ceramic mugs, and Scandinavian home decor with worldwide shipping.",
        descriptionLength: 108,
        descriptionStatus: "good",
        h1Count: 1,
        h1Text: "Handcrafted Scandinavian Ceramics",
        h2Count: 6,
        imagesTotal: 24,
        imagesMissingAlt: 14,
        missingAltPercent: 58,
        sampleMissingAlt: ["mug-thumb-1.jpg", "vase-autumn.jpg", "banner-slider.png"],
        hasCanonical: true,
        canonicalHref: "https://nordiccraftgoods.com",
        hasOgTitle: true,
        hasOgImage: true,
        ogImage: "https://nordiccraftgoods.com/og-banner.jpg",
        hasSchema: false,
        schemaTypes: [],
        hasViewport: true,
        isHttps: true,
        googlePerformanceScore: 58,
        googleSeoScore: 78,
        googleAccessibilityScore: 82,
        lcp: "3.4 s",
        cls: "0.12",
        fcp: "1.8 s"
      }
    }
  },
  {
    id: "preset-freelancer",
    title: "Freelance Designer & Consultant",
    url: "alexmorrisdesign.com",
    businessType: "Freelance & Creative Services",
    iconName: "Briefcase",
    initialScore: 74,
    fixedScore: 98,
    report: {
      url: "alexmorrisdesign.com",
      businessType: "Freelance & Creative Services",
      overallScore: 74,
      healthBreakdown: {
        technicalSpeed: 84,
        onPageMeta: 70,
        aiSearchReadiness: 62,
        competitorKeywords: 80,
      },
      summary: "Clean portfolio design with fast load times, but lacks specific niche service keywords, case study meta descriptions, and Person Schema for Google Knowledge Graph.",
      quickWinCount: 3,
      estimatedFixTimeMinutes: 14,
      tasks: [
        {
          id: "freelance-1",
          title: "Define Niche Service in Homepage H1 & Meta Title",
          priority: "critical",
          category: "On-Page & Meta",
          timeToFix: "3 mins",
          impact: "+65% inquiries from high-budget clients searching for specialized UI/UX design",
          plainEnglishExplanation: "Your title currently reads 'Alex Morris | Portfolio & Creative Direction'. Broad titles get lost. Changing to 'Senior Product Designer for SaaS & Fintech Startups' attracts higher-paying niche clients.",
          stepByStepGuide: [
            "Update your main homepage H1 headline to specify your specialty.",
            "Refine your meta title and description with your target industry (e.g. SaaS, Fintech, E-Commerce)."
          ],
          codeSnippet: `<title>Alex Morris — Senior UI/UX & Product Designer for SaaS Startups</title>\n<meta name="description" content="Senior freelance product designer helping B2B SaaS and tech startups design high-converting web apps, dashboards, and design systems. Available for Q3/Q4.">`,
          status: "pending"
        },
        {
          id: "freelance-2",
          title: "Add Person & ProfessionalService Schema",
          priority: "high",
          category: "AI Search Readiness",
          timeToFix: "4 mins",
          impact: "Builds entity authority in Google Knowledge Graph and AI talent recommendation engines",
          plainEnglishExplanation: "When tech founders ask ChatGPT 'Who are the top freelance Figma UI designers in the UK?', Schema helps AI systems verify your professional identity, client list, and skills.",
          stepByStepGuide: [
            "Add Person Schema referencing your LinkedIn profile, GitHub, and verified case studies."
          ],
          codeSnippet: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Person",\n  "name": "Alex Morris",\n  "jobTitle": "Lead Product Designer",\n  "url": "https://alexmorrisdesign.com",\n  "sameAs": ["https://linkedin.com/in/alexmorris", "https://dribbble.com/alexmorris"],\n  "knowsAbout": ["UI/UX Design", "Design Systems", "SaaS Dashboard Design"]\n}\n</script>`,
          status: "pending"
        },
        {
          id: "freelance-3",
          title: "Add Metric-Driven Headlines to 3 Case Studies",
          priority: "medium",
          category: "Keywords & Competitors",
          timeToFix: "7 mins",
          impact: "Ranks for long-tail searches like 'B2B SaaS dashboard redesign case study'",
          plainEnglishExplanation: "Instead of generic case study titles like 'Project Alpha', use outcome-focused titles like 'Fintech Dashboard Redesign: Increasing User Retention by 38%'.",
          stepByStepGuide: [
            "Rename project titles to include client niche, challenge, and measurable outcome."
          ],
          codeSnippet: `<h2>Fintech App Redesign — Boosting Daily Active Users by 42%</h2>\n<p>A comprehensive end-to-end design sprint rebuilding mobile onboarding and transaction workflows.</p>`,
          status: "pending"
        }
      ],
      aiReadinessInsights: {
        chatGptStatus: "Identified as digital portfolio — Needs Person Schema to connect social proofs",
        googleAiOverviewStatus: "Good — Portfolio showcases work clearly",
        perplexityStatus: "Ready for consulting queries with added case study outcomes",
        recommendation: "Incorporate verifiable client testimonials with full client names and quantifiable outcomes."
      },
      competitorInsights: {
        topKeywordsFound: ["freelance UI designer UK", "SaaS product designer", "Figma design system consultant", "B2B web app design"],
        missedOpportunities: ["Missing 'Design System Audit' specific landing page", "No 'Available for hire' live status banner"],
        rivalBenchmark: "Top ranking design portfolios generate 4-6 qualified inbound project leads monthly through long-tail case studies."
      },
      liveData: {
        isLiveScan: true,
        scannedAt: "Just now",
        dataSource: "Google PageSpeed + Live DOM",
        title: "Alex Morris — Lead Product Designer & UX Consultant",
        titleLength: 51,
        titleStatus: "good",
        description: "Senior product designer helping SaaS & fintech startups build world-class user experiences and design systems.",
        descriptionLength: 115,
        descriptionStatus: "good",
        h1Count: 1,
        h1Text: "Designing Products That Scale",
        h2Count: 5,
        imagesTotal: 18,
        imagesMissingAlt: 2,
        missingAltPercent: 11,
        sampleMissingAlt: ["case-study-crypto.jpg"],
        hasCanonical: true,
        canonicalHref: "https://alexmorrisdesign.com",
        hasOgTitle: true,
        hasOgImage: true,
        ogImage: "https://alexmorrisdesign.com/share.png",
        hasSchema: false,
        schemaTypes: [],
        hasViewport: true,
        isHttps: true,
        googlePerformanceScore: 88,
        googleSeoScore: 92,
        googleAccessibilityScore: 95,
        lcp: "1.6 s",
        cls: "0.01",
        fcp: "0.9 s"
      }
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For solo founders & freelancers who want an easy weekly SEO checklist.",
    monthlyPrice: 12,
    annualMonthlyPrice: 10,
    siteCount: "1 Website",
    features: [
      "Automated weekly website health scans",
      "Prioritized step-by-step action checklist",
      "Core Technical & Page Speed diagnostics",
      "Mobile optimization & broken link crawler",
      "Plain-English fix instructions (no jargon)",
      "Email alerts when issues arise",
      "Cancel anytime, 14-day money-back guarantee"
    ],
    ctaText: "Start Free 14-Day Trial"
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    tagline: "For growing small businesses & online stores that want to outrank rivals.",
    monthlyPrice: 19,
    annualMonthlyPrice: 15,
    siteCount: "Up to 3 Websites",
    features: [
      "Everything in Starter, plus:",
      "AI Search Readiness Check (ChatGPT, Google AI, Perplexity)",
      "Top 3 Competitor tracking & low-hanging keyword alerts",
      "Copy-paste Schema.org JSON-LD generator",
      "Image compression & WebP speed optimization advice",
      "Progress tracker & historic SEO health score",
      "Priority customer email & chat support"
    ],
    highlight: true,
    ctaText: "Start Free 14-Day Trial"
  },
  {
    id: "pro",
    name: "Pro / Scale",
    badge: "Maximum Visibility",
    tagline: "For multiple client sites or e-commerce businesses needing daily audits.",
    monthlyPrice: 29,
    annualMonthlyPrice: 25,
    siteCount: "Up to 10 Websites",
    features: [
      "Everything in Growth, plus:",
      "Daily automated health scans & instant anomaly alerts",
      "Full Competitor keyword gap analysis (track up to 10 rivals)",
      "Automated AI fix code snippet generator",
      "White-label PDF & task export for team or clients",
      "Dedicated onboarding session (1-on-1 walk-through)",
      "Direct priority Slack/email support"
    ],
    ctaText: "Start Free 14-Day Trial"
  }
];

export const JARGON_BUSTER_ITEMS: JargonItem[] = [
  {
    id: "jargon-1",
    term: "Canonical Tag (rel='canonical')",
    confusingDefinition: "An HTML link element with rel=canonical attribute used in the head section of an HTML document to prevent duplicate content issues by specifying the preferred master URL.",
    plainEnglishDefinition: "A simple tag that tells Google: 'Hey, if you see 3 duplicate versions of this page (like with ?sort=price or http vs https), this main one is the real original one to rank.'",
    whyItMatters: "Stops Google from getting confused and splitting your ranking power between duplicate pages.",
    actionTip: "Set your canonical URL to the clean, primary version of every webpage (e.g. `https://yourwebsite.com/about`).",
    category: "Technical"
  },
  {
    id: "jargon-2",
    term: "Schema Markup / JSON-LD",
    confusingDefinition: "Structured semantic vocabulary added to microdata or JSON-LD script blocks to enable entity disambiguation and enhanced rich snippet rendering in SERPs.",
    plainEnglishDefinition: "A neat little digital business card hidden inside your website's code that explicitly tells Google, ChatGPT, and Apple: 'Here is my exact business name, phone number, opening hours, prices, and 5-star ratings.'",
    whyItMatters: "Enables gold star ratings in search results and lets AI search engines cite your exact services accurately.",
    actionTip: "Use our 1-click generator to add LocalBusiness or Product schema to your homepage.",
    category: "AI Search"
  },
  {
    id: "jargon-3",
    term: "LCP (Largest Contentful Paint)",
    confusingDefinition: "A Core Web Vital perceptual speed metric measuring the time in milliseconds from when the page starts loading to when the largest text block or image element is rendered within the viewport.",
    plainEnglishDefinition: "How fast your main hero photo or big headline shows up on a mobile screen. If it takes longer than 2.5 seconds, visitors get impatient and leave.",
    whyItMatters: "Google explicitly penalizes slow-loading websites on mobile searches.",
    actionTip: "Compress your main banner photo below 150KB and export in modern WebP format.",
    category: "Technical"
  },
  {
    id: "jargon-4",
    term: "AI Search Readiness / GEO (Generative Engine Optimization)",
    confusingDefinition: "Optimization protocols aimed at maximizing citation probability, entity confidence, and synthesis presence across Large Language Models and AI answer engines.",
    plainEnglishDefinition: "Making sure when someone asks ChatGPT, Siri, or Google AI 'What's the best bakery in Bristol?', the AI actually knows your business exists and recommends you with confidence.",
    whyItMatters: "Over 25% of search queries are shifting to AI Overviews and chat assistants.",
    actionTip: "Write direct, 2-sentence answers under clear questions on your site and add Schema JSON-LD.",
    category: "AI Search"
  },
  {
    id: "jargon-5",
    term: "Crawl Budget & Broken Links (404s)",
    confusingDefinition: "The allocated resource quota and request threshold that search engine spider bots expend indexing a domain before terminating session traversal.",
    plainEnglishDefinition: "Google bots only spend a few seconds scanning your site. If they hit broken links (pages that no longer exist), they waste their time and leave before discovering your newest products or blogs.",
    whyItMatters: "Fixing broken links ensures 100% of your valuable pages get indexed and ranked.",
    actionTip: "Check our broken link crawler results and set 301 redirects to active pages.",
    category: "Technical"
  },
  {
    id: "jargon-6",
    term: "Low-Hanging Fruit Keywords",
    confusingDefinition: "Long-tail query permutations characterized by moderate search volume, low keyword difficulty index, and high commercial purchase intent.",
    plainEnglishDefinition: "Specific phrases people type when they are ready to buy today (e.g. 'emergency boiler repair Bath' instead of just 'plumbing'). Easy to rank for in just 2-3 weeks.",
    whyItMatters: "You don't need to compete with giant billion-pound brands; you win by capturing ready-to-buy local or niche customers.",
    actionTip: "Include your exact city/service combination in your main H1 and meta description.",
    category: "Ranking"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Founder",
    business: "The Copper Kettle Café, York",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    quote: "I tried Semrush once and almost had a panic attack looking at 80 graphs. SimpleSEO gave me 3 things to fix on Monday morning. Within 3 weeks, we jumped from page 4 to #2 for 'specialty brunch York'.",
    rating: 5,
    resultMetric: "+84% organic foot traffic",
    timeSaved: "Saved 4 hrs/week"
  },
  {
    id: "test-2",
    name: "Marcus Davies",
    role: "Owner",
    business: "Davies & Sons Plumbing, Bristol",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "I know how to fit a boiler, not how to write JSON code. SimpleSEO wrote the code for me, told me where to paste it, and fixed my broken mobile menu in 10 minutes. Calls have doubled.",
    rating: 5,
    resultMetric: "2.3x weekly call inquiries",
    timeSaved: "Fixes in 15 mins"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Creator & Store Owner",
    business: "Ceramica Modern, London",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "Paying £120/month for enterprise SEO was draining my boutique budget. At £15/mo, SimpleSEO caught broken product links and helped us get cited by ChatGPT when shoppers ask for handmade ceramics.",
    rating: 5,
    resultMetric: "+£3,200 monthly revenue",
    timeSaved: "Saved £1,260/yr on tools"
  }
];

export const BENCHMARK_STATS = [
  {
    stat: "90%",
    label: "of SMBs plan to invest in their website & organic search this year",
    subtext: "UK & US Business Benchmark Study"
  },
  {
    stat: "72%",
    label: "of small business owners report direct revenue impact from actionable SEO",
    subtext: "When focusing on prioritized fixes over complex data"
  },
  {
    stat: "15 mins",
    label: "Average weekly time spent completing SimpleSEO prioritized tasks",
    subtext: "No training or SEO agency required"
  },
  {
    stat: "£10–£25",
    label: "Transparent monthly cost vs £120–£150/mo enterprise complexity",
    subtext: "Save over £1,200 annually"
  }
];

export const FAQS = [
  {
    q: "How is SimpleSEO different from tools like Semrush, Ahrefs, or Moz?",
    a: "Traditional SEO tools are built for enterprise marketing agencies and full-time analysts. They overwhelm you with 50-page PDF reports, hundreds of confusing metrics, and cost £100–£140+ per month. SimpleSEO is built specifically for small businesses, shop owners, and solo founders. We translate all that data into a simple, prioritized 3-step checklist in plain English with copy-paste code snippets so you can fix things in 15 minutes a week for just £10–£25/month."
  },
  {
    q: "Do I need coding or technical SEO skills to use SimpleSEO?",
    a: "None at all! Every recommendation comes with plain-English explanations of why it matters, step-by-step instructions for popular platforms (WordPress, Shopify, Squarespace, Wix, Webflow), and ready-made copyable code snippets where needed. If a task says 'Add Schema', you simply copy the generated snippet and paste it."
  },
  {
    q: "What is the AI Search Readiness check?",
    a: "Search is changing rapidly with ChatGPT, Google AI Overviews, Apple Intelligence, and Perplexity. If someone asks an AI assistant for recommendations in your town or industry, traditional SEO keywords aren't enough. Our AI Search Readiness check audits your structured data, entity authority, and plain-English answer blocks so AI engines can easily read and recommend your business."
  },
  {
    q: "How long does a website audit take?",
    a: "Just 60 seconds! Type your URL into the audit box above, and our automated engine crawls your site, analyzes technical speed, mobile usability, metadata, broken links, AI search readiness, and competitor keywords to generate your personalized action checklist."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes! There are no lock-in contracts or hidden cancellation fees. You can pause, upgrade, downgrade, or cancel your plan at any time with a single click in your dashboard settings. Plus, we offer a 14-day free trial and a 14-day money-back guarantee."
  },
  {
    q: "What platforms and website builders do you support?",
    a: "SimpleSEO works with any website on the internet, including Shopify, WordPress, WooCommerce, Squarespace, Wix, Webflow, Ghost, custom React/HTML sites, and more."
  }
];
