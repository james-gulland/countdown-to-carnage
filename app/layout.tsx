import type { Metadata } from "next";
import "./globals.css";
import { tanker } from "./fonts/tanker";

export const metadata: Metadata = {
  title: "Countdown to Carnage",
  description: "The ultimate countdown to the next hench night out with the lads. Get hyped.",
  keywords: [
    "countdown",
    "club night",
    "carnage",
    "lads night",
    "night out",
    "flip clock",
    "party timer",
    "next.js",
    "react",
  ],
  authors: [{ name: "James Gulland", url: "https://github.com/james-gulland" }],
  creator: "James Gulland",
  openGraph: {
    title: "Countdown to Carnage",
    description: "Get hyped for the next legendary night out. The flip clock is ticking.",
    url: "https://countdown-to-carnage.com",
    siteName: "Countdown to Carnage",
    images: [
      {
        url: "/images/fold.jpeg",
        width: 1200,
        height: 630,
        alt: "Countdown to Carnage",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countdown to Carnage",
    description: "Flip-clock countdown to your next lad-fueled chaos night.",
    images: ["/images/fold.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tanker.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
