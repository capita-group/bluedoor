// components/VideoHero.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VideoHero({
  poster = "/img/your-poster.jpg", // put your image here (like screenshot)
  videoSrc = "/video/banner.mp4",   // video to play on click
  height = "h-[220px] sm:h-[340px] md:h-[420px] lg:h-[520px]",
}) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // pause when closed
  useEffect(() => {
    if (!open && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch {}
    }
  }, [open]);

  return (
    <>
      <section className="relative w-full">
        <div className={`relative w-full overflow-hidden ${height}`}>
          {/* Background Image */}
          <Image
            src={poster}
            alt="Video cover"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* soft dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Center Play Button */}
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       grid place-items-center outline-none"
          >
            {/* outer octagon ring */}
            <span
              className="relative grid place-items-center"
              style={{
                width: 86,
                height: 86,
                clipPath:
                  "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                border: "1px solid rgba(255,255,255,0.45)",
                background: "rgba(0,0,0,0.10)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
              }}
            >
              {/* inner octagon */}
              <span
                className="grid place-items-center transition-transform duration-300 group-hover:scale-[1.04]"
                style={{
                  width: 62,
                  height: 62,
                  clipPath:
                    "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                  border: "1px solid rgba(255,255,255,0.30)",
                }}
              >
                {/* play triangle */}
                <span
                  className="ml-[2px] block"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "9px solid transparent",
                    borderBottom: "9px solid transparent",
                    borderLeft: "14px solid rgba(255,255,255,0.85)",
                  }}
                />
              </span>

              {/* subtle pulse */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                  boxShadow: "0 0 0 14px rgba(255,255,255,0.06)",
                }}
              />
            </span>
          </button>
        </div>
      </section>

      {/* Modal Video */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1.5 text-xs tracking-widest text-white/90 hover:bg-white/20"
              >
                CLOSE
              </button>

              <div className="relative aspect-video w-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
