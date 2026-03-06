import React from "react";

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal py-20 px-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold ">BON VOYAGE</h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Crafting unseen travel stories for those who seek 
              beauty in every corner of the globe.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase  text-luxury-gold">Connect</h4>
            <ul className="mt-6 space-y-4 text-l text-gray-400">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition">Youtube</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase  text-luxury-gold">Legal</h4>
            <ul className="mt-6 space-y-4 text-l text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-[10px] uppercase  text-gray-500">
          © 2026 BON VOYAGE TRAVEL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;