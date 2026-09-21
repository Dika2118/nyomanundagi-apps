import React, { useState } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";

const categories = [
  { id: "all", label: "SEMUA KARYA" },
  { id: "vila", label: "VILA MEWAH" },
  { id: "kompleks-vila", label: "KOMPLEKS VILA" },
  { id: "residensial", label: "RESIDENSIAL" },
  { id: "apartemen", label: "KOMERSIAL & KANTOR" },
];

const projects = [
  {
    id: 1,
    title: "Djelantik House",
    category: "kompleks-vila",
    image: banner1,
    location: "Dewi Sri, Bali",
    year: "2024",
    area: "1,200 m²",
    type: "Complex Villa Sanctuary",
    desc: "Kombinasi pavilion terbuka dengan aksen kayu jati dan batu paras lokal untuk menciptakan suasana oasis tropis privat.",
  },
  {
    id: 2,
    title: "Amala Retreat",
    category: "vila",
    image: banner2,
    location: "Ubud, Bali",
    year: "2023",
    area: "850 m²",
    type: "Eco Luxury Sanctuary",
    desc: "Vila berkonsep vernakular kontemporer yang menyatu dengan lembah sungai dan rimbunnya hutan tropis Ubud.",
  },
  {
    id: 3,
    title: "Samudra Residence",
    category: "residensial",
    image: banner3,
    location: "Canggu, Bali",
    year: "2024",
    area: "980 m²",
    type: "Private Modern Residence",
    desc: "Hunian modern tropis dengan pencahayaan alami optimal, kolam infinity berteras, dan keterbukaan visual tanpa batas.",
  },
  {
    id: 4,
    title: "Nirvana Cliff Estate",
    category: "vila",
    image: banner4,
    location: "Uluwatu, Bali",
    year: "2023",
    area: "1,600 m²",
    type: "Cliffside Resort Villa",
    desc: "Arsitektur tebing pantai bergaris minimalis dengan panorama Samudra Hindia 180 derajat yang dramatis.",
  },
  {
    id: 5,
    title: "Villa Sukma",
    category: "vila",
    image: banner5,
    location: "Sanur, Bali",
    year: "2022",
    area: "650 m²",
    type: "Boutique Timber Villa",
    desc: "Eksplorasi ketukangan kayu ulin dan jati daur ulang yang memberikan kehangatan dan ketenangan abadi.",
  },
  {
    id: 6,
    title: "New York Office Suites",
    category: "apartemen",
    image: porto1,
    location: "Sudirman, Jakarta",
    year: "2024",
    area: "2,400 m²",
    type: "Commercial & Workspace",
    desc: "Ruang kerja premium modern yang memadukan estetika biophilic dan efisiensi ruang tingkat tinggi.",
  },
];

export default function Portfolio({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-white text-[#111111] pt-16 sm:pt-18">
      {/* ========================================================================= */}
      {/* HERO BANNER PORTFOLIO */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[55vh] sm:h-[62vh] min-h-[400px] max-h-[580px] bg-stone-900 overflow-hidden flex items-end">
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
          <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none">
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

          {/* Projects Grid */}
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
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="uppercase tracking-wider font-semibold">{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-black transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-stone-900">
                    <span>{project.area}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Lihat Detail &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal Preview */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-80 bg-stone-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase block mb-2">
                    {selectedProject.location} &bull; {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-4">
                    {selectedProject.type} &bull; Luas: {selectedProject.area}
                  </p>
                  <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-200 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/62859106532925?text=Halo%20Lumbung%20Architect,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-black hover:bg-stone-800 text-white text-center text-xs font-bold tracking-widest uppercase rounded-full transition-colors"
                  >
                    Konsultasikan Proyek Serupa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
