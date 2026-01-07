"use client";
import { useEffect, useState } from "react";
import Navigation from "../components/navbar";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", message: "", email: "" });

    // Here you could integrate an actual backend submission (API call).
  };

  return (
    <>
      <main className=' bg-[#FDF8F5] min-h-screen py-20 md:py-24 overflow-hidden w-full'>
        <Navigation scrolled={scrolled} />
        <div className=' mt-12'>
          <div className='  '>
            <div className='text-center mb-6'>
              <h2 className='text-lg md:text-4xl mb-3 font-serif text-gray-900  text-center'>
                Get In Touch
              </h2>
              <p className='md:text-lg px-4 text-gray-500 max-w-2xl mx-auto'>
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
            <div className='flex justify-center items-center pb-6  bg-main-100'>
              {/* Office Location Section */}

              {/* Message Form Section */}
              <section className='w-full p-4 md:w-2/4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-[#FDF8F5] text-sm font-medium '
                    >
                      Name
                    </label>
                    <input
                      placeholder='Name...'
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='mt-1 block w-full p-3  border-gray-300 border bg-white rounded-md 
                     focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-[#FDF8F5] text-sm font-medium '
                    >
                      Email
                    </label>
                    <input
                      placeholder='Email...'
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='mt-1 block w-full p-3  border-gray-300 border bg-white rounded-md 
                     focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm text-[#FDF8F5] font-medium '
                    >
                      Message
                    </label>
                    <textarea
                      placeholder='Messages...'
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className='mt-1 block w-full p-3 border border-gray-300 border-[1px] bg-white rounded-md 
                     focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-[#7D2E3D] text-white text-main-100  py-3 rounded-md font-semibold hover:bg-[#c52240] transition'
                  >
                    Send Message
                  </button>

                  {successMessage && (
                    <p className='text-green-600 text-sm mt-2'>
                      {successMessage}
                    </p>
                  )}
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUsPage;
