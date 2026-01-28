"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navbar";
import { useTranslate } from "@/app/hooks/useTranslate";

const ContactUsPage: React.FC = () => {
  // ✅ TRANSLATION HOOKS
  const title = "";
  const subtitle = useTranslate(
    "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  );

  const nameLabel = useTranslate("Name");
  const PhoneNumberLabel = useTranslate("Phone Number");
  const messageLabel = useTranslate("Message");

  const namePlaceholder = useTranslate("Name...");
  const PhoneNumberPlaceholder = useTranslate("Phone Number...");
  const messagePlaceholder = useTranslate("Message...");

  const sendMessage = useTranslate("Send Message");
  const successText = useTranslate("Your message has been sent successfully!");

  // -----------------------------

  const [formData, setFormData] = useState({
    name: "",
    PhoneNumber: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccessMessage(successText);
      setFormData({ name: "", PhoneNumber: "", message: "" });
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='bg-[#FDF8F5] min-h-screen py-20 md:py-24 overflow-hidden w-full'>
      <Navigation scrolled={scrolled} />

      <div className='mt-12'>
        <div className='text-center mb-6'>
          <h2 className='text-lg md:text-4xl mb-3 font-serif text-gray-900 text-center'>
            {title}
          </h2>
          <p className='md:text-lg px-4 text-gray-500 max-w-2xl mx-auto'>
            {subtitle}
          </p>
        </div>

        <div className='flex justify-center items-center pb-6 bg-main-100'>
          <section className='w-full p-4 md:w-2/4'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-[#FDF8F5] text-sm font-medium'
                >
                  {nameLabel}
                </label>
                <input
                  placeholder={namePlaceholder}
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full p-3 border-gray-300 border bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-[#FDF8F5] text-sm font-medium'
                >
                  {PhoneNumberLabel}
                </label>
                <input
                  placeholder={PhoneNumberPlaceholder}
                  type='email'
                  id='email'
                  name='email'
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full p-3 border-gray-300 border bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm text-[#FDF8F5] font-medium'
                >
                  {messageLabel}
                </label>
                <textarea
                  placeholder={messagePlaceholder}
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='mt-1 block w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div className='justify-center items-center flex'>
                <button
                  type='submit'
                  disabled={loading}
                  className={`w-fit p-3 font-semibold text-white transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#7D2E3D] hover:bg-[#5D1E2D]"
                  }`}
                >
                  {loading ? "Sending..." : sendMessage}
                </button>
              </div>

              {successMessage && (
                <p className='text-green-600 text-sm mt-2'>{successMessage}</p>
              )}

              {errorMessage && (
                <p className='text-red-600 text-sm mt-2'>{errorMessage}</p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;
