"use client";

import { useState, FormEvent } from "react";

export default function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [charCount, setCharCount] = useState(0);
  const [totalGuests, setTotalGuests] = useState(1);
  const [guestNames, setGuestNames] = useState<string[]>([""]);

  const handleGuestChange = (index: number, value: string) => {
    const updatedNames = [...guestNames];
    updatedNames[index] = value;
    setGuestNames(updatedNames);
  };

  const handleTotalGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setTotalGuests(num);

    // Adjust guestNames array to match total guests
    setGuestNames((prev) => {
      const newArr = [...prev];
      if (num > prev.length) {
        return newArr.concat(Array(num - prev.length).fill(""));
      } else {
        return newArr.slice(0, num);
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const dietaryReq = (formData.get("dietary_requirements") as string) || "";
    if (dietaryReq.length > 500) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const needsBus = formData.get("needs_bus") === "yes" ? "yes" : "no";

    const rsvpData = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      total_guests: totalGuests,
      guest_names: guestNames,
      dietary_requirements: dietaryReq || "None",
      needs_bus: needsBus,
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rsvpData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        setCharCount(0);
        setTotalGuests(1);
        setGuestNames([""]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setCharCount(value.length);
    } else {
      e.target.value = value.substring(0, 500);
      setCharCount(500);
    }
  };

  return (
    <section id='rsvp' className='py-24  bg-[#FDF8F5]'>
      <div className='max-w-3xl mx-auto px-6'>
        <div className='text-center mb-8'>
          <h2 className='text-lg md:text-4xl mb-6 font-serif text-gray-900  text-center'>
            RSVP
          </h2>

          <p className='text-gray-700'>
            Please respond by October 1st, 2026. We can't wait to celebrate with
            you!
          </p>
        </div>

        <form className='bg-[#FDF8F5] rounded-lg  p-8' onSubmit={handleSubmit}>
          <div className='space-y-6'>
            {/* Your Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-gray-800 mb-2'
              >
                Your Full Name *
              </label>
              <input
                id='name'
                name='name'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D2E3D] bg-white text-sm'
                placeholder='Enter your full name'
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-semibold text-gray-800 mb-2'
              >
                Phone Number *
              </label>
              <input
                id='phone'
                name='phone'
                type='tel'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D2E3D] bg-white text-sm'
                placeholder='+1 (555) 123-4567'
              />
            </div>

            {/* Total Guests */}
            <div>
              <label
                htmlFor='total_guests'
                className='block text-sm font-semibold text-gray-800 mb-2'
              >
                Total Number of Guests *
              </label>
              <select
                id='total_guests'
                name='total_guests'
                value={totalGuests}
                onChange={handleTotalGuestsChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D2E3D] bg-white text-sm cursor-pointer'
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Guest{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Names */}
            <div>
              <label className='block text-sm font-semibold text-gray-800 mb-2'>
                Full Names of All Guests *
              </label>
              {guestNames.map((name, idx) => (
                <input
                  key={idx}
                  value={name}
                  onChange={(e) => handleGuestChange(idx, e.target.value)}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D2E3D] bg-white text-sm mb-2'
                  placeholder={`Guest ${idx + 1} full name`}
                />
              ))}
            </div>

            {/* Dietary Requirements */}
            <div>
              <label
                htmlFor='dietary_requirements'
                className='block text-sm font-semibold text-gray-800 mb-2'
              >
                Dietary Requirements / Comments
              </label>
              <textarea
                id='dietary_requirements'
                name='dietary_requirements'
                rows={4}
                maxLength={500}
                onChange={handleTextareaChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D2E3D] bg-white text-sm resize-none'
                placeholder='Please let us know about any dietary restrictions, allergies, or special requests (max 500 characters)'
              />
              <div className='text-xs text-gray-500 mt-1'>
                {charCount}/500 characters
              </div>
            </div>

            {/* Shuttle Bus */}
            <div className=' py-6 rounded-lg'>
              <div className='flex flex-col-reverse '>
                <div className='flex flex-row space-x-8 mt-3'>
                  <div className='flex flex-row space-x-2 items-center'>
                    <input
                      id='needs_bus_yes'
                      name='needs_bus'
                      type='radio'
                      value='yes'
                      className='mt-1 w-5 h-5 text-[#7D2E3D] border-gray-300 rounded focus:ring-[#7D2E3D] cursor-pointer'
                    />
                    <span className='text-sm'>Yes</span>
                  </div>
                  <div className='flex flex-row space-x-3 items-center'>
                    <input
                      id='needs_bus_no'
                      name='needs_bus'
                      type='radio'
                      value='no'
                      className='mt-1 w-5 h-5 text-[#7D2E3D] border-gray-300 rounded focus:ring-[#7D2E3D] cursor-pointer'
                    />
                    <span className='text-sm'>No</span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='needs_bus'
                    className='text-sm font-semibold text-gray-800 cursor-pointer'
                  >
                    Would you like to reserve a spot on the shuttle bus?
                  </label>
                  <p className='text-xs text-gray-600 mt-1'>
                    Complimentary shuttle service from select hotels to the
                    venue. Departing at 1:00 PM and 1:30 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Status */}
            {submitStatus === "success" && (
              <div className='bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg'>
                Thank you for your RSVP! We've received your response.
              </div>
            )}
            {submitStatus === "error" && (
              <div className='bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg'>
                There was an error submitting your RSVP. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-[#7D2E3D] text-white py-4 rounded-lg font-semibold tracking-wider hover:bg-[#5D1E2D] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap'
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT RSVP"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
