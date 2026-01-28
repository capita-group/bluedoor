"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Mockup data for users
const userData = [
  {
    id: 1,
    name: "Shofia Anderson",
    position: "CEO, Café Dine",
    image: "/img/user1.jpg",
    testimonial: "An unforgettable dining experience. From the first welcome to the final bite, everything felt intentional and refined. Bluedoor blends elegance with warmth, making every visit feel special and personal."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Food Critic, Taste Magazine",
    image: "/img/user2.jpg",
    testimonial: "The culinary artistry here is simply breathtaking. Each dish tells a story, and the service makes you feel like royalty. This restaurant has redefined fine dining for me."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Restaurant Owner, Bistro 42",
    image: "/img/user3.jpg",
    testimonial: "As a fellow restaurateur, I appreciate the attention to detail. The ambiance, service, and food quality are perfectly balanced. A masterclass in hospitality."
  },
  {
    id: 4,
    name: "David Miller",
    position: "Corporate Executive",
    image: "/img/user4.jpg",
    testimonial: "Perfect for business dinners. The private dining area is exceptional, and the wine selection pairs perfectly with every course. Our clients are always impressed."
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "Food Blogger, Gourmet Journeys",
    image: "/img/user5.jpg",
    testimonial: "Every Instagram post from this place gets thousands of likes for a reason! The presentation is as stunning as the flavors. A feast for all senses."
  }
];

export default function Testimonial() {
  const [rotation, setRotation] = useState(0);
  const [activeUser, setActiveUser] = useState(userData[0]);
  const [circleUsers, setCircleUsers] = useState([]);

  // Initialize circle positions
  useEffect(() => {
    // Shuffle users for circle positions
    const shuffled = [...userData].sort(() => Math.random() - 0.5);

  }, []);

  // Update active user based on rotation
  useEffect(() => {
    // Calculate which user should be at the "top" position (12 o'clock)
    const segmentAngle = 72; // 360 / 5 users = 72 degrees per user
    const normalizedRotation = (rotation % 360 + 360) % 360;
    const activeIndex = Math.floor(normalizedRotation / segmentAngle) % userData.length;
    
    // Find which user from the original data is now at the top position
    // We need to map the circle position to the original data
    const userAtTop = circleUsers[activeIndex];
    if (userAtTop && userAtTop.id !== activeUser.id) {
  
    }
  }, [rotation, circleUsers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Function to get user at a specific position on the circle
  const getUserAtPosition = (positionIndex) => {
    // 5 positions: 0=top-right, 1=top-left, 2=bottom-left, 3=bottom-right, 4=center
    if (positionIndex === 4) return activeUser; // Center always shows active user
    
    // For circle positions, offset by 1 since position 0 is top-right, not top
    const offsetPosition = (positionIndex + 1) % circleUsers.length;
    return circleUsers[offsetPosition] || userData[positionIndex];
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#5ab3e7] sm:text-4xl">
            Our Happy Users
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5ab3e7]/80">
            We create memorable dining experiences through thoughtful service,
            refined flavors, and a welcoming atmosphere.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT – ROTATING CIRCLE WITH USER IMAGES */}
          <div className="relative flex justify-center items-center">

            {/* BIG OUTER CIRCLE - Rotating container */}
            <div 
              className="relative h-[380px] w-[380px] rounded-full border border-[#5ab3e7]/30"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Top Right Position */}
              <div 
                className="absolute -right-4 top-10 h-20 w-20 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                style={{ transform: `rotate(-${rotation}deg)` }}
              >
                <Image
                  src={getUserAtPosition(0).image}
                  alt={getUserAtPosition(0).name}
                  fill
                  className="object-cover brightness-105 contrast-105"
                  sizes="80px"
                  priority={getUserAtPosition(0).id === 1}
                />
              </div>
              
              {/* Bottom Left Position */}
              <div 
                className="absolute -left-4 bottom-16 h-16 w-16 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                style={{ transform: `rotate(-${rotation}deg)` }}
              >
                <Image
                  src={getUserAtPosition(2).image}
                  alt={getUserAtPosition(2).name}
                  fill
                  className="object-cover brightness-105 contrast-105"
                  sizes="64px"
                />
              </div>
            </div>

            {/* INNER CIRCLE - Rotating container */}
            <div 
              className="absolute h-[240px] w-[240px] rounded-full border border-[#5ab3e7]/40"
              style={{ transform: `rotate(-${rotation * 1.2}deg)` }}
            >
              {/* Top Left Position */}
              <div 
                className="absolute -left-6 top-6 h-14 w-14 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                style={{ transform: `rotate(${rotation * 1.2}deg)` }}
              >
                <Image
                  src={getUserAtPosition(1).image}
                  alt={getUserAtPosition(1).name}
                  fill
                  className="object-cover brightness-105 contrast-105"
                  sizes="56px"
                />
              </div>
              
              {/* Bottom Right Position */}
              <div 
                className="absolute -right-6 bottom-8 h-12 w-12 overflow-hidden rounded-full border-2 border-[#5ab3e7] bg-white/10 backdrop-blur-sm"
                style={{ transform: `rotate(${rotation * 1.2}deg)` }}
              >
                <Image
                  src={getUserAtPosition(3).image}
                  alt={getUserAtPosition(3).name}
                  fill
                  className="object-cover brightness-105 contrast-105"
                  sizes="48px"
                />
              </div>
            </div>

            {/* CENTER IMAGE - Active User */}
            <div className="absolute z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-[#5ab3e7] shadow-lg bg-white/10 backdrop-blur-sm">
              <Image
                src={activeUser.image}
                alt={activeUser.name}
                fill
                className="object-cover brightness-110 contrast-110"
                sizes="144px"
                priority={true}
              />
              {/* Glow effect for active user */}
              <div className="absolute inset-0 rounded-full ring-4 ring-[#5ab3e7]/20 animate-pulse"></div>
              {/* Active indicator */}
              <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>

        

          </div>

          {/* RIGHT – TESTIMONIAL OF ACTIVE USER */}
          <div className="max-w-xl relative">
            {/* Opening Quote */}
            <div className="text-6xl text-[#5ab3e7]/30 mb-4">
              <FaQuoteLeft className="text-[#5ab3e7]/40" />
            </div>

            <p className="mt-4 text-lg leading-relaxed text-[#5ab3e7]/90 pl-8 pr-4">
              {activeUser.testimonial}
            </p>

            {/* Closing Quote */}
            <div className="text-6xl text-[#5ab3e7]/30 mt-4 flex justify-end">
              <FaQuoteRight className="text-[#5ab3e7]/40" />
            </div>

            <div className="mt-10 pl-8">
              <p className="font-bold text-xl text-[#5ab3e7]">
                {activeUser.name}
              </p>
              <p className="text-sm text-[#5ab3e7]/70 mt-1">
                {activeUser.position}
              </p>
              
              {/* Rating Stars */}
              <div className="flex items-center mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-[#5ab3e7]/60">5.0 Rating</span>
              </div>
            </div>

            {/* Manual Navigation */}
            <div className="mt-12 flex space-x-4 pl-8">
              <button
                onClick={() => {
                  const currentIndex = userData.findIndex(u => u.id === activeUser.id);
                  const prevIndex = (currentIndex - 1 + userData.length) % userData.length;
                  const targetRotation = prevIndex * 72;
                  setRotation(targetRotation);
                  setActiveUser(userData[prevIndex]);
                }}
                className="flex items-center rounded-full border border-[#5ab3e7]/30 px-6 py-3 text-sm font-medium text-[#5ab3e7] hover:bg-[#5ab3e7]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button
                onClick={() => {
                  const currentIndex = userData.findIndex(u => u.id === activeUser.id);
                  const nextIndex = (currentIndex + 1) % userData.length;
                  const targetRotation = nextIndex * 72;
                  setRotation(targetRotation);
                  setActiveUser(userData[nextIndex]);
                }}
                className="flex items-center rounded-full border border-[#5ab3e7]/30 px-6 py-3 text-sm font-medium text-[#5ab3e7] hover:bg-[#5ab3e7]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

     

      </div>
    </section>
  );
}