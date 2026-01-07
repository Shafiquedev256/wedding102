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
    <div className='relative min-h-screen text-white md:h-screen bg-[url("/IMG-20251226-WA0000.jpg")] bg-center bg-cover  flex flex-col'>
      {/* Navigation */}
      <nav
        className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "fixed bg-[#FDF8F5] shadow-md text-black"
            : "absolute bg-transparent"
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src={`${scrolled ? "/logo.png" : "/black3.png"}`}
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
              className='text-sm tracking-wider hover:text-white transition-colors'
            >
              SCHEDULE
            </Link>
            <Link
              href='/travel'
              className='text-sm tracking-wider hover:text-white transition-colors'
            >
              TRAVEL & STAY
            </Link>
            <Link
              href='/faq'
              className='text-sm tracking-wider hover:text-white transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='/contact'
              className='text-sm tracking-wider hover:text-white transition-colors'
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
            <i
              className={`ri-menu-3-line text-3xl  ${
                scrolled ? "text-black" : "text-[#FDF8F5]"
              }`}
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
                className='bg-white w-60 text-center text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors'
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
          <div className='p-2 mt-12'></div>
          <div className='relative pt-6'>
            <div className='absolute top-0 left-0 w-full text-white text-center  font-serif italic text-sm md:text-base tracking-widest'>
              The wedding of
            </div>
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className='md:mt-0 mt-6  flex justify-center  items-center space-x-3 text-white text-[60px] md:text-7xl lg:text-9xl leading-tight'
            >
              <span>Gemma</span>
              <span>&</span>
              <span>Jeﬄe</span>
            </h1>
          </div>

          <div className='p-2 md:pb-2 pb-4  md:mb-18 h-10 md:mt-0 md:pt-2 pt-8 md:h-24 '></div>
          <div className='flex justify-center mt-12 gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-widest text-white'>
            <span>YOU</span>
            <span>ARE</span>
            <span>INVITED</span>
          </div>
          <div className=' w-full  p-2 space-y-4 flex flex-col justify-center items-center'>
            <div className='flex flex-row space-x-3 text-white justify-center items-center'>
              <span className='text-center whitespace-nowrap'>
                12 . 06 . 2026{" "}
              </span>
              <span>|</span>
              <span className='whitespace-nowrap'>
                BELL RECO , ARGENTONA , SPAIN
              </span>
            </div>
            <Link
              href='/rsvp'
              className='inline-block bg-[#7D2E3D] text-white px-8 py-3 rounded text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors'
            >
              RSVP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
