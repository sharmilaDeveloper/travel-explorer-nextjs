import React from 'react';

export default function InquiryForm() {
  return (
    <section className="bg-luxury-charcoal py-32 px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Side: Editorial Text */}
          <div>

            <h2 className="text-white font-serif text-5xl md:text-7xl leading-tight mb-8">
              Begin Your <br />
              <span className="italic font-light">Indian Legacy</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Our travel specialists are ready to curate an itinerary as unique as your heritage. From private palace tours to secluded Himalayan retreats.
            </p>
          </div>

          {/* Right Side: Minimalist Form */}
          <form className="space-y-12">
            <div className="border-b border-white/10 pb-4">
              <label className="text-white/30 text-[10px] uppercase  block mb-2">FullName</label>
              <input type="text" placeholder="Name" className="bg-transparent w-full text-white font-light focus:outline-none placeholder:text-white/10" />
            </div>

            <div className="border-b border-white/10 pb-4">
              <label className="text-white/30 text-[10px] uppercase  block mb-2">Destination of Interest</label>
              <select className="bg-transparent w-full text-white font-light focus:outline-none appearance-none cursor-pointer">
                <option className="bg-luxury-charcoal">Rajasthan (Udaipur/Jaisalmer)</option>
                <option className="bg-luxury-charcoal">Kerala (Munnar/Alleppey)</option>
                <option className="bg-luxury-charcoal">Ladakh (Himalayas)</option>
                <option className="bg-luxury-charcoal">Tamil Nadu (Madurai/Temple Circuit)</option>
              </select>
            </div>

            <div className="border-b border-white/10 pb-4">
              <label className="text-white/30 text-[10px] uppercase  block mb-2">Message</label>
              <textarea rows={1} placeholder="Tell us about your dream journey..." className="bg-transparent w-full text-white font-light focus:outline-none placeholder:text-white/10 resize-none" />
            </div>

            <button className="w-full bg-white text-black py-6 text-[15px] uppercase  font-bold hover:bg-luxury-gold hover:text-white transition-all duration-500">
              Submit Request
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}