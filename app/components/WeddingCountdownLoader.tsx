"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function WeddingCountdownLoader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target wedding date
  const weddingDate = new Date("2026-06-12T16:00:00");

  // Fade out after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div
      className={`fixed inset-0  flex flex-col items-center justify-center bg-[#FDF8F5] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 z-0" : "z-60 opacity-100"
      }`}
    >
      <div className='text-center px-4'>
        <div className='mb-8 animate-pulse'>
          <img
            src='/logo.png'
            alt='Wedding Logo'
            className='w-24 h-24 md:w-32 md:h-32 mx-auto object-contain'
          />
        </div>

        <h1
          style={{ fontFamily: "Playfair Display, serif" }}
          className='md:mt-0 mt-6 flex justify-center items-center space-x-3 text-[#7D2E3D] text-5xl md:text-7xl lg:text-9xl leading-tight'
        >
          <span>Gemma</span>
          <span>&</span>
          <span>Jeﬄe</span>
        </h1>

        <div className='flex gap-4 md:gap-6 justify-center mb-6 mt-6'>
          {[
            { label: "Days", value: pad(days) },
            { label: "Hours", value: pad(hours) },
            { label: "Minutes", value: pad(minutes) },
            { label: "Seconds", value: pad(seconds) },
          ].map((item, idx) => (
            <div key={idx} className='flex items-center gap-2'>
              <div className='text-center'>
                <div className='text-2xl md:text-4xl font-bold text-[#7D2E3D]'>
                  {item.value}
                </div>
                <div className='text-xs md:text-sm text-[#7D2E3D] mt-1'>
                  {item.label}
                </div>
              </div>
              {idx < 3 && (
                <div className='text-2xl md:text-4xl text-[#7D2E3D] flex items-center'>
                  :
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
