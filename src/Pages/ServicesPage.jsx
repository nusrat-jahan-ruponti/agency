import ClientTestimonials from "../Components/section/services/ClientTestimonials";
import ContactForm from "../Components/section/services/ContactForm";
import ServicesList from "../Components/section/services/ServicesList";
import WhyChooseUs from "../Components/section/services/WhyChooseUs";
export default function ServicesPage() {
  return (
    <div>
      <ServicesList/>
      <ClientTestimonials/>
      <WhyChooseUs/>
      <ContactForm/>
    </div>
  );
}