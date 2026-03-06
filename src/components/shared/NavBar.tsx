"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Upcoming travel", href: "/experiences" },
    // { name: "Journal", href: "/journal" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 px-8 py-6",
        isScrolled 
          ? "bg-luxury-charcoal/90 backdrop-blur-md py-4 shadow-xl" 
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className={cn(
            "text-2xl font-bold transition-colors",
            isScrolled ? "text-white" : "text-white md:text-luxury-charcoal lg:text-white" 
            /* Note: Adjust text color based on your hero image brightness */
          )}>
            BON VOYAGE
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs uppercase  transition-all hover:text-luxury-gold",
                isScrolled ? "text-gray-300" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <Link href="/inquire">
        <button className={cn(
          "hidden md:block border px-8 py-2 text-xs uppercase  transition-all duration-300",
          isScrolled 
            ? "border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white" 
            : "border-white text-white hover:bg-white hover:text-black"
        )}>
          Inquire
        </button>
        </Link>

        {/* Mobile Toggle (Simple) */}
        <div className="md:hidden text-white italic font-serif">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;