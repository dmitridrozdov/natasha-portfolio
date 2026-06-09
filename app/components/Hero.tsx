"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; a: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${p.a})`;
        ctx.fill();
      });
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 169, 110, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />

      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 h-24 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, var(--accent-dim))" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p
            className="animate-fade-up delay-100 font-mono text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent)" }}
          >
            Operations · Finance · Leadership
          </p>

          <h1
            className="animate-fade-up delay-200 font-display leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "var(--text-primary)" }}
          >
            Natasha
          </h1>
          <h1
            className="animate-fade-up delay-300 font-display leading-none mb-8 text-gradient"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Drozdova
          </h1>

          <p
            className="animate-fade-up delay-400 text-xl font-body mb-10 max-w-lg"
            style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            Operations Manager & Accounts Specialist with 20+ years delivering
            excellence across Construction, FinTech, Banking and IT industries.
          </p>

          <div className="animate-fade-up delay-500 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="px-7 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300"
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
              View Experience
            </a>
            <a
              href="#contact"
              className="px-7 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="animate-fade-up delay-600 flex justify-center order-first md:order-last">          <div className="relative">

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8"
              style={{ borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }} />
            <div className="absolute -bottom-2 -right-2 w-8 h-8"
              style={{ borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }} />

            <img
              src="/natasha.jpg"
              alt="Natasha Drozdova"
              className="w-80 h-96 object-cover object-top"
              style={{
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800 flex flex-col items-center gap-2">
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--accent-dim), transparent)" }}
        />
      </div>
    </section>
  );
}
