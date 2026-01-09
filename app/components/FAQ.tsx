"use client";

import { useState } from "react";
import { useTranslate } from "@/app/hooks/useTranslate";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ ALL HOOKS CALLED AT TOP LEVEL
  const title = useTranslate("Your Questions Answered");

  const q1 = useTranslate("Where are you registered?");
  const a1 = useTranslate(
    "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at select stores for your convenience. For those who prefer to give monetary gifts, we have set up a honeymoon fund. You can also send gifts directly to our registry or bring cards to the reception. We are grateful for your love and generosity."
  );

  const q2 = useTranslate("What is the dress code?");
  const a2 = useTranslate(
    "Semi-formal attire. We suggest cocktail dresses and suits."
  );

  const q3 = useTranslate("Can I bring a plus one?");
  const a3 = useTranslate(
    "Due to limited capacity, we can only accommodate those listed on your invitation."
  );

  const q4 = useTranslate("Will the ceremony be indoors or outdoors?");
  const a4 = useTranslate(
    "The ceremony will be outdoors in the garden, with an indoor backup plan in case of rain."
  );

  const q5 = useTranslate("Are children welcome?");
  const a5 = useTranslate(
    "We love your little ones, but this will be an adults-only celebration."
  );

  const q6 = useTranslate("What time should I arrive?");
  const a6 = useTranslate(
    "Please arrive by 1:45 PM to be seated before the ceremony begins at 2:00 PM."
  );

  const q7 = useTranslate("Is parking available at the venue?");
  const a7 = useTranslate("Yes, complimentary parking is available on-site.");

  const q8 = useTranslate("What if I have dietary restrictions?");
  const a8 = useTranslate(
    "Please let us know in your RSVP and we will accommodate your needs."
  );

  const q9 = useTranslate("Will there be an open bar?");
  const a9 = useTranslate(
    "Yes, we will have a full open bar throughout the reception."
  );

  const q10 = useTranslate("Can I take photos during the ceremony?");
  const a10 = useTranslate(
    "We kindly ask for an unplugged ceremony. Our photographer will capture everything!"
  );

  const faqs: FAQ[] = [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
    { question: q4, answer: a4 },
    { question: q5, answer: a5 },
    { question: q6, answer: a6 },
    { question: q7, answer: a7 },
    { question: q8, answer: a8 },
    { question: q9, answer: a9 },
    { question: q10, answer: a10 },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-20 px-2 md:px-6 bg-[#FDF8F5] min-h-screen"
    >
      <div className="px-3 md:max-w-3xl md:mx-auto">
        <div className="rounded-2xl md:p-12">
          <h2 className="text-lg md:text-4xl font-serif text-gray-900 mb-6 md:mb-12 pt-20 text-center">
            {title}
          </h2>

          <div className="space-y-4 bg-[#FDF8F5] p-4 rounded">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#FDF8F5] rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-l-4 border-[#FDF8F5]"
                    : "border-l-4 border-transparent"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FDF8F5]/80 transition-colors cursor-pointer"
                >
                  <span className="md:text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <i
                    className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
