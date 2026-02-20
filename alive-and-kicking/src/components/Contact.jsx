import { useState } from "react";
import { Section } from "./Section";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <Section id="contact" title="Drop Us a Line" className="bg-gradient-to-b from-[#f5efe6] to-[#ede4d4]" titleClassName="text-slate-800">
        <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-green-200">
          <svg
            className="mx-auto h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-bold text-slate-800">
            Message Sent!
          </h3>
          <p className="mt-2 text-slate-600">
            Thanks for reaching out. We'll get back to you soon.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-sm font-bold text-red-700 transition-colors hover:text-red-900 uppercase tracking-wide"
          >
            Send another message
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" title="Drop Us a Line" className="bg-gradient-to-b from-[#f5efe6] to-[#ede4d4]" titleClassName="text-slate-800">
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-slate-400" />
        <span className="text-red-700 text-2xl">&#9733;</span>
        <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-slate-400" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg space-y-6 bg-white p-8 rounded-2xl shadow-lg ring-1 ring-black/5"
        noValidate
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-slate-700 uppercase tracking-wide"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-base text-slate-800 shadow-sm transition-colors placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none ${
              errors.name ? "border-red-300 bg-red-50" : "border-slate-200"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-slate-700 uppercase tracking-wide"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-base text-slate-800 shadow-sm transition-colors placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none ${
              errors.email ? "border-red-300 bg-red-50" : "border-slate-200"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-slate-700 uppercase tracking-wide"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-base text-slate-800 shadow-sm transition-colors placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none ${
              errors.message ? "border-red-300 bg-red-50" : "border-slate-200"
            }`}
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-slate-800 px-6 py-4 text-base font-bold text-amber-50 uppercase tracking-wide transition-all hover:bg-slate-700 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </Section>
  );
}
