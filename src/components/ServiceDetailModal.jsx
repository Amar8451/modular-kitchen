import React, { useEffect } from 'react';
import { X, Check, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const ServiceDetailModal = ({ service, onClose, onEnquire }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && service) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navy-950/80 text-white hover:bg-brand-orange flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-dark-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2">
              {service.category === 'kitchen' ? 'Modular Kitchen Specialization' : 'Designer Bedroom Set'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white drop-shadow">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
              Overview & Specifications
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dark-900 mb-3">
              Included In This Package
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded bg-gray-50 border border-gray-100 text-xs text-gray-800">
                  <span className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand trust highlights */}
          <div className="p-4 bg-gold/10 rounded-xl border border-gold/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
              <div>
                <p className="text-xs font-bold text-dark-900">10-Year Manufacturer Warranty</p>
                <p className="text-[11px] text-gray-600">Complete moisture & termite resistance guarantee</p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-dark-900 hover:text-gold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnquire(service);
              }}
              className="flex-1 thm-btn-gold text-xs py-3.5"
            >
              Request Free Estimate For This Design
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border border-gray-300 hover:bg-gray-100 rounded text-xs font-bold text-gray-700 uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
