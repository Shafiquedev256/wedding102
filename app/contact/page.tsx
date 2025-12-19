"use client";
import { useEffect, useState } from "react";
import Navigation from "../components/navbar";
import Contact from "../components/contact";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

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
    setFormData({ name: "", email: "", message: "" });

    // Here you could integrate an actual backend submission (API call).
  };

  return (
    <>
      <main className=' bg-[#7D2E3D] overflow-hidden w-full'>
        <Navigation scrolled={true} />
        <div className=' mt-12'>
          <div className='  mb-10'>
            <div className='flex flex-col md:flex-row-reverse items-center py-6 justify-evenly bg-main-100'>
              {/* Office Location Section */}
              <section className='mb-8 text-white'>
                <Contact />
              </section>

              {/* Message Form Section */}
              <section className='w-full p-4 md:w-2/4'>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  Send Us a Message
                </h2>
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
                      className='mt-1 block w-full p-3 border border-white bg-[#FDF8F5] rounded-md 
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
                      className='mt-1 block w-full p-3 border border-white bg-[#FDF8F5] rounded-md 
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
                      className='mt-1 block w-full p-3 border border-white bg-[#FDF8F5] rounded-md 
                     focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-yellow-500 text-main-100  py-3 rounded-md font-semibold hover:bg-yellow-700 transition'
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
