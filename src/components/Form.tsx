"use client";

import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvgrdang", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (err) {
      toast.error("Something went wrong." + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-left max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter valid email"
            required
            className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Enter message"
          className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
        ></textarea>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 px-8 py-3"
          disabled={loading}
        >
          <Mail className="w-4 h-4 mr-2" />
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
