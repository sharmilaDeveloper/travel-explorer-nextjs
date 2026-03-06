export interface Destination {
  id: number;
  name: string;
  location: string;
  category: "Beach" | "Temple" | "Cultural" | "Desert" | "Hill Station" | "Museum";
  image: string;
  slug: string;
  description?: string;
  price?: string;
}

export interface Experience {
  id: number;
  title: string;
  duration: string;
  image: string;
}