# Natasha Drozdova — Personal Portfolio Website

A stylish Next.js 14 + TypeScript personal portfolio site with a warm dark theme.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS properties
- **Fonts**: Playfair Display (headings) + Crimson Pro (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page (assembles all sections)
├── globals.css         # Design tokens, animations, utilities
└── components/
    ├── Nav.tsx          # Sticky navigation with scroll effect
    ├── Hero.tsx         # Animated canvas hero section
    ├── About.tsx        # Profile summary
    ├── Experience.tsx   # Interactive tabbed timeline
    ├── Skills.tsx       # Core competencies + software grid
    ├── Education.tsx    # Education timeline
    ├── Contact.tsx      # Contact cards + CTA
    ├── Footer.tsx       # Simple footer
    └── useReveal.ts     # Scroll-reveal IntersectionObserver hook
```

## Design

- **Palette**: Warm charcoal `#1a1816` base, cream text, amber/gold `#c9a96e` accents
- **Aesthetic**: Editorial luxury — Playfair Display headlines, particle canvas hero
- **Animations**: CSS fade-up on load, scroll-reveal on sections, particle network canvas
- **Interactive**: Tabbed experience section, hover micro-interactions throughout

## Customisation

All design tokens live in `app/globals.css` under `:root { ... }`. Swap colours, fonts, or spacing from one place.
