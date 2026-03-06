import Button from "@/src/components/Button";
import { cn } from "@/src/lib/utils";
import React from "react";

const EXPERIENCES = [
  {
    id: 1,
    title: "The Thanjavur Temple Circuit",
    duration: "12 Days",
    style: "Cultural & Spiritual",
    image: "https://images.pexels.com/photos/33633666/pexels-photo-33633666.jpeg",
  },
  {
    id: 2,
    title: "Serene Backwaters of Kerala",
    duration: "7 Days",
    style: "Nature & Relaxation",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="bg-luxury-cream min-h-screen pt-32 px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <span className="text-xs uppercase  text-luxury-gold">Start your Journey</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-luxury-charcoal italic">Upcoming Travels</h1>
        </header>

        <div className="space-y-32 pb-32">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className={cn(
                "flex flex-col gap-12 items-center lg:flex-row",
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 overflow-hidden shadow-2xl">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full transition-all duration-1000 transform hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 flex flex-col items-start px-4">
                <span className="text-xs text-luxury-gold  uppercase">{exp.duration} — {exp.style}</span>
                <h2 className="mt-4 font-serif text-4xl text-luxury-charcoal leading-tight">
                  {exp.title}
                </h2>
                <p className="mt-6 text-gray-500 leading-relaxed italic">
                  An intimate journey designed for those who value silence, 
                  authenticity, and the finest comforts of modern travel.
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}