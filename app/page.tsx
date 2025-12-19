"use client";
import Footer from "./components/Footer";
import Hero from "./components/herosection";

export default function Home() {
  return (
    <main className='bg-[#FAF8F5] min-h-screen text-[#3b2f2f] w-full overflow-hidden'>
      <Hero />

      <Footer />
    </main>
  );
}
