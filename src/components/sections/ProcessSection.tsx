import { processes } from "../../data/process";
import SectionHeading from "../ui/SectionHeading";

const ProcessSection = () => {
  return (
    <section id="process" className="bg-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Our Process"
          subtitle="Clear steps. Smart execution. Results you can count on."
          dark
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {processes.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-dark-card border border-gray-800 rounded-2xl px-6 py-5 hover:border-primary transition"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                {item.id}
              </div>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;