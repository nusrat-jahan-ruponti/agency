import { useParams, Link } from "react-router-dom";
import { defaultServices } from "../Components/section/services/ServicesList";
import ServiceHero from "../Components/section/services/ServiceHero";
import WhatWeOffer from "../Components/section/services/WhatWeOffer";
import dashboard from "../assets/dashbord.png";
import HomeWork from "../Components/section/services/HowWeWork";
import TrustedClients from "../Components/section/TrustedClient";
import PersonalizeSection from "../Components/section/services/PersonalizeSection";
import ProductDevelopment from "../Components/section/services/ProductDevelopment";
import CTA from "../Components/section/services/Cta";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = defaultServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-indigo-500 underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <>
      <ServiceHero title={service.title} description={service.text} />
      <WhatWeOffer/>
      <HomeWork />
      <TrustedClients align="center" title="Trusted by Leading Companies" />
      <PersonalizeSection/>
      <ProductDevelopment/>
      <CTA/>
      
    </>
  );
}