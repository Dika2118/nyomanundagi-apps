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
              {currentProject.buildingArea && currentProject.buildingArea !== "-" && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    BUILDING AREA
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.buildingArea}
                  </p>
                </div>
              )}

              {/* LAND AREA */}
              {currentProject.landArea && currentProject.landArea !== "-" && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    LAND AREA
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.landArea}
                  </p>
                </div>
              )}

              {/* CLIENT */}
              {currentProject.client && currentProject.client !== "-" && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    CLIENT
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.client}
                  </p>
                </div>
              )}

              {/* STATUS */}
              {currentProject.status && (
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-stone-400 uppercase block mb-1">
                    STATUS
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-[#111111]">
                    {currentProject.status}
                  </p>
                </div>
              )}
            </div>

            {/* Description Paragraph if available */}
            {currentProject.desc && (
              <div className="mt-6 pt-5 border-t border-stone-200">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light whitespace-pre-line">
                  {currentProject.desc}
                </p>
              </div>
            )}
          </div>
        </div>
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
