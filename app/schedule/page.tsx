"use client";
import { useEffect, useState } from "react";
import Navigation from "../components/navbar";
import Schedule from "../components/schedule";

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
      <Schedule />
    </>
  );
};

export default SchedulePage;
