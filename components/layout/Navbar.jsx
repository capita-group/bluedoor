"use client";

import { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "CHEF", href: "/our-chef" },
    { name: "MENU", href: "/menu" },
    { name: "GALLERY", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Render both components but show/hide based on CSS media queries */}
      <DesktopNavbar
        isScrolled={isScrolled}
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <MobileNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
}