"use client";

import { useTranslate } from "@/app/hooks/useTranslate";

export default function TravelStay() {
  const heading = useTranslate("Travel & Stay");

  const neighborhoods = useTranslate(
    "As far as neighborhoods go, we think you might enjoy Williamsburg, which is close to the venue. Or, if you want to go to Manhattan, try Lower East Side or East Village."
  );

  const stay = useTranslate("Stay");
  const hotelIntro = useTranslate(
    "We've reserved a block of rooms at the following hotel. During the weekend, we have special rates."
  );
  const visitHotel = useTranslate("Visit Hotel Website");

  const driving = useTranslate("Driving");
  const fromManhattan = useTranslate("From Manhattan:");
  const fromNJ = useTranslate("From New Jersey:");
  const parkingInfo = useTranslate("Parking Information:");
  const openMaps = useTranslate("Open in Google Maps");

  const flying = useTranslate("Flying");
  const venueintro = useTranslate(
    "Set in the hills of Argentona, Bell Recó is a beautifully restored estate that blends historic character with contemporary elegance. Surrounded by gardens and open views, it offers a relaxed yet stylish setting for us to celebrate together in Spain."
  );
  const venue = useTranslate("Venue");
  const distance = useTranslate("Distance:");
  const travelTime = useTranslate("Travel time:");

  return (
    <section
      id='travel'
      className='py-24 px-3 pt-44 w-full overflow-hidden bg-[#FDF8F5]'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-lg md:text-4xl font-serif text-gray-900  text-center'>
            {heading}
          </h2>
        </div>

        {/* Neighborhoods */}
        <div className='mb-8 text-center flex flex-col justify-center items-center px-8'>
          <div className='flex items-start md:w-[60%] gap-4'>
            <p className='text-gray-700 leading-relaxed'>{neighborhoods}</p>
          </div>
        </div>

        {/* Stay Section */}
        <div className='mb-16 max-w-3xl mx-auto'>
          <div className=' p-8 pb-3 max-w-3xl mx-auto  w-full'>
            <h3 className='text-3xl text-center md:text-left  text-[#7D2E3D]'>
              {stay}
            </h3>
          </div>

          <div className='md:p-8 -lg mb-8'>
            <div className='  overflow-hidden transition-all duration-300'>
              <div className='w-full md:h-[70vh]'>
                <img
                  src='https://readdy.ai/api/search-image?query=Modern boutique hotel exterior in Williamsburg Brooklyn with contemporary architecture, stylish urban design, welcoming entrance with warm lighting, trendy neighborhood setting with tree-lined street, sophisticated hospitality venue with clean minimalist aesthetic and inviting atmosphere perfect for wedding guests&width=800&height=600&seq=williamsburg-hotel-002&orientation=landscape'
                  alt='Hotel in Williamsburg'
                  className='w-full rounded-t-sm h-full object-cover object-top'
                />
              </div>

              <div className='py-6'>
                <h4 className='text-xl  font-semibold text-gray-800 mb-3'>
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
                  className='block w-full bg-[#7D2E3D] text-white text-center px-6 py-3 -lg font-semibold transition-all hover:scale-105 whitespace-nowrap'
                >
                  {visitHotel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* venue */}
        <div className='mb-16 max-w-3xl mx-auto'>
          <div className=' p-8 pb-3 max-w-3xl mx-auto  w-full'>
            <h3 className='text-3xl text-center md:text-left  text-[#7D2E3D]'>
              {venue}
            </h3>
          </div>

          <div className='md:p-8 -lg mb-8'>
            <div className='  overflow-hidden transition-all duration-300'>
              <div className='w-full md:h-[70vh]'>
                <img
                  src='/venue.avif'
                  alt='venue'
                  className='w-full h-full rounded-t-sm object-cover object-top'
                />
              </div>

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

        {/* Driving */}
        <div className='mb-2 max-w-3xl mx-auto  w-full'>
          <h3 className='text-3xl text-center md:text-left md:px-6 text-[#7D2E3D]'>
            {driving}
          </h3>
        </div>

        <div className='bg-[#FDF8F5] backdrop-blur-sm max-w-3xl mx-auto     mb-16'>
          <div className=''>
            <div className='space-y-6 p-6'>
              <br />

              <div>
                <div className='mb-4 pb-4 border-b border-gray-200'>
                  <p className='text-sm font-bold mb-2'>{fromManhattan}</p>
                  <p className='text-sm text-gray-700'>
                    Take FDR Drive North to Exit 15
                  </p>
                  <p className='text-sm text-gray-700'>
                    Approximately 25 minutes
                  </p>
                </div>

                <div className='mb-4'>
                  <p className='text-sm font-bold mb-2'>{fromNJ}</p>
                  <p className='text-sm text-gray-700'>
                    Take I-95 North to Exit 6
                  </p>
                  <p className='text-sm text-gray-700'>
                    Approximately 35 minutes
                  </p>
                </div>

                <div className='pt-4 border-t border-gray-200'>
                  <p className='text-xs text-gray-600 mb-2'>{parkingInfo}</p>
                  <ul className='space-y-1 text-xs text-gray-600 mb-4'>
                    <li>• Complimentary valet parking available at venue</li>
                    <li>• Self-parking garage adjacent to venue</li>
                    <li>• Street parking available nearby</li>
                  </ul>
                </div>

                <a
                  href='https://www.google.com/maps/dir//New+York,+NY'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-br from-[#7D2E3D] to-[#7D2E3D]   p-4 text-white flex items-center justify-center gap-2 hover:scale-105 transition-all'
                >
                  <i className='ri-map-pin-line text-lg' />
                  {openMaps}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Flying */}
        <div className='mb-4  max-w-3xl mx-auto  w-full'>
          <h3 className='text-3xl md:px-6 text-center md:text-left  text-[#7D2E3D]'>
            {flying}
          </h3>
        </div>

        <div className='bg-[#FDF8F5] backdrop-blur-sm   max-w-3xl mx-auto'>
          <div className='space-y-6 p-6'>
            <div className='flex flex-col mb-4 pb-4 border-b border-gray-200 md:flex-row md:space-x-5 md:justify-between'>
              <div>
                <p className='text-sm font-bold'>
                  John F. Kennedy International (JFK)
                </p>
                <p className='text-sm text-gray-700'>{distance} 15 miles</p>
                <p className='text-sm text-gray-700'>
                  {travelTime} ~30–45 minutes
                </p>
              </div>

              <a
                href='https://www.google.com/maps/dir//New+York,+NY'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-br mt-2 from-[#7D2E3D] to-[#7D2E3D]   p-4 text-white flex items-center justify-center gap-2 hover:scale-105 transition-all'
              >
                <i className='ri-map-pin-line text-lg' />
                {openMaps}
              </a>
            </div>

            <div className='flex flex-col mb-4 pb-4 border-b border-gray-200 md:flex-row md:space-x-5 md:justify-between'>
              <div>
                <p className='text-sm font-bold'>LaGuardia Airport (LGA)</p>
                <p className='text-sm text-gray-700'>{distance} 8 miles</p>
                <p className='text-sm text-gray-700'>
                  {travelTime} ~20–30 minutes
                </p>
              </div>

              <a
                href='https://www.google.com/maps/dir//New+York,+NY'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-br mt-2 from-[#7D2E3D] to-[#7D2E3D]   p-4 text-white flex items-center justify-center gap-2 hover:scale-105 transition-all'
              >
                <i className='ri-map-pin-line text-lg' />
                {openMaps}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
