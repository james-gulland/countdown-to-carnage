import { Orbitron } from "next/font/google";
import localFont from "next/font/local";

export const tanker = localFont({
  src: "./Tanker-Regular.woff2",
  display: "swap",
  variable: "--font-tanker",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});