import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Headphones } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "80d86356-5aca-41b9-b407-a00ad45459d1"); // Web3Forms key

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage("✅ Thanks! We have received your message.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Submission failed.");
      }
    } catch {
      setStatus("error");
      setMessage("⚠️ Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Ready to harness the power of the sun? Our solar experts are here to help you
            design the perfect solar solution for your property. Contact us today for a free
            consultation and quote.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" /> Phone
              </h3>
              <p className="ml-7">
                <a href="tel:+94771234567" className="text-green-700 hover:underline">+94 77 123 4567</a>
              </p>
              <p className="ml-7">
                <a href="tel:+94112345678" className="text-green-700 hover:underline">+94 11 234 5678</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" /> Email
              </h3>
              <p className="ml-7">
                <a href="mailto:info@primeeco.lk" className="text-green-700 hover:underline">info@primeeco.lk</a>
              </p>
              <p className="ml-7">
                <a href="mailto:quotes@primeeco.lk" className="text-green-700 hover:underline">quotes@primeeco.lk</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" /> Office
              </h3>
              <p className="ml-7">123 Galle Road</p>
              <p className="ml-7">Colombo 03, Sri Lanka</p>
            </div>

            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" /> Business Hours
              </h3>
              <p className="ml-7">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="ml-7">Sat: 9:00 AM - 4:00 PM</p>
            </div>

            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Headphones className="w-5 h-5 text-green-600" /> 24/7 Emergency Support
              </h3>
              <p className="ml-7">
                <a href="tel:+94709998888" className="text-green-700 hover:underline">+94 70 999 8888</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form onSubmit={onSubmit} className="grid gap-4 bg-white p-6 rounded-2xl shadow" noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                autoComplete="tel"
                className="w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-green-600 text-white font-medium disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {/* ARIA live region for status updates */}
            <p
              aria-live="polite"
              className={`min-h-[1.25rem] ${status === "success" ? "text-green-700" : status === "error" ? "text-red-600" : "text-transparent"}`}
            >
              {status !== "idle" ? message : "placeholder"}
            </p>

            {/* Hidden anti-spam + metadata */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            <input type="hidden" name="subject" value="New inquiry from PrimeEco.lk" />
            <input type="hidden" name="from_name" value="PrimeEco Website" />
            {/* Optional redirect after submit: */}
            {/* <input type="hidden" name="redirect" value="https://your-domain/thank-you" /> */}
          </form>
        </div>
      </div>

      {/* Google Maps Embed with green marker */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <iframe
          title="PrimeEco Office Location"
          src={
            "https://www.google.com/maps?" +
            new URLSearchParams({
              q: "123 Galle Road, Colombo 03, Sri Lanka",
              hl: "en",
              z: "15",
              output: "embed",
              markers: "color:green|6.9271,79.8612",
            }).toString()
          }
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow"
        />
      </div>
    </section>
  );
}
