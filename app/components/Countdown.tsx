"use client";

import { orbitron, tanker } from "../fonts/fonts";
import { useMediaQuery } from "react-responsive";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { VideoReveal } from "./VideoReveal";

const targetDate = new Date("2025-09-26T22:44:59").getTime();
// const targetDate = Date.now() + 5000; // for testing purposes

export const Countdown = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <section
      className={`flex justify-center items-center ${orbitron.className}`}
      style={
        {
          "--fcc-spacing": isMobile ? "0.3rem" : "0.5rem",
        } as React.CSSProperties & Record<string, string>
      }
    >
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontFamily: tanker.style.fontFamily,
          fontSize: isMobile ? 10 : 14,
          letterSpacing: 3,
          color: "#000",
          marginTop: 8,
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
      >
        <VideoReveal />
      </FlipClockCountdown>
    </section>
  );
};
