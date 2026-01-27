"use client";

import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useEffect, useRef, useCallback } from "react";

const AUTO_SLIDE_INTERVAL = 5000; // 5s per slide
const RESUME_DELAY = 5000; // 5s after user interaction

export default function TravelStay() {
  const heading = useTranslate("Travel & Stay");

  const neighborhoods = useTranslate(
    "Here, you'll find details on our recommended hotels with exclusive guest discounts, and info on the closest airports and how to get to the venue easily.",
  );

  const stay = useTranslate("Stay");
  const hotelIntro = useTranslate(
    "The X Hotel is located in the heart of Barcelona, offering the perfect blend of comfort and convenience. A bus service to and from the venue will be arranged from this location, so please keep that in mind if you choose to stay elsewhere. Guests will also enjoy a special rate when booking. More details coming soon!.",
  );
  const visitHotel = useTranslate(" Book here");

  const driving = useTranslate("Driving");
  const fromManhattan = useTranslate("From Manhattan:");
  const fromNJ = useTranslate("From New Jersey:");
  const parkingInfo = useTranslate("Parking Information:");
  const openMaps = useTranslate("Google Maps");

  const flying = useTranslate("Flying");
  const distance = useTranslate("Distance:");
  const travelTime = useTranslate("Travel time:");

  /* ---------- STAY SLIDER ---------- */
  const stayImages = [
    "/weding1.jpg",
    "/wedding2.jpg",
    "/wedding3.jpg",
    "/wedding5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ---------- Manual Controls ----------
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === stayImages.length - 1 ? 0 : prev + 1));
    resetAutoSlideTimer();
  }, [stayImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? stayImages.length - 1 : prev - 1));
    resetAutoSlideTimer();
  }, [stayImages.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
    resetAutoSlideTimer();
  }, []);

  // ---------- Auto Slide ----------
  const resetAutoSlideTimer = useCallback(() => {
    if (autoSlideTimeoutRef.current) {
      clearTimeout(autoSlideTimeoutRef.current);
    }
    autoSlideTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === stayImages.length - 1 ? 0 : prev + 1,
      );
      resetAutoSlideTimer();
    }, RESUME_DELAY);
  }, [stayImages.length]);

  useEffect(() => {
    // Start auto-slide on mount
    resetAutoSlideTimer();

    return () => {
      if (autoSlideTimeoutRef.current)
        clearTimeout(autoSlideTimeoutRef.current);
    };
  }, [resetAutoSlideTimer]);

  return (
    <section
      id='travel'
      className='py-24 px-3 pt-44 w-full overflow-hidden bg-[#FDF8F5]'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-4'>
          <h2 className='text-lg md:text-4xl font-serif text-gray-900'>
            {heading}
          </h2>
        </div>

        {/* Intro */}
        <div className='mb-2 text-center flex justify-center px-8'>
          <p className='text-gray-700 leading-relaxed md:w-[60%]'>
            {neighborhoods}
          </p>
        </div>

        {/* Stay */}
        <div className='mb-16 max-w-3xl mx-auto'>
          <div className='py-2 px-8 pb-3'>
            <h3 className='text-3xl text-center md:text-left text-[#7D2E3D]'>
              {stay}
            </h3>
          </div>

          <div className='md:px-8 py-2 mb-8'>
            <div className='overflow-hidden relative'>
              <div className='w-full md:h-[70vh] relative group cursor-pointer'>
                <img
                  src={stayImages[currentIndex]}
                  alt='Hotel'
                  className='w-full h-full object-cover object-top rounded-t-sm'
                />

                {/* LEFT ARROW */}
                <button
                  onClick={prevImage}
                  className='absolute left-4 top-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-100 bg-white/80 p-2 rounded-full z-10'
                >
                  <i className='ri-arrow-left-s-line text-2xl' />
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={nextImage}
                  className='absolute right-4 top-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-100 bg-white/80 p-2 rounded-full z-10'
                >
                  <i className='ri-arrow-right-s-line text-2xl' />
                </button>

                {/* Dots */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                  {stayImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToImage(i)}
                      className={`h-2.5 rounded-full cursor-pointer ${
                        i === currentIndex
                          ? "bg-white w-8"
                          : "bg-white/60 w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className='py-6'>
                <h4 className='text-xl font-semibold text-gray-800 mb-3'>
                  Williamsburg
                </h4>
                <p className='text-gray-600 my-3 leading-relaxed'>
                  {hotelIntro}
                </p>

                <div className='flex items-center gap-2 text-gray-600 mb-3'>
                  <i className='ri-map-pin-line text-[#7D2E3D]' />
                  <span className='text-sm'>
                    123 Lorimer St, New York, NY 11206
                  </span>
                </div>

                <a
                  href='https://arlohotels.com/williamsburg/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-fit bg-[#7D2E3D] text-white px-6 py-3 font-semibold hover:scale-105 transition-all'
                >
                  {visitHotel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DRIVING */}
        <div className='mb-2 max-w-3xl mx-auto'>
          <h3 className='text-3xl text-center md:text-left md:px-6 text-[#7D2E3D]'>
            {driving}
          </h3>
        </div>

        <div className='max-w-3xl mx-auto mb-16'>
          <div className='space-y-6 p-6'>
            <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
              <div>
                <p className='text-sm font-bold'>{fromManhattan}</p>
                <p className='text-sm text-gray-700'>
                  Take FDR Drive North to Exit 15
                </p>
                <p className='text-sm text-gray-700'>
                  Approximately 25 minutes
                </p>
              </div>
              <a
                href='https://www.google.com/maps/dir//New+York,+NY'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#7D2E3D] text-white p-2 flex gap-2'
              >
                <i className='ri-map-pin-line' />
                {openMaps}
              </a>
            </div>

            <div className='flex justify-between items-center '>
              <div>
                <p className='text-sm font-bold'>{fromNJ}</p>
                <p className='text-sm text-gray-700'>
                  Take I-95 North to Exit 6
                </p>
                <p className='text-sm text-gray-700'>
                  Approximately 35 minutes
                </p>
              </div>
              <a
                href='https://www.google.com/maps/dir//New+York,+NY'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#7D2E3D] text-white p-2 flex gap-2'
              >
                <i className='ri-map-pin-line' />
                {openMaps}
              </a>
            </div>

            <div className='pt-4 border-t border-gray-300'>
              <p className='text-xs text-gray-600'>{parkingInfo}</p>
              <ul className='text-xs text-gray-600 mt-2 space-y-1'>
                <li>• Complimentary valet parking available</li>
                <li>• Adjacent parking garage</li>
                <li>• Street parking nearby</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FLYING */}
        <div className='mb-4 max-w-3xl mx-auto'>
          <h3 className='text-3xl md:px-6 text-center md:text-left text-[#7D2E3D]'>
            {flying}
          </h3>
        </div>

        <div className='max-w-3xl mx-auto p-6 space-y-6'>
          <div className='border-b border-gray-300 pb-4'>
            <p className='text-sm font-bold'>
              John F. Kennedy International (JFK)
            </p>
            <p className='text-sm text-gray-700'>{distance} 15 miles</p>
            <p className='text-sm text-gray-700'>{travelTime} ~30–45 minutes</p>
          </div>

          <div className='border-b pb-3 border-gray-300'>
            <p className='text-sm font-bold'>LaGuardia Airport (LGA)</p>
            <p className='text-sm text-gray-700'>{distance} 8 miles</p>
            <p className='text-sm text-gray-700'>{travelTime} ~20–30 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
