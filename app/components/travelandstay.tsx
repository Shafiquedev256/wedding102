"use client";

export default function TravelStay() {
  return (
    <section
      id='travel'
      className='py-24 pt-44 w-full overflow-hidden  bg-[#FDF8F5]'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-serif text-gray-800 mb-4'>
            Travel &amp; Stay
          </h2>
          <div className='w-24 h-1 bg-[#7D2E3D] mx-auto mb-6'></div>
        </div>

        {/* Neighborhoods */}
        <div className='mb-8 text-center flex flex-col justify-center items-center px-8'>
          <div className='flex items-start md:w-[60%] gap-4'>
            <div>
              <p className='text-gray-700 leading-relaxed'>
                As far as neighborhoods go, we think you might enjoy{" "}
                <strong>Williamsburg</strong>, which is close to the venue. Or,
                if you want to go to Manhattan, try{" "}
                <strong>Lower East Side</strong> or{" "}
                <strong>East Village</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Stay Section */}
        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full'>
              <i className='ri-hotel-bed-line text-2xl text-white'></i>
            </div>
            <h3 className='text-3xl font-serif text-[#7D2E3D]'>Stay</h3>
          </div>

          <div className=' p-8 rounded-lg  mb-8'>
            <h4 className='text-xl font-semibold text-gray-800 mb-3'>
              Williamsburg
            </h4>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              We've reserved a block of rooms at the following hotel. During the
              weekend, we have special rates.
            </p>

            <div className='grid md:grid-cols-1 gap-6 mb-8'>
              <div className=' rounded-2xl shadow-xl overflow-hidden   transition-all duration-300'>
                <div className='w-full h-64'>
                  <img
                    src='https://readdy.ai/api/search-image?query=Modern boutique hotel exterior in Williamsburg Brooklyn with contemporary architecture, stylish urban design, welcoming entrance with warm lighting, trendy neighborhood setting with tree-lined street, sophisticated hospitality venue with clean minimalist aesthetic and inviting atmosphere perfect for wedding guests&width=800&height=600&seq=williamsburg-hotel-002&orientation=landscape'
                    alt='Hotel in Williamsburg'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                      <h4 className='text-2xl font-bold text-gray-900 mb-2'>
                        Hotel
                      </h4>
                      <div className='flex items-center gap-2 text-gray-600 mb-3'>
                        <i className='ri-map-pin-line text-[#7D2E3D]'></i>
                        <span className='text-sm'>
                          123 Lorimer St, New York, NY 11206
                        </span>
                      </div>
                      <div className='bg-[#7D2E3D]/10 rounded-lg px-4 py-2 inline-block mb-3'>
                        <span className='text-[#7D2E3D] font-bold text-lg'>
                          $150-$165/night
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-[#F5F5DC] rounded-lg p-4 mb-4'>
                    <h5 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                      <i className='ri-information-line text-[#7D2E3D]'></i>
                      How to Book
                    </h5>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                      To book your accommodations, send a reservation request to{" "}
                      <a
                        href='mailto:reservations@hotel.com'
                        className='text-[#7D2E3D] font-semibold hover:underline'
                      >
                        reservations@hotel.com
                      </a>
                      . Mention you're attending our wedding party.
                    </p>
                  </div>
                  <a
                    href='https://www.google.com/maps/search/?api=1&query=123+Lorimer+St+New+York+NY+11206'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full bg-[#7D2E3D] hover:bg-[#7D2E3D] text-white text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer whitespace-nowrap'
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full'>
              <i className='ri-roadster-line text-2xl text-white'></i>
            </div>
            <h3 className='text-3xl font-serif text-[#7D2E3D]'>
              Getting There
            </h3>
          </div>

          {/* Flying */}
          <div className='flex flex-col justify-center items-center '>
            <p className='text-lg text-gray-700 mb-8 text-center md:text-left'></p>
            <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto md:mx-0'>
              {/* JFK Airport */}
              <a
                href='https://www.google.com/maps/search/?api=1&query=John+F+Kennedy+International+Airport+New+York'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-br from-[#7D2E3D] to-[#7D2E3D] rounded-2xl  p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-14 h-14 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0'>
                    <i className='ri-plane-line text-white text-2xl'></i>
                  </div>
                  <div className='flex-1'>
                    <div className='text-white/80 text-sm font-semibold mb-1'>
                      JFK
                    </div>
                    <h4 className='text-xl font-bold text-white'>
                      John F. Kennedy International Airport
                    </h4>
                  </div>
                </div>
                <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-white/90 text-sm font-medium'>
                      Distance from venue
                    </span>
                    <span className='text-white font-semibold'>30 minutes</span>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-2 text-white/90 text-sm'>
                  <i className='ri-map-pin-line'></i>
                  <span>View on Google Maps</span>
                  <i className='ri-arrow-right-line'></i>
                </div>
              </a>
              {/* LaGuardia Airport */}
              <a
                href='https://www.google.com/maps/search/?api=1&query=LaGuardia+Airport+New+York'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-br from-[#7D2E3D] to-[#7D2E3D] rounded-2xl  p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-14 h-14 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0'>
                    <i className='ri-plane-line text-white text-2xl'></i>
                  </div>
                  <div className='flex-1'>
                    <div className='text-white/80 text-sm font-semibold mb-1'>
                      LGA
                    </div>
                    <h4 className='text-xl font-bold text-white'>
                      LaGuardia <div>Airport</div>
                    </h4>
                  </div>
                </div>
                <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-white/90 text-sm font-medium'>
                      Distance from venue
                    </span>
                    <span className='text-white font-semibold'>30 minutes</span>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-2 text-white/90 text-sm'>
                  <i className='ri-map-pin-line'></i>
                  <span>View on Google Maps</span>
                  <i className='ri-arrow-right-line'></i>
                </div>
              </a>
            </div>
            <p className='text-lg mt-12 text-gray-700 mb-8 text-left text-left'></p>
            <div className='flex justify-center items-center '>
              <div className='max-w-2xl mx-auto  md:mx-0'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=car+rental+near+Williamsburg+Brooklyn+NY'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-br from-[#7D2E3D]
 to-[#7D2E3D]
 rounded-2xl  p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer block'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-14 h-14 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0'>
                      <i className='ri-car-line text-white text-2xl'></i>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-xl font-bold text-white'>
                        Car Rental
                      </h4>
                      <p className='text-white/80 text-sm mt-1'>
                        Find car rental locations near the venue
                      </p>
                    </div>
                  </div>
                  <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4'>
                    <p className='text-white/90 text-sm'>
                      Multiple car rental options available in the Williamsburg
                      area. Click to find the nearest location on Google Maps.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 text-white/90 text-sm'>
                    <i className='ri-map-pin-line'></i>
                    <span>Find Car Rentals on Google Maps</span>
                    <i className='ri-arrow-right-line'></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
