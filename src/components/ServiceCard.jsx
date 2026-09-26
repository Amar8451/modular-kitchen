import React from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';
import Button from './Button';

const ServiceCard = ({ service, onEnquire, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-animated card-border-glow border border-gray-100 flex flex-col group cursor-pointer">
      {/* Image container with hover zoom & light sheen sweep */}
      <div className="relative h-56 overflow-hidden bg-gray-100 card-shimmer">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/services/1.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-dark-900/90 backdrop-blur-sm text-gold text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-gold/30 badge-float z-10">
          {service.category === 'kitchen' ? 'Modular Kitchen' : 'Bedroom Furniture'}
        </span>

        {/* Floating Title on Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-white font-extrabold text-base md:text-lg leading-snug drop-shadow-md">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Key Features */}
          <ul className="space-y-1.5 mb-6 border-t border-gray-100 pt-3">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                <span className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => onEnquire(service)}
            className="flex-1 bg-gold hover:bg-dark-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded transition-colors text-center"
          >
            Enquire Now
          </button>
          
          <button
            type="button"
            onClick={() => onViewDetails(service)}
            className="p-2.5 border border-gray-200 hover:border-gold hover:text-gold rounded text-gray-600 text-xs transition-colors flex items-center justify-center"
            title="View Details"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
