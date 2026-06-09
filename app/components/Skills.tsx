"use client";

import { useReveal } from "./useReveal";

interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

const coreSkills: SkillGroup[] = [
  {
    category: "Operations & Management",
    icon: "◈",
    items: [
      "Program & Project Management",
      "Business Administration",
      "Process Improvement & SOPs",
      "Resource Allocation",
      "Compliance & Risk Management",
      "Vendor & Fleet Management",
    ],
  },
  {
    category: "Finance & Accounts",
    icon: "◇",
    items: [
      "Accounts Payable & Receivable",
      "Payroll & Superannuation",
      "Cashflow Forecasting",
      "BAS, IAS & Tax Compliance",
      "Budget Management",
      "Financial Reporting",
    ],
  },
  {
    category: "Leadership & Support",
    icon: "◉",
    items: [
      "Executive Assistance",
      "Stakeholder Management",
      "Talent Acquisition & HR",
      "Team Mentoring",
      "Event Planning & Coordination",
      "Marketing & Communications",
    ],
  },
];

const softwareGroups: SkillGroup[] = [
  {
    category: "Project & Construction",
    icon: "▸",
    items: ["Procore", "Aconex", "Kantata (Mavenlink)", "Oracle", "Jira", "Confluence", "Trello", "Miro"],
  },
  {
    category: "CRM & Finance",
    icon: "▸",
    items: ["Salesforce", "Xero", "MYOB", "QuickBooks", "Concur", "Aerofiler", "Employment Hero", "PayApps"],
  },
  {
    category: "Office & Productivity",
    icon: "▸",
    items: ["Excel (Advanced)", "PowerPoint", "Word", "Google Suite", "SharePoint", "Teams", "Slack", "Zoom"],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-32" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Skills & Software
          </h2>
          <div className="mt-4 w-12 h-px" style={{ background: "var(--accent-dim)" }} />
        </div>

        {/* Core skills */}
        <div className="mb-16">
          <h3
            className="font-mono text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreSkills.map((group) => (
              <div
                key={group.category}
                className="p-7 card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" style={{ color: "var(--accent)" }}>
                    {group.icon}
                  </span>
                  <h4
                    className="font-display text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {group.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent-dim)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Software */}
        <div>
          <h3
            className="font-mono text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Software Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softwareGroups.map((group) => (
              <div
                key={group.category}
                className="p-6"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h4
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--accent-dim)" }}
                >
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-2.5 py-1 font-body transition-colors duration-200 cursor-default"
                      style={{
                        background: "rgba(201,169,110,0.06)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.06)";
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
