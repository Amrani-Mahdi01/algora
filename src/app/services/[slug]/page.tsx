"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe, Smartphone, Monitor, Cpu, Bot, ArrowUpRight, Check, ArrowLeft, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSlugI18n } from "@/lib/services-i18n";
import ShinyText from "@/components/ui/ShinyText";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import ColorBends from "@/components/ColorBends";
import { LogoLoop } from "@/components/LogoLoop";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

// ── Tech logo map (devicons CDN) ───────────────────────────────────────────
const LOGO_SRC: Record<string, string> = {
  "Next.js":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React Native":  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "FastAPI":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "PostgreSQL":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Redis":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Tailwind CSS":  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Docker":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "TypeScript":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Node.js":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Firebase":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "Python":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Rust":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  "SQLite":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  "Electron":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
  "Tauri":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg",
  "Playwright":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "Expo":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
};

const logoNode = (tech: string) => {
  const src = LOGO_SRC[tech];
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={tech}
      title={tech}
      draggable={false}
      style={{ height: 34, width: "auto", display: "block", filter: "brightness(0) invert(1)", opacity: 0.45 }}
    />
  ) : (
    <span
      className="font-mono text-[0.58rem] tracking-[0.14em] uppercase border px-3 py-1"
      style={{ borderColor: "rgba(var(--rgb),0.1)", color: "rgba(var(--rgb),0.35)", backgroundColor: "rgba(var(--rgb),0.03)" }}>
      {tech}
    </span>
  );
};

// Combined marquee — every technology across all services
const ALL_STACK_LOGOS = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js",
  "FastAPI", "Python", "PostgreSQL", "Redis", "Docker",
  "React Native", "Expo", "Firebase", "Redux Toolkit",
  "Electron", "Tauri", "Rust", "SQLite", "Playwright",
].map(tech => ({ node: logoNode(tech) }));

// ── Services data ──────────────────────────────────────────────────────────
const SERVICES = {
  web: {
    number: "01", icon: Globe,
    titleKey: "sv_01_title" as const,
    category: "Web · SaaS · Enterprise",
    headline: "Platforms that scale from day one.",
    desc: "We architect and build full-stack web applications engineered for scale — SaaS platforms, enterprise dashboards, data-heavy apps, and anything in between. Every product ships production-ready with a clean API layer, tested codebase, and CI/CD from day one.",
    stats: [
      { value: "<100ms", label: "server response time" },
      { value: "99.9%",  label: "production uptime SLA" },
      { value: "50+",    label: "SaaS products shipped" },
      { value: "Day 1",  label: "CI/CD from first commit" },
    ],
    projects: [
      {
        label: "SaaS",
        name: "Multi-tenant Analytics Suite",
        desc: "Real-time analytics platform with white-label support, role-based access, and live dashboards serving 200+ enterprise clients across 14 countries. Each tenant gets isolated data, custom branding, and a dedicated API key — all managed from a single codebase with zero cross-tenant leakage.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
        metric: "200+ clients",
        result: "3× faster reporting",
      },
      {
        label: "FinTech",
        name: "Payment Orchestration API",
        desc: "High-throughput transaction layer processing 10,000+ payments per minute with built-in fraud scoring, multi-currency settlement, idempotent retry logic, and PCI-DSS Level 1 compliance. The system fans out to four payment providers simultaneously and selects the cheapest successful route per transaction.",
        tags: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
        metric: "10k TPS peak",
        result: "99.99% uptime",
      },
      {
        label: "Enterprise",
        name: "Operations & Workflow Hub",
        desc: "Unified internal tool replacing five disconnected SaaS subscriptions — with custom workflow builder, SSO via SAML 2.0, full audit logging, granular role permissions, and live management reporting for 1,200 employees across three offices. Onboarding time for new employees dropped from two days to under three hours.",
        tags: ["Next.js", "FastAPI", "PostgreSQL"],
        metric: "1,200 daily users",
        result: "60% less tool-switching",
      },
      {
        label: "E-Learning",
        name: "White-label LMS Platform",
        desc: "Multi-tenant learning management system supporting 40,000 learners across 120 client organisations — live classrooms, SCORM-compliant content hosting, adaptive progress tracking, automated certificate generation with QR verification, and a headless API consumed by white-label iOS and Android apps shipped by the client's resellers.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
        metric: "40k active learners",
        result: "94% course completion rate",
      },
      {
        label: "HealthTech",
        name: "Patient & Clinic Management Portal",
        desc: "HIPAA-compliant patient portal connecting 18 clinics — appointment scheduling with real-time slot availability, electronic health records, prescription history with drug-interaction warnings, insurance eligibility verification, and a patient-facing PWA that works offline in low-connectivity rural clinics. All data is encrypted at rest with field-level encryption on PII columns.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
        metric: "18 clinics · 120k patients",
        result: "Zero data-breach incidents",
      },
      {
        label: "PropTech",
        name: "Real Estate Marketplace & CRM",
        desc: "End-to-end property platform serving 3,200 agents — advanced polygon geo-search, 360° virtual tour embeds, automated lead distribution with round-robin routing, AI-assisted property valuation, and a developer API consumed by three third-party listing portals. Commission calculation and invoicing run automatically on each closed deal.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
        metric: "3,200 active agents",
        result: "18% higher lead conversion",
      },
    ],
    features: [
      "SaaS platforms & multi-tenant architecture",
      "Real-time dashboards with live data streams",
      "Third-party API integrations & webhooks",
      "Auth systems: OAuth 2.0, SAML SSO, RBAC",
      "Admin panels, analytics, and reporting",
      "Performance optimisation & Core Web Vitals",
    ],
    deliverables: [
      "Full-stack web application",
      "RESTful or GraphQL API",
      "PostgreSQL / Redis data layer",
      "Admin panel & CMS (if needed)",
      "CI/CD pipeline & deployment",
      "Technical documentation",
    ],
    faq: [
      {
        q: "How long does a typical web application take to build?",
        a: "It depends on scope, but here are honest benchmarks: a focused MVP with core features takes 6–10 weeks. A full SaaS platform with auth, billing, dashboards, and an admin panel runs 14–20 weeks. Large enterprise systems with custom integrations can be 5–6 months. We break every project into two-week sprints with live demos at each cycle, so you see working software every two weeks — not a reveal months later. Scope changes are normal and we accommodate them between sprints.",
      },
      {
        q: "Do you build the full stack, or only frontend or backend?",
        a: "Both, always. A web application isn't done until it works end-to-end in production. Every engagement covers the React/Next.js frontend, the FastAPI or Node.js backend, the database layer (PostgreSQL, Redis), environment configuration, CI/CD, and initial cloud deployment. We don't build frontends that wait for another team's API, or backends that hand off to a separate UI team. One team, one codebase, one point of contact.",
      },
      {
        q: "What does 'production-ready' actually mean?",
        a: "It means the codebase you receive is the same quality as what we'd use internally. Concretely: typed throughout (TypeScript), test coverage on critical paths, environment-specific config (dev / staging / prod) with secrets management, error monitoring via Sentry, structured logging, automated database migrations, a working CI/CD pipeline, database indexes tuned to actual query patterns, and documentation that lets any mid-level developer onboard in under a day. Not a prototype with a README that says 'add tests later'.",
      },
      {
        q: "Can you work with our existing codebase?",
        a: "Yes, and we do this regularly. We start with a two-to-three-day technical audit — reviewing architecture, test coverage, dependency health, security posture, and performance characteristics. You get a written report with risk areas, a prioritised refactor plan, and an honest assessment of what's worth keeping versus replacing. We prefer to extend and improve rather than rewrite unless the architecture genuinely cannot support the product's next phase.",
      },
      {
        q: "Do you handle hosting and infrastructure?",
        a: "We set it up and hand it over. Typical stack: Vercel or Railway for application hosting, a managed PostgreSQL instance (Supabase, Neon, or RDS) for the database, Redis Cloud or Upstash for caching, and Cloudflare in front for CDN and DDoS protection. We configure everything, write the runbooks, and give you full admin access on day one. You own your infrastructure — we never hold credentials or act as the account owner.",
      },
      {
        q: "How do you handle data security and GDPR compliance?",
        a: "Encryption in transit (TLS 1.3) and at rest is non-negotiable on every project. For applications handling personal data, we design deletion flows from the start, implement row-level security in PostgreSQL, minimise data collected to what's strictly necessary, and add an audit log for any access to sensitive records. If you need a formal DPIA, a Data Processing Agreement, or supporting documentation for your DPO, we provide it. We've shipped under GDPR, HIPAA, and Algerian data protection requirements.",
      },
    ],
    stack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Redis", "Tailwind CSS", "Docker", "TypeScript"],
  },

  mobile: {
    number: "02", icon: Smartphone,
    titleKey: "sv_02_title" as const,
    category: "iOS · Android · Cross-platform",
    headline: "Native feel, half the cost.",
    desc: "We ship iOS and Android applications that feel native — smooth animations, fast load times, deep OS integration, and a UX that earns five-star reviews. One codebase, two platforms, zero compromises on quality.",
    stats: [
      { value: "4.8★",  label: "avg App Store rating" },
      { value: "2×",    label: "faster than two native teams" },
      { value: "Day 1", label: "offline capability by default" },
      { value: "50k+",  label: "combined installs shipped" },
    ],
    projects: [
      {
        label: "Health & Wellness",
        name: "Habit & Coaching Platform",
        desc: "Cross-platform health app with personalised plans, streak tracking, push coaching, and offline-first sync — reaching 30,000 users in 90 days post-launch. The coach-facing companion app lets trainers monitor client progress, send custom plans, and schedule check-ins, all in real time.",
        tags: ["React Native", "Expo", "Firebase"],
        metric: "30k users in 90 days",
        result: "4.9★ on App Store",
      },
      {
        label: "Field Service",
        name: "Technician Dispatch App",
        desc: "Offline-capable field management app for 500+ technicians — turn-by-turn GPS routing, digital job sheets with photo capture, customer signature collection, and live status syncing back to the ops centre. Works in basements, tunnels, and remote sites with no connectivity; queues all actions for sync on reconnect.",
        tags: ["React Native", "Node.js", "PostgreSQL"],
        metric: "500+ field workers",
        result: "40% faster job completion",
      },
      {
        label: "E-commerce",
        name: "Branded Shopping Experience",
        desc: "Flagship mobile shopping app with AR product preview using device camera, one-tap express checkout, Apple Pay and Google Pay, wishlists, order tracking with live courier GPS, and a 98% crash-free session rate across three years and four major iOS/Android OS upgrades.",
        tags: ["React Native", "Expo", "Redux Toolkit"],
        metric: "98% crash-free",
        result: "2.4× higher conversion",
      },
      {
        label: "Telemedicine",
        name: "Virtual Care & Prescription App",
        desc: "End-to-end telemedicine platform with WebRTC video consultations, e-prescription generation with pharmacy routing, HIPAA-compliant patient health records, and an appointment management system handling four thousand consultations per month across eight medical specialties. Average patient wait time dropped from 28 minutes to under four.",
        tags: ["React Native", "Expo", "FastAPI", "PostgreSQL"],
        metric: "4k consults/month",
        result: "28 min wait → 4 min",
      },
      {
        label: "Food & Logistics",
        name: "Three-sided Delivery Platform",
        desc: "Consumer, restaurant, and driver applications sharing a single real-time backend — live GPS tracking with sub-second updates, dynamic surge pricing, automated multi-stop dispatch optimisation, order batching for efficiency, and an ops dashboard managing 800+ daily deliveries across two cities. All three apps ship from one React Native monorepo.",
        tags: ["React Native", "Expo", "Node.js", "PostgreSQL"],
        metric: "800+ deliveries/day",
        result: "11 min avg delivery time",
      },
      {
        label: "FinTech",
        name: "Digital Wallet & P2P Payments",
        desc: "PCI-DSS Level 1 compliant mobile wallet with QR code generation and scanning, peer-to-peer transfers with instant settlement, biometric authentication (Face ID / fingerprint), multi-currency support (DZD, EUR, USD) with real-time FX rates, a full transaction ledger, and a KYC/AML verification flow that completes in under two minutes.",
        tags: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
        metric: "DZD · EUR · USD",
        result: "99.98% transaction success",
      },
    ],
    features: [
      "Cross-platform iOS & Android (React Native)",
      "Offline-first architecture & local storage",
      "Push notifications & background sync",
      "In-app payments (Stripe, Apple Pay, Google Pay)",
      "Camera, GPS, biometrics, and device APIs",
      "App Store & Google Play submission support",
    ],
    deliverables: [
      "iOS + Android production app",
      "Backend API & cloud infrastructure",
      "Push notification service",
      "App Store / Play Store listing",
      "Performance profiling report",
      "Post-launch monitoring setup",
    ],
    faq: [
      {
        q: "Why React Native over native Swift and Kotlin?",
        a: "For most products the answer comes down to time and cost. One React Native codebase delivers both iOS and Android while sharing business logic, API clients, state management, and the majority of UI components. The performance gap with native has closed significantly for standard interface patterns — animations run at 60fps on the new architecture, and users can't tell the difference on production apps. We recommend native Swift or Kotlin only when you need deeply custom rendering (3D engines, advanced camera pipelines, AR with custom shaders) — and we'll tell you honestly if your project is one of those cases.",
      },
      {
        q: "Can you handle App Store and Google Play submission?",
        a: "Yes — it's included in every project. We manage provisioning profiles, code signing certificates, compliance with App Store Review Guidelines (a surprisingly detailed document), metadata, screenshots, privacy nutrition labels, and the back-and-forth with Apple if a rejection comes back with questions. First-time submissions and ongoing releases are both covered. We've navigated rejections across health, finance, and adult-rated content categories.",
      },
      {
        q: "How do you handle offline mode and unreliable connectivity?",
        a: "We design offline-first by default, not as an afterthought. That means local persistence via MMKV or SQLite, an optimistic update pattern so the UI responds immediately without waiting for network, a write queue that replays against the API when connectivity returns, and conflict resolution logic for concurrent edits. Users in our apps never see a blank screen or an error toast because of connectivity — they see their data and a small indicator that sync is pending.",
      },
      {
        q: "What about push notification deliverability at scale?",
        a: "Deliverability above 95% is achievable but requires careful token lifecycle management — rotating tokens on reinstall, removing stale tokens from your database, and configuring APNs / FCM correctly. We use Expo Notifications for most projects and move to OneSignal or direct APNs/FCM for high-volume or enterprise requirements. We've diagnosed production systems sitting at 60% delivery and gotten them above 97% through token hygiene and payload optimisation alone.",
      },
      {
        q: "How do we push updates after launch without App Store delays?",
        a: "Patch-level UI and JavaScript logic updates ship over-the-air via Expo Updates without requiring an App Store review — users get the fix on next app launch, sometimes within hours of it being deployed. Anything touching native modules (new permissions, new device API access) goes through the standard review process. We configure staged OTA rollouts so a bad update affects 5% of users before you commit to the full install base.",
      },
      {
        q: "What is the realistic maintenance cost after launch?",
        a: "Budget 10–15% of the initial build cost per year. This covers iOS and Android OS upgrade testing (Apple and Google release major versions annually and both can break existing behaviour), dependency security patches, API deprecation updates, and minor feature work. Most of our clients move to a monthly maintenance retainer after launch — it's cheaper and more predictable than re-engaging ad hoc for each issue. We offer tiered retainers starting from a small monthly floor.",
      },
    ],
    stack: ["React Native", "Expo", "Node.js", "Firebase", "Redux Toolkit", "PostgreSQL", "TypeScript"],
  },

  desktop: {
    number: "03", icon: Monitor,
    titleKey: "sv_03_title" as const,
    category: "Windows · macOS · Linux",
    headline: "Software that lives on the desktop.",
    desc: "Some workflows demand a native desktop experience — offline reliability, deep OS integration, and performance the browser can't match. We build Windows, macOS, and Linux applications that professionals actually want to use every day.",
    stats: [
      { value: "3 OS",  label: "from a single codebase" },
      { value: "30MB",  label: "avg installer with Tauri" },
      { value: "99.5%", label: "crash-free sessions" },
      { value: "Auto",  label: "updates with staged rollout" },
    ],
    projects: [
      {
        label: "Media Production",
        name: "Video Asset Manager",
        desc: "Cross-platform media management tool handling 4K proxy workflows, automated metadata tagging via embedded timecode, team collaboration with file locking, and a smart search indexing 200,000+ assets for retrieval in under 300ms. Used daily by 300+ editors at a broadcast production house who replaced a $6,000/seat licensed product.",
        tags: ["Tauri", "Rust", "React", "SQLite"],
        metric: "300+ daily editors",
        result: "70% faster asset retrieval",
      },
      {
        label: "Retail",
        name: "Point-of-Sale & Inventory System",
        desc: "Offline-first POS application deployed across 80 retail locations — barcode scanning, receipt printing to Epson thermal printers, real-time inventory sync when connected, end-of-day reconciliation, and a cloud dashboard for the head office. Operates identically with zero configuration changes on Windows 10 and macOS 13.",
        tags: ["Electron", "React", "SQLite", "TypeScript"],
        metric: "80 locations",
        result: "Zero downtime at checkout",
      },
      {
        label: "Engineering",
        name: "Industrial Data Logger",
        desc: "Serial-port data acquisition tool reading from 20+ sensor types over RS-232 and RS-485, logging raw and processed readings to local SQLite at 10,000 samples per second, displaying live charts with configurable alert thresholds, and generating automated PDF calibration reports on a schedule. Replaced a proprietary LabVIEW setup.",
        tags: ["Tauri", "Rust", "SQLite"],
        metric: "20+ sensor types",
        result: "Real-time at 10k samples/s",
      },
      {
        label: "Engineering",
        name: "3D Model Viewer & Annotation Tool",
        desc: "Cross-platform desktop viewer for STEP, IGES, and OBJ CAD files — GPU-accelerated rendering via WebGPU, precision measurement tools, annotation layers with team comments, section planes, and export to DXF and PDF. Built for a manufacturing firm as an internal alternative to a $4,000 per seat annual licence, onboarding 300+ engineers in the first month.",
        tags: ["Tauri", "Rust", "React", "SQLite"],
        metric: "$4k/seat replaced",
        result: "300+ engineers onboarded",
      },
      {
        label: "Infrastructure",
        name: "Network Monitoring & Alert Station",
        desc: "Real-time infrastructure monitoring desktop app polling 200+ SNMP endpoints every 30 seconds — live topology map with status colour-coding, configurable threshold alerting via Slack and email, 90-day historical ping and packet-loss graphs, and one-click diagnostic runbooks. Replaced a legacy Nagios setup that required Linux expertise to operate and maintain.",
        tags: ["Electron", "React", "SQLite", "TypeScript"],
        metric: "200+ monitored nodes",
        result: "MTTR reduced by 55%",
      },
      {
        label: "Finance",
        name: "Offline Accounting & Tax Suite",
        desc: "Hybrid accounting application for SMEs operating entirely offline with optional cloud backup — full double-entry bookkeeping, VAT report generation aligned with Algerian DGI and French PCG standards, payroll with social charges, bank statement reconciliation, and a 5-year audit trail. Ships as a code-signed installer under 18MB via Tauri. Active in 400+ businesses.",
        tags: ["Tauri", "Rust", "SQLite", "React"],
        metric: "DGI & PCG compliant",
        result: "Used in 400+ businesses",
      },
    ],
    features: [
      "Windows, macOS & Linux from one codebase",
      "Native OS integration (file system, tray, notifications)",
      "Offline-first with local database",
      "Auto-update distribution system",
      "Hardware access: serial ports, USB, printers",
      "High-performance data rendering",
    ],
    deliverables: [
      "Cross-platform desktop installer",
      "Auto-update mechanism",
      "System tray & notification integration",
      "Local database layer",
      "Code-signed release build",
      "User & admin documentation",
    ],
    faq: [
      {
        q: "Electron or Tauri — which framework do you recommend, and why?",
        a: "Tauri for new projects, almost every time. Tauri produces installers 10–20× smaller (a typical Tauri app ships under 15MB versus 80–150MB for Electron), uses significantly less RAM (no bundled Chromium), has a smaller attack surface, and the Rust core makes it genuinely difficult to introduce memory safety bugs. Electron makes sense in narrower situations: when you need the full Node.js runtime embedded directly in the renderer, when your team has strong constraints against introducing Rust, or when you need to rapidly port an existing web application. We'll assess your situation and give you an honest recommendation, not a default.",
      },
      {
        q: "How small can you get the installer?",
        a: "With Tauri, production installers regularly land under 15MB for moderate-complexity applications — we've shipped one at 6MB. Electron applications typically run 80–150MB because they bundle a full Chromium build. Both frameworks support delta update mechanisms so users don't re-download the full binary on every release — only the changed files, which are usually a few hundred kilobytes for a routine update.",
      },
      {
        q: "How do you distribute updates to users without manual reinstalls?",
        a: "Automatic updates are built in from the first release. We configure a release server (GitHub Releases, an S3 bucket, or a custom endpoint), implement background update checks that run on launch and at a configurable interval, and display an unobtrusive 'update available' prompt. Staged rollouts let you deploy to 10% of users first, watch crash rates and telemetry, then graduate to 100% with one click. On macOS, updates are delivered through the notarisation pipeline so Gatekeeper never blocks them.",
      },
      {
        q: "Can the application access serial ports, USB devices, or proprietary hardware?",
        a: "Yes — this is one area where desktop applications genuinely outperform web and mobile. Through Tauri, we access Rust crates like serialport-rs and hidapi directly, giving us low-latency, high-throughput communication with virtually any hardware over RS-232, RS-485, USB-HID, or custom USB protocols. We've built drivers for industrial sensors, receipt printers, barcode scanners, card readers, and custom PCB hardware. Electron can load native Node.js addons for the same purpose.",
      },
      {
        q: "How do you handle code signing so users don't see security warnings?",
        a: "Code signing is mandatory — unsigned applications show scary warnings on both platforms and are increasingly blocked by default. On macOS that requires an Apple Developer ID certificate plus notarisation (submitting the build to Apple's automated malware scanner) and stapling the ticket to the binary. On Windows it requires an OV or EV code-signing certificate from a trusted CA. We handle the process end-to-end and integrate signing into your CI/CD pipeline so every release ships trusted and verified without manual steps.",
      },
      {
        q: "Is the same codebase truly used for all three operating systems?",
        a: "Yes, with intentional platform-specific adaptations for things that genuinely differ: system tray behaviour (macOS keeps the app alive in the menu bar; Windows puts it in the notification area), native file dialog styles, menu structure (macOS has an application menu; Windows and Linux do not), and keyboard shortcuts that follow each OS's conventions. These are handled through conditional imports and Tauri's platform detection APIs, not separate branches or separate projects. Our CI runs full build and test passes for Windows, macOS, and Linux on every commit to main.",
      },
    ],
    stack: ["Tauri", "Electron", "React", "Rust", "SQLite", "TypeScript"],
  },

  automation: {
    number: "04", icon: Cpu,
    titleKey: "sv_04_title" as const,
    category: "RPA · Pipelines · Orchestration",
    headline: "Replace manual work with reliable systems.",
    desc: "Manual processes are hidden overhead. We audit your workflows and replace repetitive human tasks with reliable, monitored automation — from nightly data pipelines to real-time event-driven bots that act faster than any team can.",
    stats: [
      { value: "68%",   label: "reduction in manual hours" },
      { value: "24/7",  label: "operation with auto-retry" },
      { value: "<1hr",  label: "mean time to alert on failure" },
      { value: "95%+",  label: "extraction accuracy on docs" },
    ],
    projects: [
      {
        label: "Finance",
        name: "Invoice Processing Pipeline",
        desc: "End-to-end document automation extracting structured data from 2,000+ supplier invoices per day — OCR with layout-aware parsing, field validation against PO records, automatic ERP sync with exception flagging, and a review queue for the 4% of invoices that need human eyes. Replaced a team of six data entry clerks; cost reduction was 95%.",
        tags: ["Python", "Playwright", "PostgreSQL", "Docker"],
        metric: "2,000 invoices/day",
        result: "95% cost reduction",
      },
      {
        label: "Analytics",
        name: "Multi-source Data Warehouse",
        desc: "Orchestrated ETL pipeline ingesting from 12 SaaS APIs (Salesforce, HubSpot, Stripe, Google Ads, and eight others), applying transformation and deduplication rules, loading into a centralised PostgreSQL warehouse, and refreshing pre-aggregated BI views on a schedule. Business reports that previously took 3 hours to compile manually now run in under 5 minutes.",
        tags: ["Python", "PostgreSQL", "Docker", "Redis"],
        metric: "12 API sources",
        result: "Daily reports in <5 min",
      },
      {
        label: "SaaS",
        name: "Customer Onboarding Automator",
        desc: "Event-driven workflow triggered on new subscription — provisions user accounts and permissions across seven internal and external tools, schedules personalised email and in-app sequences based on plan tier and industry segment, notifies CRM with enriched firmographic data, and creates a Slack channel for enterprise accounts. Manual onboarding time went from 3 hours to zero.",
        tags: ["Python", "Playwright", "PostgreSQL"],
        metric: "3hr → 0 manual effort",
        result: "100% consistent delivery",
      },
      {
        label: "HR & Operations",
        name: "New-hire Provisioning Orchestrator",
        desc: "Automation triggered by an HR system event the moment an offer is accepted — creates directory accounts, provisions licences across eleven SaaS tools at the correct access tier, schedules IT equipment delivery, sends a personalised welcome sequence with role-specific onboarding links, and populates the manager's checklist. Mean provisioning time dropped from four days to 45 minutes with zero missed steps.",
        tags: ["Python", "PostgreSQL", "Docker", "Redis"],
        metric: "4 days → 45 minutes",
        result: "Zero missed provisioning",
      },
      {
        label: "E-commerce",
        name: "Omnichannel Fulfilment Pipeline",
        desc: "Unified fulfilment automation syncing orders across four sales channels (Shopify, Amazon, Jumia, and the client's website), selecting the optimal carrier per parcel by weight, destination, and cost, generating shipping labels in bulk, printing to warehouse label printers, and pushing tracking numbers back to all channels within seconds of dispatch. Processing time for 1,200 daily orders dropped from 8 hours to 12 minutes.",
        tags: ["Python", "PostgreSQL", "Docker", "Playwright"],
        metric: "4 channels · 1,200 orders",
        result: "8hr processing → 12min",
      },
      {
        label: "Compliance",
        name: "Regulatory Reporting Engine",
        desc: "Automated aggregation of financial position data from six internal systems into regulator-compliant XML and auditor-ready PDF submissions — field-level cross-validation between source systems, anomaly detection that flags inconsistencies before submission, a cryptographically signed audit trail for every report, and alerting 72 hours before each regulatory deadline with a checklist of outstanding items.",
        tags: ["Python", "PostgreSQL", "Docker"],
        metric: "6 systems, zero manual entry",
        result: "100% on-time filings",
      },
    ],
    features: [
      "RPA bots for web & desktop workflows",
      "Scheduled & event-driven data pipelines",
      "Multi-system API orchestration",
      "Document parsing & data extraction (OCR)",
      "Error alerting & exponential-backoff retry logic",
      "Monitoring dashboards & audit logs",
    ],
    deliverables: [
      "Automation scripts & bots",
      "Workflow architecture diagram",
      "Monitoring & alerting setup",
      "Error handling & recovery logic",
      "Runbooks & operator documentation",
      "30-day post-launch hypercare",
    ],
    faq: [
      {
        q: "How do you decide what is actually worth automating?",
        a: "We start with an ROI analysis before writing a single line of code. The formula is simple: time spent on the task per week × fully-loaded hourly cost × weeks per year = annual cost of the status quo. If the automation pays for itself in under 12 months, it is almost always worth building. We also weight reliability risk — automating a high-stakes process with dozens of edge cases is harder and riskier than automating something that is genuinely repetitive and predictable. We will tell you honestly when a process is a poor automation candidate, and suggest a better alternative.",
      },
      {
        q: "What happens when a website changes and breaks our scraper?",
        a: "Browser-based automations are inherently fragile against UI changes, and we are transparent about that. We mitigate it by writing selectors defensively (preferring stable data attributes and ARIA labels over CSS class names that change on every deploy), building automated health checks that alert within an hour of a failure, and including a short maintenance clause in the contract so minor breaks are remediated quickly. For mission-critical workflows, we always explore official APIs, vendor data feeds, or EDI connections as more stable alternatives to scraping before we commit to browser automation.",
      },
      {
        q: "How reliable are production automations in practice?",
        a: "With proper error handling and retry logic, our pipelines sustain 99%+ successful run rates over 30-day rolling windows. Every automation we ship includes: per-step exception catching, configurable retry with exponential backoff and jitter, a dead-letter queue for payloads that fail after maximum retries (for manual review), and alerting to Slack and email when failure counts exceed configurable thresholds. You never discover something broke because a report didn't arrive on someone's desk.",
      },
      {
        q: "Can you integrate with our ERP, CRM, or accounting software?",
        a: "Almost certainly yes. If the system exposes an API (SAP, Salesforce, HubSpot, Microsoft Dynamics, Xero, QuickBooks, Odoo, Zoho) we use it directly. If the only interface is a legacy desktop application or a web portal without a public API, we use browser automation via Playwright or desktop UI automation to interact with it programmatically, reading screen state and driving UI interactions. We have integrated with genuinely bespoke custom-built ERP systems with no documentation and a 20-year-old architecture. We have not yet found one we could not connect.",
      },
      {
        q: "Do you use no-code tools like n8n or Zapier, or is it all custom code?",
        a: "Both, depending on what the problem actually requires. For simple webhook-to-webhook automations — a Stripe payment triggers a HubSpot update and a Slack message — n8n is excellent and we deploy self-hosted instances for clients who want full control and data privacy. For complex, stateful, high-volume pipelines with custom business logic, error-specific recovery paths, and test coverage requirements, we write Python. The rough heuristic: if it can fail silently and the cost of a failure is high, it should be code with tests and monitoring, not a no-code flow.",
      },
      {
        q: "How do we monitor and operate the automations after you hand them over?",
        a: "Every pipeline ships with a monitoring layer. For most projects that is a lightweight dashboard showing run history, success/failure rate, processing volume, and last-run timestamp — readable by a non-technical operations manager without logging into a server. Alert rules fire on failure counts, processing lag beyond a threshold, and exception types. We also write runbooks: a structured document explaining exactly what to do in response to each alert type, including when to escalate versus when to restart the job. We spend a week in hypercare after launch reviewing real behaviour before transitioning to standard support.",
      },
    ],
    stack: ["Python", "Playwright", "PostgreSQL", "Docker", "Redis"],
  },

  ai: {
    number: "05", icon: Bot,
    titleKey: "sv_05_title" as const,
    category: "LLM · RAG · Computer Vision",
    headline: "AI that earns its place in your product.",
    desc: "We build AI that earns its place in your product — not a chatbot bolted on the side, but deep integrations that reduce real operational costs. Custom LLM pipelines, RAG systems, computer vision, and predictive models with measurable ROI.",
    stats: [
      { value: "68%",   label: "support volume deflected" },
      { value: "40hr",  label: "per week saved per team" },
      { value: "<2%",   label: "hallucination rate on RAG" },
      { value: "AR",    label: "Arabic-first MENA capability" },
    ],
    projects: [
      {
        label: "Customer Support",
        name: "AI Triage & Resolution Engine",
        desc: "LLM-powered support layer classifying incoming tickets by intent and urgency, drafting resolution responses for agent review, and fully auto-resolving 68% of tickets against a structured knowledge base — integrated with Zendesk, Intercom, and a custom internal wiki. All unresolved tickets escalate with context summaries so human agents start informed, not from scratch.",
        tags: ["Python", "FastAPI", "Redis", "PostgreSQL"],
        metric: "68% auto-resolved",
        result: "$420k annual saving",
      },
      {
        label: "Legal",
        name: "Contract Intelligence Platform",
        desc: "RAG pipeline processing a 50,000-document legal corpus — extracting standard and non-standard clauses, flagging deviations from template, computing risk scores per contract, and answering natural-language queries with cited source paragraphs. Lawyers went from spending three days on a contract review to spending 25 minutes validating AI-generated summaries.",
        tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        metric: "50k documents indexed",
        result: "90% faster contract review",
      },
      {
        label: "E-commerce",
        name: "Demand Forecasting Engine",
        desc: "Predictive model trained on three years of SKU-level sales data, seasonal patterns, promotional calendars, and external economic indicators — producing 90-day rolling forecasts per product line with confidence intervals. Reduced stockouts by 42% and overstock carrying costs by 31% across 8,000+ product lines in a retail chain with 200,000 sq ft of warehouse space.",
        tags: ["Python", "FastAPI", "PostgreSQL"],
        metric: "8,000+ SKUs",
        result: "42% fewer stockouts",
      },
      {
        label: "Real Estate",
        name: "Lease Abstraction & Risk Flagging",
        desc: "RAG pipeline processing commercial lease portfolios of up to 500 pages — automatically extracting break clauses, rent review mechanisms, service charge caps, alienation restrictions, and 40 other key fields. Non-standard terms are flagged against a configurable risk ruleset and surfaced in a review interface with the source paragraph highlighted. Used on a $2.4 billion lease portfolio; review time dropped from 72 hours to 15 minutes per lease.",
        tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        metric: "72hr review → 15 minutes",
        result: "Used on $2.4B portfolio",
      },
      {
        label: "Sales Intelligence",
        name: "Call Analysis & Coaching Engine",
        desc: "Real-time transcription and structured analysis of sales calls — speaker-separated transcript, sentiment trajectory, objection detection with suggested responses, talk-to-listen ratio, competitor mention flagging, and automated coaching cards delivered to the sales rep within two minutes of call end. Integrated with HubSpot and Salesforce; call data populates CRM automatically. Close rate increased 22% across the 120-person sales team in the first quarter.",
        tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        metric: "2 min post-call insight",
        result: "22% increase in close rate",
      },
      {
        label: "Manufacturing",
        name: "Visual Quality Control System",
        desc: "Computer vision pipeline deployed on a production line inspecting components at 120 units per minute — custom-trained convolutional model detecting surface defects (scratches, voids, delamination), dimensional deviations beyond tolerance, and label misalignments, with a precision of 99.1%. Replaced a manual sampling process that caught defects at a 78% detection rate, causing costly downstream rework and customer returns.",
        tags: ["Python", "FastAPI", "Docker", "PostgreSQL"],
        metric: "120 units/min throughput",
        result: "78% → 99.1% defect detection",
      },
    ],
    features: [
      "Custom LLM fine-tuning & prompt engineering",
      "RAG (Retrieval-Augmented Generation) pipelines",
      "AI customer support & ticket triage",
      "Computer vision & OCR solutions",
      "Predictive analytics & demand forecasting",
      "Arabic-first NLP for MENA markets",
    ],
    deliverables: [
      "AI model or pipeline (production-ready)",
      "API integration layer",
      "Vector database setup & indexing",
      "Evaluation & benchmark report",
      "Model monitoring & drift detection",
      "Ongoing optimisation retainer option",
    ],
    faq: [
      {
        q: "Do you build models from scratch or work with existing LLMs?",
        a: "Almost always existing foundation models, adapted and orchestrated for your domain. Building a foundation model from scratch requires hundreds of millions of dollars in compute and proprietary training data at a scale that no business project justifies. What we build is the layer that makes frontier models — GPT-4o, Claude, Mistral, Llama — behave reliably within your specific context: retrieval pipelines, system prompts, fine-tuning on your domain vocabulary, guardrails, evaluation frameworks, and integrations. The art is making a general-purpose model act like a specialist in your industry.",
      },
      {
        q: "How do you keep hallucination rates low in RAG systems?",
        a: "Several techniques applied in combination: retrieval quality comes first — we tune embedding models, chunk sizes, and overlap parameters so the right context surfaces before generation even begins. Then grounding: the model is instructed to cite source chunks, and responses that make claims without citations are filtered before they reach the user. Confidence scoring routes low-certainty responses to a human review queue instead of sending them. And continuous evaluation: we maintain a benchmark of known question-answer pairs drawn from your domain and run it after every model or prompt change. Our production RAG systems sustain under 2% hallucination rates measured against this benchmark.",
      },
      {
        q: "How long does it realistically take to see ROI from an AI system?",
        a: "For automation-oriented AI — document processing, triage, classification — return is typically visible within 60 to 90 days of go-live, once volume builds and the system has been calibrated on real production data. For generative features integrated into a product, the timeline depends on user adoption. We build measurement into the system from day one: cost per resolved ticket, analyst hours saved, accuracy versus a human baseline. You have data, not impressions, from the first week of production use.",
      },
      {
        q: "What about data privacy — do our documents go to OpenAI or Anthropic?",
        a: "Only if you choose that configuration. We can deploy models that run entirely within your cloud account — AWS Bedrock, Azure OpenAI Service, or self-hosted open-weight models on your infrastructure — with zero data leaving your VPC. If you use API-based models, we configure them under your own credentials with zero-data-retention agreements (both OpenAI and Anthropic offer these for API customers). We document the complete data flow for every integration and provide supporting materials for DPA compliance reviews.",
      },
      {
        q: "What does Arabic-first NLP mean in practice?",
        a: "Most LLMs trained primarily on English data perform significantly worse on Arabic — shorter effective context retention when the input is Arabic, lower instruction-following accuracy, degraded output quality on dialectal variants (Darija, Levantine, Gulf), and frequent code-switching issues. We address this through: bilingual prompt templates that operate in the model's strongest language while returning Arabic output, Arabic-specific retrieval tuning with diacritic normalisation and morphological stemming, benchmark evaluation sets that test MSA and the relevant regional dialect, and Arabic-speaking reviewers who validate outputs qualitatively, not just through automated metrics. Several of our AI clients serve exclusively MENA markets and require this depth.",
      },
      {
        q: "Can AI fully replace a human team for complex work?",
        a: "For specific, well-defined tasks with clear success criteria and measurable outputs — yes, completely. We have built systems that fully replaced manual labour on invoice data entry, ticket routing, report generation, and contract clause extraction. For anything requiring genuine judgement, contextual reasoning under ambiguity, empathy, or legal accountability, the right architecture is AI-assisted humans: AI handles the volume and the first pass, humans handle the edge cases and sign off. We design for that boundary carefully, document it explicitly in the system, and will not oversell capability to close an engagement.",
      },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
} as const;

type Slug = keyof typeof SERVICES;

const SERVICE_IMAGES: Record<Slug, string> = {
  web:        "/webDev-image.png",
  mobile:     "/mobile-Image.png",
  desktop:    "/desktopApp-image.png",
  automation: "/automation.png",
  ai:         "/aisolutions.png",
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = use(params);
  const { lang, t } = useLanguage();
  const C = getSlugI18n(lang);
  const slug = rawSlug as Slug;
  const service = SERVICES[slug];

  if (!service) notFound();

  const svcI18n = C.services[slug] ?? C.services.web;

  const Icon = service.icon;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen lg:min-h-[780px] flex flex-col items-center justify-center overflow-hidden border-b pt-24 pb-20"
        style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

        <div className="absolute inset-0" style={{ opacity: 0.11 }}>
          <ColorBends
            colors={["#ffffff", "#e8e8e8", "#d0d0d0", "#f0f0f0"]}
            transparent speed={0.13} intensity={1.5}
            noise={0.07} warpStrength={0.85}
            mouseInfluence={0.3} parallax={0.2}
            frequency={1.1} rotation={75}
          />
        </div>

        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)" }} />

        <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.14)" }} />
        <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.14)", animationDelay: "1.5s" }} />
        <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2s" }} />
        <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "0.8s" }} />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-24 left-8 flex items-center gap-2"
            style={{ color: "rgba(var(--rgb),0.22)" }}>
            <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">SVC — {service.number}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-24 right-8 flex items-center gap-2"
            style={{ color: "rgba(var(--rgb),0.22)" }}>
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">ALG — 28</span>
            <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {[16, 8, 20, 8, 16].map((w, i) => (
              <div key={i} className="h-px" style={{ width: `${w}px`, backgroundColor: "rgba(var(--rgb),0.1)" }} />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }} className="mb-10">
            <Link href="/services"
              className="inline-flex items-center gap-2 font-mono text-[0.55rem] tracking-[0.2em] uppercase transition-colors duration-150"
              style={{ color: "rgba(var(--rgb),0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.3)")}>
              <ArrowLeft size={10} /> {C.backLink}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
            <div className="inline-flex items-center gap-3 px-4 py-1.5 text-xs font-medium"
              style={{ border: "1px solid rgba(var(--rgb),0.1)", backgroundColor: "rgba(var(--rgb),0.04)", backdropFilter: "blur(8px)", color: "rgba(var(--rgb),0.5)", letterSpacing: "0.09em" }}>
              <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0"
                style={{ borderColor: "rgba(var(--rgb),0.12)", backgroundColor: "rgba(var(--rgb),0.04)" }}>
                <Icon size={11} style={{ color: "rgba(var(--rgb),0.55)" }} />
              </div>
              <span className="uppercase">{svcI18n.category}</span>
            </div>
            <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
            className="font-display title-gradient-text text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[1.06] mb-5"
            style={{ fontWeight: 600 }}>
            {t(service.titleKey)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
            className="text-lg sm:text-xl max-w-lg leading-snug mb-6"
            style={{ color: "rgba(var(--rgb),0.38)", fontWeight: 500 }}>
            {svcI18n.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="text-sm sm:text-base max-w-xl leading-relaxed"
            style={{ color: "rgba(var(--rgb),0.44)" }}>
            {svcI18n.desc}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ color: "rgba(var(--rgb),0.2)" }}>
          <div className="w-px h-10" style={{ backgroundImage: "linear-gradient(to bottom, rgba(var(--rgb),0.2), transparent)" }} />
          <span className="tracking-[0.18em] uppercase text-[0.6rem]">{C.scroll}</span>
        </motion.div>
      </section>

      {/* ── Container scroll — all-in-one platform image ─────────────────── */}
      <div className="border-b" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-4 pb-4">
              <span
                className="font-mono text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ color: "rgba(var(--rgb),0.45)" }}
              >
                — Full Platform
              </span>
              <h2
                className="font-display title-gradient-text text-3xl sm:text-4xl lg:text-5xl text-center leading-tight"
                style={{ fontWeight: 600 }}
              >
                End-to-end delivery.<br />Every capability, unified.
              </h2>
              <p className="text-sm max-w-md text-center leading-relaxed" style={{ color: "rgba(var(--rgb),0.38)" }}>
                From first line of code to production — web, mobile, desktop, automation, and AI under one roof.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/all-in-one.png"
              alt="Algora — full platform overview"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </ContainerScroll>
      </div>

      {/* ── Tech stack marquee (all technologies) ─────────────────────────── */}
      <div className="border-b" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
        <div dir="ltr" className="py-5">
          <LogoLoop
            logos={ALL_STACK_LOGOS}
            speed={55}
            direction="left"
            gap={48}
            logoHeight={34}
            fadeOut
            fadeOutColor="var(--bg)"
            pauseOnHover
          />
        </div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <section className="relative border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden
          style={{
            backgroundImage: "radial-gradient(rgba(var(--rgb),0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.06) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(36px)", animationDelay: "2.5s" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
            style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
            {service.stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="px-8 py-10 flex flex-col gap-2">
                <span className="font-display text-3xl sm:text-4xl leading-none"
                  style={{ fontWeight: 700, color: "var(--text-solid)" }}>
                  {s.value}
                </span>
                <span className="text-[0.72rem] leading-snug"
                  style={{ color: "rgba(var(--rgb),0.36)" }}>
                  {svcI18n.statLabels[i] ?? s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(56px)" }} />
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.035) 0%, transparent 65%)", filter: "blur(50px)", animationDelay: "3s" }} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-10 border-b"
            style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
                <ShinyText text={C.whatWeBuildLabel} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
              </span>
              <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
                style={{ fontWeight: 600 }}>
                {C.whatWeBuildTitle[0]}<br />{C.whatWeBuildTitle[1]}
              </h2>
            </div>
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={C.whatWeBuildSub}
                speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
          </motion.div>

          {/* First three — signature work */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
            {service.projects.slice(0, 3).map((proj, i) => (
              <ProjectCard
                key={i}
                proj={svcI18n.projects?.[i] ? { ...proj, ...svcI18n.projects[i] } : proj}
                index={i}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-5 my-10">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(var(--rgb),0.055)" }} />
            <span className="font-mono text-[0.5rem] tracking-[0.18em] uppercase flex-shrink-0"
              style={{ color: "rgba(var(--rgb),0.2)" }}>
              {C.moreEngagements}
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(var(--rgb),0.055)" }} />
          </div>

          {/* Second three */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
            {service.projects.slice(3).map((proj, i) => (
              <ProjectCard
                key={i + 3}
                proj={svcI18n.projects?.[i + 3] ? { ...proj, ...svcI18n.projects[i + 3] } : proj}
                index={i + 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────────────────── */}
      <section className="relative py-24 border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(48px)", animationDelay: "2s" }} />
        <div className="absolute -top-20 -right-20 w-[360px] h-[360px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.035) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "0.8s" }} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
                <ShinyText text={C.processLabel} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
              </span>
              <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
                style={{ fontWeight: 600 }}>
                {C.processTitle[0]}<br />{C.processTitle[1]}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l"
            style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            {C.process.map((step, i) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                className="border-r border-b p-8 flex flex-col gap-6"
                style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
                <span className="font-mono text-[3.5rem] leading-none font-bold select-none"
                  style={{ color: "rgba(var(--rgb),0.06)" }}>
                  {step.number}
                </span>
                <div className="w-5 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.18)" }} />
                <div>
                  <h3 className="font-display text-[0.95rem] mb-2.5 leading-snug"
                    style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[0.82rem] leading-relaxed"
                    style={{ color: "rgba(var(--rgb),0.38)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope: features + deliverables ────────────────────────────────── */}
      <section className="relative py-24 border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden
          style={{
            backgroundImage: "linear-gradient(rgba(var(--rgb),0.028) 1px, transparent 1px)",
            backgroundSize: "100% 52px",
          }} />
        <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle at top right, rgba(var(--rgb),0.045) 0%, transparent 65%)", filter: "blur(52px)", animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle at bottom left, rgba(var(--rgb),0.035) 0%, transparent 65%)", filter: "blur(46px)", animationDelay: "4s" }} />
        <div className="absolute top-8 left-8 w-5 h-5 border-t border-l pointer-events-none" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.1)" }} />
        <div className="absolute bottom-8 right-8 w-5 h-5 border-b border-r pointer-events-none" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.1)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-10 border-b"
            style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
                <ShinyText text={C.scopeLabel} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
              </span>
              <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
                style={{ fontWeight: 600 }}>
                {C.scopeTitle[0]}<br />{C.scopeTitle[1]}
              </h2>
            </div>
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={C.scopeSub}
                speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="lg:border-r lg:pr-16" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
              <p className="font-mono text-[0.54rem] tracking-[0.2em] uppercase mb-6"
                style={{ color: "rgba(var(--rgb),0.24)" }}>{C.whatWeCover}</p>
              <ul className="flex flex-col border-t" style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                {svcI18n.features.map(feat => (
                  <li key={feat} className="flex items-start gap-4 py-4 border-b"
                    style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                    <Check size={12} className="mt-[3px] flex-shrink-0"
                      style={{ color: "rgba(var(--rgb),0.28)" }} />
                    <span className="text-sm leading-relaxed"
                      style={{ color: "rgba(var(--rgb),0.46)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:pl-16 mt-12 lg:mt-0">
              <p className="font-mono text-[0.54rem] tracking-[0.2em] uppercase mb-6"
                style={{ color: "rgba(var(--rgb),0.24)" }}>{C.whatYouGet}</p>
              <ul className="flex flex-col border-t" style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                {svcI18n.deliverables.map((item, i) => (
                  <li key={item} className="flex items-center gap-4 py-4 border-b"
                    style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                    <span className="font-mono text-[0.5rem] flex-shrink-0 w-5"
                      style={{ color: "rgba(var(--rgb),0.2)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed"
                      style={{ color: "rgba(var(--rgb),0.46)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute top-0 right-0 w-[360px] h-[360px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.035) 0%, transparent 65%)", filter: "blur(60px)", animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.03) 0%, transparent 65%)", filter: "blur(54px)", animationDelay: "3.5s" }} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-10 border-b"
            style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
                <ShinyText text={C.faqLabel} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
              </span>
              <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
                style={{ fontWeight: 600 }}>
                {C.faqTitle[0]}<br />{C.faqTitle[1]}
              </h2>
            </div>
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={C.faqSub}
                speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
          </motion.div>

          <div>
            {svcI18n.faq.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="border-b" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-start group">
                  <span className="text-[0.93rem] leading-snug pr-4 transition-colors duration-150"
                    style={{ fontWeight: 500, color: openFaq === i ? "var(--text-solid)" : "rgba(var(--rgb),0.58)" }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={15}
                    className="flex-shrink-0 mt-[3px] transition-transform duration-300"
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      color: openFaq === i ? "rgba(var(--rgb),0.5)" : "rgba(var(--rgb),0.22)",
                    }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden">
                      <p className="text-sm leading-[1.85] pb-7"
                        style={{ color: "rgba(var(--rgb),0.46)" }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ────────────────────────────────────────────────── */}
      <section className="relative py-24 border-b overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden
          style={{
            backgroundImage: "radial-gradient(rgba(var(--rgb),0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.035) 0%, transparent 65%)", filter: "blur(46px)", animationDelay: "2.8s" }} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12 pb-10 border-b" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={C.otherServices} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
              style={{ fontWeight: 600 }}>
              {C.whatWeBuildTitle[0]}<br />{C.whatWeBuildTitle[1]}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.entries(SERVICES) as [Slug, typeof SERVICES[Slug]][])
              .filter(([key]) => key !== slug)
              .map(([key, svc], i) => {
                const SvcIcon = svc.icon;
                const svcTrans = C.services[key] ?? C.services.web;
                return (
                  <motion.div key={key}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                    className="h-full">
                    <Link href={`/services/${key}`}
                      className="group flex flex-col h-full border overflow-hidden transition-colors duration-200"
                      style={{ borderColor: "rgba(var(--rgb),0.08)", backgroundColor: "rgba(var(--rgb),0.012)" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.03)")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.012)")}>

                      {/* Image — full cover */}
                      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
                        <Image
                          src={SERVICE_IMAGES[key]}
                          alt={t(svc.titleKey)}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          unoptimized
                        />
                        {/* Subtle gradient at bottom */}
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)" }} />
                        {/* Number */}
                        <span className="absolute top-3 left-3 font-mono text-[0.5rem] tracking-[0.18em]"
                          style={{ color: "rgba(255,255,255,0.4)" }}>
                          {svc.number}
                        </span>
                        {/* Icon */}
                        <div className="absolute top-3 right-3 w-7 h-7 border flex items-center justify-center"
                          style={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
                          <SvcIcon size={12} style={{ color: "rgba(255,255,255,0.6)" }} />
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full" style={{ backgroundColor: "rgba(var(--rgb),0.08)" }} />

                      {/* Info */}
                      <div className="flex flex-col gap-3 p-6 flex-1">
                        <span className="font-mono text-[0.44rem] tracking-[0.16em] uppercase"
                          style={{ color: "rgba(var(--rgb),0.28)" }}>
                          {svcTrans.category}
                        </span>
                        <h3 className="font-display text-[1.05rem] leading-snug"
                          style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                          {t(svc.titleKey)}
                        </h3>
                        <p className="text-[0.8rem] leading-relaxed flex-1"
                          style={{ color: "rgba(var(--rgb),0.4)" }}>
                          {svcTrans.headline}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t mt-2"
                          style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                          <span className="font-mono text-[0.48rem] tracking-[0.16em] uppercase"
                            style={{ color: "rgba(var(--rgb),0.26)" }}>
                            {C.viewDetails}
                          </span>
                          <ArrowUpRight size={13}
                            className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            style={{ color: "rgba(var(--rgb),0.3)" }} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      <CTABanner />
      <Contact />
    </>
  );
}

// ── Extracted project card ─────────────────────────────────────────────────
function ProjectCard({ proj, index }: {
  proj: { label: string; name: string; desc: string; tags: readonly string[]; metric: string; result: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="border-r border-b p-8 flex flex-col gap-5"
      style={{ borderColor: "rgba(var(--rgb),0.07)" }}>

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.5rem] tracking-[0.16em] uppercase px-2 py-1 border"
          style={{ borderColor: "rgba(var(--rgb),0.08)", color: "rgba(var(--rgb),0.3)", backgroundColor: "rgba(var(--rgb),0.02)" }}>
          {proj.label}
        </span>
        <span className="font-mono text-[0.48rem] tracking-wider"
          style={{ color: "rgba(var(--rgb),0.2)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3 className="font-display text-[1rem] leading-snug mb-3"
          style={{ fontWeight: 600, color: "var(--text-solid)" }}>
          {proj.name}
        </h3>
        <p className="text-[0.82rem] leading-relaxed"
          style={{ color: "rgba(var(--rgb),0.44)" }}>
          {proj.desc}
        </p>
      </div>

      <div dir="ltr" className="flex flex-wrap gap-1.5 mt-auto">
        {proj.tags.map(tag => (
          <span key={tag}
            className="font-mono text-[0.5rem] tracking-wider px-2 py-0.5 border"
            style={{ borderColor: "rgba(var(--rgb),0.07)", color: "rgba(var(--rgb),0.26)", backgroundColor: "rgba(var(--rgb),0.012)" }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t flex items-center justify-between"
        style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
        <div>
          <span className="font-display text-sm block leading-none mb-0.5"
            style={{ fontWeight: 700, color: "var(--text-solid)" }}>
            {proj.metric}
          </span>
          <span className="text-[0.62rem]" style={{ color: "rgba(var(--rgb),0.3)" }}>
            {proj.result}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
