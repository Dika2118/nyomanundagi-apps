import React, { useState, useEffect } from "react";
import PortfolioDetail from "./PortfolioDetail";
import banner3 from "../assets/images/banner3.jpg";
import porto1 from "../assets/images/porto1.webp";
import { getProjects, getProjectCategories, resolveImageUrl } from "../api/client";

export default function Portfolio({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [categories, setCategories] = useState([{ id: "all", label: "SEMUA KARYA" }]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real data from nyomanundagi-api
  useEffect(() => {
    // 1. Fetch categories
    getProjectCategories()
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          setCategories([
            { id: "all", label: "SEMUA KARYA" },
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

    // 2. Fetch projects
    getProjects({ all: true })
      .then((res) => {
        if (Array.isArray(res)) {
          setProjects(
            res.map((p) => {
              const img = resolveImageUrl(p.thumbnail || p.thumbnail_url, porto1);
              return {
                id: p.id,
                title: p.title,
                category: String(p.category_id),
                categorySlug: p.category?.name?.toLowerCase().replace(/\s+/g, "-"),
                categoryName: p.category?.name || "Kategori",
                image: img,
                heroImage: img,
                mainImage: img,
                location: p.location || "Bali, Indonesia",
                year: p.year || "-",
                buildingArea: p.building_area ? `${p.building_area} m²` : "-",
                landArea: p.land_area ? `${p.land_area} m²` : "-",
                area: p.building_area ? `${p.building_area} m²` : "-",
                client: p.client_name || "-",
                type: p.category?.name || "Architectural Project",
                status: p.status || "Built",
                desc: p.description || p.short_description || "",
                images: p.images || [],
                raw: p,
              };
            })
          );
        } else {
          setProjects([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setProjects([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // If user selected a project, render the full Portfolio Detail page
  if (selectedProject) {
    return (
      <PortfolioDetail
        project={selectedProject}
        allProjects={projects}
        onBack={() => setSelectedProject(null)}
        onNavigate={onNavigate}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    );
  }

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.categorySlug === activeFilter ||
            String(p.id) === activeFilter
        );

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ========================================================================= */}
      {/* HERO BANNER PORTFOLIO */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[55vh] sm:h-[62vh] min-h-100 max-h-145 bg-stone-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={banner3}
            alt="Portfolio Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3">
              KARYA KAMI
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4">
              Portfolio
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl">
              Eksplorasi Desain Arsitektur Tropis, Vila Mewah & Residensial Ikonik
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FILTER TABS & GALLERY GRID */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-360 mx-auto">
          {/* Category Filter Tabs */}
          {categories.length > 1 && (
            <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveFilter(cat.id)}
                    className={`relative pb-2.5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
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

          {/* Loading, Empty, or Projects Grid */}
          {loading ? (
            <div className="py-24 text-center">
              <div className="inline-block w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin mb-4" />
              <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-widest font-semibold">
                Memuat Portofolio...
              </p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-24 text-center max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1">
                Belum Ada Portofolio
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                {activeFilter !== "all"
                  ? "Tidak ada portofolio untuk kategori ini."
                  : "Portofolio akan tampil setelah ditambahkan melalui panel admin."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 hover:border-stone-900 hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.location && project.location !== "-" && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                          {project.location}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                        <span className="uppercase tracking-wider font-semibold">{project.type}</span>
                        {project.year && project.year !== "-" && <span>{project.year}</span>}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-black transition-colors mb-2">
                        {project.title}
                      </h3>
                      {project.desc && (
                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-2">
                          {project.desc}
                        </p>
                      )}
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-stone-900">
                      <span>{project.area !== "-" ? project.area : ""}</span>
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ml-auto">
                        Lihat Detail &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
