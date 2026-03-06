import React from 'react';

const GALLERY_ITEMS = [
  { id: 1, name: "SANTORINI", type: "VILLA", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000", span: "md:col-span-8" },
  { id: 2, name: "MALDIVES", type: "RESORT", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", span: "md:col-span-4" },
  { id: 3, name: "SWISS ALPS", type: "CHALET", img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1000", span: "md:col-span-4" },
  { id: 4, name: "TUSCANY", type: "ESTATE", img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1000", span: "md:col-span-8" },
];

const Gallery = () => {
  return (
    <section className="bg-luxury-cream py-32 px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center mb-24">
          <span className="text-luxury-gold text-xs uppercase  mb-4">The Visuals</span>
          <h2 className="font-serif text-5xl md:text-7xl text-luxury-charcoal text-center">
            Capturing the <span className="italic font-light">Ethereal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className={`${item.span} relative group overflow-hidden bg-luxury-silver aspect-[16/9]`}>
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-10 left-10 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-[10px]  text-luxury-gold mb-2">{item.type}</p>
                <h3 className="text-3xl font-serif ">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;