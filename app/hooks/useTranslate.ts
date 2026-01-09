"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const cache = new Map<string, string>();

export function useTranslate(text: string) {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    if (language === "en") {
      setTranslated(text);
      return;
    }

    const key = `${language}:${text}`;
    if (cache.has(key)) {
      setTranslated(cache.get(key)!);
      return;
    }

    fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        targetLanguage: language,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        cache.set(key, data.translatedText);
        setTranslated(data.translatedText);
      });
  }, [language, text]);

  return translated;
}
