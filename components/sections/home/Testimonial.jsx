// components/Testimonial.jsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ReviewModal from "./ReviewModal";

// ✅ Keep data stable (no re-creation per render)
const USER_DATA = [
  {
    id: 1,
    name: "Shofia Anderson",
    position: "CEO, Café Dine",
    image: "/img/user1.jpg",
    testimonial:
      "An unforgettable dining experience. From the first welcome to the final bite, everything felt intentional and refined. Bluedoor blends elegance with warmth, making every visit feel special and personal.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Food Critic, Taste Magazine",
    image: "/img/user2.jpg",
    testimonial:
      "The culinary artistry here is simply breathtaking. Each dish tells a story, and the service makes you feel like royalty. This restaurant has redefined fine dining for me.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Restaurant Owner, Bistro 42",
    image: "/img/user3.jpg",
    testimonial:
      "As a fellow restaurateur, I appreciate the attention to detail. The ambiance, service, and food quality are perfectly balanced. A masterclass in hospitality.",
  },
  {
    id: 4,
    name: "David Miller",
    position: "Corporate Executive",
    image: "/img/user4.jpg",
    testimonial:
      "Perfect for business dinners. The private dining area is exceptional, and the wine selection pairs perfectly with every course. Our clients are always impressed.",
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "Food Blogger, Gourmet Journeys",
    image: "/img/user5.jpg",
    testimonial:
      "Every Instagram post from this place gets thousands of likes for a reason! The presentation is as stunning as the flavors. A feast for all senses.",
  },
];

function clampRotation(deg) {
  const n = deg % 360;
  return n < 0 ? n + 360 : n;
}

function getSegmentIndex(rotation, length) {
  const segment = 360 / length;
  const normalized = clampRotation(rotation);
  return Math.floor(normalized / segment) % length;
}

export default function Testimonial() {
  // ✅ stable order for circle users (shuffled once on mount)
  const [circleUsers, setCircleUsers] = useState(() => USER_DATA);
  const total = circleUsers.length; // ✅ must match shuffled list
  const segmentAngle = useMemo(() => 360 / total, [total]);

  const [rotation, setRotation] = useState(0);
  const [activeUser, setActiveUser] = useState(USER_DATA[0]);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const intervalRef = useRef(null);
  const rotationRef = useRef(0);
  const isUserInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const shuffled = [...USER_DATA].sort(() => Math.random() - 0.5);
    setCircleUsers(shuffled);
    setActiveUser(shuffled[0] || USER_DATA[0]);
  }, []);

  // ✅ respects reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ✅ Auto-rotate (safe cleanup)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const tickMs = 40;
    const step = 0.35;

    intervalRef.current = setInterval(() => {
      if (isUserInteractingRef.current) return;
      rotationRef.current = (rotationRef.current + step) % 360;
      setRotation(rotationRef.current);
    }, tickMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [prefersReducedMotion]);

  // ✅ Update active user from rotation + circle order
  useEffect(() => {
    if (!circleUsers?.length) return;
    const idx = getSegmentIndex(rotation, circleUsers.length);
    const nextActive = circleUsers[idx];
    if (nextActive && nextActive.id !== activeUser.id)
      setActiveUser(nextActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation, circleUsers]);

  const pickUserForThumb = (thumbIndex) => {
    if (!circleUsers?.length) return USER_DATA[thumbIndex % USER_DATA.length];

    const activeIdx = circleUsers.findIndex((u) => u.id === activeUser.id);
    const base = activeIdx === -1 ? 0 : activeIdx;
    const offsets = [1, 2, 3, 4];
    const idx = (base + offsets[thumbIndex]) % circleUsers.length;
    return circleUsers[idx] || USER_DATA[idx % USER_DATA.length];
  };

  const pauseAutoRotateBriefly = () => {
    isUserInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    };
  }, []);

  const goToIndex = (targetIdx) => {
    const nextRotation = targetIdx * segmentAngle;
    rotationRef.current = nextRotation;
    setRotation(nextRotation);

    const next = circleUsers[targetIdx] || USER_DATA[targetIdx] || USER_DATA[0];
    setActiveUser(next);
    pauseAutoRotateBriefly();
  };

  const goPrev = () => {
    const currentIdx = circleUsers.findIndex((u) => u.id === activeUser.id);
    const safeCurrent = currentIdx === -1 ? 0 : currentIdx;
    const prevIdx = (safeCurrent - 1 + total) % total;
    goToIndex(prevIdx);
  };

  const goNext = () => {
    const currentIdx = circleUsers.findIndex((u) => u.id === activeUser.id);
    const safeCurrent = currentIdx === -1 ? 0 : currentIdx;
    const nextIdx = (safeCurrent + 1) % total;
    goToIndex(nextIdx);
  };

  const handleSubmitReview = async (review) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Review submitted:", review);
        resolve(true);
      }, 900);
    });
  };

  const thumb0 = pickUserForThumb(0);
  const thumb1 = pickUserForThumb(1);
  const thumb2 = pickUserForThumb(2);
  const thumb3 = pickUserForThumb(3);

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#5ab3e7]">
            Our Happy Users
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#5ab3e7]/80">
            We create memorable dining experiences through thoughtful service,
            refined flavors, and a welcoming atmosphere.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-2">
          {/* LEFT: RINGS */}
          <div className="relative flex items-center justify-center">
            {/* Responsive container so rings never overflow */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] aspect-square">
              {/* OUTER RING */}
              <div
                className="absolute inset-0 rounded-full border border-[#5ab3e7]/30"
                style={{ transform: `rotate(${rotation}deg)` }}
                aria-hidden="true"
              >
                {/* thumb on outer ring */}
                <div
                  className="absolute right-3  top-10 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                  style={{ transform: `rotate(-${rotation}deg)` }}
                >
                  <Image
                    src={thumb0.image}
                    alt={thumb0.name}
                    fill
                    className="object-cover brightness-105 contrast-105"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>

                <div
                  className="absolute left-3  bottom-16 h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                  style={{ transform: `rotate(-${rotation}deg)` }}
                >
                  <Image
                    src={thumb2.image}
                    alt={thumb2.name}
                    fill
                    className="object-cover brightness-105 contrast-105"
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>
              </div>

              {/* INNER RING */}
              <div
                className="
            absolute left-1/2 top-1/2
            h-[62%] w-[62%]
            rounded-full border border-[#5ab3e7]/40
          "
                  style={{
                  transform: `translate(-50%, -50%) rotate(-${rotation * 1.2}deg)`,
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute left-5 top-6 h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                  style={{ transform: `rotate(${rotation * 1.2}deg)` }}
                >
                  <Image
                    src={thumb1.image}
                    alt={thumb1.name}
                    fill
                    className="object-cover brightness-105 contrast-105"
                    sizes="(max-width: 640px) 48px, 56px"
                  />
                </div>

                <div
                  className="absolute right-1 bottom-8 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                  style={{ transform: `rotate(${rotation * 1.2}deg)` }}
                >
                  <Image
                    src={thumb3.image}
                    alt={thumb3.name}
                    fill
                    className="object-cover brightness-105 contrast-105"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
              </div>

              {/* CENTER ACTIVE */}
              <div className="absolute left-1/2 top-1/2 z-10 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#5ab3e7] shadow-lg bg-white/10 backdrop-blur-sm">
                <Image
                  src={activeUser.image}
                  alt={activeUser.name}
                  fill
                  className="object-cover brightness-110 contrast-110"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                  priority
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-[#5ab3e7]/20 animate-pulse" />
                <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="mx-auto w-full max-w-xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <FaQuoteLeft className="text-5xl sm:text-6xl text-[#5ab3e7]/40" />
            </div>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5ab3e7]/90 px-1 lg:px-0">
              {activeUser.testimonial}
            </p>

            <div className="mt-4 flex justify-center lg:justify-end">
              <FaQuoteRight className="text-5xl sm:text-6xl text-[#5ab3e7]/40" />
            </div>

            <div className="mt-8">
              <p className="font-bold text-lg sm:text-xl text-[#5ab3e7]">
                {activeUser.name}
              </p>
              <p className="text-sm text-[#5ab3e7]/70 mt-1">
                {activeUser.position}
              </p>

              <div className="mt-3 flex items-center justify-center lg:justify-start flex-wrap gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#5ab3e7]/60">5.0 Rating</span>
              </div>
            </div>

            {/* Buttons: wrap on small screens */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="flex items-center rounded-full border border-[#5ab3e7]/30 px-5 sm:px-6 py-3 text-sm font-medium text-[#5ab3e7] hover:bg-[#5ab3e7]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              <button
                type="button"
                onClick={goNext}
                className="flex items-center rounded-full border border-[#5ab3e7]/30 px-5 sm:px-6 py-3 text-sm font-medium text-[#5ab3e7] hover:bg-[#5ab3e7]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                Next
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowReviewModal(true)}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5ab3e7] to-[#4a9fd8] px-7 sm:px-8 py-4 text-sm font-medium text-white hover:from-[#4a9fd8] hover:to-[#5ab3e7] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-lg shadow-[#5ab3e7]/30"
              >
                <svg
                  className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Share Your Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onSubmit={handleSubmitReview}
      />
    </section>
  );
}
