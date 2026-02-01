"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

export default function MobileNavbar({ isMenuOpen, setIsMenuOpen, navLinks }) {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: FaFacebookF, color: "#1877F2" },
    { name: "Instagram", href: "#", icon: FaInstagram, color: "#E4405F" },
    { name: "Pinterest", href: "#", icon: FaPinterestP, color: "#E60023" },
    { name: "WhatsApp", href: "#", icon: FaWhatsapp, color: "#25D366" },
  ];

  return (
    <div
      className={`
        md:hidden fixed inset-0 bg-white backdrop-blur-lg
        transform transition-all duration-500 
        ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        z-40
      `}
    >
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
                sizes="(max-width: 768px) 96px, 0px"
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
  );
}
