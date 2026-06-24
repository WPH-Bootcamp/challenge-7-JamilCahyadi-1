import { stats } from "../../data/stats";

const StatsSection = () => {
  return (
    <section className="bg-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mt-4 text-gray-500">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 rounded-3xl p-8 text-center hover:border-primary transition"
            >
              <h3 className="text-5xl font-bold text-white">{item.number}</h3>
              <p className="mt-3 text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;