"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function DesktopNavbar({
  isScrolled,
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMediumScreen(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const socialLinks = [
    { name: "Facebook", href: "#", icon: FaFacebookF, color: "#1877F2" },
    { name: "Instagram", href: "#", icon: FaInstagram, color: "#E4405F" },
    { name: "Pinterest", href: "#", icon: FaPinterestP, color: "#E60023" },
    { name: "WhatsApp", href: "#", icon: FaWhatsapp, color: "#25D366" },
  ];

  // Show only Facebook and WhatsApp on medium screens (768px - 1024px)
  const displaySocialLinks = isMediumScreen 
    ? [socialLinks[0], socialLinks[3]]  // Facebook and WhatsApp
    : socialLinks;                      // All 4 social links

  return (
    <>
      {/* Desktop Header - Hidden on mobile with CSS */}
      <header
        className={`
          hidden md:block absolute top-0 left-0 w-full z-50 
          transition-all duration-300
          ${isScrolled ? "" : "bg-white/90"}
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* LEFT NAV */}
            <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-2 px-1"
                >
                  <span
                    className="
                      text-xs font-medium 
                      tracking-[0.2em] lg:tracking-[0.25em] xl:tracking-[0.3em] 
                      uppercase text-[#0066CC] 
                      transition-all duration-300 
                      hover:text-[#0052A3] 
                      whitespace-nowrap
                    "
                  >
                    {link.name}
                  </span>
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[1.5px] w-0 
                      bg-[#0066CC] 
                      transition-all duration-300 
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* CENTER LOGO */}
            <div className="absolute left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/2 z-10">
              <Link href="/" className="block">
                <div
                  className="
                    relative h-42 w-35
                    rounded-full border border-[#a3d4ea]/20
                    shadow-[0_2px_2px_rgba(0,102,204,0.16),0_12px_20px_rgba(0,102,204,0.08)]
                    p-5
                    transition-transform duration-300
                    hover:scale-90
                  "
                >
                  <Image
                    src="/img/logo.png"
                    alt="Restaurant Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 120px"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 ml-auto">
              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3 lg:gap-4">
                {displaySocialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="
                        group relative flex items-center justify-center
                        w-8 h-8 lg:w-9 lg:h-9
                        rounded-full border border-[#0066CC]/60
                        text-[#0066CC]
                        transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-md
                      "
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.borderColor = social.color;
                        e.currentTarget.style.boxShadow = `0 4px 12px ${social.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#0066CC";
                        e.currentTarget.style.borderColor =
                          "rgba(0,102,204,0.6)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Icon
                        className="
                        text-sm lg:text-base 
                        transition-transform duration-300 
                        group-hover:scale-110
                      "
                      />
                    </Link>
                  );
                })}
              </div>

              {/* BOOK BUTTON */}
              <Link href="/book-a-table">
                <AnimatedButton
                  label="Book A Table"
                  color="#0066CC"
                  hoverColor="#0052A3"
                  className="text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Only hamburger button, shown on mobile with CSS */}
      <header
        className={`
          md:hidden absolute top-0 left-0 w-full z-50 
          transition-all duration-300
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center"
              aria-label="Toggle menu"
            >
              <span
                className={`
                  absolute w-6 h-0.5 bg-[#0066CC] rounded-full 
                  transition-all duration-300
                  ${isMenuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-3"}
                `}
              />
              <span
                className={`
                  absolute w-6 h-0.5 bg-[#0066CC] rounded-full 
                  transition-all duration-300
                  ${isMenuOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute w-6 h-0.5 bg-[#0066CC] rounded-full 
                  transition-all duration-300
                  ${isMenuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-3"}
                `}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}