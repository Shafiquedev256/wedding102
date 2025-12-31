"use client";
import { useState, useEffect } from "react";
import FAQSection from "../components/FAQ";
import Navigation from "../components/navbar";

const SchedulePage = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      <Navigation scrolled={scrolled} />
      <FAQSection />
    </section>
  );
};

export default SchedulePage;
