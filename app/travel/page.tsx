"use client";
import { useEffect, useState } from "react";
import Navigation from "../components/navbar";
import TravelStay from "../components/travelandstay";

const SchedulePage = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navigation scrolled={scrolled} />
      <TravelStay />
    </>
  );
};

export default SchedulePage;
