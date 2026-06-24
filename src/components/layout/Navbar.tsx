import Button from "../ui/Button";
import { navItems } from "../../data/navigation";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-dark z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          <h1 className="font-bold text-xl text-white">
            Your Logo
          </h1>

          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-white transition text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button>Let's Talk</Button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;