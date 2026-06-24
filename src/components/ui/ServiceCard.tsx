import type { Service } from "../../types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="border border-gray-800 bg-dark-card rounded-2xl p-6 hover:border-primary transition group">
      <div className="w-12 h-12 rounded-xl bg-orange-950 flex items-center justify-center mb-4 group-hover:bg-primary transition">
        <span className="text-primary text-xl group-hover:text-white transition">
          {service.icon}
        </span>
      </div>
      <h3 className="font-semibold text-white text-lg">{service.title}</h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;