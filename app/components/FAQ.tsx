"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is the dress code?",
      answer: "Semi-formal attire. We suggest cocktail dresses and suits.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to limited capacity, we can only accommodate those listed on your invitation.",
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer:
        "The ceremony will be outdoors in the garden, with an indoor backup plan in case of rain.",
    },
    {
      question: "Are children welcome?",
      answer:
        "We love your little ones, but this will be an adults-only celebration.",
    },
    {
      question: "What time should I arrive?",
      answer:
        "Please arrive by 1:45 PM to be seated before the ceremony begins at 2:00 PM.",
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, complimentary parking is available on-site.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Please let us know in your RSVP and we will accommodate your needs.",
    },
    {
      question: "Will there be an open bar?",
      answer: "Yes, we will have a full open bar throughout the reception.",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer:
        "We kindly ask for an unplugged ceremony. Our photographer will capture everything!",
    },
    {
      question: "Where are you registered?",
      answer:
        "Your presence is the best gift! If you wish to give, we have a registry at [Store Name].",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#FDF8F5] py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center">
          Your Questions Answered
        </h2>

        <br />

        {/* Gift Information */}
        <div className="mb-12 text-center px-4">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Your presence at our wedding is the greatest gift of all. However, if
            you wish to honor us with a gift, we have registered at select stores
            for your convenience.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            For those who prefer to give monetary gifts, we have set up a
            honeymoon fund. You can also send gifts directly to our registry or
            bring cards to the reception. We are grateful for your love and
            generosity.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 shadow-lg rounded-lg overflow-hidden bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden border-b last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-5 px-4 md:px-6 text-left hover:opacity-80 transition-opacity"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <i
                    className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 md:px-6 pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

