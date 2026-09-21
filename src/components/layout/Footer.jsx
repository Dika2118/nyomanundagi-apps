import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo_removebg.png";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioElem = document.getElementById("portfolio");
      if (portfolioElem) {
        const rect = portfolioElem.getBoundingClientRect();
        setShowScrollTop(rect.top <= window.innerHeight * 0.7);
      } else {
        setShowScrollTop(window.scrollY > 450);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (route, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="w-full bg-white text-[#111111] pt-16 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-12 border-t-2 border-[#e0e0e0]">
        <div className="max-w-275 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-8 lg:gap-12 items-start pb-14 sm:pb-16">
            <div className="flex flex-col items-start pr-0 lg:pr-4">
              <a
                href="#/"
                onClick={(e) => handleNav("HOME", e)}
                className="inline-block mb-6 group cursor-pointer"
              >
                <img
                  src={logoImg}
                  alt="Lumbung Architect"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </a>
              <p className="text-[13px] text-[#737373] leading-[1.75] max-w-72.5">
                Perjalanan dalam Setiap Desain. Firma arsitektur internasional berprestasi dengan kantor di Bali, Jakarta, dan Thailand.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-5">
                HALAMAN
              </h4>
              <nav className="flex flex-col gap-3 text-[13px] text-[#737373]">
                <button
                  type="button"
                  onClick={(e) => handleNav("HOME", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Beranda
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("ABOUT", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Tentang
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("PORTFOLIO", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Portofolio
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("CONTACT", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Kontak
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("BLOG", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Blog
                </button>
              </nav>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-5">
                LAYANAN
              </h4>
              <nav className="flex flex-col gap-3 text-[13px] text-[#737373]">
                <button
                  type="button"
                  onClick={(e) => handleNav("PORTFOLIO", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Arsitektur Lengkap
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("PORTFOLIO", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Arsitektur Dasar
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("ABOUT", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Arsitektur Interior
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNav("ABOUT", e)}
                  className="text-left hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Interior & Lanskap
                </button>
              </nav>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-5">
                KONTAK
              </h4>
              <nav className="flex flex-col gap-3 text-[13px] text-[#737373]">
                <a
                  href="mailto:info@lumbungarchitect.com"
                  className="hover:text-black transition-colors duration-200 break-all"
                >
                  info@lumbungarchitect.com
                </a>
                <a
                  href="https://wa.me/62859106532925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-200"
                >
                  WhatsApp (+62 859-1065-32925)
                </a>
                <a
                  href="https://www.instagram.com/lumbungarchitect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/Lumbungarchitect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-200"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/lumbung-architect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>

          <div className="pt-7 border-t border-[#eaeaea] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#737373]">
            <div className="text-center md:text-left leading-relaxed">
              <span>© {currentYear} Lumbung Architect. Hak Cipta Dilindungi. </span>
              <button
                type="button"
                onClick={() => handleNav("CONTACT")}
                className="underline underline-offset-3 hover:text-black transition-colors duration-200"
              >
                Kebijakan Privasi
              </button>
            </div>

            <div className="flex items-center gap-4 text-[#737373]">
              <a
                href="https://www.instagram.com/lumbungarchitect/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-black transition-colors duration-200"
              >
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/Lumbungarchitect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-black transition-colors duration-200"
              >
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/lumbung-architect/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors duration-200"
              >
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top & WhatsApp Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-10 h-10 rounded-full bg-[#181818] hover:bg-black text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            showScrollTop
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <svg
            className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        <a
          href="https://wa.me/62859106532925"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp"
          className="w-12 h-12 rounded-full bg-[#181818] hover:bg-black text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
        >
          <svg
            className="w-6 h-6 fill-white text-white"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </>
  );
}
