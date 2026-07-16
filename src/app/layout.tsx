import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-pjs",
  display: "swap",
});

const dms = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dms",
  display: "swap",
});

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pjs.variable} ${dms.variable} ${jbm.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-body text-primary">
        <Navbar brand={siteConfig.name} items={siteConfig.nav} cta={siteConfig.cta} />
        <main className="flex-1">{children}</main>
        <Footer text={siteConfig.footerText} />
      </body>
    </html>
  );
}
