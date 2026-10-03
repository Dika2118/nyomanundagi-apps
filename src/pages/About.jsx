import React from "react";
import aboutBanner from "../assets/images/about-banner.jpg";
import nyomanImg from "../assets/images/nyoman.png";
import kantorImg from "../assets/images/kantor.jpg";

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

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER ABOUT (Sesuai Referensi Gambar) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] min-h-115 max-h-170 bg-stone-900 overflow-hidden flex items-end">
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
          {/* Big Editorial Narrative with Studio/Office Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Section Header Line */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className="w-10 sm:w-14 h-0.5 bg-[#111111]" />
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#111111]">
                  KONSEP KAMI
                </h2>
              </div>

              {/* Editorial Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight text-[#111111]">
                Menghadirkan harmoni antara ketenangan alam Bali dan ketegasan arsitektur modern dunia.
              </h3>

              {/* Divider Bar Under Heading */}
              <div className="w-12 sm:w-16 h-1 bg-[#111111] my-6 sm:my-8" />

              {/* Narrative Paragraphs */}
              <div className="space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed font-light text-justify">
                <p>
                  Bagi kami, arsitektur bukan sekadar membangun struktur fisik, melainkan menyusun sebuah perjalanan emosional. Setiap sudut, sirkulasi cahaya, dan hembusan angin tropis dirancang untuk menghadirkan rasa pulang, kedamaian, dan koneksi yang mendalam dengan alam.
                </p>
                <p>
                  Dengan memadukan kearifan lokal Bali dan teknik konstruksi kontemporer, Lumbung Architect menciptakan karya yang abadi—bangunan yang tidak tergerus oleh tren, melainkan semakin berkarakter dan bermakna seiring berjalannya waktu.
                </p>
              </div>
            </div>

            {/* Right: Office / Studio Image */}
            <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
              <div className="w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 xl:aspect-auto lg:h-120 overflow-hidden bg-stone-100">
                <img
                  src={kantorImg}
                  alt="Studio Lumbung Architect Office"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          <div className="max-w-260 mx-auto mb-14 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              <div className="bg-[#0a2b16] rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-sm">
                <div>
                  {/* Header Tag */}
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <span className="w-7 sm:w-8 h-0.5 bg-emerald-400/80" />
                    <span className="text-xs font-bold tracking-[0.22em] text-emerald-300 uppercase">
                      OUR VISION
                    </span>
                  </div>

                  {/* Vision Quote */}
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white mb-5">
                    &ldquo;To be a world-class architecture company that brings exceptional Balinese style all over the world.&rdquo;
                  </h3>

                  {/* Divider Line */}
                  <div className="w-10 h-0.5 bg-emerald-500/40 my-5 sm:my-6" />

                  {/* Vision Description */}
                  <p className="text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                    Positioning Bali Tropical Modern architecture on the international stage through built work, not just representation. The standard is defined by the quality of completed projects.
                  </p>
                </div>
              </div>

              {/* Right Card: OUR MISSION (White Card) */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-10 border border-stone-200 text-[#111111] flex flex-col justify-between relative overflow-hidden shadow-xs">
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <span className="w-7 sm:w-8 h-0.5 bg-[#111111]" />
                    <span className="text-xs font-bold tracking-[0.22em] text-[#111111] uppercase">
                      OUR MISSION
                    </span>
                  </div>

                  {/* Mission Quote */}
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#111111] mb-5">
                    &ldquo;Providing service excellence in every single activity to actualize the world-class design.&rdquo;
                  </h3>

                  {/* Divider Line */}
                  <div className="w-10 h-0.5 bg-[#111111] my-5 sm:my-6" />

                  {/* Mission Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                    Service excellence applied across every phase of the architectural process. Each team member operates under this standard, from initial programming through project handover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STATS / NUMBERS ROW (Sesuai Referensi Gambar) */}
          {/* ========================================================================= */}
          <div className="max-w-270 mx-auto mb-16 sm:mb-20 py-8 sm:py-12 border-y border-stone-200/60">
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

          {/* ========================================================================= */}
          {/* LOKASI KANTOR PUSAT BALI (SINGLE OFFICE LOCATION) */}
          {/* ========================================================================= */}
          <div className="max-w-270 mx-auto mb-16 sm:mb-24">
            <div className="p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-stone-50 border border-stone-200/80 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
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
                    href="mailto:info@lumbungarchitect.com"
                    className="text-xs text-stone-500 font-light mt-1 hover:underline"
                  >
                    info@lumbungarchitect.com
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
          </div>

          {/* Concept Pillars Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14 sm:mb-20">
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
    </div>
  );
}
