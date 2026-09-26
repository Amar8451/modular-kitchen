import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { clientReviews, siteConfig } from '../data/siteData';

const TestimonialsSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = clientReviews[currentIdx];

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-navy-950 font-heading">
            Loved By 15,000+ Happy Homeowners
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Real customer reviews for Laxmi Modular Interior Studio & Founder Naresh Desai on Google.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={siteConfig.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold text-navy-950 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span>Google 5-Star Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Featured Review Card + Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Card Container */}
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-[#0e1431] text-white p-8 sm:p-12 shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Background Decorative Quote Watermark */}
            <div className="absolute -top-6 -right-6 text-white/5 pointer-events-none select-none">
              <Quote className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              
              {/* Reviewer Avatar & Location */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-brand-orange shadow-xl bg-navy-800">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/client/client1.png';
                    }}
                  />
                </div>
                <h4 className="mt-3 text-base sm:text-lg font-bold text-white leading-tight">
                  {activeReview.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-brand-orange mt-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeReview.location}</span>
                </div>
                <span className="text-[11px] text-gray-400 font-medium mt-0.5">
                  {activeReview.role}
                </span>
              </div>

              {/* Review Text & Rating */}
              <div className="flex-1">
                {/* 5-Star Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-gray-300">5.0 Verified Google Review</span>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-normal italic mb-6">
                  "{activeReview.quote}"
                </p>

                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>10-Year Plywood & Hardware Warranty Issued</span>
                </div>
              </div>

            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {clientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Testimonial ${idx + 1}`}
                    className={`transition-all rounded-full ${
                      currentIdx === idx ? 'w-8 h-2 bg-brand-orange' : 'w-2 h-2 bg-white/30 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors border border-white/10 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors border border-white/10 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
