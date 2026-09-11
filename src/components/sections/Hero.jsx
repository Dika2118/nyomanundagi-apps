import { useEffect, useRef, useState } from "react";

const ROLES = ["Architect", "Interior Designer", "Space Planner", "Design Consultant"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && charIndex <= currentRole.length) {
      setDisplayed(currentRole.slice(0, charIndex));
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c + 1), 90);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      setDisplayed(currentRole.slice(0, charIndex));
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-stone-500/10 blur-[100px]" />
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left – Text */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-600/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Available for Projects
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Nyoman
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600">
                Undagi
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-px bg-amber-500" />
              <p className="text-xl md:text-2xl text-stone-300 font-light tracking-wide h-8">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-amber-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
            Merancang ruang yang berbicara — memadukan estetika modern dengan
            kearifan lokal Bali untuk menciptakan hunian yang{" "}
            <span className="text-amber-400 font-medium">indah</span> dan{" "}
            <span className="text-amber-400 font-medium">bermakna</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#portfolio"
              id="hero-cta-portfolio"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:scale-105"
            >
              <span className="relative z-10">Lihat Portfolio</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stone-600 text-stone-300 font-semibold text-base transition-all duration-300 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/5 hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-stone-800 mt-2">
            {[
              { value: "150+", label: "Proyek Selesai" },
              { value: "12", label: "Tahun Pengalaman" },
              { value: "98%", label: "Klien Puas" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-stone-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Visual card */}
        <div className="relative flex justify-center items-center lg:justify-end">
          {/* Decorative ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-amber-500/10 animate-spin-slow" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-amber-500/5" />

          {/* Card */}
          <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-stone-700/50 bg-stone-900/60 backdrop-blur-xl shadow-2xl">
            {/* Image placeholder with gradient */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
              {/* Faux architectural image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-stone-600"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <rect x="10" y="60" width="80" height="30" rx="2" />
                  <rect x="20" y="40" width="60" height="22" rx="2" />
                  <rect x="35" y="20" width="30" height="22" rx="2" />
                  <rect x="45" y="10" width="10" height="12" rx="1" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

              {/* Floating tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-stone-700/50">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-stone-300 text-xs font-medium">Open to Work</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-white font-bold text-xl">Nyoman Undagi</h3>
                <p className="text-stone-400 text-sm mt-1">Bali-based Architect & Interior Designer</p>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {["Residential", "Commercial", "Hospitality", "Bali Style"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social icons row */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-800">
                {[
                  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    id={`hero-social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
