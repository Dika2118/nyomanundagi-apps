import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Categories from "./components/sections/Categories";
import AboutFounder from "./components/sections/AboutFounder";
import Services from "./components/sections/Services";
import Statistics from "./components/sections/Statistics";
import Testimonials from "./components/sections/Testimonials";
import BlogPreview from "./components/sections/BlogPreview";
import ConsultationCTA from "./components/sections/ConsultationCTA";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Categories />
      <AboutFounder />
      <Services />
      <Statistics />
      <Testimonials />
      <BlogPreview />
      <ConsultationCTA />
      <Contact />
    </>
  );
}

export default App;
