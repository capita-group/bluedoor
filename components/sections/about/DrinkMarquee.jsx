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
        "relative inline-block overflow-hidden",
        "w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] lg:w-[128px] lg:h-[128px]",
        "ring-1 ring-white/10",
        shapeClass,
      ].join(" ")}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="100px" />
    </span>
  );
}

export default function DrinkMarquee({
  speed = 42, // smaller = faster (seconds)
}) {
  // duplicate list for seamless loop
  const loop = useMemo(() => [...items, ...items], []);

  return (
    <section className="w-full">
      {/* one row */}
      <MarqueeRow items={loop} duration={speed} />
      {/* second row (slightly different speed + direction) */}
      <MarqueeRow items={loop} duration={Math.max(8, speed - 2)} reverse />
    </section>
  );
}

function MarqueeRow({ items, duration = 12, reverse = false }) {
  return (
    <div className="relative overflow-hidden py-7 sm:py-8 lg:py-10">
      {/* subtle lines like screenshot */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-900/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-900/10" />

      <div
        className={[
          "flex w-max items-center gap-16 sm:gap-24 lg:gap-28",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "will-change-transform",
        ].join(" ")}
        style={{ ["--dur"]: `${duration}s` }}
      >
        {items.map((it, idx) => (
          <div
            key={`${it.title}-${idx}`}
            className="flex items-center gap-6 sm:gap-8 lg:gap-10"
          >
            <Thumb src={it.img} shape={it.shape} alt={it.title} />
            <span className="select-none whitespace-nowrap font-serif uppercase tracking-[0.22em] text-[30px] sm:text-[42px] lg:text-[56px] text-[#2677a7]">
              {it.title}
            </span>
          </div>
        ))}
      </div>

      {/* motion safety */}
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