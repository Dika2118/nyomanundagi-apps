import React, { useState, useEffect } from "react";
import BlogDetail from "./BlogDetail";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import aboutBanner from "../assets/images/about-banner.jpg";
import nyomanImg from "../assets/images/nyoman.png";
import { getBlogs, resolveImageUrl } from "../api/client";

const defaultFeaturedArticle = {
  id: "featured-1",
  title: "Nyoman Undagi Featured in Bali Interiors",
  category: "NEWS",
  date: "17 June 2025",
  readTime: "1 min read",
  image: porto1,
  excerpt:
    "Nyoman Undagi has been featured in Bali Interiors, celebrating our signature approach to tropical contemporary living, seamless indoor-outdoor connections, and the timeless artistry of Balinese Undagi craftsmanship.",
};

const defaultBlogPosts = [
  {
    id: "post-1",
    title: "Nyoman Undagi: A Story of Growth and Vision",
    category: "NEWS",
    date: "14 Mar 2025",
    readTime: "3 min read",
    image: nyomanImg,
    isPortrait: true,
    excerpt:
      "In 2025, Nyoman Undagi celebrates its 15th anniversary. A letter reflecting on fifteen years of architectural practice and continuous innovation.",
  },
  {
    id: "post-2",
    title: "5 Benefits of Professional Architectural Consultation for Your Bali Project",
    category: "NEWS",
    date: "11 Feb 2025",
    readTime: "4 min read",
    image: banner3,
    excerpt:
      "A successful architectural project hinges on precision planning and regulatory alignment. Here is why hiring a seasoned professional saves both capital and time.",
  },
  {
    id: "post-3",
    title: "Sustainable Vernacular Architecture: The Future of Tropical Living",
    category: "INSIGHTS",
    date: "28 Jan 2025",
    readTime: "5 min read",
    image: aboutBanner,
    excerpt:
      "Exploring how passive cooling strategies, reclaimed ulin wood, and cross-ventilation principles can redefine modern tropical architecture.",
  },
  {
    id: "post-4",
    title: "Behind the Blueprint: The Making of Incognito House in Tumbak Bayuh",
    category: "PORTFOLIO",
    date: "15 Jan 2025",
    readTime: "4 min read",
    image: banner4,
    excerpt:
      "An in-depth case study examining how we converted a challenging sloped terrain into a breathtaking multi-tiered luxury retreat.",
  },
  {
    id: "post-5",
    title: "Blending Traditional Balinese Feng Shui (Asta Kosala Kosali) with Contemporary Minimalist Villas",
    category: "DESIGN",
    date: "04 Jan 2025",
    readTime: "6 min read",
    image: banner2,
    excerpt:
      "How ancient spatial orientations and sacred directional axes harmonize with modern minimalist concrete lines and floor-to-ceiling glass.",
  },
  {
    id: "post-6",
    title: "Nyoman Undagi Annual Design Retrospective: 2024 Year in Review",
    category: "ACHIEVEMENT",
    date: "20 Dec 2024",
    readTime: "3 min read",
    image: banner1,
    excerpt:
      "Press release on our ongoing commitment to climate-responsive vernacular design, reclaimed timber materiality, and energy-efficient building systems.",
  },
];

export default function Blog({ onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [featuredArticle, setFeaturedArticle] = useState(defaultFeaturedArticle);
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from backend nyomanundagi-api
  useEffect(() => {
    getBlogs({ status: "Published" }).then((res) => {
      if (res && res.length > 0) {
        const mapped = res.map((b) => ({
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
          readTime: "3 min read",
          image: resolveImageUrl(b.image || b.thumbnail, banner1),
          excerpt: b.excerpt || (b.content ? b.content.slice(0, 160) + "..." : ""),
          content: b.content || "",
          raw: b,
        }));
        setFeaturedArticle(mapped[0]);
        setBlogPosts(mapped.slice(1));
      }
      setLoading(false);
    });
  }, []);

  // If user clicked any article, render the full BlogDetail view
  if (selectedPost) {
    return (
      <BlogDetail
        article={selectedPost}
        onBack={() => setSelectedPost(null)}
        onNavigate={onNavigate}
        onSelectArticle={(article) => setSelectedPost(article)}
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
        {/* ========================================================================= */}
        {/* FEATURED POST (Top Horizontal Layout) */}
        {/* ========================================================================= */}
        <div
          onClick={() => setSelectedPost(featuredArticle)}
          className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-stone-200/80"
        >
          {/* Left: Featured Image */}
          <div className="lg:col-span-7 xl:col-span-7 aspect-16/10 overflow-hidden bg-stone-100 shadow-xs rounded-xl">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right: Featured Meta & Details */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-stone-400 uppercase mb-3">
              <span>{featuredArticle.date}</span>
              <span>&bull;</span>
              <span>{featuredArticle.category || featuredArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] group-hover:text-stone-700 transition-colors leading-tight mb-4">
              {featuredArticle.title}
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#111111] uppercase group-hover:translate-x-1 transition-transform">
              <span>READ MORE</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOG GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-16/10 overflow-hidden bg-stone-100 mb-5 shadow-xs rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Meta: Date & Read Time */}
                <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-stone-400 uppercase mb-2.5">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.category || post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:text-stone-700 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
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
      </section>
    </div>
  );
}
