import React, { useState, useEffect } from "react";
import { getServices, resolveImageUrl } from "../api/client";
import aboutBanner from "../assets/images/about-banner.jpg";
import nyomanImg from "../assets/images/nyoman.png";
import kantorImg from "../assets/images/kantor.jpg";

/**
 * Render service icon:
 * 1. Mengambil gambar/ikon yang diunggah dari panel Admin (service.image_url atau service.image)
 * 2. Menggunakan ikon bawaan dari panel Admin (Briefcase arsitektur & layanan) jika belum diunggah
 */
function renderServiceIcon(service) {
  const iconSrc = resolveImageUrl(service?.image_url || service?.image);

  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={service?.title || "Icon Layanan"}
        className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
      />
    );
  }

  // Ikon yang tersedia di panel admin (Briefcase)
  return (
    <svg
      className="w-9 h-9 sm:w-10 sm:h-10 stroke-[#154d36]"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export default function About({ onNavigate }) {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);

  // Fetch dynamic services from database (API: /services)
  useEffect(() => {
    let isMounted = true;
    setLoadingServices(true);
    getServices()
      .then((data) => {
        if (isMounted) {
          const list = Array.isArray(data) ? data : [];
          setServices(list);
        }
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
      })
      .finally(() => {
        if (isMounted) setLoadingServices(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER ABOUT */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] min-h-115 max-h-170 bg-stone-900 overflow-hidden flex items-end">
        {/* Background Image with Parallax-feel & Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBanner}
            alt="About Nyoman Undagi - Interior Architecture"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3 drop-shadow-sm">
              TENTANG KAMI
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4 drop-shadow-md">
              About
            </h1>

            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] sm:tracking-[0.26em] text-stone-200 uppercase leading-relaxed max-w-2xl drop-shadow-sm">
              LAHIR DI BALI. BERAKAR PADA BUDAYA. MENDESAIN UNTUK DUNIA SEJAK 2010.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: KONSEP KAMI (EDITORIAL, VISION & MISSION, STATS) */}
      {/* ========================================================================= */}
      <section id="konsep-kami" className="w-full py-16 sm:py-24 md:py-28 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          {/* Big Editorial Narrative with Studio/Office Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3.5 mb-6">
                <span className="w-10 sm:w-14 h-0.5 bg-[#111111]" />
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#111111]">
                  KONSEP KAMI
                </h2>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight text-[#111111]">
                Menghadirkan harmoni antara ketenangan alam Bali dan ketegasan arsitektur modern dunia.
              </h3>

              <div className="w-12 sm:w-16 h-1 bg-[#111111] my-6 sm:my-8" />

              <div className="space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed font-light text-justify">
                <p>
                  Bagi kami, arsitektur bukan sekadar membangun struktur fisik, melainkan menyusun sebuah perjalanan emosional. Setiap sudut, sirkulasi cahaya, dan hembusan angin tropis dirancang untuk menghadirkan rasa pulang, kedamaian, dan koneksi yang mendalam dengan alam.
                </p>
                <p>
                  Dengan memadukan kearifan lokal Bali dan teknik konstruksi kontemporer, Nyoman Undagi menciptakan karya yang abadi—bangunan yang tidak tergerus oleh tren, melainkan semakin berkarakter dan bermakna seiring berjalannya waktu.
                </p>
              </div>
            </div>

            {/* Right: Office / Studio Image */}
            <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
              <div className="w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 xl:aspect-auto lg:h-120 overflow-hidden bg-stone-100">
                <img
                  src={kantorImg}
                  alt="Studio Nyoman Undagi Office"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Stats / Numbers Row */}
          <div className="max-w-300 mx-auto pt-8 pb-10 sm:pt-12 sm:pb-14 border-t border-stone-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111]">
                  16+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-stone-700 uppercase mt-2.5 sm:mt-3.5">
                  YEARS EXPERIENCE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111]">
                  67
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-stone-700 uppercase mt-2.5 sm:mt-3.5">
                  PROFESSIONALS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111]">
                  450+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-stone-700 uppercase mt-2.5 sm:mt-3.5">
                  PROJECTS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111]">
                  4
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-stone-700 uppercase mt-2.5 sm:mt-3.5">
                  DESIGN AWARDS
                </span>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="max-w-300 mx-auto mt-6 sm:mt-10 mb-14 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              <div className="bg-[#0a2b16] rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <span className="w-7 sm:w-8 h-0.5 bg-emerald-400/80" />
                    <span className="text-xs font-bold tracking-[0.22em] text-emerald-300 uppercase">
                      OUR VISION
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white mb-5">
                    &ldquo;To be a world-class architecture company that brings exceptional Balinese style all over the world.&rdquo;
                  </h3>

                  <div className="w-10 h-0.5 bg-emerald-500/40 my-5 sm:my-6" />

                  <p className="text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                    Positioning Bali Tropical Modern architecture on the international stage through built work, not just representation. The standard is defined by the quality of completed projects.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-10 border border-stone-100 text-[#111111] flex flex-col justify-between relative overflow-hidden shadow-xs">
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <span className="w-7 sm:w-8 h-0.5 bg-[#111111]" />
                    <span className="text-xs font-bold tracking-[0.22em] text-[#111111] uppercase">
                      OUR MISSION
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#111111] mb-5">
                    &ldquo;Providing service excellence in every single activity to actualize the world-class design.&rdquo;
                  </h3>

                  <div className="w-10 h-0.5 bg-[#111111] my-5 sm:my-6" />

                  <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                    Service excellence applied across every phase of the architectural process. Each team member operates under this standard, from initial programming through project handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: LAYANAN KAMI / SERVICES (DYNAMIC FROM DATABASE) */}
      {/* Menggantikan Konsep Pilar dengan desain Card badge hijau yang elegan */}
      {/* ========================================================================= */}
      <section id="layanan" className="w-full py-16 sm:py-24 md:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-stone-100">
        <div className="max-w-300 mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3.5 mb-3.5">
              <span className="w-8 sm:w-12 h-0.5 bg-[#111111]" />
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#111111]">
                LAYANAN KAMI
              </h2>
              <span className="w-8 sm:w-12 h-0.5 bg-[#111111]" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#111111]">
              Layanan Arsitektur &amp; Desain
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light mt-3 max-w-lg mx-auto">
              Perancangan menyeluruh dari konseptual arsitektur hingga interior untuk mewujudkan ruang yang fungsional dan berkarakter.
            </p>
          </div>

          {/* Dynamic Services Cards */}
          {loadingServices ? (
            <div className="py-20 text-center">
              <div className="inline-block w-8 h-8 border-2 border-stone-300 border-t-[#154d36] rounded-full animate-spin mb-4" />
              <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
                Memuat Layanan...
              </p>
            </div>
          ) : services.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm font-light text-stone-400 italic">
                Belum ada layanan yang ditambahkan di database.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
              {services.map((service, idx) => (
                <div key={service.id || idx} className="pt-12 sm:pt-14 flex">
                  <div className="relative w-full bg-white rounded-3xl border border-stone-100 pt-16 sm:pt-18 pb-10 px-7 sm:px-8 text-center flex flex-col justify-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    {/* Floating Circle Icon with Sage Tint & White Border */}
                    <div className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-[#e8f2ea] border-4 border-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {renderServiceIcon(service)}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f3b2c] leading-snug">
                      {service.title}
                    </h4>

                    {/* Green Pill Accent Line */}
                    <div className="w-9 h-1 bg-[#4d8b6f] rounded-full mx-auto my-3.5" />

                    {/* Description */}
                    <p className="text-stone-600 text-sm sm:text-[15px] font-normal leading-relaxed whitespace-pre-line">
                      {service.description || "Menciptakan ruang yang nyaman, fungsional, dan estetis sesuai dengan kebutuhan serta karakter ruang."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: KENALI PRINSIPAL KAMI (FOUNDER BIO) */}
      {/* ========================================================================= */}
      <section id="prinsipal" className="w-full py-16 sm:py-24 md:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-stone-100">
        <div className="max-w-270 mx-auto">
          {/* Top Grid: Photo & Bio */}
          <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] lg:grid-cols-[180px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left: Founder Photo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative group">
                <img
                  src={nyomanImg}
                  alt="Ir. Ar. IGN Andri Saputra, IAI."
                  className="w-36 sm:w-40 lg:w-44 h-auto object-contain rounded-xl shadow-xs transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="mt-3 text-center md:text-left">
                  <span className="inline-block px-2.5 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-xs">
                    IAI Member
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Bio Content */}
            <div className="flex flex-col items-start pt-1">
              <span className="text-[11.5px] font-bold tracking-[0.22em] text-[#111111] uppercase mb-2.5">
                KENALI PRINSIPAL KAMI
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-tight text-[#111111] mb-1">
                Ir. Ar. IGN Andri Saputra, IAI.
              </h3>
              <p className="text-xs sm:text-sm font-medium text-stone-500 tracking-widest uppercase mb-6">
                Principal Architect & Founder
              </p>

              <div className="space-y-4 text-[13px] sm:text-[14px] leading-[1.85] text-[#555555] font-light text-justify">
                <p>
                  I Gusti Ngurah Andri Saputra, arsitek kelahiran Bali, mendirikan Nyoman Undagi pada tahun 2010. Setelah lulus dari Universitas Udayana, beliau tidak langsung membuka firma sendiri. Beliau menghabiskan bertahun-tahun belajar dari pengalaman nyata, bekerja di firma arsitektur Australia dan Prancis di Bali untuk mengasah keahlian dan kedisiplinannya.
                </p>
                <p>
                  Yang menggerakkan beliau sangat personal. Tumbuh besar di Bali, dikelilingi keluarga dan komunitas, beliau melihat bagaimana sebuah rumah membentuk orang-orang di dalamnya. Kenangan masa kecil itulah yang menjadi tujuan hidupnya: merancang ruang di mana keluarga saling terhubung, persahabatan tumbuh, dan hidup terasa pas.
                </p>
                <p>
                  Hari ini, Nyoman Undagi adalah tim yang terdiri dari 67 profesional. Diakui melalui 450+ proyek di Bali dan destinasi global seperti Singapura, Thailand, Bahama, Nigeria, dan India, karya kami mencerminkan arsitektur abadi dengan sensibilitas internasional dan pengalaman hidup yang lebih tinggi.
                </p>
              </div>

              {/* Philosophy & Slogan */}
              <div className="mt-10 pt-6 border-t border-stone-100 w-full flex flex-col items-start">
                <p className="text-xs sm:text-[13.5px] text-[#737373] font-light leading-relaxed mb-2">
                  Hal ini menginspirasi kami untuk memberikan perjalanan desain yang bermakna bagi klien kami, bukan sekadar desain atau gambar.
                </p>
                <h4 className="text-xl sm:text-2xl md:text-[26px] font-normal italic text-[#111111] tracking-tight">
                  &ldquo;Perjalanan dalam Setiap Desain&rdquo;
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: LOKASI KANTOR (DIBAWAH KENALI PRINSIPAL KAMI & DIATAS FOOTER) */}
      {/* ========================================================================= */}
      <section id="lokasi-kantor" className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-270 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-6 h-0.5 bg-[#111111]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-stone-600 uppercase">
                  LOKASI KANTOR &amp; STUDIO
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Bali Studio &amp; Workshop
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-light mt-1">
                Kantor Pusat &amp; Pusat Kreatif Perancangan Arsitektur
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://maps.google.com/?q=Sunset+Road+Seminyak+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black hover:bg-stone-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Petunjuk Arah</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8">
            {/* Alamat */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-stone-400 uppercase mb-2">
                ALAMAT STUDIO
              </span>
              <p className="text-sm text-stone-800 font-normal leading-relaxed">
                Jl. Sunset Road No. 88, Seminyak, Kuta, Bali 80361, Indonesia
              </p>
            </div>

            {/* Kontak & Email */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-stone-400 uppercase mb-2">
                KONTAK &amp; EMAIL
              </span>
              <a
                href="tel:+62859106532925"
                className="text-sm text-stone-800 font-semibold hover:text-black transition-colors"
              >
                +62 859-1065-32925
              </a>
              <a
                href="mailto:info@nyomanundagi.com"
                className="text-xs text-stone-500 font-light mt-1 hover:underline"
              >
                info@nyomanundagi.com
              </a>
            </div>

            {/* Jam Operasional */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-stone-400 uppercase mb-2">
                JAM OPERASIONAL
              </span>
              <p className="text-sm text-stone-800 font-normal">
                Senin &ndash; Jumat: 09:00 &ndash; 18:00 WITA
              </p>
              <p className="text-xs text-stone-500 font-light mt-1">
                Sabtu: 09:00 &ndash; 14:00 WITA (Janji Temu)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
