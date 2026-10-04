import React, { useState, useEffect } from "react";
import { getTeamMembers, resolveImageUrl } from "../api/client";
import nyomanImg from "../assets/images/nyoman.png";
import fotoKantorImg from "../assets/images/fotokantor.jpg";
import banner1 from "../assets/images/banner1.jpg";
import {
  Home,
  Activity,
  Users,
  DollarSign,
  Heart,
  Monitor,
} from "lucide-react";

export default function OurTeam({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getTeamMembers().then((res) => {
      if (res && res.length > 0) {
        setMembers(
          res.map((m) => ({
            id: m.id,
            name: m.name,
            role: m.position || "Architect",
            category: "ALL",
            img: resolveImageUrl(m.photo || m.photo_url, nyomanImg),
          }))
        );
      }
    });
  }, []);
  const leadership = {
    name: "I Nyoman Undagi, IAI",
    role: "Founder & Principal Architect",
    bio: "Dengan pengalaman lebih dari 15 tahun dalam merancang vila mewah dan kompleks residensial tropis di seluruh Bali dan mancanegara, Nyoman memadukan filosofi ketukangan spiritual Bali (Undagi) dengan ketelitian standar teknik modern.",
    quote: "“Arsitektur yang baik adalah yang bernyawa—mampu menghadirkan ketenangan jiwa bagi penghuninya dan menghormati tanah tempat ia berpijak.”",
    specialty: "Tropical Sanctuary & Vernacular Contemporary",
  };

  const departments = [
    {
      title: "Design Team",
      icon: Home,
      desc: "Architects and Interior Designers responsible for designing and developing projects from concept through construction documentation. The team covers schematic design, 3D visualization, and drawing packages.",
    },
    {
      title: "Marketing",
      icon: Activity,
      desc: "Campaign and lead generation. Create compelling content that showcases our architectural excellence to the world.",
    },
    {
      title: "Sales",
      icon: Users,
      desc: "Client handling and business development. Help property owners realize their vision through SLA's design expertise.",
      highlight: true,
    },
    {
      title: "Finance & Accounting",
      icon: DollarSign,
      desc: "Financial reporting, invoicing, and budget management. Ensure sustainable growth and project cost control.",
    },
    {
      title: "Human Resource & GA",
      icon: Heart,
      desc: "Recruit, develop, and support our 67+ professionals. Build the SLA culture through training and IPA sessions.",
    },
    {
      title: "IT Development",
      icon: Monitor,
      desc: "Technology infrastructure, digital tools, and software systems that power our design and business operations.",
    },
  ];

  const peopleCategories = [
    "ALL",
    "BOARD OF DIRECTOR",
    "ARCHITECT",
    "DESIGN DIVISION",
    "INTERIOR DESIGN",
    "ENGINEERING",
    "MARKETING",
    "SALES",
    "FINANCE & ACCOUNTING",
    "HRGA",
    "IT",
    "CORPORATE SECRETARY",
    "SUPPORT",
  ];

  const peopleMembers = [
    {
      id: 1,
      name: "I Gusti Ngurah Andri Saputra",
      role: "CEO / Principal Architect",
      category: "BOARD OF DIRECTOR",
      img: nyomanImg,
    },
    {
      id: 2,
      name: "Wayan Darmawan, S.Ars",
      role: "Lead Project Architect",
      category: "ARCHITECT",
      img: nyomanImg,
    },
    {
      id: 3,
      name: "Made Ayu Laksmi, M.Ds",
      role: "Senior Interior Designer",
      category: "INTERIOR DESIGN",
      img: nyomanImg,
    },
    {
      id: 4,
      name: "Ketut Arya Wirawan, S.T",
      role: "Lead Structural Engineer",
      category: "ENGINEERING",
      img: nyomanImg,
    },
    {
      id: 5,
      name: "Gede Sukadana",
      role: "Master Undagi & Craft Specialist",
      category: "DESIGN DIVISION",
      img: nyomanImg,
    },
    {
      id: 6,
      name: "Putu Raditya, S.T",
      role: "Senior Project Manager & QC",
      category: "ENGINEERING",
      img: nyomanImg,
    },
    {
      id: 7,
      name: "Ni Luh Dewi Lestari",
      role: "Brand & Marketing Specialist",
      category: "MARKETING",
      img: nyomanImg,
    },
    {
      id: 8,
      name: "Agus Pratama, S.E",
      role: "Senior Sales & Client Handling",
      category: "SALES",
      img: nyomanImg,
    },
    {
      id: 9,
      name: "Komang Triana, S.Ak",
      role: "Finance & Accounting Lead",
      category: "FINANCE & ACCOUNTING",
      img: nyomanImg,
    },
    {
      id: 10,
      name: "Dewa Gede Yoga",
      role: "IT & Digital Systems Lead",
      category: "IT",
      img: nyomanImg,
    },
    {
      id: 11,
      name: "Ida Bagus Made",
      role: "HR & General Affairs",
      category: "HRGA",
      img: nyomanImg,
    },
    {
      id: 12,
      name: "Ni Putu Saraswati",
      role: "Corporate Secretary",
      category: "CORPORATE SECRETARY",
      img: nyomanImg,
    },
    {
      id: 13,
      name: "I Wayan Suweta",
      role: "Studio Support & Logistics",
      category: "SUPPORT",
      img: nyomanImg,
    },
    {
      id: 14,
      name: "Kadek Pradnya Paramita, S.Ars",
      role: "Landscape Architect",
      category: "ARCHITECT",
      img: nyomanImg,
    },
    {
      id: 15,
      name: "Anak Agung Rai",
      role: "3D BIM Visualization Specialist",
      category: "DESIGN DIVISION",
      img: nyomanImg,
    },
  ];

  const activeList = members.length > 0 ? members : peopleMembers;
  const filteredPeople = activeCategory === 'ALL' ? activeList : activeList.filter((m) => m.category === activeCategory);

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
      {/* HERO BANNER OUR TEAM — FOTO BERSAMA */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] min-h-120 max-h-190 bg-stone-900 overflow-hidden flex items-end">
        {/* Background Image: Foto Bersama (Grayscale) */}
        <div className="absolute inset-0 z-0">
          <img
            src={fotoKantorImg}
            alt="Join Our Team - Foto Kantor"
            className="w-full h-full object-cover object-center scale-100 hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Overlay gradient top (untuk navbar) */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Overlay gradient left (untuk keterbacaan teks judul) */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Overlay gradient bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content (Bottom-Left) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3 drop-shadow-sm">
              CAREERS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4 drop-shadow-md">
              Join Our Team
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl drop-shadow-sm">
              CURRENT TEAM STRUCTURE AND OPPORTUNITIES AT NYOMAN UNDAGI.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: OUR DEPARTMENTS (FIND YOUR PLACE) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          {/* Header: OUR DEPARTMENTS / Find Your Place */}
          <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-0.5 bg-stone-900" />
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-stone-900 uppercase">
                OUR DEPARTMENTS
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Find Your Place
            </h3>
          </div>

          {/* Department Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 sm:p-9 flex flex-col items-start transition-all duration-300 group cursor-default ${dept.highlight
                    ? "border border-stone-900 shadow-sm"
                    : "border border-stone-200 hover:border-stone-900 hover:shadow-md"
                    }`}
                >
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 tracking-tight">
                    {dept.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: OUR PEOPLE (BEHIND EVERY DESIGN) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-0.5 bg-stone-900" />
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-stone-900 uppercase">
                OUR PEOPLE
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Behind Every Design
            </h3>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-10 sm:mb-12">
            {peopleCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-sm transition-all cursor-pointer ${isActive
                    ? "bg-[#0b3b24] text-white border border-[#0b3b24] shadow-xs"
                    : "bg-white text-stone-700 hover:text-black border border-stone-300 hover:border-stone-500"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* People Grid (5 Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredPeople.map((person) => (
              <div
                key={person.id}
                className="group relative aspect-4/5 bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover Reveal Information (Sesuai Referensi Gambar) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none">
                  <h4 className="font-bold text-sm sm:text-base md:text-[17px] text-white tracking-tight leading-snug drop-shadow-sm">
                    {person.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-normal leading-tight mt-1 drop-shadow-xs">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      {/* SECTION: CTA */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#0b3b24] uppercase mb-4">
            KOLABORASI BERSAMA KAMI
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 max-w-2xl leading-tight mb-4">
            Siap Mewujudkan Proyek Impian Anda?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light max-w-xl leading-relaxed mb-8">
            Konsultasikan ide desain, perencanaan anggaran, atau tata ruang bersama tim arsitek kami hari ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
