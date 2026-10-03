import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import aboutBanner from "../assets/images/about-banner.jpg";

export default function PortfolioDetail({ project, onBack, onNavigate, onSelectProject }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [project]);

  // Default project data matching reference (Casa Alyce)
  const currentProject = project || {
    id: "casa-alyce",
    title: "Casa Alyce",
    heroImage: banner1,
    mainImage: porto1,
    location: "Umalas, Bali",
    year: "2025",
    buildingArea: "548 m²",
    landArea: "963 m²",
    category: "Villa",
    status: "Built",
  };

  // Gallery Photos matching the 12-item grid in the reference screenshot
  const galleryImages = [
    { src: porto1, alt: "Casa Alyce - Open Concept Living & Dining" },
    { src: banner2, alt: "Casa Alyce - Curved Architecture & Shallow Pool" },
    { src: banner3, alt: "Casa Alyce - Master Bedroom Slat Ceiling" },
    { src: aboutBanner, alt: "Casa Alyce - Master Suite Ambient Lighting" },
    { src: banner4, alt: "Casa Alyce - Bedroom with Outdoor Terrace" },
    { src: banner5, alt: "Casa Alyce - Organic Texture Guest Suite" },
    { src: banner1, alt: "Casa Alyce - Warm Teak Wood Wardrobes" },
    { src: porto1, alt: "Casa Alyce - Vanity & Dressing Room" },
    { src: banner2, alt: "Casa Alyce - Twilight Courtyard & Pool Reflection" },
    { src: banner3, alt: "Casa Alyce - Curved Wooden Slat Soffits" },
    { src: aboutBanner, alt: "Casa Alyce - Minimalist Sconces & Corridor" },
    { src: banner5, alt: "Casa Alyce - Kitchen Nook & Rattan Pendant Lights" },
  ];

  // 4 Related Projects from the reference screenshot
  const relatedProjects = [
    {
      id: "incognito-house",
      title: "Incognito House",
      location: "Tumbak Bayuh, Bali",
      image: banner4,
      year: "2024",
      buildingArea: "620 m²",
      landArea: "1,100 m²",
      category: "Villa",
      status: "Built",
    },
    {
      id: "morrisons-private-villa",
      title: "Morrison's Private Villa",
      location: "Badung, Bali",
      image: banner2,
      year: "2024",
      buildingArea: "780 m²",
      landArea: "1,250 m²",
      category: "Villa",
      status: "Built",
    },
    {
      id: "casa-infinito",
      title: "Casa Infinito",
      location: "Canggu, Bali",
      image: banner3,
      year: "2023",
      buildingArea: "890 m²",
      landArea: "1,400 m²",
      category: "Villa",
      status: "Built",
    },
    {
      id: "arunata-villa",
      title: "Arunata Villa",
      location: "Ubud, Bali",
      image: banner5,
      year: "2024",
      buildingArea: "510 m²",
      landArea: "870 m²",
      category: "Villa",
      status: "Built",
    },
  ];

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER PORTFOLIO DETAIL (Screenshot 1) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[60vh] sm:h-[72vh] md:h-[82vh] min-h-115 max-h-180 bg-stone-950 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={currentProject.heroImage || banner1}
            alt={`${currentProject.title} Hero Banner`}
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1200 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BREADCRUMBS & SPECS SECTION (Screenshot 2) */}
      {/* ========================================================================= */}
      <section className="w-full pt-10 sm:pt-14 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 max-w-360 mx-auto">
        {/* Top Navigation Bar: Breadcrumb + Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-500 font-medium">
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate("HOME") : onBack && onBack()}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-stone-300">/</span>
            <button
              type="button"
              onClick={() => onBack ? onBack() : onNavigate && onNavigate("PORTFOLIO")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900 font-semibold">{currentProject.title}</span>
          </nav>

          <button
            type="button"
            onClick={() => onBack ? onBack() : onNavigate && onNavigate("PORTFOLIO")}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-stone-700 hover:text-black transition-colors cursor-pointer"
          >
            <span>&larr; Back to Portfolio</span>
          </button>
        </div>

        {/* Big Project Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] my-8 sm:my-10">
          {currentProject.title}
        </h1>

        {/* 2-Column Specs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          {/* Left: Main Interior Photo */}
          <div className="lg:col-span-7 xl:col-span-8 w-full overflow-hidden bg-stone-100 shadow-xs">
            <img
              src={currentProject.mainImage || porto1}
              alt={`${currentProject.title} Interior View`}
              className="w-full h-auto aspect-4/3 sm:aspect-16/10 object-cover object-center"
            />
          </div>

          {/* Right: Specifications Table */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start">
            <div className="divide-y divide-stone-200">
              {/* LOCATION */}
              <div className="py-4 first:pt-0">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  LOCATION
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.location}
                </p>
              </div>

              {/* YEAR */}
              <div className="py-4">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  YEAR
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.year}
                </p>
              </div>

              {/* BUILDING AREA */}
              <div className="py-4">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  BUILDING AREA
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.buildingArea}
                </p>
              </div>

              {/* LAND AREA */}
              <div className="py-4">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  LAND AREA
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.landArea}
                </p>
              </div>

              {/* CATEGORY */}
              <div className="py-4">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  CATEGORY
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.category}
                </p>
              </div>

              {/* STATUS */}
              <div className="py-4 last:pb-0">
                <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                  STATUS
                </span>
                <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                  {currentProject.status}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ACTION BUTTONS & NARRATIVE (Screenshot 3) */}
        {/* ========================================================================= */}
        <div className="w-full mb-16 sm:mb-24">
          {/* Action Buttons: Top Right aligned */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3.5 mb-10 sm:mb-14">
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate("CONTACT") : window.location.href = "mailto:info@lumbungarchitect.com"}
              className="w-full sm:w-auto min-w-56 py-3.5 px-8 border border-[#111111] bg-white hover:bg-stone-100 text-[#111111] text-xs font-bold tracking-[0.25em] uppercase text-center transition-all cursor-pointer shadow-xs"
            >
              INQUIRY
            </button>

            <a
              href={`https://wa.me/62859106532925?text=Halo%20Lumbung%20Architect,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(currentProject.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-56 py-3.5 px-8 bg-[#072a15] hover:bg-[#0c3f21] text-white text-xs font-bold tracking-[0.25em] uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.776.849 2.796.85 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.115-.515-.992-.416-1.637-1.428-1.685-1.492-.049-.064-.407-.542-.407-1.035 0-.493.256-.733.348-.834.091-.101.198-.127.264-.127.065 0 .131.002.188.006.06.004.14-.023.218.167.082.198.278.679.303.73.025.05.041.109.008.176-.033.067-.05.109-.099.167-.049.058-.104.13-.148.175-.05.05-.102.105-.044.205.058.099.256.422.548.683.376.335.694.438.793.488.099.049.157.042.215-.025.058-.066.248-.289.314-.388.066-.099.132-.083.223-.049.091.033.578.272.677.322.099.049.165.074.19.115.025.042.025.244-.119.649z" />
              </svg>
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Architectural Project Narrative */}
          <div className="space-y-6 text-stone-600 text-sm sm:text-base font-light leading-relaxed text-justify">
            <p>
              Casa Alyce is a commercial villa in Umalas, Bali, designed as a direct response to its irregular site. Located within a quiet cul de sac and surrounded by neighboring villas, the project began with a simple question of how to create a meaningful spatial experience without relying on outward views. Instead of reshaping the land, we embraced its asymmetrical form and allowed it to guide the architecture.
            </p>
            <p>
              The layout follows the natural angles of the plot, resulting in fluid curved forms that soften the geometry and create a more organic living environment. At the center, a shallow pool becomes the main focal point, bringing light, reflection, and a sense of calm into every space.
            </p>
            <p>
              Living, dining, and kitchen areas are arranged to open fully toward this internal landscape, creating a seamless indoor and outdoor connection. Natural materials such as limestone, teak wood, and limewash walls complete the villa with a warm and timeless tropical character.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. GALLERY GRID SECTION (Screenshot 4) */}
        {/* ========================================================================= */}
        <div className="w-full mb-20 sm:mb-28">
          {/* Gallery Section Header */}
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-0.5 bg-[#111111]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#111111]">
              GALLERY
            </h2>
          </div>

          {/* 12-Item Photo Grid (4 columns on desktop, 2 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img)}
                className="group relative aspect-4/3 overflow-hidden bg-stone-100 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-stone-900 text-xs font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. RELATED PROJECTS SECTION (Screenshot 5) */}
        {/* ========================================================================= */}
        <div className="w-full pt-10 border-t border-stone-200">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 h-0.5 bg-[#111111]" />
                <span className="text-xs font-bold tracking-[0.25em] text-stone-600 uppercase">
                  MORE PROJECTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
                Related Projects
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onBack ? onBack() : onNavigate && onNavigate("PORTFOLIO")}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#111111] hover:text-stone-600 uppercase cursor-pointer"
            >
              <span>ALL PROJECTS</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* 4 Related Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedProjects.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(rel);
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="group relative aspect-3/4 rounded-xl overflow-hidden bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Bottom Card Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light mt-1">
                    {rel.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Images */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-stone-300 cursor-pointer"
            >
              &times;
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-3 text-center">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
