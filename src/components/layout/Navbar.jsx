import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo_removebg.png";

export default function Navbar({ currentRoute = "HOME", onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ID");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#/" },
    { label: "ABOUT", href: "#/about" },
    { label: "PORTFOLIO", href: "#/portfolio" },
    { label: "BLOG", href: "#/blog" },
    { label: "BALINESE STYLE", href: "#/balinese-style" },
    { label: "CAREERS", href: "#/careers" },
    { label: "CONTACT", href: "#/contact" },
  ];

  const languages = ["ID", "EN"];

  const handleNavClick = (label, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(label);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xs transition-all duration-300 ${
        isScrolled
          ? "shadow-md border-b border-stone-200 py-2 sm:py-2.5"
          : "shadow-sm border-b border-stone-200/60 py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#/"
            className="flex items-center gap-2 shrink-0 group cursor-pointer"
            onClick={(e) => handleNavClick("HOME", e)}
          >
            <img
              src={logoImg}
              alt="Lumbung Architect Logo"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9">
            {navItems.map((item) => {
              const isActive = currentRoute === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, e)}
                  className={`relative py-1.5 text-xs font-bold tracking-wider transition-colors duration-200 uppercase cursor-pointer ${
                    isActive ? "text-black" : "text-stone-700 hover:text-black"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full animate-in fade-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center justify-center gap-1.5 bg-black text-white px-3.5 py-1.5 rounded-xs text-xs font-bold tracking-wider hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
                aria-expanded={langDropdownOpen}
                aria-label="Select Language"
              >
                <span>{selectedLang}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Language Menu */}
              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-20 bg-white border border-stone-200 rounded-sm shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs font-bold tracking-wider transition-colors cursor-pointer ${
                          selectedLang === lang
                            ? "bg-stone-100 text-black"
                            : "text-stone-600 hover:bg-stone-50 hover:text-black"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-stone-700 hover:text-black hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="xl:hidden mt-4 pt-4 border-t border-stone-200 pb-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = currentRoute === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, e)}
                  className={`px-3 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                    isActive
                      ? "bg-stone-100 text-black border-l-4 border-black"
                      : "text-stone-700 hover:bg-stone-50 hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
