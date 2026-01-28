// components/FromOurMenu.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FromOurMenu() {
  const [activeMenu, setActiveMenu] = useState("menu");
  const [hasTouch, setHasTouch] = useState(false);

  useEffect(() => {
   
  }, []);

  const menuImages = {
    menu: ["/img/plate.jpg", "/img/plate.jpg", "/img/plate.jpg"],
    cocktails: ["/img/plate.jpg", "/img/plate.jpg", "/img/plate.jpg"],
    wine: ["/img/plate.jpg", "/img/plate.jpg", "/img/plate.jpg"],
  };

  const imagePositions = {
    menu: [
      { bottom: "18%", left: "17%", w: 200, h: 300, shape: "roundedSquare" },
      { top: "22%", left: "0%", w: 190, h: 270, shape: "circle" },
      { bottom: "20%", left: "72%", w: 300, h: 300, shape: "circle" },
    ],
    cocktails: [
      { top: "70%", left: "2%", w: 220, h: 300, shape: "arch" },
      { bottom: "12%", left: "15%", w: 180, h: 180, shape: "circle" },
      { top: "26%", right: "8%", w: 220, h: 270, shape: "circle" },
    ],
    wine: [
      { top: "18%", left: "0", w: 300, h: 300, shape: "diamond" },
      { bottom: "10%", left: "18%", w: 200, h: 360, shape: "squircle" },
      { top: "14%", right: "6%", w: 220, h: 320, shape: "arch" },
    ],
  };

  const menus = [
    { id: "menu", title: "MENU", subtitle: "Main Courses" },
    { id: "cocktails", title: "COCKTAILS", subtitle: "Mixed Drinks" },
    { id: "wine", title: "WINE LIST", subtitle: "White Wines" },
  ];

  /* ---------------- MOTION VARIANTS ---------------- */

  const floatGroup = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const floatItem = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      y: 30,
      filter: "blur(3px)",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: 20,
      filter: "blur(3px)",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  /* 7000ms FLOAT LOOP */
  const drift = (i) => ({
    y: [0, i % 2 === 0 ? -12 : 12, 0],
    x: [0, i === 2 ? 10 : -10, 0],
    rotate: [0, i === 2 ? -6 : 6, 0],
    transition: {
      duration: 2,         
      repeat: Infinity,
      ease: "easeInOut",
    },
  });

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">

        <p className="text-center text-[14px] font-extrabold tracking-[0.35em] text-[#3aacc5]">
          FROM OUR MENU
        </p>

        <div className="mt-10">
          <Divider />

          {menus.map((menu, index) => {
            const isActive = activeMenu === menu.id;

            return (
              <div key={menu.id}>
                <button
                  className="relative w-full py-10 group"
                  onMouseEnter={!hasTouch ? () => setActiveMenu(menu.id) : undefined}
                  onMouseLeave={!hasTouch ? () => setActiveMenu("menu") : undefined}
                  onClick={hasTouch ? () => setActiveMenu(menu.id) : undefined}
                >
                  {/* FLOATING IMAGES */}
                  <div className="absolute inset-0 pointer-events-none hidden sm:block">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0"
                          variants={floatGroup}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                        >
                          {imagePositions[menu.id].map((pos, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              variants={floatItem}
                              animate={drift(i)}
                              style={{
                                top: pos.top ?? "auto",
                                bottom: pos.bottom ?? "auto",
                                left: pos.left ?? "auto",
                                right: pos.right ?? "auto",
                                width: pos.w,
                                height: pos.h,
                              }}
                            >
                              <div
                                className="relative h-full w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.2)]"
                                style={getMaskStyle(pos.shape)}
                              >
                                <Image
                                  src={menuImages[menu.id][i]}
                                  alt=""
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <h2
                    className={`text-center font-serif text-[38px] sm:text-[62px] md:text-[78px] lg:text-[96px]
                    tracking-[0.12em] transition-colors duration-[700ms]
                    ${
                      isActive
                        ? "text-[#2677a7]"
                        : "text-[#2677a7]/30"
                    }`}
                  >
                    {menu.title}
                  </h2>

                  <p
                    className={`mt-4 text-center text-[13px] tracking-[0.18em] transition-colors duration-[700ms]
                    ${
                      isActive
                        ? "text-[#3aacc5]"
                        : "text-[#3aacc5]/40"
                    }`}
                  >
                    {menu.subtitle}
                  </p>
                </button>

                {index < menus.length - 1 && <Divider />}
              </div>
            );
          })}

          <Divider />

          <div className="flex justify-center pt-10">
            <Link
              href="/menu"
              className="border border-[#2677a7] px-10 py-3 text-[11px] tracking-[0.3em]
              text-[#2677a7] transition-all duration-[700ms]
              hover:bg-[#2677a7] hover:text-white"
            >
              VIEW ALL MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HELPERS ---------- */

function Divider() {
  return <div className="h-px w-full bg-[#2677a7]/15" />;
}

function getMaskStyle(shape) {
  switch (shape) {
    case "circle":
      return { borderRadius: "9999px" };
    case "roundedSquare":
      return { borderRadius: "26px" };
    case "squircle":
      return { borderRadius: "44px" };
    case "diamond":
      return {
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      };
    case "arch":
      return { borderRadius: "9999px 9999px 24px 24px" };
    default:
      return { borderRadius: "24px" };
  }
}
