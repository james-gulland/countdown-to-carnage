import type { Metadata } from "next";
import "./globals.css";
import { tanker } from "./fonts/tanker";

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
