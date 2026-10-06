import React, { useState, useEffect } from "react";
import { getBlogs, resolveImageUrl } from "../api/client";

export default function BlogDetail({ article, onBack, onNavigate, onSelectArticle }) {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [article]);

  // Fetch real related articles from backend nyomanundagi-api
  useEffect(() => {
    if (!article?.id) return;
    getBlogs({ all: true })
      .then((res) => {
        const list = Array.isArray(res) ? res : (res?.data || []);
        const published = list.filter((b) => !b.status || b.status.toLowerCase() === "published");
        const activeList = published.length > 0 ? published : list;

        const others = activeList
          .filter((b) => String(b.id) !== String(article.id))
          .slice(0, 3)
          .map((b) => ({
            id: b.id,
            title: b.title,
            category: b.category ? b.category.toUpperCase() : "JOURNAL",
            date: b.published_at || b.created_at
              ? new Date(b.published_at || b.created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Rilis Terbaru",
            image: resolveImageUrl(b.image || b.thumbnail),
            excerpt: b.excerpt || (b.content ? b.content.slice(0, 160) + "..." : ""),
            content: b.content || "",
            raw: b,
          }));

        setRelatedArticles(others);
      })
      .catch((err) => {
        console.error("Error fetching related blogs:", err);
        setRelatedArticles([]);
      });
  }, [article?.id]);

  if (!article) {
    return (
      <div data-navbar-light="true" className="w-full bg-white text-[#111111] pt-32 pb-20 px-6 sm:px-10 max-w-280 mx-auto text-center min-h-screen">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h2>
        <p className="text-stone-500 text-sm mb-8">Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <button
          type="button"
          onClick={() => onBack ? onBack() : onNavigate && onNavigate("BLOG")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
        >
          <span>&larr;</span>
          <span>Kembali ke Blog</span>
        </button>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(article.title || "");
  const articleCover = resolveImageUrl(article.image || article.raw?.image || article.raw?.thumbnail);

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
          <span className="text-stone-800 font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Main Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight mb-8">
          {article.title}
        </h1>

        {/* Meta Bar: Date & Share Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-100">
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-500 font-light">
            {article.date && <span>{article.date}</span>}
            {article.date && article.category && <span>&bull;</span>}
            {article.category && <span className="uppercase">{article.category}</span>}
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
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured Full Image (if exists) */}
        {articleCover && (
          <div className="w-full aspect-16/10 sm:aspect-video overflow-hidden bg-stone-100 my-8 sm:my-10 shadow-xs rounded-xl">
            <img
              src={articleCover}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. ARTICLE NARRATIVE */}
        {/* ========================================================================= */}
        <div className="w-full space-y-6 text-stone-700 text-sm sm:text-base font-light leading-relaxed mb-12 sm:mb-16">
          {article.content ? (
            <div className="whitespace-pre-line leading-relaxed text-stone-800 text-base">
              {article.content}
            </div>
          ) : article.excerpt ? (
            <p className="text-stone-700 leading-relaxed text-base">
              {article.excerpt}
            </p>
          ) : (
            <p className="text-stone-400 italic">Konten artikel belum tersedia.</p>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM BACK BUTTON */}
        {/* ========================================================================= */}
        <div className="w-full pt-8 pb-14 border-t border-stone-200">
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              type="button"
              onClick={() => onBack ? onBack() : onNavigate && onNavigate("BLOG")}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#111111] hover:text-stone-600 uppercase cursor-pointer"
            >
              <span>&larr;</span>
              <span>KEMBALI KE BLOG</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RELATED ARTICLES (HANYA DITAMPILKAN JIKA ADA ARTIKEL LAIN DARI DATABASE) */}
      {/* ========================================================================= */}
      {relatedArticles.length > 0 && (
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
                  {rel.image && (
                    <div className="aspect-16/10 overflow-hidden bg-stone-100">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
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
      )}
    </div>
  );
}
