"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src='/logo.png'
            alt='Wedding Logo'
            width={40}
            height={40}
            className='object-contain'
          />
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-12'>
          <Link
            href={"/schedule"}
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors cursor-pointer'
          >
            SCHEDULE
          </Link>
          <Link
            href={"/travel"}
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors cursor-pointer'
          >
            TRAVEL & STAY
          </Link>
          <Link
            href={"/contact"}
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors cursor-pointer'
          >
            CONTACT
          </Link>
          <Link
            href={"/rsvp"}
            className='bg-[#7D2E3D] text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors cursor-pointer'
          >
            RSVP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col gap-[5px]'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white  px-6 py-4 flex flex-col gap-4'>
          <Link
            href={"/schedule"}
            className='text-[#3E2723] uppercase tracking-[2px] text-sm py-2 border-b border-gray-200'
          >
            SCHEDULE
          </Link>
          <Link
            href={"/travel"}
            className='text-[#3E2723] uppercase tracking-[2px] text-sm py-2 border-b border-gray-200'
          >
            TRAVEL & STAY
          </Link>
          <Link
            href={"/contact"}
            className='text-[#3E2723] uppercase tracking-[2px] text-sm py-2 border-b border-gray-200'
          >
            CONTACT
          </Link>
          <Link
            href={"/rsvp"}
            className='bg-[#7D2E3D] text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors cursor-pointer'
          >
            RSVP
          </Link>
        </div>
      )}
    </nav>
  );
}
