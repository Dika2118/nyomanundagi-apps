import React, { useEffect } from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import { resolveImageUrl } from "../api/client";

export default function BlogDetail({ article, onBack, onNavigate, onSelectArticle }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [article]);

  // Default article data matching reference screenshot
  const currentArticle = article || {
    id: "featured-1",
    title: "Lumbung Architect Featured in Bali Interiors",
    category: "NEWS",
    date: "17 June 2025",
    readTime: "1 min read",
    image: banner1,
  };

  const designHighlights = [
    "A feng shui-influenced layout consulted by a Jakarta-based master",
    "Kitchen with avocado green tones and marble dining table seating eight",
    "Custom five-month sofa in the living room",
    "Children's bedrooms personalized to each child's preferences",
    "Master suite with rose gold fixtures and sensor-activated toilet",
    "Small home office (4x4 meters) for sketching and meetings",
    "Cross-ventilation and strategic window placement for climate control",
    "The garden measures 40 square meters and features custom-patterned traditional tiles and glass blocks for openness.",
  ];

  const relatedArticles = [
    {
      id: "related-1",
      title: "Rumah Semilir: A Villa That Embraces Nature in Cemagi, Bali",
      category: "NEWS",
      date: "01 Jun 2024",
      readTime: "3 min read",
      image: banner2,
    },
    {
      id: "related-2",
      title: "5 Sustainable Design Practices We Implement in Every Bali Villa",
      category: "INSIGHTS",
      date: "15 May 2024",
      readTime: "5 min read",
      image: banner3,
    },
    {
      id: "related-3",
      title: "Lumbung Architect Featured by Liputan6",
      category: "NEWS",
      date: "01 Dec 2024",
      readTime: "4 min read",
      image: banner4,
    },
  ];

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(currentArticle.title);
  const articleCover = resolveImageUrl(currentArticle.image, banner1);

  return (
    <div data-navbar-light="true" className="w-full bg-white text-[#111111] pt-20 sm:pt-24 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. ARTICLE HEADER & BREADCRUMBS */}
      {/* ========================================================================= */}
      <section className="w-full pt-4 sm:pt-6 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 max-w-280 mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-500 font-medium mb-8">
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
            onClick={() => onBack ? onBack() : onNavigate && onNavigate("BLOG")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Blog
          </button>
          <span className="text-stone-300">/</span>
          <span className="text-stone-800 font-semibold truncate max-w-xs">{currentArticle.title}</span>
        </nav>

        {/* Main Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight mb-8">
          {currentArticle.title}
        </h1>

        {/* Meta Bar: Date & Share Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-100">
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-500 font-light">
            <span>{currentArticle.date}</span>
            <span>&bull;</span>
            <span className="uppercase">{currentArticle.category || currentArticle.readTime || "JOURNAL"}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-widest text-stone-400 uppercase">
              SHARE:
            </span>
            {/* WhatsApp Share */}
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-stone-900 flex items-center justify-center text-stone-700 hover:text-black transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.776.849 2.796.85 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.115-.515-.992-.416-1.637-1.428-1.685-1.492-.049-.064-.407-.542-.407-1.035 0-.493.256-.733.348-.834.091-.101.198-.127.264-.127.065 0 .131.002.188.006.06.004.14-.023.218.167.082.198.278.679.303.73.025.05.041.109.008.176-.033.067-.05.109-.099.167-.049.058-.104.13-.148.175-.05.05-.102.105-.044.205.058.099.256.422.548.683.376.335.694.438.793.488.099.049.157.042.215-.025.058-.066.248-.289.314-.388.066-.099.132-.083.223-.049.091.033.578.272.677.322.099.049.165.074.19.115.025.042.025.244-.119.649z" />
              </svg>
            </a>
            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-stone-900 flex items-center justify-center text-stone-700 hover:text-black transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Twitter / X Share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-stone-900 flex items-center justify-center text-stone-700 hover:text-black transition-colors cursor-pointer"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured Full Image */}
        <div className="w-full aspect-16/10 sm:aspect-video overflow-hidden bg-stone-100 my-8 sm:my-10 shadow-xs rounded-xl">
          <img
            src={articleCover}
            alt={currentArticle.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ========================================================================= */}
        {/* 2. ARTICLE NARRATIVE */}
        {/* ========================================================================= */}
        <div className="w-full space-y-6 text-stone-700 text-sm sm:text-base font-light leading-relaxed mb-12 sm:mb-16">
          {currentArticle.content ? (
            <div className="whitespace-pre-line leading-relaxed text-stone-800 text-base">
              {currentArticle.content}
            </div>
          ) : (
            <>
              <p>
                Bali Interiors recently showcased the personal residence of Andri Saputra, principal architect at Nyoman Undagi Architect, in a video titled <strong className="font-semibold text-black">&ldquo;Take a Peek Into My Paradise.&rdquo;</strong>
              </p>
              <p>
                The home combines contemporary and traditional design elements. Completed in 2025 after conceptualization in 2023, it features four bedrooms, four bathrooms, and open-plan living spaces. Construction and interior styling were handled by Bentuk Ruang.
              </p>

              {/* Subheading: Design Highlights */}
              <div className="pt-6 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] inline-block relative pb-2">
                  Design Highlights
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#111111]" />
                </h2>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3 pt-2 text-stone-600">
                {designHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM SHARE & PREVIOUS ARTICLE BOX */}
        {/* ========================================================================= */}
        <div className="w-full pt-8 pb-14 border-t border-stone-200">
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              type="button"
              onClick={() => onBack ? onBack() : onNavigate && onNavigate("BLOG")}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#111111] hover:text-stone-600 uppercase cursor-pointer"
            >
              <span>&larr;</span>
              <span>BACK TO BLOG</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RELATED ARTICLES */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-stone-50 px-6 sm:px-10 lg:px-16 border-t border-stone-200">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase block mb-1">
                EKSPLORASI LAINNYA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Artikel Terkait
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onBack ? onBack() : onNavigate && onNavigate("BLOG")}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:underline cursor-pointer"
            >
              Semua Artikel &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle ? onSelectArticle(rel) : null}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-stone-200 hover:border-black transition-all shadow-xs hover:shadow-md"
              >
                <div className="aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1.5">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-black line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
