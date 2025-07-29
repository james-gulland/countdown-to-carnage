"use client";

import React, { useEffect, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import { Orbitron } from "next/font/google";
import { tanker } from "../fonts/tanker";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Target date (can update this anytime)
const targetDate = new Date("2025-09-26T22:44:59").getTime();

export const Countdown = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`flex justify-center items-center ${orbitron.className}`}>
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontFamily: tanker.style.fontFamily,
          fontSize: isMobile ? 10 : 14,
          letterSpacing: 3,
          color: "#000",
          marginTop: 8
        }}
        digitBlockStyle={{
          width: isMobile ? 38 : 60,
          height: isMobile ? 50 : 80,
          fontSize: isMobile ? 24 : 40,
          background: "#111",
          color: "#fff",
        }}
        dividerStyle={{
          color: "#444",
        }}
        separatorStyle={{
          color: "#000",
          size: isMobile ? 3 : 5,
        }}
        duration={0.6}
      />
    </section>
  );
};
