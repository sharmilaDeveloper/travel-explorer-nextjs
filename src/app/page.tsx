import DestinationGrid from "../components/sections/Grid";
import Hero from "../components/sections/Hero";


export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* High-Impact Hero Section */}
      <Hero />

      {/* Intro Section */}
      {/* <section className="bg-luxury-cream py-24 px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl text-luxury-charcoal md:text-5xl">
            Tailored journeys for the <span className="italic">discerning</span> traveler.
          </h2>
          <p className="mt-8 leading-relaxed  text-gray-600">
            We curate unique experiences that blend luxury with local authenticity. 
            From the peaks of the Alps to the hidden lagoons of the Pacific, your 
            story begins here.
          </p>
        </div>
      </section> */}

      {/* Destination Grid Section */}
      <DestinationGrid />

      {/* Call to Action Section */}
      {/* <section className="bg-luxury-charcoal py-32 text-center text-white">
        <h3 className="mb-8 font-serif text-3xl md:text-5xl">Ready to escape?</h3>
        <button className="border-b border-luxury-gold pb-2 text-sm uppercase transition-all hover:text-luxury-gold">
          Schedule a Consultation
        </button>
      </section> */}
    </div>
  );
}