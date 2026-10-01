import React, { useState } from "react";
import banner5 from "../assets/images/banner5.webp";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";
import porto1 from "../assets/images/porto1.webp";

export default function BalineseStyle({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("philosophy");

  const philosophies = [
    {
      title: "Tri Hita Karana",
      meaning: "Tiga Penyebab Kebahagiaan",
      desc: "Mengharmonisasikan hubungan antara manusia dengan Sang Pencipta (Parhyangan), manusia dengan sesama (Pawongan), dan manusia dengan alam sekitarnya (Palemahan) dalam setiap tata letak ruang.",
      badge: "Harmoni Semesta",
    },
    {
      title: "Tri Angga",
      meaning: "Hierarki Vertikal Tiga Zona",
      desc: "Pembagian struktur vertikal bangunan layaknya anatomi tubuh manusia: Utama Angga (atap/sakral), Madya Angga (dinding/ruang hunian), dan Nista Angga (fondasi/bumi).",
      badge: "Tata Vertikal",
    },
    {
      title: "Sanga Mandala",
      meaning: "Sembilan Arah Tata Ruang",
      desc: "Sistem zoning orientasi ruang berbasis sumbu spiritual Kaja-Kelod (Gunung-Laut) dan Kangin-Kauh (Terbit-Terbenamnya Matahari) untuk penempatan area sakral hingga servis.",
      badge: "Orientasi Spasial",
    },
    {
      title: "Asta Kosala Kosali",
      meaning: "Proporsi Berbasis Tubuh Manusia",
      desc: "Ukuran antropometrik tradisional menggunakan dimensi tubuh pemilik rumah (seperti Rai, Depa, Musti) untuk menciptakan kedekatan psikologis dan resonansi personal.",
      badge: "Proporsi Manusia",
    },
  ];

  const elements = [
    {
      name: "Batu Paras Kerobokan & Andesit",
      desc: "Batu alam khas Bali dengan tekstur berpori yang sejuk, menyerap kelembapan dan memberikan aksen dinding berkarakter autentik yang kian menawan seiring waktu.",
      image: banner1,
      tag: "Material Alami",
    },
    {
      name: "Kayu Jati & Ulin Daur Ulang",
      desc: "Kayu keras berkualitas tinggi hasil restorasi dan ketukangan undagi yang tahan terhadap cuaca tropis serta menghadirkan nuansa hangat dan mewah.",
      image: banner5,
      tag: "Ketukangan Undagi",
    },
    {
      name: "Bale & Paviliun Terbuka",
      desc: "Struktur paviliun semi-terbuka dengan teritisan atap lebar yang memaksimalkan sirkulasi ventilasi silang alami tanpa sekat masif.",
      image: banner2,
      tag: "Tipologi Ruang",
    },
    {
      name: "Elemen Air & Kolam Refleksi",
      desc: "Kolam renang infinity, gentong pancuran, dan kolam koi yang menghasilkan suara gemericik air menenangkan sekaligus menurunkan suhu mikro hunian.",
      image: banner3,
      tag: "Elemen Sensori",
    },
    {
      name: "Angkul-Angkul & Aling-Aling",
      desc: "Gerbang masuk tradisional dengan dinding pembatas visual yang menjaga privasi penghuni sekaligus menyaring energi positif sebelum masuk ke area privat.",
      image: banner4,
      tag: "Pintu Masuk & Privasi",
    },
    {
      name: "Integrasi Lanskap Tropis",
      desc: "Pohon kamboja fosil, tanaman pakis, monstera, dan taman courtyard di tengah bangunan yang menyatukan atmosfer hutan tropis ke dalam ruang santai.",
      image: porto1,
      tag: "Lanskap Biophilic",
    },
  ];

  const fusionHighlights = [
    {
      num: "01",
      title: "Seamless Indoor-Outdoor Living",
      desc: "Pintu geser kaca floor-to-ceiling dengan bingkai ramping yang dapat dibuka sepenuhnya, menyatukan ruang keluarga dengan teras kolam dan taman tropis.",
    },
    {
      num: "02",
      title: "Pencahayaan Ambient Tersembunyi",
      desc: "Menggantikan lampu gantung mencolok dengan warm indirect lighting (2700K-3000K) yang menonjolkan tekstur kayu berukir dan dinding batu alam di malam hari.",
    },
    {
      num: "03",
      title: "Teknik Struktur Modern & Ramping",
      desc: "Mengombinasikan kolom baja tersembunyi dengan balok kayu ekspos tradisional sehingga bentang ruang menjadi sangat luas dan bebas tiang tengah.",
    },
    {
      num: "04",
      title: "Efisiensi Energi Iklim Tropis",
      desc: "Desain pasif surya dengan kanopi pelindung sinar matahari langsung, taman atap hijau, serta orientasi kisi-kisi kayu untuk mengurangi beban AC.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* ========================================================================= */}
      {/* HERO BANNER BALINESE STYLE */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] min-h-[420px] max-h-[600px] bg-stone-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={banner5}
            alt="Balinese Style Architecture"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1200 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-stone-300 uppercase mb-2 sm:mb-3 drop-shadow-sm">
              GAYA ARSITEKTUR BALI
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-3 sm:mb-4 drop-shadow-md">
              Balinese Style
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-stone-200 uppercase leading-relaxed max-w-2xl drop-shadow-sm">
              SINTESIS KEARIFAN TRADISI UNDAGI DENGAN KEMEWAHAN ARSITEKTUR KONTEMPORER
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: INTRODUKSI & ESSENSI */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-[#0b3b24]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#0b3b24]">
              ESENSI ARSITEKTUR BALI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.25] tracking-tight text-[#111111]">
                Bukan sekadar dekorasi etnik, melainkan filosofi tata ruang yang bernyawa dan selaras dengan semesta.
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed font-light text-justify">
              <p>
                Arsitektur Bali yang sejati dibangun atas dasar ketukangan spiritual para <em>Undagi</em> (arsitek tradisional Bali) yang memperhitungkan keseimbangan kosmis, aliran angin tropis, dan karakter unik setiap lahan.
              </p>
              <p>
                Di Lumbung Architect, kami mentransformasikan esensi filosofi adiluhung ini ke dalam bentuk modern minimalis—menghilangkan kesan kuno yang berat, lalu menghadirkan ruang peristirahatan yang lapang, bersih, teduh, dan berkelas dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: 4 FILOSOFI UTAMA */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-stone-50/70 border-b border-stone-200/60">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-[#0b3b24]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#0b3b24]">
              4 FILOSOFI DASAR TATA RUANG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#0b3b24] bg-[#0b3b24]/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-2xl font-light text-stone-300 group-hover:text-[#0b3b24] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                    {item.meaning}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 group-hover:text-stone-700 transition-colors">
                    Prinsip Arsitektur
                  </span>
                  <svg className="w-4 h-4 text-stone-400 group-hover:text-[#0b3b24] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: ELEMEN & MATERIALITAS KHAS BALI */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-stone-100">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <span className="w-10 sm:w-14 h-[2px] bg-[#0b3b24]" />
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#0b3b24]">
                  MATERIALITAS & ELEMEN
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-stone-900">
                Tekstur Otentik & Keanggunan Alami
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md font-light leading-relaxed">
              Kombinasi material organik lokal Bali yang dipilih secara teliti untuk menghasilkan bangunan yang awet, ramah iklim, dan berkelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elements.map((elem, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 hover:shadow-xl hover:border-stone-400 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-900">
                  <img
                    src={elem.image}
                    alt={elem.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                      {elem.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-2 group-hover:text-[#0b3b24] transition-colors">
                      {elem.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {elem.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: MODERN BALINESE TROPICAL FUSION */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-stone-900 text-white">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-3.5 mb-8 sm:mb-12">
            <span className="w-10 sm:w-14 h-[2px] bg-emerald-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-emerald-400">
              MODERN TROPICAL FUSION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-white">
                Reinterpretasi Gaya Bali untuk Gaya Hidup Modern Abad 21.
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Kami tidak sekadar meniru bentuk pura atau ornamen masa lampau secara kaku. Kami mengekstraksi esensi kelapangan, keteduhan atap, dan kejernihan sirkulasi udara untuk diwujudkan dalam desain minimalis tropis yang praktis dan elegan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {fusionHighlights.map((item) => (
              <div
                key={item.num}
                className="p-7 sm:p-8 rounded-2xl bg-stone-800/80 border border-stone-700/60 hover:border-emerald-500/50 hover:bg-stone-800 transition-all duration-300"
              >
                <span className="text-2xl font-mono text-emerald-400 font-light block mb-4">
                  {item.num}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: CTA KONSULTASI */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-360 mx-auto bg-stone-100 rounded-3xl p-8 sm:p-14 md:p-18 border border-stone-200 text-center flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#0b3b24] uppercase mb-3">
            KONSULTASI ARSITEKTUR BALI
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 max-w-2xl leading-tight mb-4">
            Wujudkan Hunian Impian Bergaya Bali Kontemporer
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light max-w-xl leading-relaxed mb-8">
            Diskusikan visi vila pribadi, resort, atau kompleks residensial Anda bersama arsitek berpengalaman kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("CONTACT")}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0b3b24] hover:bg-[#072818] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all cursor-pointer"
            >
              Hubungi Arsitek Kami
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("PORTFOLIO")}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer"
            >
              Lihat Karya Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
