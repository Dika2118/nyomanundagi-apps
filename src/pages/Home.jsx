import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import nyomanImg from "../assets/images/nyoman.png";

const slides = [
  {
    image: banner1,
    theme: "BALI TROPICAL MODERN ARCHITECTURE",
    title: "DJELANTIK HOUSE",
    location: "DEWI SRI",
    type: "COMPLEX VILLA",
  },
  {
    image: banner2,
    theme: "CONTEMPORARY BALINESE VERNACULAR",
    title: "AMALA RETREAT",
    location: "UBUD",
    type: "LUXURY SANCTUARY",
  },
  {
    image: banner3,
    theme: "MODERN TROPICAL LUXURY RESIDENCE",
    title: "SAMUDRA RESIDENCE",
    location: "CANGGU",
    type: "PRIVATE VILLA",
  },
  {
    image: banner4,
    theme: "MINIMALIST COASTAL ARCHITECTURE",
    title: "NIRVANA CLIFF ESTATE",
    location: "ULUWATU",
    type: "RESORT ESTATE",
  },
  {
    image: banner5,
    theme: "AUTHENTIC TIMBER CRAFTSMANSHIP",
    title: "VILLA SUKMA",
    location: "SANUR",
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

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative w-full pt-18 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Card */}
          <div className="relative w-full h-[calc(100dvh-9rem)] sm:h-[calc(100dvh-7rem)] min-h-100 sm:min-h-120 max-h-170 rounded-3xl md:rounded-4xl overflow-hidden bg-stone-900 group">
            {/* Background Images & Text Content Carousel */}
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover object-center transition-transform duration-1400 ease-out ${isActive ? "scale-100" : "scale-105"
                      }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-24 sm:pb-28 md:pb-24 lg:pb-24 max-w-4xl">
                    <p
                      className={`text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] text-stone-200/90 uppercase drop-shadow-sm transition-all duration-1000 delay-100 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                    >
                      {slide.theme}
                    </p>
                    <h1
                      className={`mt-1.5 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1] drop-shadow-md transition-all duration-1000 delay-200 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.18em] text-stone-300 uppercase drop-shadow-sm transition-all duration-1000 delay-300 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                    >
                      {slide.location} <span className="mx-2 text-white/40">|</span> {slide.type}
                    </p>
                    <div
                      className={`mt-3.5 sm:mt-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit transition-all duration-1000 delay-400 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                    >
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide(idx);
                          }}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom-left Cutout Dock with inverted rounded curves */}
            <div className="absolute bottom-0 left-0 z-20 hidden sm:flex items-end">
              <div className="relative bg-white pt-3 pr-4 sm:pt-4 sm:pr-5 pb-0 pl-0 rounded-tr-3xl sm:rounded-tr-4xl flex items-center">
                <svg
                  className="absolute -top-7 left-0 w-7 h-7 sm:-top-8 sm:w-8 sm:h-8 pointer-events-none text-white fill-current"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M0 0 A 32 32 0 0 0 32 32 H 0 Z" />
                </svg>
                <svg
                  className="absolute -right-7 bottom-0 w-7 h-7 sm:-right-8 sm:w-8 sm:h-8 pointer-events-none text-white fill-current"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M0 0 A 32 32 0 0 0 32 32 H 0 Z" />
                </svg>
                <button
                  type="button"
                  onClick={() => onNavigate ? onNavigate("PORTFOLIO") : document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  id="hero-cta-consultation"
                  className="inline-flex items-center justify-center bg-[#141414] hover:bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Lihat Portofolio
                </button>
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="sm:hidden mt-4">
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate("PORTFOLIO") : document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              id="hero-cta-consultation-mobile"
              className="w-full inline-flex items-center justify-center bg-[#141414] hover:bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              Lihat Portofolio
            </button>
          </div>

          {/* ================= PROYEK PILIHAN / PORTFOLIO SECTION ================= */}
          <div id="portfolio" className="mt-20 sm:mt-28 md:mt-32">
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
          <div id="about" className="mt-28 sm:mt-36 pt-16 sm:pt-20 border-t border-[#eaeaea]">
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
              <div className="mt-16 sm:mt-20 pt-6 flex flex-col items-start">
                <div className="w-12 h-px bg-[#cccccc] mb-6" />
                <p className="text-[13px] sm:text-[13.5px] text-[#737373] font-light leading-relaxed mb-3">
                  Hal ini menginspirasi kami untuk memberikan perjalanan desain yang bermakna bagi klien kami, bukan sekadar desain atau gambar.
                </p>
                <h4 className="text-xl sm:text-2xl md:text-[26px] font-normal italic text-[#111111] tracking-tight">
                  &ldquo;Perjalanan dalam Setiap Desain&rdquo;
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS / AWARDS SPLIT BAR (FULL WIDTH EDGE-TO-EDGE) ================= */}
        <div className="w-full mt-28 sm:mt-36 border-y border-stone-200">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* Left Card: Penghargaan Internasional (Black) */}
            <div className="bg-[#111111] hover:bg-black text-white py-8 sm:py-10 lg:py-12 pl-6 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-32 pr-6 sm:pr-10 lg:pr-16 flex items-center justify-between group transition-colors duration-300">
              <div className="flex items-center gap-6 sm:gap-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-stone-200 tracking-tight shrink-0">
                  4
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-1">
                    Penghargaan Internasional
                  </h4>
                  <p className="text-xs sm:text-[13px] text-stone-400 font-light leading-relaxed">
                    Asia Pacific Property Awards, IAI Bali, dan lainnya
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Mitra (White) */}
            <div className="bg-white hover:bg-stone-50 text-[#111111] py-8 sm:py-10 lg:py-12 pl-6 sm:pl-10 md:pl-12 lg:pl-16 pr-6 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-32 flex items-center justify-between border-t md:border-t-0 md:border-l border-stone-200 group transition-colors duration-300">
              <div className="flex items-center gap-6 sm:gap-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-stone-900 tracking-tight shrink-0">
                  20+
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm sm:text-base font-bold text-[#111111] tracking-wide mb-1">
                    Mitra
                  </h4>
                  <p className="text-xs sm:text-[13px] text-stone-500 font-light leading-relaxed">
                    Dipercaya di Bali, Singapura, Thailand, Bahama, Nigeria, dan India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MULAI KONSULTASI DESAIN / CTA SECTION ================= */}
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div id="contact" className="mt-24 sm:mt-32 md:mt-36 text-center pb-4 sm:pb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111111] mb-4">
              Mulai Konsultasi Desain
            </h3>
            <p className="text-xs sm:text-sm md:text-[14.5px] text-[#737373] font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
              Bali (Pusat), Jakarta, Thailand. Untuk pertanyaan proyek, kemitraan, atau informasi umum.
            </p>
            <a
              href="https://wa.me/62859106532925"
              target="_blank"
              rel="noopener noreferrer"
              id="kirim-pesan-btn"
              className="inline-block px-10 sm:px-12 py-3.5 sm:py-4 bg-[#181818] hover:bg-black text-white text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              KIRIM PESAN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
