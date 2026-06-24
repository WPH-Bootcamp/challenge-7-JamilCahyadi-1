import { services } from "../../data/services";
import ServiceCard from "../ui/ServiceCard";
import SectionHeading from "../ui/SectionHeading";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Smart IT Solutions That Grow With You"
          subtitle="Tailored tech to boost efficiency, security and results."
          dark
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;