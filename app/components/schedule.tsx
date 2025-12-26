export default function Schedule() {
  return (
    <section
      id='details'
      className='pt-24 min-h-screen md:py-24 px-4 bg-gradient-to-b w-full overflow-x-hidden from-white to-pink-50'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mt-14 mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-serif'>
            SCHEDULE
          </h2>
          
          <p className='text-base md:text-lg text-gray-600 px-4'>
            We're so ecstatic to share this special day with you!
          </p>
        </div>
        {/* Timeline */}
        <div className='relative max-w-2xl mx-auto mb-16 md:mb-20'>
          {/* Vertical line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#800020] via-[#a0002a] to-[#800020]'></div>

          {/* Top circle 
                    <div className='absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white border-3 border-[#800020] rounded-full shadow-md'></div>


          */}
          {/* Timeline items */}
          <div className='space-y-0'>
            {/* 1:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>1:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    Ceremony Begins
                  </span>
                </div>
              </div>
            </div>
            {/* 2:45 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>2:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    Reception
                  </span>
                </div>
              </div>
            </div>
            {/* 3:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>3:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    First Dance
                  </span>
                </div>
              </div>
            </div>
            {/* 3:15 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>3:15 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    Dinner is served
                  </span>
                </div>
              </div>
            </div>
            {/* 4:00 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8 border-b border-gray-200'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>4:00 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    Toasts
                  </span>
                </div>
              </div>
            </div>
            {/* 5:25 PM */}
            <div className='relative flex items-center justify-between py-6 md:py-8'>
              <div className='w-1/2 text-right pr-6 md:pr-12'>
                <div className='inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full '>
                  <span className='text-base   '>5:25 PM</span>
                </div>
              </div>
              <div className='w-1/2 pl-6 md:pl-12'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <span className='text-sm md:text-lg text-black font-medium'>
                    Party Time!!
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom circle 
                    <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-4 h-4 bg-white border-3 border-[#800020] rounded-full shadow-md'></div>

          */}
        </div>
      </div>
    </section>
  );
}
