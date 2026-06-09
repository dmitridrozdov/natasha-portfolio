"use client";

import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="reveal relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
          Let&apos;s Connect
        </p>
        <h2
          className="font-display mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Open to New{" "}
          <span className="text-gradient">Opportunities</span>
        </h2>
        <p
          className="text-lg leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Whether you&apos;re looking for an experienced Operations Manager, a detail-oriented Accounts
          Specialist, or a trusted Executive Assistant — let&apos;s start a conversation.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:nataly.drozdova@gmail.com"
            className="flex items-center gap-3 px-6 py-4 card-hover group"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-xl" style={{ color: "var(--accent)" }}>✉</span>
            <div className="text-left">
              <div className="font-mono text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>
                Email
              </div>
              <div className="text-base transition-colors group-hover:text-amber-300" style={{ color: "var(--text-secondary)" }}>
                nataly.drozdova@gmail.com
              </div>
            </div>
          </a>

          <a
            href="tel:0419403309"
            className="flex items-center gap-3 px-6 py-4 card-hover group"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-xl" style={{ color: "var(--accent)" }}>✆</span>
            <div className="text-left">
              <div className="font-mono text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>
                Phone
              </div>
              <div className="text-base transition-colors group-hover:text-amber-300" style={{ color: "var(--text-secondary)" }}>
                0419 40 33 09
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/natasha-drozdova"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 card-hover group"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-xl" style={{ color: "var(--accent)" }}>in</span>
            <div className="text-left">
              <div className="font-mono text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>
                LinkedIn
              </div>
              <div className="text-base transition-colors group-hover:text-amber-300" style={{ color: "var(--text-secondary)" }}>
                Natasha Drozdova
              </div>
            </div>
          </a>
        </div>

        {/* CTA button */}
        <a
          href="mailto:nataly.drozdova@gmail.com?subject=Employment%20Enquiry"
          className="inline-flex items-center gap-3 px-10 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            background: "var(--accent)",
            color: "var(--bg-primary)",
            fontWeight: 600,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent)";
          }}
        >
          Send an Enquiry
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
