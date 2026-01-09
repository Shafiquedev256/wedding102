"use client";

export default function Footer() {
  return (
    <footer
      id='footer'
      className='bg-linear-to-br from-[#FDF8F5] to-[#FBEDEC] px-6'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-xs text-center w-full text-gray-600'>
              © 2026 Gemma & Jeﬄe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
