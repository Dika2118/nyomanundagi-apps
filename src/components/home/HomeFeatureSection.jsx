import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Home as HomeIcon, CheckCircle2 } from "lucide-react";
import { getSiteStats } from "../../api/client";
import banner1 from "../../assets/images/banner1.jpg";
import banner3 from "../../assets/images/banner3.jpg";

function Card({ item, on, onClick }) {
  const fill = on ? "#000" : "#fff";
  const line = on ? "#000" : "#d4d4d4";
  const outline = `drop-shadow(0.75px 0 0 ${line}) drop-shadow(-0.75px 0 0 ${line}) drop-shadow(0 0.75px 0 ${line}) drop-shadow(0 -0.75px 0 ${line}) drop-shadow(0 4px 6px rgba(0,0,0,.08))`;
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative my-1.5 block min-h-[120px] sm:min-h-[126px] w-full text-left cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
      style={{ "--c": fill }}
    >
      {/* lapisan bentuk kartu */}
      <span
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{ filter: outline }}
      >
        {/* 1. blok atas (mulai setelah takikan) */}
        <span className="absolute bottom-0 left-[74px] right-0 top-0 rounded-[14px] bg-[var(--c)] transition-colors duration-300" />
        {/* 2. blok bawah (lebar penuh, dengan jarak di bawah lingkaran) */}
        <span className="absolute bottom-0 left-0 right-0 top-[54px] rounded-[14px] bg-[var(--c)] transition-colors duration-300" />
        {/* 3. sudut cekung di pertemuan kedua blok */}
        <span
          className="absolute left-[62px] top-[42px] h-3 w-3"
          style={{
            background: `radial-gradient(circle at 0 0, transparent 11.5px, ${fill} 12px)`,
          }}
        />
        {/* 4. lingkaran dengan jarak atas dan bawah */}
        <span className="absolute left-[14px] top-[7px] h-[40px] w-[40px] rounded-full bg-[var(--c)] transition-colors duration-300" />
      </span>

      {/* Icon di dalam lingkaran */}
      <div className="absolute left-[14px] top-[7px] h-[40px] w-[40px] flex items-center justify-center pointer-events-none z-20">
        {Icon && (
          <Icon
            className={`w-[18px] h-[18px] transition-colors duration-300 ${on ? "text-white" : "text-neutral-800"
              }`}
          />
        )}
      </div>

      {/* konten teks */}
      <div className="relative z-10 pt-3.5 pb-4.5 pl-5 sm:pl-6 pr-5 sm:pr-6">
        {/* Judul di baris atas (sejajar ke kanan dari lingkaran) */}
        <span
          className={`block pl-[68px] sm:pl-[72px] text-[15px] sm:text-base font-bold transition-colors duration-300 leading-tight ${on ? "text-white" : "text-black"
            }`}
        >
          {item.title}
        </span>
        {/* Teks penjelasan diturunkan agar ada jarak aman dengan garis lengkungan */}
        <span
          className={`mt-6 sm:mt-6.5 block pl-1.5 text-[11.5px] sm:text-xs leading-[1.65] transition-colors duration-300 font-normal w-full ${on ? "text-gray-200" : "text-neutral-500"
            }`}
        >
          {item.desc}
        </span>
      </div>
    </button>
  );
}

export default function HomeFeatureSection({ onNavigate }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getSiteStats()
      .then((data) => setStats(data))
      .catch(() => setStats([]));
  }, []);

  // Helper: render displayed value for a stat
  // For 'years_founded' key, calculate elapsed years dynamically
  function renderStatValue(stat) {
    if (stat.key === 'years_founded') {
      const years = new Date().getFullYear() - parseInt(stat.value, 10);
      return `${years}+`;
    }
    // For customers: if value >= 1000, show abbreviated (e.g. 35000 -> 35k)
    const num = parseInt(stat.value, 10);
    if (stat.key === 'customers' && num >= 1000) {
      const cleanSuffix = (stat.suffix || '+').replace(/^k+/i, '');
      return `${Math.floor(num / 1000)}k${cleanSuffix || '+'}`;
    }
    return `${stat.value}${stat.suffix || ''}`;
  }

  // Fallback stats if API not loaded yet
  const FALLBACK_STATS = [
    { key: 'customers', label: 'Customers', value: '35000', suffix: 'k+' },
    { key: 'years_founded', label: 'Years in Business', value: '2010', suffix: null },
    { key: 'projects', label: 'Projects', value: '6', suffix: '+' },
  ];

  // Only show first 3 stats (customers, years, projects) in Home section
  const displayStats = (stats.length > 0 ? stats : FALLBACK_STATS).slice(0, 3);

  const items = [
    {
      id: 0,
      title: t("home.features_section.card_trusted_title"),
      desc: t("home.features_section.card_trusted_desc"),
      icon: ShieldCheck,
    },
    {
      id: 1,
      title: t("home.features_section.card_properties_title"),
      desc: t("home.features_section.card_properties_desc"),
      icon: HomeIcon,
    },
    {
      id: 2,
      title: t("home.features_section.card_process_title"),
      desc: t("home.features_section.card_process_desc"),
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full space-y-24 sm:space-y-32 pt-16 sm:pt-24 pb-12">
      {/* ================= SECTION 1: COMMITTED TO HELPING YOU ================= */}
      <section className="w-full">
        {/* Header: Title Left, Subtitle & Button Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
              {t("home.features_section.title_1_line1")} <br className="hidden sm:inline" />
              {t("home.features_section.title_1_line2")}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-start gap-4 max-w-md">
            <p className="text-xs sm:text-sm md:text-[14.5px] text-neutral-500 leading-relaxed">
              {t("home.features_section.desc_1")}
            </p>
          </div>
        </div>

        {/* Bento Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Top Sub-Row: Our Vision Card + Middle Landscape Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1: Our Vision */}
              <div className="bg-[#f4f4f6] rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    {t("home.features_section.vision_title")}
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                    {t("home.features_section.vision_desc")}
                  </p>
                </div>
              </div>

              {/* Card 2: Modern Villa Landscape Image */}
              <div className="rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[240px] relative group bg-neutral-100 shadow-2xs">
                <img
                  src={banner1}
                  alt="Modern Architecture"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>

            {/* Bottom Sub-Row: What We Offer (Black Card) */}
            <div className="bg-[#0f0f10] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-lg">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t("home.features_section.offer_title")}
                </h3>
                <p className="mt-3 text-xs sm:text-[13.5px] text-neutral-300 leading-relaxed font-light">
                  {t("home.features_section.offer_desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Vertical Architecture Image (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[440px] lg:min-h-full relative group bg-neutral-100 shadow-2xs">
            <img
              src={banner3}
              alt="Exclusive Contemporary House"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY WE'RE THE RIGHT CHOICE ================= */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: Title, Paragraph, and Statistics (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold tracking-tight text-neutral-950 leading-[1.12] max-w-2xl">
                {t("home.features_section.title_2_line1")} <br className="hidden sm:inline" />
                {t("home.features_section.title_2_line2")}
              </h2>

              <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-[15px] text-neutral-500 leading-relaxed font-light max-w-2xl text-justify sm:text-left">
                {t("home.features_section.desc_2")}
              </p>
            </div>

            {/* Statistics Counters */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
              {displayStats.map((stat) => (
                <div key={stat.key}>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
                    {renderStatValue(stat)}
                  </span>
                  <span className="block mt-1 text-xs sm:text-sm font-medium text-neutral-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Feature Cards (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            {items.map((it, i) => (
              <Card
                key={it.title}
                item={it}
                on={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
