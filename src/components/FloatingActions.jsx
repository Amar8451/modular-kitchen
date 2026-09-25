import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute right-full mr-3 bg-dark-900 text-white text-xs font-semibold py-1 px-3 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button for Mobile */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call Laxmi Modular Kitchens"
        className="sm:hidden w-12 h-12 bg-dark-900 text-gold rounded-full shadow-2xl flex items-center justify-center border-2 border-gold transition-all duration-300 active:scale-95"

      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 bg-dark-900/90 hover:bg-gold text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;
