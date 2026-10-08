import React, { useState, useEffect } from "react";
import porto1 from "../assets/images/porto1.webp";
import { resolveImageUrl } from "../api/client";

export default function PortfolioDetail({ project, allProjects = [], onBack, onNavigate, onSelectProject }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [project]);

  if (!project) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Proyek tidak ditemukan</h2>
        <button
          type="button"
          onClick={() => (onBack ? onBack() : onNavigate && onNavigate("PORTFOLIO"))}
          className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black cursor-pointer transition-colors"
        >
          &larr; Kembali ke Portfolio
        </button>
      </div>
    );
  }

  const currentProject = project;

  // Gallery Photos from backend only
  const galleryImages =
    currentProject?.images && Array.isArray(currentProject.images) && currentProject.images.length > 0
      ? currentProject.images.map((img, i) => ({
          src: resolveImageUrl(img.image, porto1),
          alt: img.caption || `${currentProject.title} - Foto ${i + 1}`,
        }))
      : [];

  // Related Projects from real loaded projects (exclude current project)
  const relatedProjects = (allProjects || [])
    .filter((p) => String(p.id) !== String(currentProject?.id))
    .slice(0, 4);

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER PORTFOLIO DETAIL */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[60vh] sm:h-[72vh] md:h-[82vh] min-h-115 max-h-180 bg-stone-950 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={currentProject.heroImage || currentProject.image || porto1}
            alt={`${currentProject.title} Hero Banner`}
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1200 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BREADCRUMBS & SPECS SECTION */}
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
          <div className="lg:col-span-7 xl:col-span-8 w-full overflow-hidden bg-stone-100 shadow-xs rounded-xl">
            <img
              src={currentProject.mainImage || currentProject.image || porto1}
              alt={`${currentProject.title} Main View`}
              className="w-full h-auto aspect-4/3 sm:aspect-16/10 object-cover object-center"
            />
          </div>

          {/* Right: Specifications Table */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start">
            <div className="divide-y divide-stone-200">
              {/* LOCATION */}
              {currentProject.location && currentProject.location !== "-" && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    LOCATION
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.location}
                  </p>
                </div>
              )}

              {/* YEAR */}
              {currentProject.year && currentProject.year !== "-" && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    YEAR
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.year}
                  </p>
                </div>
              )}

              {/* BUILDING AREA */}
              {(currentProject.buildingArea || currentProject.building_area || currentProject.raw?.building_area) &&
                (currentProject.buildingArea !== "-" && currentProject.building_area !== "-") && (
                <div className="py-3.5 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    BUILDING AREA
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {(() => {
                      const val = String(currentProject.buildingArea || currentProject.building_area || currentProject.raw?.building_area || "").trim();
                      return val.includes("m²") || val.toLowerCase().includes("sqm") || val.toLowerCase().includes("m2") ? val : `${val} m²`;
                    })()}
                  </p>
                </div>
              )}

              {/* LAND AREA */}
              {(currentProject.landArea || currentProject.land_area || currentProject.raw?.land_area) &&
                (currentProject.landArea !== "-" && currentProject.land_area !== "-") && (
                <div className="py-3.5 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    LAND AREA
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {(() => {
                      const val = String(currentProject.landArea || currentProject.land_area || currentProject.raw?.land_area || "").trim();
                      return val.includes("m²") || val.toLowerCase().includes("sqm") || val.toLowerCase().includes("m2") ? val : `${val} m²`;
                    })()}
                  </p>
                </div>
              )}

              {/* CATEGORY */}
              {(currentProject.categoryName || currentProject.raw?.category?.name || currentProject.type) && (
                <div className="py-3.5 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    CATEGORY
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.categoryName || currentProject.raw?.category?.name || currentProject.type}
                  </p>
                </div>
              )}

              {/* STATUS */}
              {currentProject.status && (
                <div className="py-3.5 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    STATUS
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.status}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons: INQUIRY & WHATSAPP */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate("CONTACT") : (window.location.hash = "#/contact"))}
                className="w-full py-3.5 px-6 bg-white hover:bg-stone-50 text-stone-900 border border-stone-900 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer text-center"
              >
                INQUIRY
              </button>

              <a
                href={`https://wa.me/62859106532925?text=${encodeURIComponent(
                  `Halo Nyoman Undagi, saya tertarik dengan proyek "${currentProject.title}". Boleh minta informasi lebih lanjut?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#0a2b16] hover:bg-[#072010] text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs text-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Big Editorial Narrative Description (Dibawah Grid Foto & Spesifikasi) */}
        {(currentProject.description || currentProject.raw?.description) && (
          <div className="mt-8 sm:mt-12 max-w-5xl">
            <div className="text-stone-600 text-sm sm:text-[15px] leading-[1.85] font-light whitespace-pre-line text-justify space-y-4">
              {currentProject.description || currentProject.raw?.description}
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. MASONRY / GRID GALLERY SECTION (Only if real photos exist) */}
      {/* ========================================================================= */}
      {galleryImages.length > 0 && (
        <section className="w-full py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-360 mx-auto border-t border-stone-100">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase block mb-2">
              GALERI FOTO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Dokumentasi Proyek ({galleryImages.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img.src)}
                className="group relative aspect-4/3 overflow-hidden rounded-xl bg-stone-100 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium drop-shadow-md">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. OTHER RELATED PROJECTS (Only if there are other real projects) */}
      {/* ========================================================================= */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 sm:py-24 bg-stone-50 px-6 sm:px-10 lg:px-16 border-t border-stone-200">
          <div className="max-w-360 mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase block mb-1">
                  EKSPLORASI LAINNYA
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                  Proyek Terkait
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate("PORTFOLIO") : onBack && onBack()}
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:underline cursor-pointer"
              >
                Semua Portofolio &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProject ? onSelectProject(rel) : null}
                  className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-stone-200 hover:border-black transition-all shadow-xs hover:shadow-md"
                >
                  <div className="aspect-4/3 overflow-hidden bg-stone-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    {rel.location && rel.location !== "-" && (
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">
                        {rel.location}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-stone-900 group-hover:text-black">
                      {rel.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={lightboxImage}
            alt="Enlarged preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
