import Button from "../ui/Button";
import heroImage from "../../assets/PictureHero.png"
import upworkLogo from "../../assets/Logo/Upwork.png";
import zoomLogo from "../../assets/logo/Zoom.png";
import postmanLogo from "../../assets/logo/Postman.png";
import databricksLogo from "../../assets/logo/Databricks.png";
import airbnbLogo from "../../assets/logo/airbnb.png";
import dropboxLogo from "../../assets/logo/Dropbox.png";
import paypalLogo from "../../assets/logo/PayPal.png";

const brands = [
  upworkLogo,
  zoomLogo,
  postmanLogo,
  databricksLogo,
  airbnbLogo,
  dropboxLogo,
  paypalLogo,
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-dark text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left - Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Tech Partner for{" "}
              <br/>
              Smarter Growth
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>
            <div className="mt-8">
              <Button>Let's Talk</Button>
            </div>
          </div>

          {/* Right - Illustration placeholder */}
          <div>
            <img src={heroImage} alt="Hero Illustration" />
          </div>

        </div>

        {/* Trusted Brands */}
        <div className="mt-20 border-t border-gray-800 pt-10">
          <p className="text-center text-gray-500 text-sm mb-8">
            Trusted by Global Innovators & Leading Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
          {brands.map((logo, index) => (
         <img
          key={index}
      src={logo}
      alt={`Brand ${index}`}
      className="h-8 object-contain"
    />
  ))}
</div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;