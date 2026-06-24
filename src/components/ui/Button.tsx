import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, variant = "primary", className = "", onClick, type = "button" }: ButtonProps) => {
  const base = "px-6 py-3 rounded-full font-semibold transition cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;