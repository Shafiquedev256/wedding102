"use client";

import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useCallback, useEffect, useRef } from "react";

const AUTO_SLIDE_INTERVAL = 5000;
const RESUME_DELAY = 5000;

export default function Schedule() {
  const venueImages: string[] = [
    "/venue.avif",
    "/venue2.webp",
    "/venue3.webp",
    "/venue4.webp",
  ];

  const title = useTranslate("THE BIG DAY");
  const intro = useTranslate(
    "We're so ecstatic to share this special day with you!",
  );
  const venueintro = useTranslate(
    " Set in the hills of Argentona, Bell Recó is a beautifully restored estate that blends historic character with contemporary elegance. Surrounded by gardens and open views, it offers a relaxed yet stylish setting for us to celebrate together in Spain.",
  );
  const ceremony = useTranslate("Ceremony Begins");
  const reception = useTranslate("Reception");
  const firstDance = useTranslate("First Dance");
  const dinner = useTranslate("Dinner is served");
  const toasts = useTranslate("Toasts");
  const party = useTranslate("Party Time!!");
  const visitHotel = useTranslate("Visit Hotel Website");
  const venue = useTranslate("Venue");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === venueImages.length - 1 ? 0 : prev + 1,
      );
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlay, venueImages.length]);

  /* ---------- PAUSE + RESUME ---------- */
  const pauseAndResume = useCallback(() => {
    setIsAutoPlay(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, RESUME_DELAY);
  }, []);

  /* ---------- CONTROLS ---------- */
  const nextImage = useCallback(() => {
    pauseAndResume();
    setCurrentImageIndex((prev) =>
      prev === venueImages.length - 1 ? 0 : prev + 1,
    );
  }, [pauseAndResume, venueImages.length]);

  const prevImage = useCallback(() => {
    pauseAndResume();
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueImages.length - 1 : prev - 1,
    );
  }, [pauseAndResume, venueImages.length]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id='details'
      className=' min-h-screen md:py-24 px-4 w-full overflow-x-hidden bg-[#FDF8F5]'
    >
      <div className='max-w-4xl mx-auto mt-14 md:mt-2'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-lg md:text-4xl font-serif text-gray-900 mb-6 md:mb-12 pt-10'>
            {title}
          </h2>
          <p className='text-base md:text-lg text-gray-600 px-4'>{intro}</p>
        </div>

        {/* Timeline */}
        <div className='relative max-w-2xl mx-auto mb-16 md:mb-20'>
          <div className='absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#800020] via-[#a0002a] to-[#800020]' />

          {[
            ["1:00 PM", ceremony],
            ["2:00 PM", reception],
            ["3:00 PM", firstDance],
            ["3:15 PM", dinner],
            ["4:00 PM", toasts],
            ["5:25 PM", party],
          ].map(([time, label]) => (
            <div
              key={time}
              className='relative flex items-center justify-between py-6 md:py-8'
            >
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <span className='text-base text-gray-700'>{time}</span>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg font-medium text-black'>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='mb-16 max-w-3xl mx-auto'>
          <div className='p-8 pb-3'>
            <h3 className='text-3xl text-center md:text-left text-[#7D2E3D]'>
              {venue}
            </h3>
          </div>

          {/* Venue Slider */}
          <div className='md:p-8 mb-8'>
            <div className='overflow-hidden'>
              <div className='relative group w-full md:h-[70vh] h-[50vh]'>
                <img
                  src={venueImages[currentImageIndex]}
                  alt='venue'
                  className='w-full h-full object-cover object-top rounded-t-sm transition-opacity duration-500'
                />

                {/* LEFT ARROW */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className='
    absolute left-4 top-1/2 -translate-y-1/2
    bg-white/80 rounded-full p-2
    opacity-100
    md:opacity-0 md:group-hover:opacity-100
    transition-opacity z-20
  '
                  aria-label='Previous image'
                >
                  <i className='ri-arrow-left-s-line text-2xl text-gray-800' />
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className='
    absolute right-4 top-1/2 -translate-y-1/2
    bg-white/80 rounded-full p-2
    opacity-100
    md:opacity-0 md:group-hover:opacity-100
    transition-opacity z-20
  '
                  aria-label='Next image'
                >
                  <i className='ri-arrow-right-s-line text-2xl text-gray-800' />
                </button>

                {/* DOTS */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                  {venueImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        pauseAndResume();
                        setCurrentImageIndex(index);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/60 w-2.5 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Venue Details */}
              <div className='py-6'>
                <h4 className='text-xl font-semibold text-gray-800 mb-3'>
                  Bell Reco
                </h4>
                <p className='text-gray-600 my-3 leading-relaxed'>
                  {venueintro}
                </p>

                <div className='flex items-center gap-2 text-gray-600 mb-3'>
                  <i className='ri-map-pin-line text-[#7D2E3D]' />
                  <span className='text-sm'>
                    123 Lorimer St, New York, NY 11206
                  </span>
                </div>
                <div className=' mt-3 flex justify-center items-center'>
                  <a
                    href='https://arlohotels.com/williamsburg/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-fit hover:bg-[#5D1E2D] bg-[#7D2E3D] text-white text-center px-6 py-3 font-semibold  transition-all'
                  >
                    {visitHotel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
