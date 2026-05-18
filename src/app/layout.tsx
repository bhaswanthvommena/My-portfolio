import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-lac-beta-99.vercel.app"),
  title: "Bhaswanth Vommena | Dallas Data Engineer, AI Analyst & Tech Advisor",
  description: "Senior Data Professional & AI Product Builder in Dallas-Fort Worth, TX. Specializing in enterprise SQL, Python, Power BI dashboards, automated ETL, and custom AI applications.",
  keywords: [
    "Dallas Data Engineer",
    "Data Analyst Dallas",
    "AI Product Consultant",
    "AI Workflow Automations",
    "ETL Pipeline Developer",
    "Business Intelligence Dallas",
    "Citibank Data Analyst",
    "Power BI Tableau Specialist",
    "Snowflake Engineer Dallas",
    "Dallas Tech Advisor",
    "Next.js R3F Developer"
  ],
  authors: [{ name: "Bhaswanth Vommena" }],
  creator: "Bhaswanth Vommena",
  openGraph: {
    title: "Bhaswanth Vommena | Dallas Data Engineer & AI Product Builder",
    description: "Senior Data Professional & AI Product Builder in Dallas-Fort Worth, TX. Specializing in enterprise dashboards, ETL pipelines, and AI automations.",
    url: "https://my-portfolio-lac-beta-99.vercel.app/",
    siteName: "Bhaswanth Vommena Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Bhaswanth Vommena - Data Professional & AI Product Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaswanth Vommena | Dallas Data Engineer & AI Product Builder",
    description: "Senior Data Professional & AI Product Builder in Dallas-Fort Worth, TX.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bhaswanth Vommena",
  "jobTitle": "Senior Data Engineer, Analyst & AI Product Builder",
  "url": "https://my-portfolio-lac-beta-99.vercel.app/",
  "image": "https://my-portfolio-lac-beta-99.vercel.app/profile.png",
  "sameAs": [
    "https://www.linkedin.com/in/bhaswanthv/",
    "https://github.com/bhaswanthvommena18-jpg",
    "https://wa.me/18723679053"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas-Fort Worth",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "description": "Senior Data Professional & AI Product Builder in Dallas-Fort Worth, TX. Specializing in enterprise SQL, Python, Power BI dashboards, automated ETL, and custom AI applications.",
  "knowsAbout": [
    "Data Engineering",
    "Business Intelligence",
    "AI Product Development",
    "SQL Database Architecture",
    "Extract Transform Load (ETL)",
    "Automation & APIs",
    "React & Next.js Development"
  ]
};

import Background3D from "@/components/Background3D";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Background3D />
        {children}
      </body>
    </html>
  );
}

