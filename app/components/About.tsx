"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-32" style={{ background: "var(--bg-secondary)" }}>
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-start">
        {/* Label */}
        <div className="md:col-span-1">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h2 className="font-display text-4xl" style={{ color: "var(--text-primary)" }}>
            Who I Am
          </h2>
          <div
            className="mt-4 w-12 h-px"
            style={{ background: "var(--accent-dim)" }}
          />
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-5">
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Highly organised and results-driven professional with extensive experience in{" "}
            <span style={{ color: "var(--accent-light)" }}>
              Operations Management, Project Coordination
            </span>{" "}
            and Administrative Leadership across construction and service-based industries.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Skilled in overseeing end-to-end project lifecycles — from planning and scheduling to
            cost control, compliance and client communication — ensuring seamless delivery of
            construction and production projects.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Proficient in{" "}
            <span style={{ color: "var(--accent-light)" }}>
              Salesforce, Procore, Xero, MYOB
            </span>{" "}
            and a wide ecosystem of construction and financial tools. Recognised for adaptability,
            problem-solving and a hands-on approach — thriving in dynamic, fast-paced environments
            where precision and structure are critical.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              "Operations Manager",
              "Accounts Manager",
              "Office Manager",
              "Executive Assistant",
              "Program Coordinator",
            ].map((role) => (
              <span
                key={role}
                className="font-mono text-xs tracking-wider uppercase px-3 py-1.5"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  background: "rgba(201,169,110,0.04)",
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
