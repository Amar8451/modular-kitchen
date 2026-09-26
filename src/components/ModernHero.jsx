import React, { useState } from 'react';
import { Sparkles, Phone, ArrowRight, ShieldCheck, Star, Box, Image as ImageIcon, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import HeroBackgroundCanvas from './HeroBackgroundCanvas';
import Kitchen3DScene from './Kitchen3DScene';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const GALLERY_IMAGES = [
  {
    src: '/images/client/insta_kitchen_teal.png',
    title: 'Glossy Turquoise Acrylic Modular Kitchen',
    tag: 'Factory Direct • Wagholi Project'
  },
  {
    src: '/images/client/insta_kitchen_rose.png',
    title: 'Dusty Rose Matte Kitchen with Gold Gola Handles',
    tag: 'European Minimalist Finish'
  },
  {
    src: '/images/client/insta_kitchen_sage.png',
    title: 'Sage Mint Modules with Tinted Glass Tower',
    tag: 'Illuminated Crockery Showcase'
  },
  {
    src: '/images/client/insta_bedroom_bed.png',
    title: 'Modern Designer Bed with Hydraulic Storage',
    tag: 'Turnkey Bedroom Furniture'
  },
  {
    src: '/images/client/insta_kitchen_island.png',
    title: 'Multifunctional Island with Utensil Organizers',
    tag: 'Ergonomic Counter Storage'
  }
];

const ModernHero = ({ onOpenQuote }) => {
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'gallery'
  const [galleryIdx, setGalleryIdx] = useState(0);

  const nextImage = () => setGalleryIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prevImage = () => setGalleryIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] bg-gradient-to-b from-[#090C1F] via-navy-950 to-[#0e1431] text-white overflow-hidden flex items-center py-12 lg:py-16">
      {/* 1. Subtle Interactive Particle Canvas Background */}
      <HeroBackgroundCanvas />

      {/* 2. Soft Ambient Color Flares */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Business Copy & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Trust Pill with Instagram Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold text-gray-200 shadow-lg">
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-extrabold text-white">4.9/5</span>
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-brand-orange font-bold">Direct From Factory</span>
              <span className="text-gray-400">•</span>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-pink-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] font-heading">
              Luxury Modular <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-[#FFA585]">
                Kitchens & Living
              </span>
            </h1>

            {/* Short High-Converting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              <strong className="text-white font-semibold">{siteConfig.tagline}</strong> Crafted with <strong className="text-white font-semibold">100% Boiling Waterproof Marine Ply</strong>, precision German hardware, and backed by a written <strong className="text-white font-semibold">10-Year Warranty</strong>.
            </p>

            {/* 3 Key Value Props with Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Zero Dealer Markup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Blum / Hettich Soft Close</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span>100% BWP Marine Ply</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 hover:from-brand-navy hover:to-brand-navy text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:shadow-brand-orange/30 transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer group"
              >
                <span>Book Free 3D Design</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call {siteConfig.phoneFormatted}</span>
              </a>
            </div>

            {/* Micro Social Proof / Location Tag */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free On-Site Measurements in Ulhasnagar, Thane, Kalyan, Mumbai & Pune</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span>✓ Delivery Available</span>
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Model or Showcase (6 cols) */}
          <div className="lg:col-span-6 relative">
            
            {/* Mode Switcher Tabs */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] uppercase font-bold tracking-wider text-gray-400">
                Design Studio Showcase
              </span>
              <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl backdrop-blur-md border border-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode('3d')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === '3d'
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Interactive</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('gallery')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'gallery'
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Instagram Gallery</span>
                </button>
              </div>
            </div>

            {/* Content view based on mode */}
            {viewMode === '3d' ? (
              <Kitchen3DScene onBookConsultation={onOpenQuote} />
            ) : (
              <div className="relative rounded-3xl overflow-hidden bg-navy-950 border border-white/10 shadow-2xl group h-[420px] sm:h-[490px]">
                <img
                  src={GALLERY_IMAGES[galleryIdx].src}
                  alt={GALLERY_IMAGES[galleryIdx].title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/20 to-transparent" />
                
                {/* Arrow navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/70 hover:bg-brand-orange text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/70 hover:bg-brand-orange text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Info & CTA */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="pr-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange block">
                      {GALLERY_IMAGES[galleryIdx].tag}
                    </span>
                    <h3 className="text-white font-extrabold text-sm sm:text-base leading-snug">
                      {GALLERY_IMAGES[galleryIdx].title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="shrink-0 px-4 py-2 bg-brand-orange hover:bg-white hover:text-navy-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernHero;
