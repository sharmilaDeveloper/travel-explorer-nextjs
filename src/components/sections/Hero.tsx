import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* 1. The Main Image - Positioned slightly off-center for asymmetry */}
      <div className="absolute right-0 top-0 h-full w-full md:w-3/4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070" 
          className="h-full w-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-[3s]"
          alt="Mountain Expedition"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
      </div>



      {/* 3. The Content - Overlapping the Image */}
      <div className="relative z-10 flex h-full items-center pl-10 md:pl-40">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-luxury-gold text-xs uppercase ">Heaven Experience</span>
          </div>

          <h1 className="font-serif text-7xl md:text-[11rem] leading-none text-white mix-blend-difference">
            THE <br />
            <span className="italic font-extralight text-luxury-gold ml-20 md:ml-40">UNSEEN</span>
          </h1>

          <div className="mt-16 flex flex-col md:flex-row items-end gap-12">
            <p className="max-w-xs text-gray-400 text-l font-light leading-relaxed">
              Experience travel as an art form. We provide exclusive access to locations that don't appear on maps.
            </p>
            
          </div>
        </div>
      </div>

      {/* 4. Bottom Right Status */}
      <div className="absolute bottom-12 right-12 z-20 text-right">
        <p className="text-white text-xs  uppercase">Bon voyage</p>
        <p className="text-luxury-gold text-[15px] uppercase  mt-2 italic">Experience the unseen for this 2026</p>
      </div>
    </section>
  );
};

export default Hero;