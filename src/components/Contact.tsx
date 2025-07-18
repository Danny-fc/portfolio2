import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Failed to send message: " + (err as Error).message);
    }
  }

  return (
    <section className="py-20 bg-white/90 dark:bg-black/50">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white/70 dark:bg-black/30 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer disabled:cursor-pointer"
            disabled={sent}
          >
            {sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
