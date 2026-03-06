import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}: ButtonProps) => {
  
  const variants = {
    primary: "bg-luxury-charcoal text-white hover:bg-black",
    outline: "border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white",
    ghost: "bg-transparent text-luxury-charcoal hover:bg-luxury-cream",
    gold: "bg-luxury-gold text-white hover:bg-[#B38E4A]",
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-10 py-4 text-xs",
    lg: "px-14 py-5 text-sm",
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden uppercase  transition-all duration-300 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;