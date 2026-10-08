import React, { useState, useEffect } from "react";
import porto1 from "../assets/images/porto1.webp";
import nyomanImg from "../assets/images/nyoman.png";
import HomeFeatureSection from "../components/home/HomeFeatureSection";
import { getHeroBanners, getProjectCategories, getProjects, resolveImageUrl } from "../api/client";

function BentoCard({ item, className = "", onNavigate }) {
  if (!item) return null;
  return (
    <div
      onClick={() => onNavigate && onNavigate("PORTFOLIO")}
      className={`relative rounded-3xl sm:rounded-[32px] overflow-hidden group cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 bg-stone-950 ${className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
      {item.location && item.location !== "-" && (
        <div className="absolute top-4 sm:top-5 left-5 sm:left-6 z-10">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-white/95 uppercase drop-shadow-md">
            {item.location}
          </span>
        </div>
      )}
      <div className="absolute bottom-4 sm:bottom-5 right-5 sm:right-6 z-10">
        <span className="text-white text-xs sm:text-sm md:text-[15px] font-bold tracking-wide border-b-2 border-white pb-0.5 drop-shadow-lg group-hover:border-stone-300 transition-all">
          {item.title}
        </span>
      </div>
    </div>
  );
}

export default function Home({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([{ id: "all", label: "KARYA PILIHAN" }]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real dynamic data from Backend nyomanundagi-api
  useEffect(() => {
    // 1. Hero Banners
    getHeroBanners()
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          setSlides(
            res.map((b) => ({
              id: b.id,
              image: resolveImageUrl(b.image || b.image_url),
              title: (b.title || "").toUpperCase(),
              location: (b.subtitle || "").toUpperCase(),
            }))
          );
        } else {
          setSlides([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching hero banners:", err);
        setSlides([]);
      });

    // 2. Project Categories
    getProjectCategories()
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          setCategories([
            { id: "all", label: "KARYA PILIHAN" },
            ...res.map((c) => ({
              id: String(c.id),
              label: c.name.toUpperCase(),
              slug: c.name.toLowerCase().replace(/\s+/g, "-"),
            })),
          ]);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });

    // 3. Featured Projects (HANYA proyek yang dicentang 'is_featured' oleh admin, maks 6)
    getProjects({ is_featured: 1, all: true })
      .then((res) => {
        if (Array.isArray(res)) {
          // Filter hanya yang is_featured aktif (boolean true / 1 / "1")
          const featuredOnly = res.filter(
            (p) => p.is_featured === true || p.is_featured === 1 || p.is_featured === "1"
          );

          setAllProjects(
            featuredOnly.map((p) => ({
              id: p.id,
              title: p.title,
              category: String(p.category_id),
              categorySlug: p.category?.name?.toLowerCase().replace(/\s+/g, "-"),
              image: resolveImageUrl(p.thumbnail || p.thumbnail_url, porto1),
              location: p.location || "Bali, Indonesia",
              type: p.category?.name || "Vila Mewah",
              is_featured: p.is_featured,
              raw: p,
            }))
          );
        } else {
          setAllProjects([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setAllProjects([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const displaySlides = slides;

  // Slide autoplay interval
  useEffect(() => {
    if (displaySlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [displaySlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? displaySlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
  };

  // Filter projects by category and cap at maximum 6
  const filteredProjects = (
    activeFilter === "all"
      ? allProjects
      : allProjects.filter(
        (project) =>
          project.category === activeFilter ||
          project.categorySlug === activeFilter ||
          String(project.id) === activeFilter
      )
  ).slice(0, 6);

  const activeSlide = displaySlides[currentSlide] || displaySlides[0];

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ================= HERO BANNER SECTION (Full-Bleed Matching Reference) ================= */}
      <section id="hero" className="relative w-full h-dvh min-h-145 max-h-275 overflow-hidden bg-stone-950 flex flex-col justify-end">
        {/* Background Images & Crossfade Carousel */}
        {displaySlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id || index}
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
                {activeSlide?.title}
              </h1>
              {activeSlide?.location && (
                <p
                  key={`sub-${currentSlide}`}
                  className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-[14px] font-normal tracking-[0.22em] sm:tracking-[0.26em] text-stone-300 uppercase drop-shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100"
                >
                  {activeSlide.location}
                </p>
              )}

              {/* Minimal Line Indicators (only if multiple slides exist) */}
              {displaySlides.length > 1 && (
                <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-2.5">
                  {displaySlides.map((_, idx) => {
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: INTRO & COMMITMENT ================= */}
      <div className="w-full max-w-360 mx-auto px-6 sm:px-10 lg:px-16">
        <HomeFeatureSection onNavigate={onNavigate} />

        {/* ================= SECTION 3: PROYEK PILIHAN / PORTFOLIO BENTO ================= */}
        <div id="portfolio" className="mt-16 sm:mt-24 pt-12 sm:pt-16 pb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-500 uppercase block mb-2 sm:mb-3">
              KARYA TERBARU
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Proyek Pilihan
            </h2>

            {/* Category Filter Tabs */}
            {categories.length > 1 && (
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
            )}
          </div>

          {/* ================= PORTFOLIO DISPLAY (REAL DATA ONLY, BENTO GRID LAYOUT) ================= */}
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin mb-4" />
              <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-widest font-semibold">
                Memuat Karya Pilihan...
              </p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-16 text-center max-w-md mx-auto bg-stone-50 rounded-3xl border border-stone-200/80 p-8">
              <p className="text-sm font-semibold text-stone-700 mb-1">
                Belum Ada Proyek Unggulan
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Centang opsi &ldquo;Tampilkan sebagai Proyek Unggulan (Featured)&rdquo; pada proyek di panel admin untuk menampilkannya di bagian ini (maksimal 6 proyek).
              </p>
            </div>
          ) : filteredProjects.length >= 4 ? (
            /* Layout Bento Asimetris Sesuai Referensi Desain (4 hingga 6 proyek) */
            <div className="w-full space-y-5 sm:space-y-6">
              {/* Bagian Atas: 2 Kolom Asimetris */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                {/* Kolom Kiri: 1 Kartu Lebar di atas + 2 Kartu Kotak di bawah */}
                <div className="flex flex-col gap-5 sm:gap-6 justify-between">
                  {/* Kartu 1: Lebar */}
                  <BentoCard
                    item={filteredProjects[0]}
                    className="w-full aspect-[16/9] min-h-[220px] sm:min-h-[260px]"
                    onNavigate={onNavigate}
                  />
                  {/* Kartu 2 & 3: Bersebelahan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
                    <BentoCard
                      item={filteredProjects[1]}
                      className="w-full aspect-[4/3] sm:aspect-square h-full min-h-[190px] sm:min-h-[220px]"
                      onNavigate={onNavigate}
                    />
                    {filteredProjects[2] && (
                      <BentoCard
                        item={filteredProjects[2]}
                        className="w-full aspect-[4/3] sm:aspect-square h-full min-h-[190px] sm:min-h-[220px]"
                        onNavigate={onNavigate}
                      />
                    )}
                  </div>
                </div>

                {/* Kolom Kanan: 1 Kartu Tinggi Vertikal (Memenuhi tinggi kolom kiri) */}
                <div className="h-full">
                  <BentoCard
                    item={filteredProjects[3]}
                    className="w-full h-full min-h-[340px] sm:min-h-[460px] lg:min-h-full"
                    onNavigate={onNavigate}
                  />
                </div>
              </div>

              {/* Bagian Bawah: Maksimal 2 Kartu Lebar Bersebelahan (Kartu ke-5 & ke-6) */}
              {(filteredProjects[4] || filteredProjects[5]) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {filteredProjects[4] && (
                    <BentoCard
                      item={filteredProjects[4]}
                      className="w-full aspect-[16/9] min-h-[220px] sm:min-h-[260px]"
                      onNavigate={onNavigate}
                    />
                  )}
                  {filteredProjects[5] && (
                    <BentoCard
                      item={filteredProjects[5]}
                      className="w-full aspect-[16/9] min-h-[220px] sm:min-h-[260px]"
                      onNavigate={onNavigate}
                    />
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Layout Responsif Bersih jika baru ada 1 - 3 proyek unggulan */
            <div
              className={`grid gap-5 sm:gap-6 ${filteredProjects.length === 1
                ? "grid-cols-1 max-w-2xl mx-auto"
                : filteredProjects.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
              {filteredProjects.map((item) => (
                <BentoCard
                  key={item.id}
                  item={item}
                  className="w-full aspect-[16/10] min-h-[220px]"
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          )}

          {/* Centered See More Projects Button */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              type="button"
              onClick={() => (onNavigate ? onNavigate("PORTFOLIO") : null)}
              id="see-more-projects-btn"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>See More Projects</span>
              <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
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
                    I Gusti Ngurah Andri Saputra, arsitek kelahiran Bali, mendirikan Nyoman Undagi pada tahun 2010. Setelah lulus dari Universitas Udayana, beliau tidak langsung membuka firma sendiri. Beliau menghabiskan bertahun-tahun belajar dari pengalaman nyata, bekerja di firma arsitektur Australia dan Prancis di Bali untuk mengasah keahlian dan kedisiplinannya.
                  </p>
                  <p>
                    Yang menggerakkan beliau sangat personal. Tumbuh besar di Bali, dikelilingi keluarga dan komunitas, beliau melihat bagaimana sebuah rumah membentuk orang-orang di dalamnya. Kenangan masa kecil itulah yang menjadi tujuan hidupnya: merancang ruang di mana keluarga saling terhubung, persahabatan tumbuh, dan hidup terasa pas.
                  </p>
                  <p>
                    Hari ini, Nyoman Undagi adalah tim yang terdiri dari 67 profesional. Diakui melalui 450+ proyek di Bali dan destinasi global seperti Singapura, Thailand, Bahama, Nigeria, dan India, karya kami mencerminkan arsitektur abadi dengan sensibilitas internasional dan pengalaman hidup yang lebih tinggi.
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
  );
}
