"use client";

import { useMediaQuery } from "react-responsive";

export const VideoReveal = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="w-full max-w-3xl aspect-video mx-auto">
      <iframe
        className="rounded-xl shadow-xl"
        src="https://www.youtube.com/embed/h5hnbUcJKP4?autoplay=1&mute=1&rel=0&controls=1"
        title="Carnage Mode"
        width={isMobile ? 320 : 640}
        height={isMobile ? 180 : 360}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};
