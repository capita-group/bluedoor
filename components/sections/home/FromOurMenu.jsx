// components/FromOurMenu.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import menu1 from "@/public/img/menu (6).jpg";
import menu2 from "@/public/img/menu (2).jpg";
import menu3 from "@/public/img/menu (3).jpg";
import menu4 from "@/public/img/menu (4).jpg";
import menu5 from "@/public/img/menu (7).jpg";
import menu6 from "@/public/img/menu (9).jpg";
import menu7 from "@/public/img/menu (5).jpg";
import menu8 from "@/public/img/menu (8).jpg";
import menu9 from "@/public/img/menu (1).jpg";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function FromOurMenu() {
  const [activeMenu, setActiveMenu] = useState("menu");
  const [hasTouch, setHasTouch] = useState(false);

  // ✅ Images per section (3 each)
  const menuImages = {
    menu: [menu1, menu2, menu3],
    appetizers: [menu4, menu5, menu6],
    drinks: [menu7, menu8, menu9],
  };

  // ✅ Responsive sizes (md/lg/xl) + positions
  const imagePositions = {
    menu: [
      {
        bottom: "18%",
        left: "17%",
        w: { md: 140, lg: 170, xl: 200 },
        h: { md: 210, lg: 255, xl: 300 },
        shape: "roundedSquare",
      },
      {
        top: "22%",
        left: "0%",
        w: { md: 135, lg: 160, xl: 190 },
        h: { md: 190, lg: 225, xl: 270 },
        shape: "circle",
      },
      {
        bottom: "20%",
        left: "72%",
        w: { md: 200, lg: 240, xl: 300 },
        h: { md: 200, lg: 240, xl: 300 },
        shape: "circle",
      },
    ],

    // ✅ RENAMED from cocktails -> appetizers
    appetizers: [
      {
        top: "70%",
        left: "2%",
        w: { md: 160, lg: 190, xl: 220 },
        h: { md: 220, lg: 260, xl: 300 },
        shape: "arch",
      },
      {
        bottom: "12%",
        left: "15%",
        w: { md: 130, lg: 150, xl: 180 },
        h: { md: 130, lg: 150, xl: 180 },
        shape: "circle",
      },
      {
        top: "26%",
        right: "8%",
        w: { md: 160, lg: 190, xl: 220 },
        h: { md: 200, lg: 235, xl: 270 },
        shape: "circle",
      },
    ],

    // ✅ RENAMED from wine -> drinks
    drinks: [
      {
        top: "18%",
        left: "0",
        w: { md: 200, lg: 240, xl: 300 },
        h: { md: 200, lg: 240, xl: 300 },
        shape: "diamond",
      },
      {
        bottom: "10%",
        left: "18%",
        w: { md: 140, lg: 170, xl: 200 },
        h: { md: 250, lg: 300, xl: 360 },
        shape: "squircle",
      },
      {
        top: "14%",
        right: "6%",
        w: { md: 160, lg: 190, xl: 220 },
        h: { md: 230, lg: 270, xl: 320 },
        shape: "arch",
      },
    ],
  };

  // ✅ IDs MATCH menuImages + imagePositions (FIXED)
  const menus = [
    { id: "menu", title: "MENU", subtitle: "Main Courses" },
    { id: "appetizers", title: "APPETIZERS", subtitle: "Starters & Bites" },
    { id: "drinks", title: "DRINKS", subtitle: "Coffee & Beverages" },
  ];

  const floatGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
    exit: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
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

  const drift = (i) => ({
    y: [0, i % 2 === 0 ? -12 : 12, 0],
    x: [0, i === 2 ? 10 : -10, 0],
    rotate: [0, i === 2 ? -6 : 6, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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
                  onMouseEnter={
                    !hasTouch ? () => setActiveMenu(menu.id) : undefined
                  }
                  onMouseLeave={
                    !hasTouch ? () => setActiveMenu("menu") : undefined
                  }
                  onClick={hasTouch ? () => setActiveMenu(menu.id) : undefined}
                >
                  {/* ✅ FLOATING IMAGES: lg+ only */}
                  <div className="absolute inset-0 pointer-events-none hidden lg:block">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0"
                          variants={floatGroup}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                        >
                          {(imagePositions[menu.id] || []).map((pos, i) => (
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
                              }}
                            >
                              {/* md */}
                              <div
                                className="hidden md:block lg:hidden"
                                style={{ width: pos.w.md, height: pos.h.md }}
                              >
                                <MaskedImage
                                  src={(menuImages[menu.id] || [])[i]}
                                  shape={pos.shape}
                                />
                              </div>

                              {/* lg */}
                              <div
                                className="hidden lg:block xl:hidden"
                                style={{ width: pos.w.lg, height: pos.h.lg }}
                              >
                                <MaskedImage
                                  src={(menuImages[menu.id] || [])[i]}
                                  shape={pos.shape}
                                />
                              </div>

                              {/* xl+ */}
                              <div
                                className="hidden xl:block"
                                style={{ width: pos.w.xl, height: pos.h.xl }}
                              >
                                <MaskedImage
                                  src={(menuImages[menu.id] || [])[i]}
                                  shape={pos.shape}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <h2
                    className={`text-center font-serif text-[38px] sm:text-[62px] lg:text-[70px] 
                    tracking-[0.12em] transition-colors duration-[700ms]
                    ${isActive ? "text-[#2677a7]" : "text-[#2677a7]/30"}`}
                  >
                    {menu.title}
                  </h2>

                  <p
                    className={`mt-4 text-center text-[13px] tracking-[0.18em] transition-colors duration-[700ms]
                    ${isActive ? "text-[#3aacc5]" : "text-[#3aacc5]/40"}`}
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
            <Link href="/menu">
              <AnimatedButton
                label="VIEW ALL MENU"
                color="#2677a7"
                hoverColor="#1f5f86"
                className="text-[15px] tracking-[0.3em] px-10 py-3"
              />
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

function MaskedImage({ src, shape }) {
  if (!src) return null;

  return (
    <div
      className="relative h-full w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.2)]"
      style={getMaskStyle(shape)}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
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
      return { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" };
    case "arch":
      return { borderRadius: "9999px 9999px 24px 24px" };
    default:
      return { borderRadius: "24px" };
  }
}
