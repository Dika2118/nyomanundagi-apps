import React, { useState } from "react";
import banner4 from "../assets/images/banner4.webp";

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Vila Privat",
    location: "Bali",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Halo Lumbung Architect,%0A%0ANama: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ANo Telp: ${encodeURIComponent(formData.phone)}%0ATipe Proyek: ${encodeURIComponent(formData.projectType)}%0ALokasi: ${encodeURIComponent(formData.location)}%0APesan: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/62859106532925?text=${waMessage}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#111111] pt-16 sm:pt-18">
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

      {/* ================= CONTACT CONTENT & FORM ================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Office Information */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-bold tracking-[0.22em] text-stone-500 uppercase block mb-2">
                  STUDIO & KANTOR
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                  Terhubung Dengan Kami
                </h2>
                <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                  Kami menyambut diskusi awal untuk proyek residensial, vila komersial, resort, maupun pengembangan estate di seluruh Indonesia dan mancanegara.
                </p>
              </div>

              {/* Studios */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-stone-500 block mb-1">
                    KANTOR PUSAT
                  </span>
                  <h4 className="text-base font-bold text-stone-900 mb-1">Bali Studio & Workshop</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light mb-2">
                    Jl. Sunset Road No. 88, Seminyak, Kuta, Bali 80361
                  </p>
                  <p className="text-xs font-semibold text-stone-900">
                    Tel: +62 859-1065-32925 &bull; info@lumbungarchitect.com
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-stone-500 block mb-1">
                    REPRESENTATIF
                  </span>
                  <h4 className="text-base font-bold text-stone-900 mb-1">Jakarta Office</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light mb-2">
                    SCBD District 8, Treasury Tower Lt. 18, Senopati, Jakarta Selatan
                  </p>
                  <p className="text-xs font-semibold text-stone-900">
                    Tel: +62 821-4567-8900
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-stone-500 block mb-1">
                    INTERNASIONAL
                  </span>
                  <h4 className="text-base font-bold text-stone-900 mb-1">Thailand Collaborative Studio</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light mb-2">
                    Phuket Villa Arcade, Cherngtalay, Thalang, Phuket 83110
                  </p>
                  <p className="text-xs font-semibold text-stone-900">
                    Tel: +66 81-234-5678
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="lg:col-span-7 bg-[#faf9f6] p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm">
              <span className="text-xs font-bold tracking-[0.22em] text-stone-500 uppercase block mb-2">
                FORMULIR KONSULTASI
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Konsultasikan Rencana Proyek
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light mb-8">
                Isi rincian di bawah ini, kami akan merespons dalam 1x24 jam kerja atau terhubung langsung via WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <p className="text-sm font-bold text-emerald-900 mb-2">
                    Terima kasih! Permintaan konsultasi Anda telah diteruskan ke WhatsApp tim kami.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-bold tracking-wider uppercase text-emerald-700 underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Bpk. Michael Gunawan"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812 xxxx xxxx"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                        Tipe Proyek
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="Vila Privat">Vila Privat</option>
                        <option value="Kompleks Vila / Resort">Kompleks Vila / Resort</option>
                        <option value="Residensial / Rumah Tinggal">Residensial / Rumah Tinggal</option>
                        <option value="Komersial & Restoran">Komersial & Restoran</option>
                        <option value="Renovasi & Interior">Renovasi & Interior</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                      Lokasi Rencana Proyek
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Contoh: Canggu Bali, Ubud, Jakarta Selatan, dsb."
                      className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-stone-700 mb-2">
                      Deskripsi Singkat / Kebutuhan Desain
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan tentang luas lahan, konsep yang diinginkan, atau target waktu pelaksanaan..."
                      className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-stone-800 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Kirim Permintaan Konsultasi
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
