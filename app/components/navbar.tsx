"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
        className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "fixed bg-white shadow-md" : "absolute bg-transparent"
        }`}
      >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
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
            href='/schedule'
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors'
          >
            SCHEDULE
          </Link>
          <Link
            href='/travel'
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors'
          >
            TRAVEL & STAY
          </Link>
          <Link
            href='/faq'
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors'
          >
            FAQ
          </Link>
          <Link
            href='/contact'
            className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors'
          >
            CONTACT
          </Link>
          <Link
            href='/rsvp'
            className='bg-[#7D2E3D] text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors'
          >
            RSVP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label='Open menu'
          className='md:hidden flex flex-col gap-[5px]'
          onClick={() => setMenuOpen(true)}
        >
          <span
            className={`block w-6 h-[2px] ${scrolled ? "bg-[#3E2723]" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-[2px] ${scrolled ? "bg-[#3E2723]" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-[2px] ${scrolled ? "bg-[#3E2723]" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className='md:hidden fixed inset-0 z-50 bg-transparent'>
          {/* Close Button */}
          <button
            aria-label='Close menu'
            onClick={closeMenu}
            className='absolute top-6 right-6 text-[48px] leading-none font-light text-[#3E2723] hover:opacity-70 transition'
          >
            &times;
          </button>

          {/* Menu Content */}
          <div className='flex flex-col justify-center items-center h-full space-y-16 px-6 bg-white'>
            <Link
              href='/schedule'
              onClick={closeMenu}
              className='text-[#3E2723] uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2'
            >
              SCHEDULE
            </Link>
            <Link
              href='/travel'
              onClick={closeMenu}
              className='text-[#3E2723] uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2'
            >
              TRAVEL & STAY
            </Link>
            <Link
              href='/faq'
              onClick={closeMenu}
              className='text-[#3E2723] uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2'
            >
              FAQ
            </Link>
            <Link
              href='/contact'
              onClick={closeMenu}
              className='text-[#3E2723] uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2'
            >
              CONTACT
            </Link>
            <Link
              href='/rsvp'
              onClick={closeMenu}
              className='bg-[#7D2E3D] w-60 text-center text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors'
            >
              RSVP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
