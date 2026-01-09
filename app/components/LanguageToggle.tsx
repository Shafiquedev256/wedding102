"use client";

import { useState } from "react";

type Props = {
  text: string;
};

export default function LanguageToggle({ text }: Props) {
  const [lang, setLang] = useState<"en" | "ca">("en");
  const [displayText, setDisplayText] = useState(text);
  const [cachedCa, setCachedCa] = useState<string | null>(null);

  const toggle = async () => {
    if (lang === "en") {
      if (cachedCa) {
        setDisplayText(cachedCa);
      } else {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            targetLanguage: "ca",
          }),
        });

        const data = await res.json();
        setCachedCa(data.translatedText);
        setDisplayText(data.translatedText);
      }
      setLang("ca");
    } else {
      setDisplayText(text);
      setLang("en");
    }
  };

  return (
    <>
      <button onClick={toggle}>
        {lang === "en" ? "Català" : "English"}
      </button>
      <p>{displayText}</p>
    </>
  );
}
