"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const closeMenu = () => setMenuOpen(false);

  const languages = ["EN", "CA"]; // Example languages

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "fixed bg-[#FDF8F5] shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative">
        {/* Logo - left */}
        <Link href="/">
          <Image
            src={`/logo.png`}
            alt="Wedding Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Language Toggle - always centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-50">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1  bg-[#FDF8F5] text-black focus:outline-none "
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Menu - right */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/schedule"
            className="text-sm tracking-wider hover:text-[#7D2E3D] transition-colors"
          >
            SCHEDULE
          </Link>
          <Link
            href="/travel"
            className="text-sm tracking-wider hover:text-[#7D2E3D] transition-colors"
          >
            TRAVEL & STAY
          </Link>
          <Link
            href="/faq"
            className="text-sm tracking-wider hover:text-[#7D2E3D] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-wider hover:text-[#7D2E3D] transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="/rsvp"
            className="bg-[#7D2E3D] text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors"
          >
            RSVP
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2 z-50"
        >
          <i className="ri-menu-3-line text-3xl text-[#7D2E3D]" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute top-6 right-6 text-[48px] leading-none font-light text-[#3E2723] hover:opacity-70 transition"
          >
            &times;
          </button>

          <div className="flex flex-col justify-center items-center h-full space-y-16 px-6">
            <Link
              href="/schedule"
              onClick={closeMenu}
              className="uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]"
            >
              SCHEDULE
            </Link>
            <Link
              href="/travel"
              onClick={closeMenu}
              className="uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]"
            >
              TRAVEL & STAY
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]"
            >
              CONTACT
            </Link>
            <Link
              href="/rsvp"
              onClick={closeMenu}
              className="bg-[#7D2E3D] w-60 text-center text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors"
            >
              RSVP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
