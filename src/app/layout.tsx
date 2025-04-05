import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salma Chakkour | Automation QA Engineer",
  description: "Professional portfolio of Salma Chakkour, an experienced Automation Quality Assurance Engineer specializing in test automation and quality processes.",
  keywords: ["automation testing", "QA engineer", "quality assurance", "test automation", "Salma Chakkour", "software testing", "QA portfolio"],
  authors: [{ name: "Salma Chakkour" }],
  creator: "Salma Chakkour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salmachakkour.com",
    title: "Salma Chakkour | Automation QA Engineer",
    description: "Professional portfolio of Salma Chakkour, an experienced Automation Quality Assurance Engineer",
    siteName: "Salma Chakkour Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salma Chakkour | Automation QA Engineer",
    description: "Professional portfolio of Salma Chakkour, an experienced Automation Quality Assurance Engineer",
    creator: "@SalmaChakkour",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen dark:bg-[var(--dark-bg)]`}
      >
        {children}
      </body>
    </html>
  );
}
