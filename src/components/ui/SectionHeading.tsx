interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
  dark?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true, dark = false }: Props) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <p className="mt-4 text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;