"use client";

import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useCallback } from "react";
export default function Schedule() {
  const venueImages: string[] = [
    "/venue.avif",
    "/venue2.webp",
    "/venue3.webp",
    "/venue4.webp",
  ];

  const title = useTranslate("SCHEDULE");
  const intro = useTranslate(
    "We're so ecstatic to share this special day with you!",
  );
  const flying = useTranslate("Flying");
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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === venueImages.length - 1 ? 0 : prev + 1,
    );
  }, []);

  return (
    <section
      id='details'
      className='pt-24 min-h-screen md:py-24 px-4  w-full overflow-x-hidden bg-[#FDF8F5]'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center  mb-12 md:mb-16'>
          <h2 className='text-lg md:text-4xl font-serif text-gray-900 mb-6 md:mb-12 pt-20 text-center'>
            {title}
          </h2>

          <p className='text-base md:text-lg text-gray-600 px-4'>{intro}</p>
        </div>

        {/* Timeline */}
        <div className='relative max-w-2xl mx-auto mb-16 md:mb-20'>
          <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#800020] via-[#a0002a] to-[#800020]'></div>

          <div className='space-y-0'>
            {/* 1:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>1:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {ceremony}
                </span>
              </div>
            </div>

            {/* 2:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>2:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {reception}
                </span>
              </div>
            </div>

            {/* 3:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>3:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {firstDance}
                </span>
              </div>
            </div>

            {/* 3:15 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>3:15 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {dinner}
                </span>
              </div>
            </div>

            {/* 4:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>4:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {toasts}
                </span>
              </div>
            </div>

            {/* 5:25 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full'>
                  <span className='text-base'>5:25 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <span className='text-sm md:text-lg text-black font-medium'>
                  {party}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-16 max-w-3xl mx-auto'>
          <div className=' p-8 pb-3 max-w-3xl mx-auto  w-full'>
            <h3 className='text-3xl text-center md:text-left  text-[#7D2E3D]'>
              {venue}
            </h3>
          </div>

          {/* venue */}
          <div className='md:p-8 mb-8'>
            <div className='overflow-hidden transition-all duration-300'>
              {/* Image Carousel with Click functionality */}
              <div
                className='w-full md:h-[70vh] h-[50vh] relative group cursor-pointer'
                onClick={handleImageClick}
              >
                <img
                  src={venueImages[currentImageIndex]}
                  alt='venue'
                  className='w-full h-full rounded-t-sm object-cover object-top transition-opacity duration-500'
                  key={currentImageIndex}
                />

                <br />

                {/* Navigation Dots */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
                  {venueImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      aria-label={`View image ${index + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>

                <br />

                {/* Hover hint */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-800 font-medium'>
                    <i className='ri-image-line mr-2'></i>
                    Click to view more ({currentImageIndex + 1}/
                    {venueImages.length})
                  </div>
                </div>
              </div>

              {/* Venue Details */}
              <div className='py-6'>
                <h4 className='text-xl  font-semibold text-gray-800 mb-3'>
                  Bell Reco
                </h4>

                <p className='text-gray-600 my-3  leading-relaxed'>
                  {venueintro}
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
                  className='block w-full bg-[#7D2E3D] text-white text-center px-6 py-3 -lg font-semibold transition-all hover:scale-105 whitespace-nowrap'
                >
                  {visitHotel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
