// components/DrinkMarquee.jsx
"use client";

import Image from "next/image";
import { useMemo } from "react";

const items = [
  { title: "HOT MOCHA", img: "/img/drink1.jpg", shape: "square" },
  { title: "FRAPPE", img: "/img/drink2.jpg", shape: "circle" },
  { title: "HAZELNUT CAPPUCCINO", img: "/img/drink3.jpg", shape: "circle" },
  { title: "CHOCOLATE MILKY BUBBLE", img: "/img/drink4.jpg", shape: "pill" },
  { title: "ICED MOCHA", img: "/img/drink5.jpg", shape: "pill" },
  { title: "STRAWBERRY MILKY BUBBLE", img: "/img/drink6.jpg", shape: "circle" },
];

function Thumb({ src, shape = "circle", alt }) {
  const shapeClass =
    shape === "square"
      ? "rounded-md"
      : shape === "pill"
      ? "rounded-2xl"
      : "rounded-full";

  return (
    <span
      className={[
        "relative inline-block overflow-hidden shrink-0",
        // ✅ responsive thumb sizes
        "w-[44px] h-[44px] xs:w-[50px] xs:h-[50px] sm:w-[62px] sm:h-[62px] lg:w-[110px] lg:h-[110px] xl:w-[128px] xl:h-[128px]",
        "ring-1 ring-white/10",
        shapeClass,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 128px"
        priority={false}
      />
    </span>
  );
}

export default function DrinkMarquee({ speed = 42 }) {
  const loop = useMemo(() => [...items, ...items], []);

  return (
    // ✅ prevent page horizontal scroll on mobile
    <section className="w-full overflow-hidden">
      <MarqueeRow items={loop} duration={speed} />
      <MarqueeRow items={loop} duration={Math.max(8, speed - 2)} reverse />
    </section>
  );
}

function MarqueeRow({ items, duration = 12, reverse = false }) {
  return (
    <div className="relative overflow-hidden py-6 sm:py-8 lg:py-10 [contain:paint]">
      {/* subtle lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-900/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-900/10" />

      <div
        className={[
          "flex w-max items-center",
          // ✅ responsive spacing
          "gap-10 sm:gap-16 lg:gap-24 xl:gap-28",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "will-change-transform",
        ].join(" ")}
        style={{ ["--dur"]: `${duration}s` }}
      >
        {items.map((it, idx) => (
          <div
            key={`${it.title}-${idx}`}
            className="flex items-center gap-4 sm:gap-6 lg:gap-10"
          >
            <Thumb src={it.img} shape={it.shape} alt={it.title} />

            {/* ✅ smooth responsive font scaling */}
            <span
              className="select-none whitespace-nowrap font-serif uppercase text-[#2677a7]"
              style={{
                fontSize: "clamp(18px, 4vw, 56px)",
                letterSpacing: "0.22em",
              }}
            >
              {it.title}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeRev {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee var(--dur) linear infinite;
        }
        .animate-marquee-rev {
          animation: marqueeRev var(--dur) linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-rev {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}