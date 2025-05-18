"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { PointerHighlightDemo } from "@/components/textpointer";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      setLoading(false);
      toast.error("Form is not available.");
      return;
    }

    emailjs
      .sendForm(
        "service_ugxddxq",
        "template_ncqzgg7",
        formRef.current,
        "1dP5l_ZplUJDYRGHf"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          toast.success("Email sent successfully!");
        },
        () => {
          setLoading(false);
          toast.error("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kiri: Info & LinkPreview */}
        <div className="space-y-6">
          <PointerHighlightDemo />
          <div>
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              I'm always open to discussing new opportunities, collaboration, or just chatting.

          {/* Link Preview */}
          <LinkPreview
            url="https://www.instagram.com/mk.raihan_?igsh=MTFwenB5cHJlMWZxcg%3D%3D"
            className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Instagram &
          </LinkPreview>
          <LinkPreview
            url="https://github.com/raimusthafa"
            className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Github
          </LinkPreview>
           </p>
        </div>
        </div>

        {/* Kanan: Form */}
        <div className="p-6 border bg-gray-50 border-emerald-200 dark:border-emerald-800 dark:bg-gray-900 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded h-32"
            ></textarea>
            <button
  type="submit"
  className="bg-black text-white dark:bg-emerald-400 dark:text-black font-medium px-4 py-2 rounded dark:hover:bg-emerald-400/90 hover:bg-gray-800 w-full flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading && (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  )}
  {loading ? "Sending..." : "Send Message"}
</button>
          </form>
        </div>
      </div>
    </div>
  );
}
