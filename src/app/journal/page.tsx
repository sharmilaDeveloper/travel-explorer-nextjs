import React from 'react';

const JOURNAL_POSTS = [
  {
    num: "01",
    title: "The Thanjavur Temple Circuit",
    desc: "An in-depth exploration of the cultural and spiritual significance of the Thanjavur temples.",
    img: "https://images.pexels.com/photos/33633666/pexels-photo-33633666.jpeg",},
  {
    num: "02",
    title: "Kerala's Backwater Bliss",
    desc: "A serene journey through Kerala's iconic backwaters, highlighting its unique ecosystem and culture.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    }
];

export default function JournalPage() {
  return (
    <div className="bg-luxury-cream pt-48 pb-32 px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <h1 className="font-serif text-8xl md:text-[12rem] leading-none text-luxury-charcoal flex flex-col italic">
            <span>The</span>
            <span className="ml-24 md:ml-48">Journal</span>
          </h1>
          <p className="mt-12 text-xs uppercase  text-gray-400 max-w-sm ml-auto">
            Essays on travel, philosophy, and the art of modern exploration.
          </p>
        </div>

        <div className="space-y-40">
          {JOURNAL_POSTS.map((post, index) => (
            <div key={post.num} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              <div className="w-full md:w-3/5 overflow-hidden relative">
                <img 
                  src={post.img} 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <span className="absolute top-10 left-10 text-white font-serif italic text-6xl opacity-40">{post.num}</span>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <h2 className="font-serif text-5xl md:text-6xl text-luxury-charcoal mb-8 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-10 font-light">
                  {post.desc}
                </p>
                <button className="self-start border-b border-luxury-gold pb-1 text-[15px] uppercase  hover:text-luxury-gold transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}