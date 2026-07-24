import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northpeak.digital"),
  title: "NorthPeak Digital — Web design & product engineering for ambitious brands",
  description:
    "NorthPeak Digital designs and builds high-performing websites and products for startups and growth-stage teams. Strategy, design, and engineering under one roof.",
  keywords: [
    "digital agency",
    "web design",
    "product engineering",
    "Next.js development",
    "UI/UX design",
  ],
  openGraph: {
    title: "NorthPeak Digital — Web design & product engineering for ambitious brands",
    description:
      "Strategy, design, and engineering for teams who want their website to actually perform.",
    url: "https://northpeak.digital",
    siteName: "NorthPeak Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Digital",
    description:
      "Web design and product engineering for ambitious brands.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-base-950"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
