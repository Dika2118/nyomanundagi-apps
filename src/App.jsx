import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

function getRouteFromHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash.includes("about")) return "ABOUT";
  if (hash.includes("portfolio")) return "PORTFOLIO";
  if (hash.includes("contact")) return "CONTACT";
  if (hash.includes("blog")) return "BLOG";
  if (hash.includes("media")) return "MEDIA";
  if (hash.includes("balinese-style") || hash.includes("balinese")) return "BALINESE STYLE";
  if (hash.includes("careers") || hash.includes("career")) return "CAREERS";
  return "HOME";
}

function getHashFromRoute(route) {
  switch (route) {
    case "ABOUT":
      return "#/about";
    case "PORTFOLIO":
      return "#/portfolio";
    case "CONTACT":
      return "#/contact";
    case "BLOG":
      return "#/blog";
    case "MEDIA":
      return "#/media";
    case "BALINESE STYLE":
      return "#/balinese-style";
    case "CAREERS":
      return "#/careers";
    case "HOME":
    default:
      return "#/";
  }
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    const newHash = getHashFromRoute(route);
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-black selection:text-white">
      {/* Top Fixed Header / Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area based on Active Page */}
      <main className="flex-1 w-full">
        <AppRoutes currentRoute={currentRoute} onNavigate={handleNavigate} />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
