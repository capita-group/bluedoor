"use client";

import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ReserveStamp from "@/components/ui/ReserveStamp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

/* DISH DATA */
const dishes = [
  { id: 1, src: "/img/dish.png", alt: "Signature Dish 1" },
  { id: 2, src: "/img/dishOne.png", alt: "Signature Dish 2" },
  { id: 3, src: "/img/dishThree.png", alt: "Signature Dish 3" },
];

function ProgressRing({
  size = 112,
  stroke = 5,
  progress = 0,
  className = "",
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(10,149,235,0.18)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(10,149,235,0.95)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 80ms linear" }}
      />
    </svg>
  );
}

function rotate(arr, startIndex) {
  const n = arr.length;
  const s = ((startIndex % n) + n) % n;
  return [...arr.slice(s), ...arr.slice(0, s)];
}

export default function HeroBanner() {
  const mainSwiperRef = useRef(null);

  const AUTOPLAY_MS = 3000;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // transfer animation state
  const [transfer, setTransfer] = useState(null);
  // transfer = { id, stage: "thumb" | "main" }

  const activeDish = dishes[active];

  const orderedThumbs = useMemo(() => rotate(dishes, active), [active]);

  // Preload images (no buffering on click)
  useEffect(() => {
    dishes.forEach((d) => {
      const img = new window.Image();
      img.src = d.src;
    });
  }, []);

  // Trigger shared-layout transfer on active change
  useEffect(() => {
    if (!activeDish) return;

    setTransfer({ id: activeDish.id, stage: "thumb" });
    const raf = requestAnimationFrame(() =>
      setTransfer({ id: activeDish.id, stage: "main" }),
    );
    return () => cancelAnimationFrame(raf);
  }, [activeDish?.id]);

  const goTo = (index) => {
    // stop autoplay during manual navigation (prevents stutter)
    mainSwiperRef.current?.autoplay?.stop();
    mainSwiperRef.current?.slideToLoop(index, 650); // smooth but fast
    // resume autoplay a bit later
    window.setTimeout(() => mainSwiperRef.current?.autoplay?.start(), 800);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* ✅ Preload hint for the browser */}
      <Head>
        {dishes.map((d) => (
          <link key={d.id} rel="preload" as="image" href={d.src} />
        ))}
      </Head>



      {/* THEME OVERLAY */}
      <div
        className="absolute inset-0"
   
      />

      {/* RESERVE STAMP */}
      <div className="absolute bottom-10 right-6 z-20">
        <ReserveStamp size={120} tilt={-18} />
      </div>

      <LayoutGroup id="dish-transfer">
        <div className="relative z-10 h-full flex items-center px-6 lg:px-70">
          {/* LEFT */}
          <div className="max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-[#0a95eb] mb-3">
              Bluedoor
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest uppercase text-[#0f172a] leading-tight">
              Cafe & <br /> Bistro
            </h1>
            <div className="flex items-center gap-4 my-6">
              <div className="h-px w-14 bg-[#0a95eb]/60" />
              <div className="h-px w-10 bg-[#0f172a]/35" />
            </div>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0a95eb]/80 font-light mb-4">
              Crafted with passion
            </p>

            {/* Minimalist Opening Hours */}
            {/* Minimalist Opening Hours – Brand Blue */}
            <div className="backdrop-blur-xl bg-white/75 border border-[#0a95eb]/25 rounded-xl p-4 inline-block shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#0a95eb] animate-pulse" />
                <span className="text-xs font-semibold text-[#0a95eb] uppercase tracking-[0.25em]">
                  Open Today
                </span>
              </div>

              <div className="text-sm text-[#0f172a]">
                <div className="flex items-center gap-2">
                  <span className="opacity-70">Mon–Thu:</span>
                  <span className="font-medium text-[#0a95eb]">8AM – 10PM</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="opacity-70">Fri–Sun:</span>
                  <span className="font-medium text-[#0a95eb]">8AM – 11PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-10 flex items-center gap-10 lg:gap-14 pr-48">
            {/* MAIN */}
            <div
              className="relative w-[320px] h-[320px] md:w-[530px] md:h-[500px]"
              onMouseEnter={() => mainSwiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => mainSwiperRef.current?.autoplay?.start()}
            >
              {/* Circular rotation container */}
              <motion.div
                className="absolute inset-0 grid place-items-center pointer-events-none z-20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24, // 24 seconds for one full rotation
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Circular path indicator (optional decorative element) */}
                <div className="absolute w-[85%] h-[85%] rounded-full border border-[#0a95eb]/10" />
              </motion.div>

              {/* transfer target */}
              <div className="absolute inset-0 grid place-items-center pointer-events-none z-30">
                <div className="relative w-[72%] h-[72%]">
                  <AnimatePresence>
                    {transfer?.stage === "main" &&
                      transfer?.id === activeDish.id && (
                        <motion.div
                          layoutId={`dish-${transfer.id}`}
                          className="absolute inset-0"
                          initial={{
                            opacity: 0.9,
                            filter: "blur(0px)",
                            scale: 1,
                          }}
                          animate={{
                            opacity: 0,
                            filter: "blur(10px)",
                            scale: 1.12,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          onAnimationComplete={() => setTransfer(null)}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={activeDish.src}
                              alt={activeDish.alt}
                              fill
                              className="object-contain"
                              loading="eager"
                              fetchPriority="high"
                              priority
                            />
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Main dish image with circular rotation */}
              <motion.div
                className="absolute inset-0 grid place-items-center z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 48, // 24 seconds for one full rotation
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={900}
                  loop
                  slidesPerView={1}
                  allowTouchMove={false}
                  autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
                  onSwiper={(s) => (mainSwiperRef.current = s)}
                  onRealIndexChange={(s) => setActive(s.realIndex)}
                  onAutoplayTimeLeft={(_, __, prog) => setProgress(1 - prog)}
                  className="w-full h-full"
                >
                  {dishes.map((dish) => (
                    <SwiperSlide key={dish.id}>
                      <div className="relative w-full h-full">
                        <Image
                          src={dish.src}
                          alt={dish.alt}
                          fill
                          className="dish-img object-contain select-none"
                          loading="eager"
                          fetchPriority="high"
                          priority
                          sizes="(max-width: 768px) 320px, 530px"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* FIXED: Removed the blur-to-fade transition that was causing flashing */}
              <style jsx global>{`
                .swiper-slide .dish-img {
                  opacity: 0;
                  transition: opacity 900ms ease;
                  will-change: opacity;
                }
                .swiper-slide-active .dish-img {
                  opacity: 1;
                }

                /* Smooth continuous rotation for the entire container */
                .swiper-container {
                  transform-origin: center center;
                }
              `}</style>
            </div>

            {/* THUMBS */}
            <div className="flex gap-5">
              {orderedThumbs.map((dish, idx) => {
                const originalIndex = dishes.findIndex((d) => d.id === dish.id);
                const isFirst = idx === 0;

                return (
                  <button
                    key={dish.id}
                    type="button"
                    onMouseEnter={() => goTo(originalIndex)}
                    onClick={() => goTo(originalIndex)}
                    className="relative"
                    aria-label={`Show ${dish.alt}`}
                  >
                    {isFirst && (
                      <div className="absolute -inset-2 grid place-items-center pointer-events-none">
                        <ProgressRing
                          size={130}
                          stroke={5}
                          progress={progress}
                        />
                      </div>
                    )}

                    <div
                      className={`
                        relative
                        w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                        rounded-full border-2
                        transition-all duration-300
                        hover:scale-110
                        ${isFirst ? "border-[#CFE3FA]  scale-110 shadow-2xl" : "border-[#CFE3FA] border-dashed border-2 hover:border-[#1F3B63]/60"}
                      `}
                    >
                      {isFirst &&
                      transfer?.stage === "thumb" &&
                      transfer?.id === dish.id ? (
                        <motion.div
                          layoutId={`dish-${dish.id}`}
                          className="absolute inset-0"
                        >
                          <Image
                            src={dish.src}
                            alt={dish.alt}
                            fill
                            className="object-contain p-4 select-none"
                            loading="eager"
                            fetchPriority="high"
                            priority
                            sizes="(max-width: 768px) 80px, 112px"
                          />
                        </motion.div>
                      ) : (
                        <Image
                          src={dish.src}
                          alt={dish.alt}
                          fill
                          className="object-contain p-4 select-none"
                          loading="eager"
                          priority
                          sizes="(max-width: 768px) 80px, 112px"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </LayoutGroup>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-center">
          <div className="h-8 w-px bg-[#0a95eb]/60 mx-auto" />
          <p className="text-xs text-[#0a95eb]/70 mt-2 tracking-widest uppercase">
            Explore
          </p>
        </div>
      </div>
    </section>
  );
}
