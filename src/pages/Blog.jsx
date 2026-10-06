import React, { useState, useEffect } from "react";
import BlogDetail from "./BlogDetail";
import banner5 from "../assets/images/banner5.webp";
import { getBlogs, getBlogDetail, resolveImageUrl } from "../api/client";

function getArticleIdFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  // Match #/blog/:id or #/blog/:slug
  if (parts.length >= 2 && parts[0].toLowerCase() === "blog") {
    return decodeURIComponent(parts[1].split("?")[0]);
  }
  return null;
}

export default function Blog({ onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapBlog = (b) => ({
    id: b.id,
    slug: b.slug,
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
  });

  // Fetch real blogs from backend nyomanundagi-api
  useEffect(() => {
    setLoading(true);
    getBlogs({ all: true })
      .then((res) => {
        const list = Array.isArray(res) ? res : (res?.data || []);
        // Prioritize published status if provided
        const published = list.filter((b) => !b.status || b.status.toLowerCase() === "published");
        const activeList = published.length > 0 ? published : list;

        if (activeList.length > 0) {
          const mapped = activeList.map(mapBlog);
          setAllArticles(mapped);
          setFeaturedArticle(mapped[0]);
          setBlogPosts(mapped.slice(1));

          // Check if user entered URL directly with article ID/slug
          const currentArticleId = getArticleIdFromHash();
          if (currentArticleId) {
            const found = mapped.find(
              (item) =>
                String(item.id) === String(currentArticleId) ||
                item.slug === currentArticleId ||
                item.raw?.slug === currentArticleId
            );
            if (found) {
              setSelectedPost(found);
            } else {
              getBlogDetail(currentArticleId).then((detailRes) => {
                if (detailRes) {
                  const b = detailRes.data || detailRes;
                  setSelectedPost(mapBlog(b));
                }
              });
            }
          }
        } else {
          setAllArticles([]);
          setFeaturedArticle(null);
          setBlogPosts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setAllArticles([]);
        setFeaturedArticle(null);
        setBlogPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Listen to browser Back / Forward buttons (hashchange event)
  useEffect(() => {
    const handleHashChange = () => {
      const articleId = getArticleIdFromHash();
      if (!articleId) {
        // User clicked browser Back to #/blog
        setSelectedPost(null);
      } else {
        // User navigated to an article via browser history
        const found = allArticles.find(
          (item) =>
            String(item.id) === String(articleId) ||
            item.slug === articleId ||
            item.raw?.slug === articleId
        );
        if (found) {
          setSelectedPost(found);
        } else {
          getBlogDetail(articleId).then((detailRes) => {
            if (detailRes) {
              const b = detailRes.data || detailRes;
              setSelectedPost(mapBlog(b));
            }
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [allArticles]);

  const handleSelectArticle = (article) => {
    if (!article) return;
    const identifier = article.slug || article.raw?.slug || article.id;
    const targetHash = `#/blog/${identifier}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setSelectedPost(article);
  };

  const handleBackToBlogList = () => {
    setSelectedPost(null);
    if (window.location.hash.toLowerCase().startsWith("#/blog/")) {
      window.location.hash = "#/blog";
    }
  };

  // If user clicked any article, render the full BlogDetail view
  if (selectedPost) {
    return (
      <BlogDetail
        article={selectedPost}
        onBack={handleBackToBlogList}
        onNavigate={onNavigate}
        onSelectArticle={handleSelectArticle}
      />
    );
  }

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER JOURNAL */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] min-h-110 max-h-160 bg-stone-950 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={banner5}
            alt="Blog & Insights Banner"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1200 ease-out"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 py-12">
          {/* Tag: - JOURNAL */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-stone-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-stone-300 uppercase">
              JOURNAL
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
            Blog &amp; Insights
          </h1>

          {/* Small Divider */}
          <div className="w-12 h-0.5 bg-stone-400 mx-auto my-4" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-[15px] font-light text-stone-200 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            News, achievements, press releases, and design insights from Nyoman Undagi Architect.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN BLOG CONTENT */}
      {/* ========================================================================= */}
      <section className="w-full py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-360 mx-auto">
        {loading ? (
          <div className="py-24 text-center">
            <div className="inline-block w-8 h-8 border-2 border-stone-300 border-t-stone-800 rounded-full animate-spin mb-4" />
            <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Memuat Artikel...</p>
          </div>
        ) : !featuredArticle && blogPosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-sm font-medium tracking-wider text-stone-400 uppercase">
              Belum ada artikel yang dipublikasikan.
            </p>
          </div>
        ) : (
          <>
            {/* FEATURED POST (Top Horizontal Layout) */}
            {featuredArticle && (
              <div
                onClick={() => handleSelectArticle(featuredArticle)}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-stone-200/80"
              >
                {/* Left: Featured Image */}
                {featuredArticle.image && (
                  <div className="lg:col-span-7 xl:col-span-7 aspect-16/10 overflow-hidden bg-stone-100 shadow-xs rounded-xl">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                )}

                {/* Right: Featured Meta & Details */}
                <div className={`${featuredArticle.image ? "lg:col-span-5 xl:col-span-5" : "lg:col-span-12"} flex flex-col justify-center`}>
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-stone-400 uppercase mb-3">
                    <span>{featuredArticle.date}</span>
                    <span>&bull;</span>
                    <span>{featuredArticle.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] group-hover:text-stone-700 transition-colors leading-tight mb-4">
                    {featuredArticle.title}
                  </h2>

                  {featuredArticle.excerpt && (
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  )}

                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#111111] uppercase group-hover:translate-x-1 transition-transform">
                    <span>READ MORE</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            )}

            {/* BLOG GRID */}
            {blogPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handleSelectArticle(post)}
                    className="group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container */}
                      {post.image && (
                        <div className="aspect-16/10 overflow-hidden bg-stone-100 mb-5 shadow-xs rounded-xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                      )}

                      {/* Meta: Date */}
                      <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-stone-400 uppercase mb-2.5">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.category}</span>
                      </div>

                      {/* Post Title */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:text-stone-700 transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Read More Link */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#111111] uppercase group-hover:translate-x-1 transition-transform">
                        <span>Read Article</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
