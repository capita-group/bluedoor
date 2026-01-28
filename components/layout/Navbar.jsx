"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
    FaWhatsapp,
} from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";

export default function Navbar() {
  const navLinks = [
   
    { name: "ABOUT US", href: "/about" },
    { name: "OUR CHEF", href: "/our-chef" },
    { name: "MENU", href: "/menu" },
    { name: "GALLERY", href: "/gallery" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
      color: "#1877F2",
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
      color: "#E4405F",
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
      color: "#FF0000",
    },
    {
      name: "Pinterest",
      href: "#",
      icon: FaPinterestP,
      color: "#E60023",
    },
        { name: "WhatsApp", href: "#", icon: FaWhatsapp, color: "#25D366" }, // ✅ added
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="mx-auto max-w-8xl px-6">
        <div className="relative flex h-20 items-center">

          {/* LEFT NAV */}
          <nav className="hidden md:flex items-center gap-8 translate-x-70">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 px-1"
              >
                {/* BOLDER BLUE text */}
                <span className="text-xs font-medium tracking-[0.35em] uppercase text-[#0066CC] transition-all duration-300 hover:text-[#0052A3]">
                  {link.name}
                </span>

                {/* BOLDER BLUE underline */}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#0066CC] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="relative h-42 w-36 rounded-full border border-white/60 bg-white/20 backdrop-blur-md shadow-xl p-5">
              <Image
                src="/img/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-10 ml-auto">

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 -translate-x-70">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="
                      group
                      relative
                      flex items-center justify-center
                      w-11 h-11
                      rounded-full
                      border border-[#0066CC]/60
                      text-[#0066CC]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                    style={{
                      "--brand-color": s.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0066CC";
                      e.currentTarget.style.borderColor = "rgba(0,102,204,0.6)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            {/* BOOK BUTTON - Pass bolder blue color */}
           <Link href="/book-a-table">
  <AnimatedButton
    label="Book A Table"
    color="#0066CC"
    hoverColor="#0052A3"
  />
</Link>

          </div>
        </div>
      </div>
    </header>
  );
}