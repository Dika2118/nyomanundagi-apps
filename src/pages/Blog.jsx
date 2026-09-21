import React, { useState } from "react";
import banner2 from "../assets/images/banner2.jpg";
import banner5 from "../assets/images/banner5.webp";
import banner1 from "../assets/images/banner1.jpg";
import banner3 from "../assets/images/banner3.jpg";

const articles = [
  {
    id: 1,
    title: "Prinsip Arsitektur Tropis Modern: Menyatukan Alam ke Dalam Ruang Hunian",
    category: "ARSITEKTUR",
    date: "12 Maret 2024",
    readTime: "5 min baca",
    image: banner2,
    excerpt: "Bagaimana integrasi ventilasi silang, overhanging roof, dan materialitas batu alam menciptakan ketenangan abadi di iklim tropis.",
  },
  {
    id: 2,
    title: "Eksplorasi Kayu Ulin dan Jati Daur Ulang dalam Kemewahan Arsitektur Bali",
    category: "MATERIAL",
    date: "28 Februari 2024",
    readTime: "4 min baca",
    image: banner5,
    excerpt: "Sentuhan ketukangan Undagi pada kayu reclaimed menghadirkan kehangatan visual sekaligus komitmen terhadap keberlanjutan.",
  },
  {
    id: 3,
    title: "Merancang Villa Sanctuary: Antara Privasi Total dan Keterbukaan Visual",
    category: "DESAIN VILA",
    date: "15 Januari 2024",
    readTime: "6 min baca",
    image: banner1,
    excerpt: "Pendekatan zoning ruang privat dan komunal untuk villa estate mewah di kawasan Ubud dan Seminyak.",
  },
  {
    id: 4,
    title: "Filosofi Tri Hita Karana dalam Konteks Desain Arsitektur Abad 21",
    category: "BUDAYA & FILOSOFI",
    date: "04 Desember 2023",
    readTime: "7 min baca",
    image: banner3,
    excerpt: "Mengadaptasi kearifan tata ruang tradisional Bali ke dalam hunian bergaya minimalis kontemporer yang relevan secara global.",
  },
];

export default function Blog({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="w-full bg-white text-[#111111] pt-16 sm:pt-18">
      {/* ================= HERO BANNER BLOG ================= */}
      <section className="relative w-full h-[55vh] sm:h-[62vh] min-h-[400px] max-h-[580px] bg-stone-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={banner2}
            alt="Blog Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3">
              ARTIKEL & WAWASAN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4">
              Journal & Blog
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl">
              Catatan Pemikiran, Tren Arsitektur Tropis, dan Inspirasi Ruang Berjiwa
            </p>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES GRID ================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-stone-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-black transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-stone-900">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Baca Artikel &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
