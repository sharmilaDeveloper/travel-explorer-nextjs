import React from "react";

const getDestinationData = (slug: string) => {
  const data: Record<string, any> = {
    "pondicherry": {
      name: "Pondicherry Beach",
      location: "India",
        image: "https://images.pexels.com/photos/35213107/pexels-photo-35213107.jpeg",
        description: "Relax on the sun-kissed shores of Pondicherry, where French colonial charm meets Indian coastal beauty.",
        price: "₹30,000"
    },
    "thanjavur": {
      name: "Thanjavur Temple",
      location: "India",
        image: "https://images.pexels.com/photos/33633666/pexels-photo-33633666.jpeg",
        description: "Discover the architectural splendor and spiritual depth of Thanjavur's ancient temples with exclusive access.",
        price: "₹35,000"
    },
    "mumbai": {
      name: "Mumbai",
      location: "India",
        image: "https://images.pexels.com/photos/35457145/pexels-photo-35457145.jpeg",
        description: "Experience the vibrant culture and dynamic energy of Mumbai through curated luxury experiences.",
        price: "₹40,000"
    },
    "rajasthan": {
        name: "Rajasthan Desert",
        location: "India",
        image: "https://images.pexels.com/photos/28536002/pexels-photo-28536002.jpeg",
        description: "Embark on a royal journey through Rajasthan's golden deserts with private camel rides and luxury camps.",
        price: "₹50,000"
    },
    "chennai": {
        name: "Chennai Egmore Museum",
        location: "India",
        image: "https://images.pexels.com/photos/19108219/pexels-photo-19108219.jpeg",
        description: "Explore Chennai's rich heritage with exclusive tours of the Egmore Museum's priceless collections.",
        price: "₹28,000"
    },
    "ooty": {
        name: "Ooty",
        location: "India",
        image: "https://images.pexels.com/photos/29224252/pexels-photo-29224252.jpeg",
        description: "Retreat to the serene hill station of Ooty, enjoying private tea estate tours and luxury spa experiences.",
        price: "₹45,000"
    },
    "madurai": {
        name: "Madurai Temple Circuit",
        location: "India",
        image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
        description: "Immerse yourself in the spiritual aura of Madurai with guided tours of its magnificent temples.",
        price: "₹38,000"
    },
    "jaisalmer": {
        name: "Jaisalmer Fort",
        location: "India",  
        image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
        description: "Step into the golden city of Jaisalmer, exploring its majestic fort and desert landscapes in luxury.",
        price: "₹55,000"
    },
    "goa": {
        name: "Goa Beach",
        location: "India",
        image: "https://images.pexels.com/photos/30494986/pexels-photo-30494986.jpeg",
        description: "Unwind on Goa's pristine beaches with private yacht tours and exclusive beachside dining experiences.",
        price: "₹60,000"
    },
    "kanchipuram": {
        name: "Kanchipuram Temples",
        location: "India",  
        image: "https://images.pexels.com/photos/35456996/pexels-photo-35456996.jpeg",
        description: "Delve into the spiritual heritage of Kanchipuram with personalized temple tours and silk weaving experiences.",
        price: "₹32,000"
    },
    "darjeeling": {
        name: "Darjeeling",
        location: "India",
        image: "https://images.pexels.com/photos/35457000/pexels-photo-35457000.jpeg",
        description: "Experience the breathtaking beauty of Darjeeling with luxury train rides and tea garden excursions.",
        price: "₹48,000"
    },
    "kodaikanal": {
        name: "Kodaikanal",
        location: "India",
        image: "https://images.pexels.com/photos/35457001/pexels-photo-35457001.jpeg",
        description: "Escape to the tranquil hill station of Kodaikanal, enjoying private lake cruises and nature walks.",
        price: "₹42,000"
    },
    "hampi": {
        name: "Hampi Cultural Site",
        location: "India",  
        image: "https://images.pexels.com/photos/19029629/pexels-photo-19029629.jpeg",
        description: "Walk through the ancient ruins of Hampi with expert guides and exclusive access to heritage sites.",
        price: "₹37,000"    
    },
    "joshpur": {
        name: "Joshpur Desert",
        location: "India",      
        image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
        description: "Discover the stark beauty of Joshpur's deserts with luxury camping and guided desert safaris.",
        price: "₹52,000"
    },
    "alleppey": {
        name: "Alleppey Backwaters",
        location: "India",
        image: "https://images.pexels.com/photos/35600413/pexels-photo-35600413.jpeg",
        description: "Sail through the serene backwaters of Alleppey on a private houseboat, indulging in gourmet cuisine and tranquil views.",
        price: "₹58,000"
    },
    "karnataka-museum": {
        name: "Karnataka Museum",
        location: "India",
        image: "https://images.pexels.com/photos/19029628/pexels-photo-19029628.jpeg",
        description: "Explore Karnataka's rich history and culture with exclusive tours of its renowned museums.",
        price: "₹29,000"
    }


  };
  return data[slug] 
};

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Await the params promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

const dest = getDestinationData(slug);
      console.log(dest,'des');

  return (
    <div className="bg-luxury-cream">
      {/* 1. Immersive Header */}
      <header className="relative h-[70vh] w-full">
        <img src={dest.image} alt={dest.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-20 left-10 md:left-20">
          <span className="text-xs uppercase  text-luxury-gold">Destination</span>
          <h1 className="font-serif text-6xl text-white md:text-8xl">{dest.name}</h1>
        </div>
      </header>

      {/* 2. Content Section */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          
          {/* Main Narrative */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl italic text-luxury-charcoal">The Experience</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>{dest.description}</p>
              <p>
                Our bespoke itinerary offers exclusive access to private villas and 
                hidden coves. Every detail is curated to ensure a seamless blend 
                of luxury and discovery.
              </p>
            </div>
            
          </div>

          {/* Sticky Inquiry Sidebar */}
          <div className="relative">
            <div className="sticky top-32 border border-luxury-charcoal/10 bg-white p-10 shadow-sm">
              <p className="text-xs uppercase text-gray-400">Starting from</p>
              <h3 className="mt-2 font-serif text-4xl text-luxury-charcoal">{dest.price}</h3>
              <hr className="my-8 border-luxury-charcoal/5" />
              
              <div className="space-y-4">
                {/* <button className="w-full bg-luxury-charcoal py-4 text-xs uppercase  text-white transition-all hover:bg-luxury-gold">
                  Request Itinerary
                </button> */}
                {/* <button className="w-full border border-luxury-charcoal py-4 text-xs uppercase  text-luxury-charcoal transition-all hover:bg-luxury-charcoal hover:text-white">
                  Speak to an Expert
                </button> */}
              </div>
              
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}