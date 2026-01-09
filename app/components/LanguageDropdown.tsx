"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as "en" | "ca")}
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="ca">Català</option>
    </select>
  );
}
