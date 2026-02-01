// components/InstagramStrip.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/img/drink1.jpg", alt: "Instagram 1", rotate: -6, y: 10 },
  { src: "/img/drink2.jpg", alt: "Instagram 2", rotate: -2, y: 0 },
  { src: "/img/drink3.jpg", alt: "Instagram 3", rotate: 3, y: 18 },
  { src: "/img/drink4.jpg", alt: "Instagram 4", rotate: 1, y: 2 },
  { src: "/img/drink5.jpg", alt: "Instagram 5", rotate: 6, y: 12 },
];

export default function InstagramStrip() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const vh = window.innerHeight || 1;
      const viewportCenter = vh / 2;

      // ✅ small amount = subtle parallax
      const strength = 14; // px (increase to 18/22 if you want more)

      itemRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        // progress: -1 (top) to +1 (bottom) roughly
        const progress = (elCenter - viewportCenter) / vh;

        // invert to feel natural (move opposite to scroll)
        const par = Math.max(-strength, Math.min(strength, -progress * strength));

        el.style.setProperty("--par", `${par}px`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    // initial
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-[18px] sm:text-[26px] lg:text-[34px] tracking-[0.38em] sm:tracking-[0.45em] uppercase text-[#2677a7]">
            Instagram
          </h2>
        </div>

        {/* IMAGES */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center gap-4 sm:gap-8 lg:gap-10">
            {photos.map((p, i) => (
              <figure
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={[
                  "ig-parallax", // ✅ parallax transform handled by CSS below
                  "relative shrink-0 overflow-hidden bg-white",
                  "shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]",
                  "transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1",
                  "h-[150px] w-[190px] sm:h-[220px] sm:w-[280px] lg:h-[270px] lg:w-[330px]",
                  i === 0 ? "hidden sm:block" : "",
                  i === 4 ? "hidden md:block" : "",
                ].join(" ")}
                style={{
                  // ✅ keep your original rotate + base translate
                  ["--rot"]: `${p.rotate}deg`,
                  ["--baseY"]: `${p.y}px`,
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 280px, 330px"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-14 sm:mt-16 text-center text-[10px] sm:text-[16px] tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#2677a7]/80">
          Inspired by you, always — #bluedoor
        </p>
      </div>

      {/* ✅ parallax transform (no layout change) */}
      <style jsx>{`
        .ig-parallax {
          transform: rotate(var(--rot)) translateY(calc(var(--baseY) + var(--par, 0px)));
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .ig-parallax {
            transform: rotate(var(--rot)) translateY(var(--baseY));
          }
        }
      `}</style>
    </section>
  );
}