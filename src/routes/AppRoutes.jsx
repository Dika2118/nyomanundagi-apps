import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

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
      return <About onNavigate={onNavigate} />;
    case "CAREERS":
      return <Contact onNavigate={onNavigate} />;
    case "HOME":
    default:
      return <Home onNavigate={onNavigate} />;
  }
}
