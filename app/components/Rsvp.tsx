"use client";

import { useState, FormEvent } from "react";
import { useTranslate } from "@/app/hooks/useTranslate";

export default function RSVPSection() {
  // 🔹 TRANSLATION HOOKS — TOP LEVEL ONLY
  const title = useTranslate("RSVP");
  const subtitle = useTranslate(
    "Please respond by October 1st, 2026. We can't wait to celebrate with you!"
  );

  const fullNameLabel = useTranslate("Your Full Name *");
  const fullNamePlaceholder = useTranslate("Enter your full name");

  const phoneLabel = useTranslate("Phone Number *");
  const phonePlaceholder = useTranslate("+1 (555) 123-4567");

  const totalGuestsLabel = useTranslate("Total Number of Guests *");
  const guestLabel = useTranslate("Guest");
  const guestsLabel = useTranslate("Guests");

  const allGuestsLabel = useTranslate("Full Names of All Guests *");
  const guestNamePlaceholder = useTranslate("full name");

  const dietaryLabel = useTranslate("Dietary Requirements / Comments");
  const dietaryPlaceholder = useTranslate(
    "Please let us know about any dietary restrictions, allergies, or special requests (max 500 characters)"
  );
  const charactersLabel = useTranslate("characters");

  const yesText = useTranslate("Yes");
  const noText = useTranslate("No");

  const shuttleQuestion = useTranslate(
    "Would you like to reserve a spot on the shuttle bus?"
  );
  const shuttleInfo = useTranslate(
    "Complimentary shuttle service from select hotels to the venue. Departing at 1:00 PM and 1:30 PM."
  );

  const successMessage = useTranslate(
    "Thank you for your RSVP! We've received your response."
  );
  const errorMessage = useTranslate(
    "There was an error submitting your RSVP. Please try again."
  );

  const submittingText = useTranslate("SUBMITTING...");
  const submitText = useTranslate("SUBMIT RSVP");

  // 🔹 STATE
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

    setGuestNames((prev) => {
      const newArr = [...prev];
      return num > prev.length
        ? newArr.concat(Array(num - prev.length).fill(""))
        : newArr.slice(0, num);
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

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rsvpData: {
            name: formData.get("name") || "",
            phone: formData.get("phone") || "",
            total_guests: totalGuests,
            guest_names: guestNames,
            dietary_requirements: dietaryReq || "None",
            needs_bus: formData.get("needs_bus") === "yes" ? "yes" : "no",
          },
        }),
      });

      setSubmitStatus(response.ok ? "success" : "error");

      if (response.ok) {
        form.reset();
        setCharCount(0);
        setTotalGuests(1);
        setGuestNames([""]);
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 500);
    e.target.value = value;
    setCharCount(value.length);
  };

  return (
    <section id="rsvp" className="py-24 bg-[#FDF8F5]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-4xl mb-6 font-serif text-gray-900">
            {title}
          </h2>
          <p className="text-gray-700">{subtitle}</p>
        </div>

        <form className="bg-[#FDF8F5] p-8" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <label className="block text-sm font-semibold text-gray-800">
              {fullNameLabel}
            </label>
            <input
              name="name"
              required
              placeholder={fullNamePlaceholder}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-sm"
            />

            <label className="block text-sm font-semibold text-gray-800">
              {phoneLabel}
            </label>
            <input
              name="phone"
              required
              placeholder={phonePlaceholder}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-sm"
            />

            <label className="block text-sm font-semibold text-gray-800">
              {totalGuestsLabel}
            </label>
            <select
              value={totalGuests}
              onChange={handleTotalGuestsChange}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-sm"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? guestLabel : guestsLabel}
                </option>
              ))}
            </select>

            <label className="block text-sm font-semibold text-gray-800">
              {allGuestsLabel}
            </label>
            {guestNames.map((name, idx) => (
              <input
                key={idx}
                value={name}
                onChange={(e) => handleGuestChange(idx, e.target.value)}
                placeholder={`${guestLabel} ${idx + 1} ${guestNamePlaceholder}`}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-sm mb-2"
              />
            ))}

            <label className="block text-sm font-semibold text-gray-800">
              {dietaryLabel}
            </label>
            <textarea
              name="dietary_requirements"
              rows={4}
              onChange={handleTextareaChange}
              placeholder={dietaryPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-sm resize-none"
            />
            <div className="text-xs text-gray-500">{charCount}/500 {charactersLabel}</div>

            {/* Shuttle Bus Option */}
            <label className="block text-sm font-semibold text-gray-800 mt-4">
              {shuttleQuestion}
            </label>
            <p className="text-xs text-gray-500 mb-2">{shuttleInfo}</p>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="needs_bus" value="yes" />
                {yesText}
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="needs_bus" value="no" defaultChecked />
                {noText}
              </label>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3">
                {successMessage}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7D2E3D] text-white py-4 font-semibold disabled:bg-gray-400"
            >
              {isSubmitting ? submittingText : submitText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
