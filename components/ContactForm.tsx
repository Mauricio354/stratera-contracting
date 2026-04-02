"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: defaultService,
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please try again or call us at 403-512-8755.");
      setStatus("error");
    }
  };

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center">
          <svg className="w-8 h-8 stroke-accent" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-primary mb-2">Request Sent!</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
          We&apos;ve received your request and sent a confirmation to your email. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] font-sans text-sm transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(194,217,81,0.12)] bg-white text-primary placeholder-gray-400 disabled:opacity-60 disabled:cursor-not-allowed";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-[0.5px] text-gray-800 mb-1.5";
  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            className={inputClass}
            placeholder="John"
            required
            disabled={isLoading}
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Smith"
            required
            disabled={isLoading}
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            className={inputClass}
            placeholder="john@example.com"
            required
            disabled={isLoading}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-gray-400 normal-case font-normal">(optional)</span></label>
          <input
            type="tel"
            className={inputClass}
            placeholder="(403) 555-1234"
            disabled={isLoading}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Project Type</label>
        <select
          className={inputClass + " appearance-none cursor-pointer"}
          required
          disabled={isLoading}
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="" disabled>Select your project type</option>
          <optgroup label="Residential">
            <option value="Kitchen Renovation">Kitchen Renovation</option>
            <option value="Bathroom Renovation">Bathroom Renovation</option>
            <option value="Basement & Living Spaces">Basement &amp; Living Spaces</option>
            <option value="Decks & Fences">Decks &amp; Fences</option>
            <option value="Other Residential">Other Residential</option>
          </optgroup>
          <optgroup label="Commercial">
            <option value="Office Renovation">Office Renovation</option>
            <option value="Restaurant Renovation">Restaurant Renovation</option>
            <option value="Retail Build-Out">Retail Build-Out</option>
            <option value="Tenant Improvement">Tenant Improvement</option>
            <option value="Commercial Other">Other Commercial</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label className={labelClass}>Project Details</label>
        <textarea
          className={inputClass + " min-h-[120px] resize-y"}
          placeholder="Tell us about your project — what are you looking to renovate? Any specific goals, timeline, or budget in mind?"
          required
          disabled={isLoading}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-700">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 stroke-red-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-primary text-white rounded-full font-semibold text-sm transition-all duration-300 mt-2 flex items-center justify-center gap-2 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" /></svg>
            Sending…
          </>
        ) : (
          "Send My Request"
        )}
      </button>
    </form>
  );
}
