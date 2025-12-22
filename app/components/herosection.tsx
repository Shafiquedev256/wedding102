"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='relative min-h-screen bg-[#FDF8F5] flex flex-col'>
      {/* Navigation */}
      <nav
        className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "fixed bg-white shadow-md" : "absolute bg-transparent"
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between'>
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

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8 items-center'>
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

          {/* Mobile Hamburger */}
          <button
            aria-label='Open menu'
            onClick={() => setMenuOpen(true)}
            className='md:hidden'
          >
            <i className='ri-menu-3-line text-3xl text-[#7D2E3D]' />
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
                className='uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]'
              >
                SCHEDULE
              </Link>
              <Link
                href='/travel'
                onClick={closeMenu}
                className='uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]'
              >
                TRAVEL & STAY
              </Link>
              <Link
                href='/faq'
                onClick={closeMenu}
                className='uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]'
              >
                FAQ
              </Link>
              <Link
                href='/contact'
                onClick={closeMenu}
                className='uppercase tracking-[2px] text-sm border-b border-gray-200 pb-2 text-[#3E2723]'
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

      {/* Hero Content */}
      <div className='flex flex-1 flex-col items-center justify-center px-6 text-center'>
        <div className='max-w-4xl w-full space-y-6 md:space-y-8'>
          <div className='text-[#7D2E3D] font-serif italic text-sm md:text-base tracking-widest'>
            The wedding of
          </div>

          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className='flex justify-center items-center space-x-3 text-[#7D2E3D] text-5xl md:text-7xl lg:text-8xl leading-tight'
          >
            <span>Gemma</span>
            <span>&</span>
            <span>Jeﬄe</span>
          </h1>

          <div className='flex justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-widest text-gray-600'>
            <span>YOU</span>
            <span>ARE</span>
            <span>INVITED</span>
          </div>

          <p className='text-sm md:text-base leading-relaxed text-gray-700 max-w-2xl mx-auto'>
            Each Blume perfume tells a story of love, beauty, and nature's
            elegance, carefully composed with the finest floral notes and
            complemented by warm, luxurious undertones.
          </p>

          <Link
            href='/rsvp'
            className='inline-block bg-[#7D2E3D] text-white px-8 py-3 rounded text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors'
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
}
