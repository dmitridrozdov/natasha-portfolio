import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natasha Drozdova — Operations & Project Management",
  description:
    "Operations Manager, Accounts Manager & Executive Assistant with extensive experience across Construction, FinTech, Banking and IT industries.",
  keywords: [
    "Operations Manager",
    "Accounts Manager",
    "Project Coordinator",
    "Executive Assistant",
    "Sydney",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="noise">
      <body>{children}</body>
    </html>
  );
}
