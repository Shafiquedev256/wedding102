export default function Schedule() {
  return (
    <section
      id='details'
      className='py-16 md:py-24 px-4 bg-gradient-to-b w-full overflow-x-hidden from-white to-pink-50'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#800020] to-[#a0002a] rounded-full shadow-lg'>
            <i className='ri-calendar-event-line text-white text-3xl'></i>
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-serif'>
            SCHEDULE
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-[#800020] to-transparent mx-auto mb-4'></div>
          <p className='text-base md:text-lg text-gray-600 px-4'>
            We're so ecstatic to share this special day with you!
          </p>
        </div>
        {/* Timeline */}
        <div className='relative max-w-2xl mx-auto mb-16 md:mb-20'>
          {/* Vertical line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#800020] via-[#a0002a] to-[#800020]'></div>

          {/* Top circle */}
          <div className='absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white border-3 border-[#800020] rounded-full shadow-md'></div>

          {/* Timeline items */}
          <div className='space-y-0'>
            {/* 1:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    1:00 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-heart-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    Ceremony Begins
                  </span>
                </div>
              </div>
            </div>
            {/* 2:45 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    2:45 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-goblet-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    Reception
                  </span>
                </div>
              </div>
            </div>
            {/* 3:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    3:00 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-music-2-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    First Dance
                  </span>
                </div>
              </div>
            </div>
            {/* 3:15 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    3:15 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-restaurant-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    Dinner is served
                  </span>
                </div>
              </div>
            </div>
            {/* 4:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    4:00 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-champagne-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    Toasts
                  </span>
                </div>
              </div>
            </div>
            {/* 5:25 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white px-3 md:px-4 py-2 rounded-full shadow-md'>
                  <i className='ri-time-line text-base md:text-lg'></i>
                  <span className='text-base md:text-xl font-bold'>
                    5:25 PM
                  </span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0'>
                    <i className='ri-disco-ball-line text-[#800020] text-base md:text-lg'></i>
                  </div>
                  <span className='text-sm md:text-lg text-gray-700 font-medium'>
                    Party Time!!
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom circle */}
          <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-4 h-4 bg-white border-3 border-[#800020] rounded-full shadow-md'></div>
        </div>
      </div>
    </section>
  );
}
