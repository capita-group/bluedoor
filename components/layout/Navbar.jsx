"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllSocial, setShowAllSocial] = useState(true);

  // Navigation links
  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "CHEF", href: "/our-chef" },
    { name: "MENU", href: "/menu" },
    { name: "GALLERY", href: "/gallery" },
  ];

  // Social media links (YouTube removed as requested)
  const socialLinks = [
    { name: "Facebook", href: "#", icon: FaFacebookF, color: "#1877F2" },
    { name: "Instagram", href: "#", icon: FaInstagram, color: "#E4405F" },
    { name: "Pinterest", href: "#", icon: FaPinterestP, color: "#E60023" },
    { name: "WhatsApp", href: "#", icon: FaWhatsapp, color: "#25D366" },
  ];

  // Limited social links for when space is tight
  const limitedSocialLinks = [socialLinks[0], socialLinks[3]];
  const currentSocialLinks = showAllSocial ? socialLinks : limitedSocialLinks;

  // Event listeners for scroll and resize
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Check if social links might overlap with logo on desktop
      if (!mobile) {
        const navbarWidth = document.querySelector("header")?.offsetWidth || 0;
        const shouldShowLimited = navbarWidth < 1200;
        setShowAllSocial(!shouldShowLimited);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`
          ${isMobile ? "absolute" : "absolute"} 
          top-0 left-0 w-full z-50 
          transition-all duration-300
          ${isScrolled ? "" : "bg-white/90"}
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* LEFT NAV - Hidden on mobile, visible from md */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
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

            {/* CENTER LOGO - Hidden on mobile, visible from md with link */}
            <div
              className="
              absolute left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/2 
              z-10 hidden md:block
            "
            >
              <Link href="/" className="block">
              <div
                    className="
                      relative h-42 w-35
                      rounded-full border border-white/80
                      backdrop-blur-lg
                      shadow-[0_2px_2px_rgba(0,102,204,0.16),0_12px_20px_rgba(0,102,204,0.08)]
                      p-5
                      transition-transform duration-300
                      hover:scale-105
                    "
                  >
                    <Image
                      src="/img/logo.png"
                      alt="Restaurant Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
              </Link>
            </div>

            {/* RIGHT SIDE - Hidden on mobile, visible from md */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 ml-auto">
              {/* SOCIAL ICONS - Responsive based on available space */}
              <div className="flex items-center gap-3 lg:gap-4">
                {currentSocialLinks.map((social) => {
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

            {/* MOBILE MENU BUTTON with professional animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden relative w-10 h-10 
                flex flex-col items-center justify-center 
                transition-all duration-300
              "
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

        {/* MOBILE MENU OVERLAY with professional animation */}
        <div
          className={`
            md:hidden fixed inset-0 bg-white backdrop-blur-lg
            transform transition-all duration-500 
            ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            z-40
          `}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              absolute top-5 left-5 z-50 
              w-10 h-10 flex items-center justify-center 
              rounded-full bg-[#0066CC]/10 
              hover:bg-[#0066CC]/20 transition
            "
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-[#0066CC]" />
          </button>

          <div className="flex flex-col h-full pt-10 px-6">
            {/* LOGO */}
            <div className="flex justify-center mb-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div
                  className="
                  relative h-28 w-24 
                  rounded-full border border-white/60 
                  bg-white/20 backdrop-blur-md shadow-lg p-3 
                  hover:scale-105 transition
                "
                >
                  <Image
                    src="/img/logo.png"
                    alt="Restaurant Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group py-3 text-center relative"
                >
                  <span
                    className="
                    text-lg font-semibold 
                    tracking-[0.12em] uppercase 
                    text-[#0066CC] 
                    group-hover:text-[#0052A3] transition
                  "
                  >
                    {link.name}
                  </span>
                  <span
                    className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 
                    w-0 h-[2px] bg-[#0066CC] 
                    transition-all duration-300 
                    group-hover:w-14
                  "
                  />
                </Link>
              ))}
            </nav>

            {/* SOCIAL LINKS */}
            <div className="mt-auto mb-4">
              <p
                className="
                text-xs text-gray-600 mb-5 
                tracking-widest text-center font-medium
              "
              >
                CONNECT WITH US
              </p>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        w-11 h-11 rounded-full border 
                        flex items-center justify-center 
                        transition hover:scale-105
                      "
                      style={{
                        borderColor: social.color,
                        color: social.color,
                        backgroundColor: `${social.color}12`,
                      }}
                    >
                      <Icon className="text-lg" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* BOOK BUTTON */}
            <div className="mb-8">
              <Link href="/book-a-table" onClick={() => setIsMenuOpen(false)}>
                <button
                  className="
                    w-full py-4
                    bg-gradient-to-r from-[#0066CC] to-[#0052A3]
                    text-white text-sm font-semibold tracking-widest
                    rounded-xl
                    transition hover:shadow-lg hover:shadow-[#0066CC]/20
                    active:scale-[0.98]
                  "
                >
                  RESERVE NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
