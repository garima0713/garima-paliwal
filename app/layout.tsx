import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { profile } from "@/data/content";
import Background from "@/components/Background";
import "./globals.css";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description = `${profile.name} is a ${profile.role.toLowerCase()} and B.Sc. Computer Science student in ${profile.location}. See her projects, skills and education.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description,
  openGraph: { title: `${profile.name} | ${profile.role}`, description, type: "website", url: profile.siteUrl },
};

export const viewport: Viewport = { themeColor: "#0A0F1F", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
