import React from 'react';
import { brandPartners } from '../data/siteData';

const BrandPartners = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-gold">
            Premium Hardware & Fittings Partners
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {brandPartners.map((brand, i) => (
            <div
              key={i}
              className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 bg-gray-50/50 hover:bg-white w-full max-w-[180px] h-20 flex items-center justify-center group"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Hardware Partner`}
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-bold text-dark-800 text-sm tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
