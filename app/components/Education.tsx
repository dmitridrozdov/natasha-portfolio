"use client";

import { useReveal } from "./useReveal";

const education = [
  {
    year: "Current",
    title: "Associate in Project Management",
    institution: "Ongoing Professional Development",
    note: "Actively studying PMP-aligned qualifications with practical Agile delivery experience.",
  },
  {
    year: "2025",
    title: "Leadership Accelerator Course",
    institution: "Professional Development",
  },
  {
    year: "2020",
    title: "Certificate IV in Accounting and Bookkeeping",
    institution: "TAFE NSW, St Leonards Campus",
    note: "Full-time study.",
  },
  {
    year: "2020",
    title: "Statement of Attainment — Excel Spreadsheets",
    institution: "TAFE Digital",
  },
  {
    year: "2009",
    title: "Certificate III in Accounting and Bookkeeping",
    institution: "TAFE NSW, Baulkham Hills Campus",
    note: "Evening part-time study.",
  },
  {
    year: "1999",
    title: "Diploma in Travel, Tourism & Hospitality",
    institution: "Kharkov National University of Urban Economy, Ukraine",
  },
];

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="py-32" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            Qualifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>
          <div className="mt-4 w-12 h-px" style={{ background: "var(--accent-dim)" }} />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-16 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border-subtle)" }}
          />

          <ul className="space-y-6">
            {education.map((item, i) => (
              <li key={i} className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12 items-start group">
                {/* Year */}
                <div className="relative flex md:justify-end items-start pt-1">
                  <span
                    className="font-mono text-sm font-medium"
                    style={{
                      color: item.year === "Current" ? "var(--accent)" : "var(--text-muted)",
                    }}
                  >
                    {item.year}
                  </span>
                  {/* Dot on line */}
                  <div
                    className="hidden md:block absolute -right-[calc(3rem+5px)] top-[6px] timeline-dot transition-all duration-300 group-hover:scale-125"
                    style={{
                      background: item.year === "Current" ? "var(--accent)" : "var(--text-muted)",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="p-5 transition-all duration-300 group-hover:border-opacity-50"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <h3
                    className="font-display text-xl mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-mono text-xs tracking-wider uppercase"
                    style={{ color: "var(--accent-dim)" }}
                  >
                    {item.institution}
                  </p>
                  {item.note && (
                    <p
                      className="mt-2 text-sm italic"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
