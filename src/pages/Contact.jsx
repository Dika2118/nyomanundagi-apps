import React, { useState } from "react";
import banner4 from "../assets/images/banner4.webp";

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Halo Lumbung Architect,%0A%0ANama: ${encodeURIComponent(formData.name)}%0ANo Telepon: ${encodeURIComponent(formData.phone || "-")}%0AEmail: ${encodeURIComponent(formData.email)}%0AKeperluan: ${encodeURIComponent(formData.purpose || "-")}%0APesan: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/62859106532925?text=${waMessage}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ================= HERO BANNER CONTACT ================= */}
      <section className="relative w-full h-[55vh] sm:h-[62vh] min-h-[400px] max-h-[580px] bg-stone-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={banner4}
            alt="Contact Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3">
              HUBUNGI KAMI
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4">
              Contact
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl">
              Mulai Perjalanan Desain Arsitektur Anda Bersama Tim Kami
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM & MAP SECTION ================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Send a Message Form */}
            <div className="lg:col-span-7">
              {/* Header */}
              <div className="mb-8 sm:mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-5 h-[2px] bg-stone-800 inline-block"></span>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-stone-800">
                    SEND A MESSAGE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#111111] tracking-tight leading-tight mb-2">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-normal">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Form */}
              {isSubmitted ? (
                <div className="p-8 bg-stone-50 border border-stone-200 rounded-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14341b]"></span>
                    <h3 className="text-base font-semibold text-stone-900">
                      Pesan Anda Telah Diteruskan
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed font-light">
                    Terima kasih telah menghubungi kami. Kami telah membuka tautan WhatsApp agar Anda dapat langsung berkomunikasi dengan tim Lumbung Architect.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        purpose: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-[#0e2714] text-white text-xs font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pb-3 pt-1 bg-transparent border-0 border-b border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-xs sm:text-sm rounded-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pb-3 pt-1 bg-transparent border-0 border-b border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-xs sm:text-sm rounded-none"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pb-3 pt-1 bg-transparent border-0 border-b border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-xs sm:text-sm rounded-none"
                    />
                  </div>

                  {/* Purpose of Inquiry */}
                  <div className="relative">
                    <select
                      required
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className={`w-full pb-3 pt-1 bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:border-stone-900 transition-colors text-xs sm:text-sm cursor-pointer appearance-none rounded-none ${
                        formData.purpose ? "text-stone-900" : "text-stone-400"
                      }`}
                    >
                      <option value="" disabled className="text-stone-400">
                        Purpose of Inquiry *
                      </option>
                      <option value="Vila Privat / Private Villa" className="text-stone-900">
                        Vila Privat / Private Villa
                      </option>
                      <option value="Kompleks Vila / Resort" className="text-stone-900">
                        Kompleks Vila / Resort
                      </option>
                      <option value="Rumah Tinggal / Residential" className="text-stone-900">
                        Rumah Tinggal / Residential
                      </option>
                      <option value="Komersial / Restoran / Hospitality" className="text-stone-900">
                        Komersial / Restoran / Hospitality
                      </option>
                      <option value="Renovasi & Arsitektur Interior" className="text-stone-900">
                        Renovasi & Arsitektur Interior
                      </option>
                      <option value="Konsultasi Umum / Other" className="text-stone-900">
                        Konsultasi Umum / Other
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pb-2 text-stone-400">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Tell us about your project */}
                  <div className="relative">
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project *"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full pb-3 pt-1 bg-transparent border-0 border-b border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-xs sm:text-sm resize-y rounded-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#0e2714] hover:bg-[#163a1e] text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer shadow-xs"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Google Maps & 1 Location Only */}
            <div className="lg:col-span-5">
              {/* Google Maps Embed */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[290px] rounded-none overflow-hidden border border-stone-200 bg-stone-100 shadow-xs relative">
                <iframe
                  title="Lumbung Architect Bali Location"
                  src="https://maps.google.com/maps?q=Lumbung+Architect,+Jl.+Muding+Indah+XIII,+Kerobokan+Kaja,+Badung,+Bali&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Single Location Details: Headquarters Bali (Clickable Navigate to Google Maps) */}
              <a
                href="https://maps.google.com/?q=Lumbung+Architect,+Jl.+Muding+Indah+XIII,+Kerobokan+Kaja,+Badung,+Bali"
                target="_blank"
                rel="noopener noreferrer"
                title="Buka lokasi & navigasi di Google Maps"
                className="group block mt-8 border-l-[3px] border-stone-900 pl-4 py-2 hover:bg-stone-50/80 transition-all duration-200 cursor-pointer rounded-r-md"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-black transition-colors">
                      Headquarters, Bali
                    </h3>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white bg-[#425846] group-hover:bg-stone-900 rounded-full uppercase transition-colors">
                      HQ
                    </span>
                  </div>

                  {/* Navigation Indicator */}
                  <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-stone-900 transition-colors">
                    <span className="text-[11px] font-semibold tracking-wider uppercase hidden sm:inline">
                      Buka Maps
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light group-hover:text-stone-800 transition-colors">
                  Jl. Muding Indah XIII Jl. Gatot Subroto Barat,
                  <br />
                  Kerobokan Kaja, Kec. Kuta Utara,
                  <br />
                  Kabupaten Badung, Bali 80363
                </p>
              </a>

              {/* Contact Information & Socials Below Location */}
              <div className="mt-8 space-y-7">
                {/* Email Section */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                    Email
                  </h4>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <p className="flex items-center gap-2 flex-wrap">
                      <a
                        href="mailto:info@lumbungarchitect.com"
                        className="font-semibold text-stone-900 hover:text-stone-600 transition-colors"
                      >
                        info@lumbungarchitect.com
                      </a>
                      <span className="text-stone-400 font-light">&mdash; General</span>
                    </p>
                    <p className="flex items-center gap-2 flex-wrap">
                      <a
                        href="mailto:project@lumbungarchitect.com"
                        className="font-semibold text-stone-900 hover:text-stone-600 transition-colors"
                      >
                        project@lumbungarchitect.com
                      </a>
                      <span className="text-stone-400 font-light">&mdash; Projects</span>
                    </p>
                    <p className="flex items-center gap-2 flex-wrap">
                      <a
                        href="mailto:career@lumbungarchitect.com"
                        className="font-semibold text-stone-900 hover:text-stone-600 transition-colors"
                      >
                        career@lumbungarchitect.com
                      </a>
                      <span className="text-stone-400 font-light">&mdash; Careers</span>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                    WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm">
                    <a
                      href="https://wa.me/62859106532925"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-stone-900 hover:text-stone-600 transition-colors"
                    >
                      +62 859-1065-32925
                    </a>
                  </p>
                </div>

                {/* Follow Us Section */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-3">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/lumbungarchitect/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200 shadow-2xs"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/Lumbungarchitect"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200 shadow-2xs"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/lumbung-architect/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200 shadow-2xs"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
