// components/GoalsHistoryUI.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

export default function GoalsHistoryUI() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const arcVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const handwrittenVariants = {
    hidden: { opacity: 0, rotate: -25, y: 20 },
    visible: {
      opacity: 1,
      rotate: -18,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "backOut",
        delay: 0.8,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-19">
      {/* Top-right decorative arc with animation */}
      <motion.div
        variants={arcVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[14px] border-[#d9a36b]/70 bg-transparent opacity-60"
      />

      <div className="mx-auto max-w-8xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-end gap-10"
        >
          {/* LEFT BIG IMAGE with animation */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-start pl-20"
          >
            <div
              className="
                relative
                h-[100vh]
                w-[600px]
                overflow-hidden
                rounded-tr-none
                rounded-br-none
                rounded-bl-none
                rounded-tl-[280px]
              "
            >
              <Image
                src="/img/interior.jpg"
                alt="Restaurant interior"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 460px"
              />
            </div>
          </motion.div>

          {/* Right content section */}
          <div className="relative -translate-y-40">
            {/* Top block with animation */}
      <motion.div variants={itemVariants} className="max-w-xl ml-70">
  <motion.p
    variants={itemVariants}
    className="text-3xl font-medium tracking-[0.35em] text-black/75"
  >
    OUR GOALS &amp; HISTORY
  </motion.p>

  <motion.p
    variants={itemVariants}
    className="mt-4 text-[16px] leading-7 text-black/55"
  >
    Bluedoor was founded with a simple philosophy — to create a warm,
    inviting space where thoughtful cuisine, handcrafted flavors, and
    genuine hospitality come together. What began as a passion for
    honest cooking has grown into a dining experience shaped by
    tradition, creativity, and care.
  </motion.p>

  <motion.p
    variants={itemVariants}
    className="mt-4 text-[16px] leading-7 text-black/55"
  >
    Every dish we serve reflects our commitment to quality ingredients,
    timeless recipes, and memorable moments. From intimate dinners to
    private celebrations, Bluedoor is designed to feel personal,
    elegant, and welcoming — just like home.
  </motion.p>

  {/* ✅ Button moved up + new color */}
  <motion.div variants={itemVariants} className="mt-6">
    <AnimatedButton
      label="DISCOVER OUR STORY"
      color="#0c71a1"        // warm gold (matches script text)
      hoverColor="#d97706"   // deeper gold on hover
    />
  </motion.div>
</motion.div>



            {/* Bottom block: image + handwritten text */}
            <div className="mt-10 relative flex items-end gap-6">
              {/* IMAGE WRAPPER with animation */}
              <motion.div
                variants={imageVariants}
                className="relative translate-y-40"
              >
                <div
                  className="
                    relative
                    h-[220px] w-[220px]
                    sm:h-[400px] sm:w-[400px]
                    overflow-hidden
                  "
                >
                  <Image
                    src="/img/our.jpg"
                    alt="Dish"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAPPING SCRIPT TEXT with animation */}
                <motion.p
                  variants={handwrittenVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                    pointer-events-none
                    absolute
                    bottom-22
                    -right-60
                    rotate-[-18deg]
                    text-[35px]
                    sm:text-[64px]
                    leading-[1.05]
                    text-[#eb9539]
                  "
                  style={{ fontFamily: "var(--font-mrs-saint)" }}
                >
                  Book private dining <br />
                  &amp; banquet rooms
                </motion.p>
              </motion.div>
            </div>

            {/* subtle right-side spacing like screenshot */}
            <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-10 lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}