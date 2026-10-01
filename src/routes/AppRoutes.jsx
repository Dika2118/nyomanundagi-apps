import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BalineseStyle from "../pages/BalineseStyle";
import OurTeam from "../pages/OurTeam";

export default function AppRoutes({ currentRoute, onNavigate }) {
  switch (currentRoute) {
    case "ABOUT":
      return <About onNavigate={onNavigate} />;
    case "PORTFOLIO":
      return <Portfolio onNavigate={onNavigate} />;
    case "CONTACT":
      return <Contact onNavigate={onNavigate} />;
    case "BLOG":
    case "MEDIA":
      return <Blog onNavigate={onNavigate} />;
    case "BALINESE STYLE":
      return <BalineseStyle onNavigate={onNavigate} />;
    case "OUR TEAM":
    case "CAREERS":
      return <OurTeam onNavigate={onNavigate} />;
    case "HOME":
    default:
      return <Home onNavigate={onNavigate} />;
  }
}
