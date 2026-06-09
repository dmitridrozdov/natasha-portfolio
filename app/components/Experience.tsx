"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

interface Job {
  id: string;
  company: string;
  industry: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: string[];
  achievements: string[];
}

const jobs: Job[] = [
  {
    id: "skymax",
    company: "SkyMax",
    industry: "Construction — Opening Roof Louvre Systems",
    role: "Operations Specialist, Accounts & Office Manager, Executive Assistant",
    period: "Jan 2025 – Present",
    current: true,
    highlights: [
      "Coordinating end-to-end project administration in Salesforce and construction systems including job setup, quotes, invoicing and contracts.",
      "Overseeing financial processes across multiple entities — payroll, AP/AR, subcontractor statements and project invoicing.",
      "Providing high-level EA support to the Managing Director including diary management, travel coordination and meeting preparation.",
      "Managing lead reviews, Google Ads campaigns and Salesforce reports to support business development.",
      "Coordinating freight logistics, procurement, stocktake and order tracking.",
    ],
    achievements: [
      "Implemented new office and project procedures, improving efficiency and increasing net profit.",
      "Centralised project tracking in Salesforce, enhancing team collaboration and cash flow visibility.",
      "Optimised stocktake processes, reducing errors and improving delivery timelines.",
    ],
  },
  {
    id: "palantir",
    company: "Palantir Consulting",
    industry: "Structural Engineering",
    role: "Accounts Officer / Office Manager / Operations Manager",
    period: "Sep 2023 – Jan 2025",
    highlights: [
      "Overseeing planning, execution and completion of engineering projects across multiple workstreams.",
      "Developing and implementing SOPs to ensure consistent performance; driving Recognizable Revenue and Progressive Claims Schedules.",
      "Preparing financial reports including balance sheets, income statements and cashflow statements.",
      "Managing AP/AR, payroll, budgeting, forecasting and tax compliance including BAS and STP.",
      "Acting as key client point of contact; building long-term partnerships and repeat business.",
    ],
    achievements: [
      "Expanded the company's client base through new business connections, contributing to revenue growth.",
      "Introduced advanced project management tools, reducing overhead costs and optimising resource utilisation.",
      "Mentored junior staff, building a capable team that consistently met project goals.",
    ],
  },
  {
    id: "prospa",
    company: "Prospa",
    industry: "FinTech — Small Business Loans",
    role: "Program Coordinator, New Horizons Core Bank Transformation",
    period: "Jun 2022 – Sep 2023",
    highlights: [
      "Coordinated seven workstreams including Treasury and Servicing, overseeing schedules, communications and documentation.",
      "Provided governance support for Portfolio Management — transparency, RAID management, resource allocation and portfolio performance.",
      "Managed calendars for up to 10 stakeholders including the Head of Engineering.",
      "Reconciled invoices, actuals and forecasts; monitored program budgets for efficient fund utilisation.",
      "Prepared presentations and reports supporting program-related outreach and events.",
    ],
    achievements: [
      "Endorsed by Program Director as a pivotal contributor to the Core Banking Transformation Program's successful delivery.",
      "Streamlined the program's budget, achieving cost savings and more efficient resource use.",
      "Built and maintained strong stakeholder relationships that enhanced collaboration and results.",
    ],
  },
  {
    id: "armada",
    company: "Armada Solutions",
    industry: "IT Support & Development",
    role: "Accounts Officer",
    period: "Mar 2021 – Jun 2022",
    highlights: [
      "Managed all bookkeeping using MYOB AccountRight with online bank feeds.",
      "Handled AP/AR, prepared IAS & BAS, GST reconciliation, PAYG Withholding and tax instalment variations.",
      "Processed fortnightly payroll including Single Touch Payroll, superannuation and year-end reconciliation.",
      "Conducted monthly bank reconciliations; prepared Balance Sheet, P&L and cashflow reports.",
    ],
    achievements: [
      "Promoted within six months, taking on Managed Services billing previously handled by the Director.",
      "Developed deep IT Support industry knowledge, resolving outstanding financial issues efficiently.",
    ],
  },
  {
    id: "eet",
    company: "Eastern Europe Travel",
    industry: "Travel & Tourism",
    role: "Accounts Officer / General Manager Assistant / Travel Consultant",
    period: "Aug 2004 – Mar 2021",
    highlights: [
      "17-year tenure managing full bookkeeping suite across MYOB, Payroll Premier, QuickBooks and Xero.",
      "Handled AP/AR, fortnightly payroll, superannuation and monthly payroll tax across NSW and VIC.",
      "Conducted monthly bank reconciliations across five accounts including EUR/USD currencies.",
      "Maintained international supplier relationships across the US, Europe and Australia.",
    ],
    achievements: [
      "Improved the Accounts Payable system and migrated company accounts from Travelog to MYOB.",
      "Successfully reconciled outstanding debtors/creditors and maintained an up-to-date supplier database.",
    ],
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState<string>("skymax");
  const ref = useReveal();
  const active = jobs.find((j) => j.id === activeJob)!;

  return (
    <section id="experience" className="py-32" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="reveal mb-16">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Work History
          </p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
          <div className="mt-4 w-12 h-px" style={{ background: "var(--accent-dim)" }} />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Timeline sidebar */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[5px] top-3 bottom-3 w-px"
                style={{ background: "var(--border-subtle)" }}
              />

              <ul className="space-y-1">
                {jobs.map((job) => (
                  <li key={job.id}>
                    <button
                      onClick={() => setActiveJob(job.id)}
                      className="relative w-full text-left pl-8 py-4 pr-4 transition-all duration-300 group"
                      style={{
                        background:
                          activeJob === job.id
                            ? "var(--bg-card)"
                            : "transparent",
                        borderLeft:
                          activeJob === job.id
                            ? "2px solid var(--accent)"
                            : "2px solid transparent",
                      }}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px] timeline-dot transition-all duration-300"
                        style={{
                          background:
                            activeJob === job.id ? "var(--accent)" : "var(--text-muted)",
                          boxShadow:
                            activeJob === job.id
                              ? "0 0 0 4px rgba(201,169,110,0.2)"
                              : "none",
                        }}
                      />

                      <div
                        className="font-display text-base font-medium transition-colors"
                        style={{
                          color:
                            activeJob === job.id
                              ? "var(--accent-light)"
                              : "var(--text-secondary)",
                        }}
                      >
                        {job.company}
                      </div>
                      <div
                        className="font-mono text-xs mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {job.period}
                      </div>
                      {job.current && (
                        <span
                          className="inline-block mt-1 font-mono text-xs px-2 py-0.5 tracking-wider uppercase"
                          style={{
                            background: "rgba(201,169,110,0.12)",
                            color: "var(--accent)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detail panel */}
          <div
            key={activeJob}
            className="md:col-span-3 p-8 animate-fade-in"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div className="mb-1">
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--accent-dim)" }}
              >
                {active.industry}
              </span>
            </div>
            <h3
              className="font-display text-2xl mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {active.company}
            </h3>
            <p
              className="text-base italic mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {active.role}
            </p>

            <div className="mb-6">
              <h4
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--accent)" }}
              >
                Responsibilities
              </h4>
              <ul className="space-y-2.5">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--accent-dim)" }}
                    />
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="pt-5"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <h4
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--accent)" }}
              >
                Key Achievements
              </h4>
              <ul className="space-y-2.5">
                {active.achievements.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-1.5 flex-shrink-0 font-mono text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ✦
                    </span>
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
