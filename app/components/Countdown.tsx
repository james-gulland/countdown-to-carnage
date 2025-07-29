"use client";

import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Target date (can update this anytime)
const targetDate = new Date("2025-09-26T22:44:59").getTime();

export const Countdown = () => {
  return (
    <div className={`flex justify-center items-center bg-black ${orbitron.className}`}>
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontFamily: "Times New Roman, serif",
          fontSize: 12,
          letterSpacing: 2,
          color: "#888",
          marginTop: 8,
        }}
        digitBlockStyle={{
          width: 60,
          height: 80,
          fontSize: 40,
          background: "#111",
          color: "#fff",
        }}
        duration={0.6}
      />
    </div>
  );
};
