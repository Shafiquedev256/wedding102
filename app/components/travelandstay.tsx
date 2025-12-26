"use client";

export default function TravelStay() {
  return (
    <section
      id='travel'
      className='py-24 px-3 pt-44 w-full overflow-hidden  bg-[#FDF8F5]'
    >
      <div className='max-w-6xl mx-auto '>
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
        <div className='mb-16 max-w-3xl mx-auto'>
          <div className='mb-8 w-full'>
            <h3 className='text-3xl text-center md:text-left font-serif text-[#7D2E3D]'>Stay</h3>
          </div>

          <div className=' md:p-8 rounded-lg  mb-8'>
            <div className=''>
              <h4 className='text-xl font-semibold text-gray-800 mb-3'>
                Williamsburg
              </h4>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                We've reserved a block of rooms at the following hotel. During
                the weekend, we have special rates.
              </p>
              <div className=' rounded-2xl shadow-xl overflow-hidden   transition-all duration-300'>
                <div className='w-full md:h-[70vh]'>
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
                    </div>
                  </div>

                  <a
                    href='https://arlohotels.com/williamsburg/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full bg-[#7D2E3D] hover:bg-[#7D2E3D] text-white text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer whitespace-nowrap'
                  >
                    Visit Hotel Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div className='max-w-3xl mx-auto'>
          <div className=' mb-8'>
            <h3 className='text-3xl font-serif text-center md:text-left text-[#7D2E3D]'>Driving</h3>
          </div>
          {/** Driving  */}

          <div className='max-w-3xl mx-auto md:mx-0'>
            <a
              href='https://www.google.com/maps/dir/?api=1&destination=123+Lorimer+St+New+York+NY+11206'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-br from-[#7D2E3D] to-[#7D2E3D] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer block'
            >
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0'>
                  <i className='ri-car-line text-white text-2xl'></i>
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-bold text-white'>
                    Driving Directions
                  </h4>
                  <p className='text-white/80 text-sm mt-1'>
                    Get directions to the venue
                  </p>
                </div>
              </div>
              <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4'>
                <p className='text-white/90 text-sm'>
                  Click to get turn-by-turn driving directions to the venue at
                  123 Lorimer St, Williamsburg, NY from your current location.
                </p>
              </div>
              <div className='flex items-center justify-center gap-2 text-white/90 text-sm'>
                <i className='ri-map-pin-line'></i>
                <span>Get Driving Directions</span>
                <i className='ri-arrow-right-line'></i>
              </div>
            </a>
          </div>
          {/* Flying
- Combined Airports Card */}
<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
  <div className="grid md:grid-cols-2 gap-6">
    {/* Left side
- Airport Image */}
    <div className="relative overflow-hidden rounded-xl w-full h-full min-h-[300px]">
      <img
        src="https://readdy.ai/api/search-image?query=modern airport terminal interior with large windows showing airplanes on tarmac bright natural lighting clean professional travel photography simple composition showcasing aviation and travel atmosphere&width=600&height=400&seq=airport001&orientation=landscape"
        alt="Airport"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    {/* Right side
- Airport Information */}
    <div className="space-y-6">
      <div className="w-12 h-12 flex items-center justify-center bg-[#d4af37]/10 rounded-full">
        <i className="ri-plane-line text-[#d4af37] text-2xl"></i>
      </div>
    <br>
      <div>
        <h4 className="font-semibold text-xl text-[#2a2a2a] mb-4">Flying Options</h4>
      <br>
        {/* JFK Airport */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm font-bold text-[#2a2a2a] mb-2">John F. Kennedy International (JFK)</p>
          <p className="text-sm text-gray-700">Distance: 15 miles from venue</p>
          <p className="text-sm text-gray-700">Travel time: ~30-45 minutes</p>
        </div>
        {/* LaGuardia Airport */}
        <div className="mb-4">
          <p className="text-sm font-bold text-[#2a2a2a] mb-2">LaGuardia Airport (LGA)</p>
          <p className="text-sm text-gray-700">Distance: 8 miles from venue</p>
          <p className="text-sm text-gray-700">Travel time: ~20-30 minutes</p>
        </div>
        {/* Transportation Info */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2">Transportation:</p>
          <ul className="space-y-1 text-xs text-gray-600 mb-4">
            <li>• Taxi & rideshare available</li>
            <li>• Airport shuttle service</li>
            <li>• Rental cars on-site</li>
          </ul>
        </div>
        {/* Google Maps Button */}
        <a
          href="https://www.google.com/maps/dir//New+York,+NY"
          target="_blank"
          rel="noopener noreferrer"
         className='bg-gradient-to-br from-[#7D2E3D] to-[#7D2E3D] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer block'
        >
          <i className="ri-map-pin-line text-lg"></i>
          Open in Google Maps
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
