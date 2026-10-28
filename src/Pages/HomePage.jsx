import Hero from "../Components/section/Hero";
import Features from "../Components/section/Feature";
import FeaturedProjects from "../Components/section/FeaturedProject";
import OurCompetencies from "../Components/section/OurCompetencies";
import TrustedClients from "../Components/section/TrustedClient";
import Testimonials from "../Components/section/Testimonials";
import CreativeAtmosphere from "../Components/section/CreativeAtmosphere";
import Awards from "../Components/section/Awards";
import Blog from "../Components/section/Blog";
import Contact from "../Components/section/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProjects />
      <OurCompetencies />
      <TrustedClients />
      <Testimonials />
      <CreativeAtmosphere />
      <Awards />
      <Blog />
      <Contact />
    </>
  );
}