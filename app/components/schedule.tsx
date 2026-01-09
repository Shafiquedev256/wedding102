"use client";

import { useTranslate } from "@/app/hooks/useTranslate";

export default function Schedule() {
  const title = useTranslate("SCHEDULE");
  const intro = useTranslate(
    "We're so ecstatic to share this special day with you!"
  );

  const ceremony = useTranslate("Ceremony Begins");
  const reception = useTranslate("Reception");
  const firstDance = useTranslate("First Dance");
  const dinner = useTranslate("Dinner is served");
  const toasts = useTranslate("Toasts");
  const party = useTranslate("Party Time!!");

  return (
    <section
      id="details"
      className="pt-24 min-h-screen md:py-24 px-4  w-full overflow-x-hidden bg-[#FDF8F5]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center  mb-12 md:mb-16">
          <h2 className="text-lg md:text-4xl font-serif text-gray-900 mb-6 md:mb-12 pt-20 text-center">
            {title}
          </h2>

          <p className="text-base md:text-lg text-gray-600 px-4">
            {intro}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#800020] via-[#a0002a] to-[#800020]"></div>

          <div className="space-y-0">
            {/* 1:00 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">1:00 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {ceremony}
                </span>
              </div>
            </div>

            {/* 2:00 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">2:00 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {reception}
                </span>
              </div>
            </div>

            {/* 3:00 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">3:00 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {firstDance}
                </span>
              </div>
            </div>

            {/* 3:15 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">3:15 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {dinner}
                </span>
              </div>
            </div>

            {/* 4:00 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">4:00 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {toasts}
                </span>
              </div>
            </div>

            {/* 5:25 PM */}
            <div className="relative flex items-center justify-between py-6 md:py-8">
              <div className="w-1/2 text-right pr-6 md:pr-12">
                <div className="inline-flex items-center gap-2 text-gray-700 px-3 md:px-4 py-2 rounded-full">
                  <span className="text-base">5:25 PM</span>
                </div>
              </div>
              <div className="w-1/2 pl-6 md:pl-12">
                <span className="text-sm md:text-lg text-black font-medium">
                  {party}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
