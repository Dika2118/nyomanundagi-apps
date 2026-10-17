import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logoImg from "../../assets/images/logo_removebg.png";

export default function Navbar({ currentRoute = "HOME", onNavigate, forceSolid: propForceSolid }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    (i18n.language || "id").toUpperCase()
  );
  const [isLightModePage, setIsLightModePage] = useState(false);

  useEffect(() => {
    setSelectedLang((i18n.language || "id").toUpperCase());
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkLightPage = () => {
      const hasLightPage = Boolean(
        document.querySelector("[data-navbar-light='true']")
      );
      setIsLightModePage(hasLightPage);
    };

    handleScroll();
    checkLightPage();

    window.addEventListener("scroll", handleScroll);

    const observer = new MutationObserver(() => {
      checkLightPage();
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [currentRoute]);

  const navItems = [
    { key: "HOME", label: t("navbar.home"), href: "#/" },
    { key: "ABOUT", label: t("navbar.about"), href: "#/about" },
    { key: "PORTFOLIO", label: t("navbar.portfolio"), href: "#/portfolio" },
    { key: "BLOG", label: t("navbar.blog"), href: "#/blog" },
    { key: "OUR TEAM", label: t("navbar.our_team"), href: "#/our-team" },
    { key: "CONTACT", label: t("navbar.contact"), href: "#/contact" },
  ];

  const languages = ["ID", "EN"];

  const handleNavClick = (routeKey, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(routeKey);
    }
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    const langLower = lang.toLowerCase();
    i18n.changeLanguage(langLower);
    setSelectedLang(lang.toUpperCase());
    setLangDropdownOpen(false);
  };

  const isSolid = isScrolled || mobileMenuOpen || propForceSolid || isLightModePage;
  const isScrolledOrOpen = isSolid;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolledOrOpen
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200/80 py-3 sm:py-3.5"
        : "bg-transparent shadow-none border-b border-transparent py-4 sm:py-5"
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
              alt="Nyoman Undagi Logo"
              className={`h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isSolid
                ? "filter-none"
                : "brightness-0 invert drop-shadow-md"
                }`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => {
              const isActive = currentRoute === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.key, e)}
                  className={`relative py-1.5 text-xs font-bold tracking-wider transition-colors duration-200 uppercase cursor-pointer ${isSolid
                    ? isActive
                      ? "text-[#0b3b24]"
                      : "text-stone-700 hover:text-black"
                    : isActive
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors duration-200 ${isSolid ? "bg-[#0b3b24]" : "bg-white"
                        }`}
                    />
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
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xs text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${isSolid
                  ? "bg-[#0b3b24] text-white hover:bg-[#072919] shadow-xs"
                  : "border border-white/60 bg-black/25 text-white hover:bg-black/40 backdrop-blur-xs shadow-sm"
                  }`}
                aria-expanded={langDropdownOpen}
                aria-label={t("navbar.select_language")}
              >
                <span>{selectedLang}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""
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
                  <div className="absolute right-0 mt-2 w-24 bg-white border border-stone-200 rounded-sm shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full text-left px-3 py-1.5 text-xs font-bold tracking-wider transition-colors cursor-pointer ${selectedLang === lang
                          ? "bg-[#0b3b24]/10 text-[#0b3b24]"
                          : "text-stone-700 hover:bg-stone-50 hover:text-black"
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
              className={`xl:hidden p-2 rounded-md transition-colors cursor-pointer ${isSolid
                ? "text-stone-700 hover:text-black hover:bg-stone-100"
                : "text-white hover:bg-white/20"
                }`}
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
              const isActive = currentRoute === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.key, e)}
                  className={`px-3 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${isActive
                    ? "bg-[#0b3b24]/10 text-[#0b3b24] border-l-4 border-[#0b3b24]"
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
