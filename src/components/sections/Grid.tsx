import { DESTINATIONS } from "@/src/data";

export default function DestinationGrid() {
  return (
    <section className="bg-luxury-cream py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-black/5 pb-12">
          <h2 className="font-serif text-6xl text-luxury-charcoal italic">Incredible India</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {DESTINATIONS.map((dest, index) => (
            <div key={dest?.id} className={`${index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden aspect-[4/5]`}>
              <img src={dest?.image} className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s]" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-luxury-gold text-[10px] uppercase ">{dest.location}</p>
                <h3 className="text-3xl font-serif mt-2">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}