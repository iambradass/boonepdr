"use client";

import { useState, useRef } from "react";
import { HiUpload, HiX, HiCheckCircle } from "react-icons/hi";

const QUOTE_ENDPOINT = "/api/quote";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [contactMethod, setContactMethod] = useState("call");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...newFiles].slice(0, 3));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const form = formRef.current!;
      const formData = new FormData(form);

      // Convert photos to base64
      const photos = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          data: await fileToBase64(file),
        }))
      );

      const payload = {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: (formData.get("email") as string) || "Not provided",
        vehicle: [
          formData.get("year"),
          formData.get("make"),
          formData.get("model"),
        ]
          .filter(Boolean)
          .join(" ") || "Not provided",
        damage: formData.get("damage") as string,
        contactMethod,
        photoCount: files.length,
        photos,
      };

      const res = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong submitting your request. Please call us directly or try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
        <HiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-navy mb-3">
          Quote Request Received!
        </h3>
        <p className="text-text-muted mb-6">
          Thanks for reaching out. We&apos;ll review your information and get
          back to you within a few hours. If you need immediate help, give us a
          call.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFiles([]);
          }}
          className="text-steel font-semibold hover:text-navy transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-navy mb-2">
        Get a Free Quote
      </h2>
      <p className="text-text-muted mb-8">
        Fill out the form below and we&apos;ll get back to you with an
        estimate — usually within a few hours.
      </p>

      <div className="space-y-5">
        {/* Name & Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-dark mb-1.5"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text-dark mb-1.5"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
              placeholder="(817) 555-1234"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
            placeholder="john@example.com"
          />
        </div>

        {/* Vehicle Info */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-text-dark mb-1.5"
            >
              Vehicle Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
              placeholder="2023"
            />
          </div>
          <div>
            <label
              htmlFor="make"
              className="block text-sm font-medium text-text-dark mb-1.5"
            >
              Make
            </label>
            <input
              type="text"
              id="make"
              name="make"
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
              placeholder="Toyota"
            />
          </div>
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-text-dark mb-1.5"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark"
              placeholder="Camry"
            />
          </div>
        </div>

        {/* Damage Description */}
        <div>
          <label
            htmlFor="damage"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            Describe the Damage *
          </label>
          <textarea
            id="damage"
            name="damage"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition-all text-text-dark resize-none"
            placeholder="Tell us about the dents, dings, or hail damage. Include location on the vehicle and approximate size if possible."
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1.5">
            Upload Photos (up to 3)
          </label>

          {/* Photo instructions */}
          <div className="bg-bg-light border border-border rounded-lg p-4 mb-3 text-sm text-text-muted space-y-1">
            <p className="font-medium text-text-dark mb-2">For the best estimate, follow these tips:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Shoot in natural light or a well-lit area — avoid flash</li>
              <li>Get close enough that the damage fills most of the frame</li>
              <li>Take one straight-on shot and one at a slight angle</li>
              <li>Place a coin or pen next to the damage so we can gauge size</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-steel/50 hover:bg-bg-light/50 focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/20 transition-all"
            aria-label="Upload photos of your damage"
          >
            <HiUpload className="w-8 h-8 text-text-muted mx-auto mb-2" />
            <p className="text-sm text-text-muted">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-text-muted mt-1">
              JPG, PNG up to 10MB each
            </p>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          {/* File previews */}
          {files.length > 0 && (
            <div className="flex gap-3 mt-3">
              {files.map((file, i) => (
                <div
                  key={i}
                  className="relative group bg-bg-light rounded-lg p-2"
                >
                  <span className="text-xs text-text-muted truncate block max-w-[100px]">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    aria-label={`Remove ${file.name}`}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                  >
                    <HiX className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-text-dark mb-3">
            Preferred Contact Method
          </label>
          <div className="flex gap-4">
            {[
              { value: "call", label: "Phone Call" },
              { value: "text", label: "Text Message" },
              { value: "email", label: "Email" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={option.value}
                  checked={contactMethod === option.value}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-4 h-4 text-steel accent-steel"
                />
                <span className="text-sm text-text-dark">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/60 text-white font-bold py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending Your Request..." : "Get My Free Estimate"}
        </button>

        {/* Preliminary estimate disclaimer */}
        <p className="text-xs text-text-muted text-center bg-bg-light border border-border rounded-lg px-4 py-3">
          <strong>Disclaimer:</strong> Any estimate provided based on submitted photos is preliminary only. Final pricing will be confirmed after an in-person inspection of the vehicle.
        </p>

        <p className="text-xs text-text-muted text-center">
          We typically respond within 2-4 hours during business hours. Your
          information is never shared with third parties.
        </p>
      </div>
    </form>
  );
}
