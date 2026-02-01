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
import Scroll from "./banner/Scroll";
import LeftContent from "./banner/LeftContent";

/* DISH DATA */
const dishes = [
  { id: 1, src: "/img/dish.png", alt: "Signature Dish 1" },
  { id: 2, src: "/img/dishOne.png", alt: "Signature Dish 2" },
  { id: 3, src: "/img/dishThree.png", alt: "Signature Dish 3" },
];

function ProgressRing({
  size = 80,
  stroke = 4,
  progress = 0,
  className = "",
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(10,149,235,0.18)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(10,149,235,0.95)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ 
          transition: "stroke-dashoffset 80ms linear",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%"
        }}
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
  const containerRef = useRef(null);

  const AUTOPLAY_MS = 3000;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [thumbSize, setThumbSize] = useState({ width: 80, height: 80 });
  const [containerHeight, setContainerHeight] = useState("h-screen");

  // transfer animation state
  const [transfer, setTransfer] = useState(null);
  // transfer = { id, stage: "thumb" | "main" }

  const activeDish = dishes[active];

  const orderedThumbs = useMemo(() => rotate(dishes, active), [active]);

  // Handle responsiveness
  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 1024);
      
      // Adjust container height for mobile to accommodate stacked layout
      if (width < 640) {
        setContainerHeight("min-h-[110vh]");
      } else if (width < 1024) {
        setContainerHeight("min-h-screen");
      } else {
        setContainerHeight("h-screen");
      }
      
      // Calculate thumb size based on screen width
      if (width < 480) {
        setThumbSize({ width: 56, height: 56 });
      } else if (width < 640) {
        setThumbSize({ width: 64, height: 64 });
      } else if (width < 768) {
        setThumbSize({ width: 72, height: 72 });
      } else if (width < 1024) {
        setThumbSize({ width: 80, height: 80 });
      } else if (width < 1280) {
        setThumbSize({ width: 88, height: 88 });
      } else if (width < 1536) {
        setThumbSize({ width: 96, height: 96 });
      } else {
        setThumbSize({ width: 130, height: 130 });
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images (no buffering on click)
  useEffect(() => {
    if (!mounted) return;
    
    dishes.forEach((d) => {
      const img = new window.Image();
      img.src = d.src;
    });
  }, [mounted]);

  // Trigger shared-layout transfer on active change
  useEffect(() => {
    if (!activeDish || !mounted) return;

    setTransfer({ id: activeDish.id, stage: "thumb" });
    const raf = requestAnimationFrame(() =>
      setTransfer({ id: activeDish.id, stage: "main" }),
    );
    return () => cancelAnimationFrame(raf);
  }, [activeDish?.id, mounted]);

  const goTo = (index) => {
    if (!mainSwiperRef.current) return;
    
    // stop autoplay during manual navigation (prevents stutter)
    mainSwiperRef.current.autoplay?.stop();
    mainSwiperRef.current.slideToLoop(index, 650); // smooth but fast
    // resume autoplay a bit later
    window.setTimeout(() => {
      if (mainSwiperRef.current?.autoplay) {
        mainSwiperRef.current.autoplay.start();
      }
    }, 800);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goTo(index);
    }
  };

  // Calculate ring size based on thumb size
const getRingSize = () => {
  if (isMobile) {
    if (thumbSize.width <= 56) return 90;    // xs
    if (thumbSize.width <= 64) return 100;   // sm
    if (thumbSize.width <= 72) return 110;   // md
    return 120;                              // lg mobile
  }
  
  // Desktop sizes
  if (thumbSize.width <= 80) return 100;     // lg
  if (thumbSize.width <= 88) return 110;     // xl
  if (thumbSize.width <= 96) return 130;     // 2xl
  if (thumbSize.width <= 112) return 140;    // 3xl/4k
  return 150;                                // Larger screens
};
 

  if (!mounted) {
    return (
      <section 
        className="relative h-screen w-full overflow-hidden bg-white" 
        ref={containerRef}
        aria-label="Hero banner loading"
      />
    );
  }

  return (
    <>
      {/* Global styles */}
      <style jsx global>{`
        /* Mobile touch improvements */
        .hero-touch-button {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .hero-blue-text {
            color: #0066cc !important;
          }
          .hero-blue-border {
            border-color: #0066cc !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hero-animate-bounce,
          .hero-animate-pulse,
          .hero-motion-div {
            animation: none !important;
            transition: none !important;
          }
          
          .swiper-slide .dish-img {
            transition: opacity 300ms ease !important;
          }
        }
        
        /* Swiper image transitions */
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

        /* Touch improvements for mobile */
        @media (max-width: 768px) {
          .swiper-slide .dish-img {
            transition-duration: 600ms;
          }
        }
        
        /* Perfect ring positioning */
        .progress-ring-container {
          position: absolute;
          top: 49%;
          left: 49%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: -1;
        }

        /* Smooth image loading */
        .dish-img {
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>

      <section 
        className={`relative ${containerHeight} w-full overflow-hidden bg-white`}
        ref={containerRef}
        aria-label="Bluedoor Cafe & Bistro Hero Banner"
      >
        {/* ✅ Preload hint for the browser */}
        <Head>
          {dishes.map((d) => (
            <link key={d.id} rel="preload" as="image" href={d.src} />
          ))}
        </Head>

        {/* RESERVE STAMP - Responsive positioning */}
        <div className="absolute bottom-6 right-4 z-20 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8 lg:bottom-10 lg:right-6">
          <ReserveStamp 
            size={isMobile ? 80 : 120} 
            tilt={-18} 
          />
        </div>

        <LayoutGroup id="dish-transfer">
          {/* Main content container with proper vertical alignment */}
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-8 sm:pt-12 lg:pt-0 pb-8 lg:pb-0">
            
            {/* LEFT CONTENT - Responsive layout with consistent alignment */}
            <LeftContent/>

            {/* RIGHT SECTION - Image with thumbs, centered vertically */}
            <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-center mt-12 md:mt-40 lg:mt-30 2xl:mt-0">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6  xl:gap-14">
                
                {/* MAIN DISH IMAGE - Responsive sizing */}
                <div
                  className={`
                    relative
                    ${isMobile ? 
                      "w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[300px] sm:h-[300px]" : 
                      "w-[320px] h-[320px] md:w-[380px] md:h-[360px] lg:w-[370px] lg:h-[360px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]"
                    }
                  `}
                  onMouseEnter={() => !isMobile && mainSwiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() => !isMobile && mainSwiperRef.current?.autoplay?.start()}
                >
                  {/* Circular rotation container - Hide on mobile for performance */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 grid place-items-center pointer-events-none z-20 hero-motion-div"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      aria-hidden="true"
                    >
                      <div className="absolute w-[75%] h-[75%] rounded-full border border-[#0a95eb]/10 hero-blue-border" />
                    </motion.div>
                  )}

                  {/* transfer target */}
                  <div className="absolute inset-0 grid place-items-center pointer-events-none z-30">
                    <div className="relative w-[72%] h-[72%]">
                      <AnimatePresence>
                        {transfer?.stage === "main" &&
                          transfer?.id === activeDish.id && (
                            <motion.div
                              layoutId={`dish-${transfer.id}`}
                              className="absolute inset-0 hero-motion-div"
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
                                  sizes={isMobile ? "(max-width: 480px) 200px, (max-width: 640px) 240px, 300px" : "(max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, 480px"}
                                  priority
                                />
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Main dish image with circular rotation - Conditional animation */}
                  <motion.div
                    className="absolute inset-0 grid place-items-center z-10 hero-motion-div"
                    animate={!isMobile ? { rotate: 360 } : {}}
                    transition={
                      !isMobile
                        ? {
                            duration: 48,
                            repeat: Infinity,
                            ease: "linear",
                          }
                        : {}
                    }
                  >
                    <Swiper
                      modules={[Autoplay, EffectFade]}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      speed={900}
                      loop
                      slidesPerView={1}
                      allowTouchMove={isMobile}
                      autoplay={{ 
                        delay: AUTOPLAY_MS, 
                        disableOnInteraction: false,
                        pauseOnMouseEnter: !isMobile 
                      }}
                      onSwiper={(s) => (mainSwiperRef.current = s)}
                      onRealIndexChange={(s) => setActive(s.realIndex)}
                      onAutoplayTimeLeft={(_, __, prog) => setProgress(1 - prog)}
                      className="w-full h-full"
                    >
                      {dishes.map((dish) => (
                        <SwiperSlide key={dish.id} className="hero-swiper-slide">
                          <div className="relative w-full h-full">
                            <Image
                              src={dish.src}
                              alt={dish.alt}
                              fill
                              className="dish-img object-contain select-none"
                              sizes={`(max-width: 480px) 200px, (max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 480px`}
                              priority
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </div>

                {/* THUMBS - Responsive layout and sizing */}
                <div className={`
                  flex ${isMobile ? "flex-row" : "flex lg:mr-30 xl:mr-40 2xl:mr-80"}
                  ${isMobile ? "gap-6 sm:gap-8" : "gap-5"}
                  ${isMobile ? "mt-4" : "mt-4"}
                `}>
                  {orderedThumbs.map((dish, idx) => {
                    const originalIndex = dishes.findIndex((d) => d.id === dish.id);
                    const isFirst = idx === 0;
                    const ringSize = getRingSize();
              

                    return (
                      <div key={dish.id} className="relative">
                        {isFirst && (
                          <div 
                            className="progress-ring-container"
                            style={{
                              width: `${ringSize}px`,
                              height: `${ringSize}px`,
                            }}
                          >
                            <ProgressRing
                              size={ringSize}
                              stroke={4}
                              progress={progress}
                            />
                          </div>
                        )}

                        <button
                          type="button"
                          onMouseEnter={() => !isMobile && goTo(originalIndex)}
                          onClick={() => goTo(originalIndex)}
                          onKeyDown={(e) => handleKeyDown(e, originalIndex)}
                          className="relative focus:outline-none focus:ring-2 focus:ring-[#0a95eb] focus:ring-offset-2 rounded-full hero-touch-button"
                          aria-label={`Show ${dish.alt}`}
                          aria-current={isFirst ? "true" : "false"}
                        >
                          <div
                            className={`
                              relative
                              ${isMobile ? 
                                "w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18" : 
                                "w-16 h-16 sm:w-18 sm:h-18 xl:w-24 xl:h-24"
                              }
                              rounded-full border-2
                              transition-all duration-300
                              hover:scale-110
                              active:scale-105
                              ${isFirst ? 
                                "border-[#CFE3FA] scale-110 shadow-xl lg:shadow-2xl bg-white" : 
                                "border-[#CFE3FA] border-dashed hover:border-[#1F3B63]/60 hero-blue-border bg-white/95"
                              }
                            `}
                            style={{
                              width: `${thumbSize.width}px`,
                              height: `${thumbSize.height}px`,
                            }}
                          >
                            {isFirst &&
                            transfer?.stage === "thumb" &&
                            transfer?.id === dish.id ? (
                              <motion.div
                                layoutId={`dish-${dish.id}`}
                                className="absolute inset-0 hero-motion-div"
                              >
                                <Image
                                  src={dish.src}
                                  alt={dish.alt}
                                  fill
                                  className="object-contain p-2 xs:p-3 sm:p-4 select-none"
                                  sizes={`${thumbSize.width}px`}
                                  priority={isFirst}
                                />
                              </motion.div>
                            ) : (
                              <Image
                                src={dish.src}
                                alt={dish.alt}
                                fill
                                className="object-contain p-2 xs:p-3 sm:p-4 select-none"
                                sizes={`${thumbSize.width}px`}
                                priority={isFirst}
                              />
                            )}
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </LayoutGroup>
       <Scroll/>
      </section>
    </>
  );
}