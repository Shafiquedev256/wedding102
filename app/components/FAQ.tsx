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
  const title = useTranslate("FAQs");

  const q1 = useTranslate("Do you have a registry?");
  const a1 = useTranslate(
    "We don’t have a traditional registry. Your presence means the world to us, but for those who have asked about gifting, we’ve shared our bank details below. Any contributions will go toward our honeymoon and a lifetime of great memories.\n\nUK: Sort Code: 09-01-27 | Account Number: 08997431\nSpain: Account Number: 3472384028374",
  );

  const q2 = useTranslate("What time should I arrive?");
  const a2 = useTranslate(
    "The ceremony will begin promptly at 5:00 PM. Guests are kindly asked to arrive no later than 4:30 PM to allow time for arrival and seating. Welcome drinks and snacks will be served upon arrival.",
  );

  const q3 = useTranslate("What’s the dress code?");
  const a3 = useTranslate(
    "Our wedding will be a formal, black-tie celebration. We kindly request that guests dress accordingly and refrain from wearing casual attire.",
  );

  const q4 = useTranslate("Are kids welcome?");
  const a4 = useTranslate(
    "While we love your little ones, we’ve decided to make our wedding an adults-only celebration. We hope you understand and can arrange childcare so you can relax and enjoy the evening with us. We’re happy to help share local childcare options if needed.",
  );

  const q5 = useTranslate("Can I bring a plus one?");
  const a5 = useTranslate(
    "We can only accommodate guests whose names are listed on the invitation. If your invitation includes a plus one, you’re welcome to bring a guest. Otherwise, we kindly ask that only the guests named on your invitation attend. Please reach out if you have any questions.",
  );

  const q6 = useTranslate("Is there parking available at the venue?");
  const a6 = useTranslate(
    "Yes, parking will be available at the venue for all guests.",
  );

  const q7 = useTranslate("What if I have dietary restrictions?");
  const a7 = useTranslate(
    "Please include any dietary restrictions when you RSVP so we can accommodate you.",
  );

  const q8 = useTranslate("When do I need to RSVP by?");
  const a8 = useTranslate("Please RSVP no later than the 4th of May 2026.");

  const q9 = useTranslate("Will there be transportation to the venue?");
  const a9 = useTranslate(
    "We’re currently exploring transportation options based on the number of guests confirmed. There may be a bus with pickup and drop-off from Terrassa and Barcelona. More details to come!",
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
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='faq' className='py-16 px-2 md:px-6 bg-[#FDF8F5] min-h-screen'>
      <div className='px-3 md:max-w-3xl md:mx-auto'>
        <div className='rounded-2xl md:p-12 md:pt-2'>
          <h2 className='text-lg md:text-4xl font-serif text-gray-900 mb-3 md:mb-6 pt-20 text-center'>
            {title}
          </h2>

          <div className='space-y-4 bg-[#FDF8F5] p-4 rounded'>
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
                  className='w-full flex items-center justify-between p-6 text-left hover:bg-[#FDF8F5]/80 transition-colors cursor-pointer'
                >
                  <span className='md:text-lg font-medium text-gray-900 pr-4'>
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
                  <div className='px-6 pb-6 text-gray-700 leading-relaxed'>
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
