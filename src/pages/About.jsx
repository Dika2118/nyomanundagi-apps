import React from "react";
import aboutBanner from "../assets/images/about-banner.jpg";
import nyomanImg from "../assets/images/nyoman.png";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import porto1 from "../assets/images/porto1.webp";

export default function About({ onNavigate }) {
  const conceptPillars = [
    {
      num: "01",
      title: "Tri Hita Karana & Harmoni Ruang",
      desc: "Filosofi Bali kuno tentang keselarasan antara manusia, alam, dan spiritual diterjemahkan ke dalam tata ruang kontemporer yang menenangkan dan berjiwa.",
    },
    {
      num: "02",
      title: "Materialitas Lokal yang Abadi",
      desc: "Kombinasi batu paras Kerobokan, kayu jati & ulin daur ulang, bambu terkurasi, serta aksen kaca baja modern untuk keindahan yang matang seiring waktu.",
    },
    {
      num: "03",
      title: "Desain Iklim Tropis Pasif",
      desc: "Memaksimalkan sirkulasi udara alami, teritisan lebar pelindung matahari tropis, serta transisi ruang dalam-luar yang menyatu dengan lanskap hijau.",
    },
    {
      num: "04",
      title: "Sentuhan Jiwa Undagi",
      desc: "Menghormati tradisi ketukangan arsitektur Bali (Undagi) berpadu dengan ketelitian teknik konstruksi dan standar rekayasa internasional modern.",
    },
  ];

  const milestones = [
    { year: "2010", title: "Pendirian Studio", desc: "Lumbung Architect didirikan di Denpasar, Bali dengan fokus pada arsitektur tropis kontekstual." },
    { year: "2015", title: "Ekspansi Regional", desc: "Menyelesaikan 100+ proyek villa mewah dan residensial di seluruh Bali dan Lombok." },
    { year: "2019", title: "Penghargaan Internasional", desc: "Meraih pengakuan di Asia Pacific Property Awards dan asosiasi arsitek IAI Bali." },
    { year: "2024+", title: "Jangkauan Global", desc: "Menangani 450+ proyek dan bermitra di Singapura, Thailand, Bahama, Nigeria, & India." },
  ];

  const studios = [
    {
      city: "Bali (Pusat)",
      address: "Jl. Sunset Road No. 88, Seminyak, Kuta, Bali",
      phone: "+62 859-1065-32925",
      type: "Studio Desain & Workshop",
    },
    {
      city: "Jakarta",
      address: "SCBD District 8, Senopati, Jakarta Selatan",
      phone: "+62 821-4567-8900",
      type: "Kantor Representatif",
    },
    {
      city: "Thailand",
      address: "Phuket Villa Arcade, Cherngtalay, Phuket",
      phone: "+66 81-234-5678",
      type: "Studio Kolaboratif",
    },
  ];

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden pt-16 sm:pt-18">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER ABOUT (Sesuai Referensi Gambar) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] min-h-[460px] max-h-[680px] bg-stone-900 overflow-hidden flex items-end">
        {/* Background Image with Parallax-feel & Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBanner}
            alt="About Lumbung Architect - Interior Architecture"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Gradients to ensure pristine contrast matching the reference */}
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* Banner Content (Bottom-Left aligned as shown in the screenshot) */}
        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Small Category Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3 drop-shadow-sm">
              TENTANG KAMI
            </p>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4 drop-shadow-md">
              About
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] sm:tracking-[0.26em] text-stone-200 uppercase leading-relaxed max-w-2xl drop-shadow-sm">
              LAHIR DI BALI. BERAKAR PADA BUDAYA. MENDESAIN UNTUK DUNIA SEJAK 2010.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: KONSEP KAMI (— KONSEP KAMI) */}
      {/* ========================================================================= */}
      <section id="konsep-kami" className="w-full py-16 sm:py-24 md:py-28 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          {/* Section Header Line */}
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-[#111111]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#111111]">
              KONSEP KAMI
            </h2>
          </div>

          {/* Big Editorial Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.25] tracking-tight text-[#111111]">
                Menghadirkan harmoni antara ketenangan alam Bali dan ketegasan arsitektur modern dunia.
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed font-light text-justify">
              <p>
                Bagi kami, arsitektur bukan sekadar membangun struktur fisik, melainkan menyusun sebuah perjalanan emosional. Setiap sudut, sirkulasi cahaya, dan hembusan angin tropis dirancang untuk menghadirkan rasa pulang, kedamaian, dan koneksi yang mendalam dengan alam.
              </p>
              <p>
                Dengan memadukan kearifan lokal Bali dan teknik konstruksi kontemporer, Lumbung Architect menciptakan karya yang abadi—bangunan yang tidak tergerus oleh tren, melainkan semakin berkarakter dan bermakna seiring berjalannya waktu.
              </p>
            </div>
          </div>

          {/* Concept Pillars Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {conceptPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative p-8 sm:p-9 rounded-2xl bg-stone-50 hover:bg-stone-900 transition-all duration-500 flex flex-col justify-between border border-stone-200/70 hover:border-stone-900 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extralight text-stone-400 group-hover:text-stone-500 transition-colors">
                    {pillar.num}
                  </span>
                  <h4 className="mt-4 text-base sm:text-lg font-bold text-stone-900 group-hover:text-white transition-colors tracking-tight leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 group-hover:text-stone-300 transition-colors leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200 group-hover:border-stone-800 transition-colors flex justify-end">
                  <span className="text-xs tracking-wider uppercase font-semibold text-stone-400 group-hover:text-stone-300">
                    Lumbung Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: KENALI PRINSIPAL KAMI (FOUNDER BIO) */}
      {/* ========================================================================= */}
      <section id="prinsipal" className="w-full py-16 sm:py-24 md:py-28 px-6 sm:px-10 lg:px-16 bg-[#faf9f6]">
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
                  I Gusti Ngurah Andri Saputra, arsitek kelahiran Bali, mendirikan Lumbung Architect pada tahun 2010. Setelah lulus dari Universitas Udayana, beliau tidak langsung membuka firma sendiri. Beliau menghabiskan bertahun-tahun belajar dari pengalaman nyata, bekerja di firma arsitektur Australia dan Prancis di Bali untuk mengasah keahlian dan kedisiplinannya.
                </p>
                <p>
                  Yang menggerakkan beliau sangat personal. Tumbuh besar di Bali, dikelilingi keluarga dan komunitas, beliau melihat bagaimana sebuah rumah membentuk orang-orang di dalamnya. Kenangan masa kecil itulah yang menjadi tujuan hidupnya: merancang ruang di mana keluarga saling terhubung, persahabatan tumbuh, dan hidup terasa pas.
                </p>
                <p>
                  Hari ini, Lumbung Architect adalah tim yang terdiri dari 67 profesional. Diakui melalui 450+ proyek di Bali dan destinasi global seperti Singapura, Thailand, Bahama, Nigeria, dan India, karya kami mencerminkan arsitektur abadi dengan sensibilitas internasional dan pengalaman hidup yang lebih tinggi.
                </p>
              </div>

              {/* Philosophy & Slogan */}
              <div className="mt-10 pt-6 border-t border-stone-200/80 w-full flex flex-col items-start">
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
      {/* 4. SECTION: STATS / PENGHARGAAN SPLIT BAR (FULL WIDTH) */}
      {/* ========================================================================= */}
      <section className="w-full border-y border-stone-200">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Left Card: Penghargaan Internasional (Black) */}
          <div className="bg-[#111111] hover:bg-black text-white py-10 sm:py-14 pl-6 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-32 pr-6 sm:pr-10 lg:pr-16 flex items-center justify-between group transition-colors duration-300">
            <div className="flex items-center gap-6 sm:gap-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-stone-200 tracking-tight shrink-0">
                4
              </span>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-1">
                  Penghargaan Internasional
                </h4>
                <p className="text-xs sm:text-[13px] text-stone-400 font-light leading-relaxed">
                  Asia Pacific Property Awards, IAI Bali Awards, dan Destinasi Desain Tropis
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: Mitra Global (White) */}
          <div className="bg-white hover:bg-stone-50 text-[#111111] py-10 sm:py-14 pl-6 sm:pl-10 md:pl-12 lg:pl-16 pr-6 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-32 flex items-center justify-between border-t md:border-t-0 md:border-l border-stone-200 group transition-colors duration-300">
            <div className="flex items-center gap-6 sm:gap-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-stone-900 tracking-tight shrink-0">
                20+
              </span>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-bold text-[#111111] tracking-wide mb-1">
                  Mitra Global & Internasional
                </h4>
                <p className="text-xs sm:text-[13px] text-stone-500 font-light leading-relaxed">
                  Dipercaya di Bali, Singapura, Thailand, Bahama, Nigeria, dan India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: TIMELINES & MILESTONES */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-360 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-7 h-[1.5px] bg-stone-900" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-900 uppercase">
                JEJAK LANGKAH KAMI
              </span>
              <span className="w-7 h-[1.5px] bg-stone-900" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Perjalanan Dedikasi Sejak 2010
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-black block mb-2">
                  {m.year}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION: STUDIO LOCATIONS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-500 uppercase block mb-2">
                KANTOR & STUDIO KAMI
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
                Hadir di Pusat Budaya & Desain
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("CONTACT")}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-black hover:underline cursor-pointer"
            >
              <span>Lihat Detail Kontak</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {studios.map((studio, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all">
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 text-[11px] font-semibold tracking-wider uppercase rounded-full mb-4">
                  {studio.type}
                </span>
                <h4 className="text-xl font-bold text-stone-900 mb-2">
                  {studio.city}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                  {studio.address}
                </p>
                <a
                  href={`tel:${studio.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs font-semibold text-black hover:text-stone-600 transition-colors"
                >
                  {studio.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION: CTA MULAI KONSULTASI DESAIN */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111111] mb-4">
            Mulai Konsultasi Desain
          </h3>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-[#737373] font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Wujudkan hunian impian Anda bersama tim arsitek berpengalaman kami di Bali, Jakarta, dan Thailand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/62859106532925"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 sm:px-12 py-3.5 sm:py-4 bg-[#181818] hover:bg-black text-white text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              KIRIM PESAN WHATSAPP
            </a>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("PORTFOLIO")}
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              LIHAT PORTOFOLIO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
