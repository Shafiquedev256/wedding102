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
    <section id="faq" className="py-20 px-6 bg-[#FDF8F5]">
      <div className="px-3 md:max-w-3xl md:mx-auto">
        <div className=" rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-lg md:text-4xl font-serif text-gray-900 mb-6 md:mb-12 pt-20 text-center">
            Your Questions Answered
          </h2>

          <br />

          {/* Gift Information */}
          <div className="mb-12 text-center px-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honor us with a gift, we have registered at select
              stores for your convenience.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              For those who prefer to give monetary gifts, we have set up a
              honeymoon fund. You can also send gifts directly to our registry or
              bring cards to the reception. We are grateful for your love and
              generosity.
            </p>
          </div>

          <div className="space-y-4 shadow-xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#FDF8F5] rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-l-4 border-[#8B4049]"
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
                    className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform duration-300 flex-shrink-0 w-6 h-6 flex items-center justify-center ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
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

