import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import nyomanImg from "../assets/images/nyoman.png";
import HomeFeatureSection from "../components/home/HomeFeatureSection";

const slides = [
  {
    image: banner1,
    title: "INCOGNITO HOUSE",
    location: "TUMBAK BAYUH, BALI",
    type: "VILLA",
  },
  {
    image: banner3,
    title: "SAMUDRA RESIDENCE",
    location: "CANGGU, BALI",
    type: "PRIVATE VILLA",
  },
  {
    image: banner2,
    title: "AMALA RETREAT",
    location: "UBUD, BALI",
    type: "LUXURY SANCTUARY",
  },
  {
    image: banner4,
    title: "NIRVANA CLIFF ESTATE",
    location: "ULUWATU, BALI",
    type: "RESORT ESTATE",
  },
  {
    image: banner5,
    title: "VILLA SUKMA",
    location: "SANUR, BALI",
    type: "BOUTIQUE VILLA",
  },
];

const categories = [
  { id: "all", label: "KARYA PILIHAN" },
  { id: "apartemen", label: "APARTEMEN" },
  { id: "kompleks-vila", label: "KOMPLEKS VILA" },
  { id: "residensial", label: "RESIDENSIAL" },
  { id: "vila", label: "VILA" },
];

const allProjects = [
  {
    id: 1,
    title: "New York Office",
    category: "apartemen",
    image: porto1,
    location: "Sudirman, Jakarta",
    type: "Modern Office",
  },
  {
    id: 2,
    title: "Commercial Restaurant",
    category: "kompleks-vila",
    image: banner1,
    location: "Seminyak, Bali",
    type: "Dining Space",
  },
  {
    id: 3,
    title: "Hotel Rooms",
    category: "vila",
    image: banner5,
    location: "Ubud, Bali",
    type: "Luxury Suite",
  },
  {
    id: 4,
    title: "Private House",
    category: "residensial",
    image: banner3,
    location: "Canggu, Bali",
    type: "Exclusive Villa",
  },
  {
    id: 5,
    title: "Amala Retreat Villa",
    category: "vila",
    image: banner2,
    location: "Ubud, Bali",
    type: "Eco Sanctuary",
  },
  {
    id: 6,
    title: "Nirvana Cliff Suite",
    category: "apartemen",
    image: banner4,
    location: "Uluwatu, Bali",
    type: "Cliff Penthouse",
  },
];

export default function Home({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ================= HERO BANNER SECTION (Full-Bleed Matching Reference) ================= */}
      <section id="hero" className="relative w-full h-dvh min-h-145 max-h-275 overflow-hidden bg-stone-950 flex flex-col justify-end">
        {/* Background Images & Crossfade Carousel */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-1200 ease-out ${isActive ? "scale-100" : "scale-105"
                  }`}
              />
              {/* Top Gradient for Navbar legibility */}
              <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/25 to-transparent h-48 pointer-events-none" />
              {/* Overall Subtle Dark Tint */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              {/* Bottom Gradient for Title & Subtitle legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Hero Overlay Content: Bottom-Left Typography + Bottom-Right Arrow Controls */}
        <div className="relative z-20 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="flex items-end justify-between gap-6">
            {/* Left Side: Title, Subtitle, Slide Indicator Dashes */}
            <div className="max-w-3xl">
              <h1
                key={`title-${currentSlide}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.14em] sm:tracking-[0.18em] text-white uppercase leading-[1.15] font-sans drop-shadow-md animate-in fade-in slide-in-from-bottom-2 duration-700"
              >
                {slides[currentSlide].title}
              </h1>
              <p
                key={`sub-${currentSlide}`}
                className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-[14px] font-normal tracking-[0.22em] sm:tracking-[0.26em] text-stone-300 uppercase drop-shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100"
              >
                {slides[currentSlide].location} <span className="mx-2 text-white/50">|</span> {slides[currentSlide].type}
              </p>

              {/* Minimal Line Indicators */}
              <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-2.5">
                {slides.map((_, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-0.5 transition-all duration-400 rounded-full cursor-pointer ${isActive
                        ? "w-10 sm:w-14 bg-white shadow-xs"
                        : "w-5 sm:w-7 bg-white/35 hover:bg-white/70"
                        }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Side: Sleek Arrow Navigation Controls (< >) */}
            <div className="hidden sm:flex items-center border border-white/25 bg-black/25 backdrop-blur-xs rounded-xs overflow-hidden shrink-0">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="p-2.5 sm:p-3 text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <div className="w-px h-5 bg-white/25" />
              <button
                type="button"
                onClick={handleNextSlide}
                className="p-2.5 sm:p-3 text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="w-full">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= FEATURE & VALUE PROPOSITION (BELOW BANNER) ================= */}
          <HomeFeatureSection onNavigate={onNavigate} />

          {/* ================= PROYEK PILIHAN / PORTFOLIO SECTION ================= */}
          <div id="portfolio" className="pt-20 sm:pt-28 md:pt-32">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center justify-center gap-3 mb-3">
                <span className="w-7 h-[1.5px] bg-stone-900" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-900 uppercase">
                  KARYA KAMI
                </span>
                <span className="w-7 h-[1.5px] bg-stone-900" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
                Proyek Pilihan
              </h2>

              {/* Category Filter Tabs */}
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-5 sm:gap-8 md:gap-10 overflow-x-auto pb-3 scrollbar-none px-2">
                {categories.map((cat) => {
                  const isActive = activeFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveFilter(cat.id)}
                      className={`relative pb-2.5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
                        }`}
                    >
                      {cat.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Portfolio Content Display */}
            {activeFilter === "all" ? (
              /* True Bento Grid Layout */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 auto-rows-60 sm:auto-rows-70 lg:auto-rows-75">
                {/* Bento 1: Wide Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={banner1}
                    alt="Commercial Restaurant"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-6">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                      Seminyak, Bali
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      Commercial Restaurant
                    </span>
                  </div>
                </div>

                {/* Bento 2: Tall Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-2 lg:col-span-2 md:row-span-2 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={banner3}
                    alt="Private House"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-6">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                      Canggu, Bali
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      Private House
                    </span>
                  </div>
                </div>

                {/* Bento 3: Compact Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={porto1}
                    alt="New York Office"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      New York Office
                    </span>
                  </div>
                </div>

                {/* Bento 4: Compact Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={banner5}
                    alt="Hotel Rooms"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      Hotel Rooms
                    </span>
                  </div>
                </div>

                {/* Bento 5: Wide Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={banner4}
                    alt="Nirvana Cliff Estate"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-6">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                      Uluwatu, Bali
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      Nirvana Cliff Estate
                    </span>
                  </div>
                </div>

                {/* Bento 6: Wide Card */}
                <div
                  onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                  className="relative md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                >
                  <img
                    src={banner2}
                    alt="Amala Retreat Villa"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-6">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                      Ubud, Bali
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-6">
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                      Amala Retreat Villa
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Filtered Category Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-60 sm:auto-rows-70">
                {filteredProjects.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onNavigate && onNavigate("PORTFOLIO")}
                    className="relative rounded-3xl sm:rounded-4xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-stone-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-5 left-6">
                      <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                        {item.location}
                      </span>
                    </div>
                    <div className="absolute bottom-5 right-6">
                      <span className="text-white text-xs sm:text-sm font-semibold tracking-wide border-b border-white/80 pb-0.5 drop-shadow-md group-hover:border-white transition-all">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Centered See More Projects Button */}
            <div className="mt-10 sm:mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate("PORTFOLIO") : null}
                id="see-more-projects-btn"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#181818] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>See More Projects</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* ================= KENALI PRINSIPAL KAMI / ABOUT FOUNDER ================= */}
          <div id="about" className="mt-28 sm:mt-36 pt-16 sm:pt-20 pb-16 sm:pb-24 border-t border-[#eaeaea]">
            <div className="max-w-270 mx-auto">
              {/* Top Grid: Photo & Bio */}
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr] gap-8 md:gap-10 lg:gap-14 items-start">
                {/* Left Column: Founder Photo */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={nyomanImg}
                    alt="Ir. Ar. IGN Andri Saputra, IAI."
                    className="w-full max-w-32.5 sm:max-w-36.25 lg:max-w-40 h-auto object-contain select-none"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Right Column: Bio Content */}
                <div className="flex flex-col items-start pt-1 md:pt-2">
                  <span className="text-[11.5px] font-bold tracking-[0.22em] text-[#111111] uppercase mb-2.5">
                    KENALI PRINSIPAL KAMI
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-tight text-[#111111] mb-6">
                    Ir. Ar. IGN Andri Saputra, IAI.
                  </h3>

                  <div className="space-y-4 text-[13px] sm:text-[13.5px] leading-[1.85] text-[#555555] font-light text-justify">
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

                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("ABOUT")}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black hover:underline cursor-pointer"
                  >
                    <span>Baca Selengkapnya di Halaman About</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Section: Philosophy & Slogan */}
              <div className="mt-8 sm:mt-10 pt-1 flex flex-col items-start">
                <div className="w-12 h-px bg-[#cccccc] mb-4" />
                <p className="text-[13px] sm:text-[13.5px] text-[#737373] font-light leading-relaxed mb-2.5">
                  Hal ini menginspirasi kami untuk memberikan perjalanan desain yang bermakna bagi klien kami, bukan sekadar desain atau gambar.
                </p>
                <h4 className="text-xl sm:text-2xl md:text-[26px] font-normal italic text-[#111111] tracking-tight">
                  &ldquo;Perjalanan dalam Setiap Desain&rdquo;
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
