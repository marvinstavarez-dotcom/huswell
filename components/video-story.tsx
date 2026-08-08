"use client";

import { useEffect, useRef, useState } from "react";

type Conn = Navigator & { connection?: { effectiveType?: string; saveData?: boolean } };

export default function VideoStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [low, setLow] = useState(false);

  useEffect(() => {
    const conn = (navigator as Conn).connection;
    const slow = conn?.saveData || ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
    if (slow || window.matchMedia("(max-width: 480px)").matches) {
      queueMicrotask(() => setLow(true));
    }
  }, []);

  return (
    <div className="relative border border-line bg-surface">
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        poster="/assets/img/hero/poster.jpg"
        preload="none"
        controls={playing}
        playsInline
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
      >
        <source
          src={low ? "/assets/video/huswell-trading-480p.mp4" : "/assets/video/huswell-trading.mp4"}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      {!playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-canvas-dark/20 text-grease transition-colors duration-300 hover:bg-canvas-dark/0"
          aria-label="Play the Huswell Trading factory film"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-grease bg-canvas-dark/50 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105 hover:border-accent hover:bg-accent">
            <span className="ml-1 inline-block h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-grease" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
            Play the film — 2 min
          </span>
        </button>
      )}
    </div>
  );
}