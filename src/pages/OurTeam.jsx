import React from "react";
import nyomanImg from "../assets/images/nyoman.png";
import banner2 from "../assets/images/banner2.jpg";
import banner1 from "../assets/images/banner1.jpg";
import banner3 from "../assets/images/banner3.jpg";
import porto1 from "../assets/images/porto1.webp";

export default function OurTeam({ onNavigate }) {
  const leadership = {
    name: "I Nyoman Undagi, IAI",
    role: "Founder & Principal Architect",
    bio: "Dengan pengalaman lebih dari 15 tahun dalam merancang vila mewah dan kompleks residensial tropis di seluruh Bali dan mancanegara, Nyoman memadukan filosofi ketukangan spiritual Bali (Undagi) dengan ketelitian standar teknik modern.",
    quote: "“Arsitektur yang baik adalah yang bernyawa—mampu menghadirkan ketenangan jiwa bagi penghuninya dan menghormati tanah tempat ia berpijak.”",
    specialty: "Tropical Sanctuary & Vernacular Contemporary",
  };

  const teamMembers = [
    {
      name: "Wayan Darmawan, S.Ars",
      role: "Lead Project Architect",
      department: "Architecture",
      experience: "9+ Tahun Pengalaman",
      desc: "Spesialis dalam perancangan villa luxury dan efisiensi ruang pasif tropis.",
      tags: ["Masterplanning", "Tropical Design", "Luxury Villa"],
    },
    {
      name: "Made Ayu Laksmi, M.Ds",
      role: "Senior Interior Designer",
      department: "Interior Architecture",
      experience: "7+ Tahun Pengalaman",
      desc: "Ahli kurasi material organik lokal, pencahayaan arsitektural ambient, dan custom furniture.",
      tags: ["Biophilic Interior", "Materiality", "Ambient Light"],
    },
    {
      name: "Ketut Arya Wirawan, S.T",
      role: "Lead Structural & BIM Engineer",
      department: "Engineering",
      experience: "8+ Tahun Pengalaman",
      desc: "Memastikan keandalan rekayasa struktur tahan gempa, bentang lebar, dan presisi digital 3D BIM.",
      tags: ["Structural Engineering", "3D BIM", "Seismic Design"],
    },
    {
      name: "Gede Sukadana",
      role: "Master Undagi & Craftsmanship Artisan",
      department: "Craftsmanship & Heritage",
      experience: "20+ Tahun Pengalaman",
      desc: "Pelestari tradisi ketukangan kayu jati daur ulang, batu paras ukir, dan proporsi Asta Kosala Kosali.",
      tags: ["Undagi Heritage", "Wood Carving", "Balinese Masonry"],
    },
    {
      name: "Kadek Pradnya Paramita, S.Ars",
      role: "Landscape Architect",
      department: "Landscape Design",
      experience: "6+ Tahun Pengalaman",
      desc: "Mendesain integrasi lanskap hijau tropis, kolam refleksi air, dan courtyard privat bernuansa oasis.",
      tags: ["Tropical Landscape", "Water Features", "Courtyard Oasis"],
    },
    {
      name: "Putu Raditya, S.T",
      role: "Senior Project Manager & QC",
      department: "Project Management",
      experience: "10+ Tahun Pengalaman",
      desc: "Mengawal timeline, akurasi pengerjaan lapangan, dan standar kualitas premium setiap proyek.",
      tags: ["Site Management", "Quality Control", "Timeline Assurance"],
    },
  ];

  const workValues = [
    {
      title: "Kolaborasi Multi-Disiplin",
      desc: "Arsitek, interior designer, insinyur struktur, dan perajin Undagi bekerja dalam satu kesatuan visi sejak fase konsep awal.",
      badge: "One Studio",
    },
    {
      title: "Presisi & Teknologi Modern",
      desc: "Memanfaatkan Building Information Modeling (BIM) dan visualisasi fotorealistik untuk meminimalisir deviasi saat konstruksi fisik.",
      badge: "High Tech",
    },
    {
      title: "Penghormatan pada Konteks Alam",
      desc: "Setiap anggota tim menaruh perhatian mendalam terhadap topografi lahan, orientasi matahari tropis, dan pohon eksisting.",
      badge: "Contextual",
    },
  ];

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ========================================================================= */}
      {/* HERO BANNER OUR TEAM */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] min-h-[420px] max-h-[600px] bg-stone-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={banner2}
            alt="Our Team Banner"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1200 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3 drop-shadow-sm">
              TIM KAMI
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4 drop-shadow-md">
              Our Team
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl drop-shadow-sm">
              TALENTA KREATIF, PRAKTISI ARSITEKTUR, DAN PERAJIN UNDAGI YANG BERDEDIKASI
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: FOUNDER & PRINCIPAL ARCHITECT */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-[#0b3b24]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#0b3b24]">
              LEADERSHIP & VISION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-stone-50 rounded-3xl p-8 sm:p-12 md:p-16 border border-stone-200/80">
            {/* Foto Principal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white">
                <img
                  src={nyomanImg}
                  alt={leadership.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = banner1;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
                    {leadership.specialty}
                  </p>
                </div>
              </div>
            </div>

            {/* Informasi Principal */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-stone-500 block mb-1">
                  {leadership.role}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
                  {leadership.name}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg italic text-[#0b3b24] font-medium border-l-3 border-[#0b3b24] pl-4 py-1 leading-relaxed">
                {leadership.quote}
              </blockquote>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light text-justify">
                {leadership.bio}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="text-xs font-semibold bg-white border border-stone-300 text-stone-700 px-3.5 py-1.5 rounded-full">
                  Ikatan Arsitek Indonesia (IAI)
                </span>
                <span className="text-xs font-semibold bg-white border border-stone-300 text-stone-700 px-3.5 py-1.5 rounded-full">
                  15+ Tahun Praktik
                </span>
                <span className="text-xs font-semibold bg-white border border-stone-300 text-stone-700 px-3.5 py-1.5 rounded-full">
                  450+ Karya Terbangun
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: CORE TEAM MEMBERS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <span className="w-10 sm:w-14 h-[2px] bg-[#0b3b24]" />
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#0b3b24]">
                  STUDIO TEAM
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-stone-900">
                Pilar Keahlian di Balik Setiap Karya
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md font-light leading-relaxed">
              Kolektif profesional muda dan praktisi senior yang berkolaborasi mewujudkan standar arsitektur kelas dunia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-stone-50/70 p-8 rounded-2xl border border-stone-200/80 hover:border-stone-400 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#0b3b24] bg-[#0b3b24]/10 px-3 py-1 rounded-full">
                      {member.department}
                    </span>
                    <span className="text-xs font-semibold text-stone-400">
                      {member.experience}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-stone-900 tracking-tight mb-1 group-hover:text-[#0b3b24] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {member.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/70 flex flex-wrap gap-1.5">
                  {member.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium bg-stone-200/60 text-stone-700 px-2.5 py-0.5 rounded-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: WORK VALUES */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-stone-900 text-white">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-emerald-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-emerald-400">
              NILAI & BUDAYA KERJA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-800/70 border border-stone-700/60 hover:border-emerald-500/50 transition-all"
              >
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-4">
                  {val.badge}
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight mb-3">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: CTA */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-360 mx-auto bg-stone-100 rounded-3xl p-8 sm:p-14 md:p-18 border border-stone-200 text-center flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#0b3b24] uppercase mb-3">
            KOLABORASI BERSAMA KAMI
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 max-w-2xl leading-tight mb-4">
            Siap Mewujudkan Proyek Impian Anda?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light max-w-xl leading-relaxed mb-8">
            Konsultasikan ide desain, perencanaan anggaran, atau tata ruang bersama tim arsitek kami hari ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("CONTACT")}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0b3b24] hover:bg-[#072818] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all cursor-pointer"
            >
              Mulai Konsultasi
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("PORTFOLIO")}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer"
            >
              Eksplorasi Karya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
