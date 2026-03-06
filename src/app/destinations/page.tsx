"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

const CATEGORIES = [
  "All",
  "Beach",
  "Temple",
  "Cultural",
  "Desert",
  "Museum",
  "Hill Station",
];

const ALL_DESTINATIONS = [
  {
    id: 1,
    name: "Pondicherry Beach",
    category: "Beach",
    image:
      "https://images.pexels.com/photos/35213107/pexels-photo-35213107.jpeg",
    slug: "pondicherry",
  },
  {
    id: 2,
    name: "Thanjavur Temple",
    category: "Temple",
    image:
      "https://images.pexels.com/photos/33633666/pexels-photo-33633666.jpeg",
    slug: "thanjavur",
  },
  {
    id: 3,
    name: "Mumbai",
    category: "Cultural",
    image:
      "https://images.pexels.com/photos/35457145/pexels-photo-35457145.jpeg",
    slug: "mumbai",
  },
  {
    id: 4,
    name: "Rajasthan Desert",
    category: "Desert",
    image:
      "https://images.pexels.com/photos/28536002/pexels-photo-28536002.jpeg",
    slug: "rajasthan",
  },
  {
    id: 5,
    name: "Chennai egmore museum",
    category: "Museum",
    image:
      "https://images.pexels.com/photos/19108219/pexels-photo-19108219.jpeg",
    slug: "chennai",
  },
  {
    id: 6,
    name: "Ooty",
    category: "Hill Station",
    image:
      "https://images.pexels.com/photos/29224252/pexels-photo-29224252.jpeg",
    slug: "ooty",
  },
  {
    id: 7,
    name: "Goa Beach",
    category: "Beach",
    image:
      "https://images.pexels.com/photos/30494986/pexels-photo-30494986.jpeg",
    slug: "goa",
  },
  {
    id: 8,
    name: "Kanchipuram Temple",
    category: "Temple",
    image:
      "https://images.pexels.com/photos/35456996/pexels-photo-35456996.jpeg",
    slug: "kanchipuram",
  },
  {
    id: 9,
    name: "Darjeeling Hill Station",
    category: "Hill Station",
    image:
      "https://images.pexels.com/photos/35457000/pexels-photo-35457000.jpeg",
    slug: "darjeeling",
  },
  {
    id: 10,
    name: "Kodaikanal Hill Station",
    category: "Hill Station",
    image:
      "https://images.pexels.com/photos/35457001/pexels-photo-35457001.jpeg",
    slug: "kodaikanal",
  },
  {
    id: 11,
    name: "Hampi Cultural Site",
    category: "Cultural",
    image:
      "https://images.pexels.com/photos/19029629/pexels-photo-19029629.jpeg",
    slug: "hampi",
  },
  {
    id: 12,
    name: "Jaisalmer Desert",
    category: "Desert",
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
    slug: "jaisalmer",
  },
  {
    id: 13,
    name: "Madurai Temple",
    category: "Temple",
    image:
      "https://images.pexels.com/photos/35600412/pexels-photo-35600412.jpeg",
    slug: "madurai",
  },
  {
    id: 14,
    name: "Alleppey Beach",
    category: "Beach",
    image:
      "https://images.pexels.com/photos/35600413/pexels-photo-35600413.jpeg",
    slug: "alleppey",
  },
  {
    id: 15,
    name: "Karnataka Museum",
    category: "Museum",
    image:
      "https://images.pexels.com/photos/19029628/pexels-photo-19029628.jpeg",
    slug: "karnataka-museum",
  },
  {
    id: 16,
    name: "Jodhpur Cultural Site",
    category: "Cultural",
    image:
      "https://images.pexels.com/photos/35600411/pexels-photo-35600411.jpeg",
    slug: "jodhpur",
  },
  {
    id: 17,
    name: "Rishikesh Hill Station",
    category: "Hill Station",
    image:
      "https://images.pexels.com/photos/35600410/pexels-photo-35600410.jpeg",
    slug: "rishikesh",
  },
];

export default function DestinationsListing() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? ALL_DESTINATIONS
      : ALL_DESTINATIONS.filter((d) => d.category === activeFilter);

  return (
    <div className="bg-luxury-cream min-h-screen pt-32">
      {/* Header */}
      <div className="px-8 mb-20">
        <div className="mx-auto max-w-7xl border-b border-luxury-charcoal/10 pb-12">

          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-luxury-charcoal">
            Destinations
          </h1>

          {/* Filter Bar */}
          <div className="mt-12 flex flex-wrap gap-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "text-[10px] uppercase  transition-all border-b pb-1",
                  activeFilter === cat
                    ? "border-luxury-gold text-luxury-charcoal"
                    : "border-transparent text-gray-400 hover:text-luxury-charcoal",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-8 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={dest?.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-luxury-charcoal">
                    {dest.name}
                  </h3>
                  <p className="text-[10px] uppercase  text-luxury-gold mt-1">
                    {dest.category}
                  </p>
                </div>
                {/* <span className="text-xs font-light text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
