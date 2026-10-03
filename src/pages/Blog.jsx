import React, { useState } from "react";
import BlogDetail from "./BlogDetail";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.webp";
import porto1 from "../assets/images/porto1.webp";
import aboutBanner from "../assets/images/about-banner.jpg";
import nyomanImg from "../assets/images/nyoman.png";

const categories = [
  { id: "ALL", label: "ALL" },
  { id: "ACHIEVEMENT", label: "ACHIEVEMENT" },
  { id: "MONOGRAM", label: "MONOGRAM" },
  { id: "NEWS", label: "NEWS" },
  { id: "PRESS RELEASE", label: "PRESS RELEASE" },
];

const featuredArticle = {
  id: "featured-1",
  title: "Lumbung Architect Featured in Bali Interiors",
  category: "NEWS",
  date: "17 June 2025",
  readTime: "1 min read",
  image: porto1,
  excerpt:
    "Lumbung Architect has been featured in Bali Interiors, celebrating our signature approach to tropical contemporary living, seamless indoor-outdoor connections, and the timeless artistry of Balinese Undagi craftsmanship.",
};

const blogPosts = [
  {
    id: "post-1",
    title: "Lumbung Architect: A Story of Growth and Vision",
    category: "NEWS",
    date: "14 Mar 2025",
    readTime: "3 min read",
    image: nyomanImg,
    isPortrait: true,
    excerpt:
      "In 2025, Lumbung Architect celebrates its 15th anniversary. A letter from Gus Pra, COO & co-founder, reflecting on fifteen years of architectural practice and continuous innovation.",
  },
  {
    id: "post-2",
    title: "5 Benefits of Professional Architectural Consultation for Your Bali Project",
    category: "NEWS",
    date: "11 Feb 2025",
    readTime: "4 min read",
    image: banner2,
    excerpt:
      "Bali's breathtaking landscapes make it a top-choice location for construction. Here's how partnering with an expert architectural firm protects your investment and elevates lifestyle value.",
  },
  {
    id: "post-3",
    title: "Lumbung Architect Featured by Liputan6",
    category: "NEWS",
    date: "01 Dec 2024",
    readTime: "2 min read",
    image: banner3,
    excerpt:
      "Lumbung Architect featured by Liputan6, highlighting the importance of harmonizing tradition with modernity in Balinese architectural landscapes across regional and global destinations.",
  },
  {
    id: "post-4",
    title: "Asia Pacific Property Awards 2024 Winner",
    category: "ACHIEVEMENT",
    date: "24 Oct 2024",
    readTime: "3 min read",
    image: aboutBanner,
    excerpt:
      "Lumbung Architect was honored with the prestigious Asia Pacific Property Awards in Bangkok for outstanding architecture in single residential design.",
  },
  {
    id: "post-5",
    title: "Best Residential Architecture Indonesia",
    category: "ACHIEVEMENT",
    date: "15 Aug 2024",
    readTime: "4 min read",
    image: banner4,
    excerpt:
      "Recognized for excellence in single residential architecture and bespoke tropical sanctuary design at the International Property Awards.",
  },
  {
    id: "post-6",
    title: "Expanding Sustainable Modern Tropical Architecture",
    category: "PRESS RELEASE",
    date: "10 Jun 2024",
    readTime: "3 min read",
    image: banner1,
    excerpt:
      "Press release on our ongoing commitment to climate-responsive vernacular design, reclaimed timber materiality, and energy-efficient building systems.",
  },
];

export default function Blog({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedPost, setSelectedPost] = useState(null);

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

  const filteredPosts =
    activeCategory === "ALL"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const isFeaturedVisible =
    activeCategory === "ALL" || featuredArticle.category === activeCategory;

  return (
    <div className="w-full bg-white text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER JOURNAL (Screenshot 1) */}
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
          {/* Tag: — JOURNAL */}
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
            News, achievements, press releases, and design insights from Lumbung Architect.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER TABS & MAIN CONTENT */}
      {/* ========================================================================= */}
      <section className="w-full py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-360 mx-auto">
        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-start gap-6 sm:gap-10 overflow-x-auto pb-4 mb-12 sm:mb-16 border-b border-stone-100 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 pb-2 ${
                  isActive ? "text-[#111111] border-b-2 border-[#111111]" : "text-stone-400 hover:text-stone-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. FEATURED POST (Top Horizontal Layout) */}
        {/* ========================================================================= */}
        {isFeaturedVisible && (
          <div
            onClick={() => setSelectedPost(featuredArticle)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-stone-200/80"
          >
            {/* Left: Featured Image */}
            <div className="lg:col-span-7 xl:col-span-7 aspect-16/10 overflow-hidden bg-stone-100 shadow-xs">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right: Featured Meta & Details */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase mb-3">
                <span className="text-[#111111] font-bold">{featuredArticle.category}</span>
                <span>&bull;</span>
                <span className="text-stone-400 font-normal">{featuredArticle.date}</span>
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
        )}

        {/* ========================================================================= */}
        {/* 4. 3-COLUMN BLOG GRID (Screenshot 2) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-16/10 overflow-hidden bg-stone-100 mb-5 shadow-xs">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Meta: Category & Date */}
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-stone-500 uppercase mb-2.5">
                  <span className="text-[#111111] font-bold">{post.category}</span>
                  <span>&bull;</span>
                  <span className="text-stone-400 font-light">{post.date}</span>
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
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#111111] uppercase group-hover:translate-x-1 transition-transform">
                  <span>READ ARTICLE</span>
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
