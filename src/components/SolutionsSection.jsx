import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, Sparkles, Maximize2, ShieldCheck } from 'lucide-react';
import Button from './Button';

const CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'island', label: 'Island Kitchens' },
  { id: 'l-shape', label: 'L-Shaped Kitchens' },
  { id: 'parallel', label: 'Parallel Kitchens' },
  { id: 'u-shape', label: 'U-Shaped Kitchens' },
  { id: 'wardrobe', label: 'Luxury Wardrobes' },
];

const SOLUTIONS = [
  {
    id: 1,
    category: 'island',
    title: 'Contemporary Luxury Island Suite',
    tag: 'Flagship Design',
    desc: 'Grand centerpiece kitchen with integrated breakfast counter, concealed profile LED lighting, and anti-scratch acrylic finish.',
    image: '/images/slides/1.jpg',
    features: ['Calacatta Quartz Counter', 'Blum Servo-Drive Drawers', 'Integrated Wine Rack', 'Under-Counter Warm LED'],
    bestFor: 'Spacious 3BHK, 4BHK & Penthouses',
    finish: 'Super-Matte PU & Quartz',
  },
  {
    id: 2,
    category: 'l-shape',
    title: 'Ergonomic L-Shaped Modernist',
    tag: 'Most Popular',
    desc: 'Optimized corner solution featuring revolving carousels, hydraulic lift-ups, and stain-resistant acrylic shutters.',
    image: '/images/services/1.jpg',
    features: ['Magic Corner Pullout', 'Hydraulic Overhead Lift-Ups', 'BWP Marine Ply Core', 'Seamless Edge Banding'],
    bestFor: 'Apartments in Mumbai & Thane',
    finish: 'High-Gloss Mirror Acrylic',
  },
  {
    id: 3,
    category: 'parallel',
    title: 'Chef-Grade Parallel (Galley) Setup',
    tag: 'Max Efficiency',
    desc: 'Dual preparation counters with designated wet & dry cooking zones, dedicated appliance tall units, and smart spice pullouts.',
    image: '/images/services/3.jpg',
    features: ['Dual Quartz Worktops', 'Built-in Microwave / Oven Unit', 'SS 304 Wire Baskets', 'Oil & Spice Pullout'],
    bestFor: 'Passionate Home Chefs',
    finish: 'Textured Anti-Fingerprint Laminate',
  },
  {
    id: 4,
    category: 'u-shape',
    title: 'Panoramic U-Shaped Grandeur',
    tag: 'Max Storage',
    desc: '360-degree workstation maximizing vertical and horizontal cabinetry, pantry tall units, and tandem drawer systems.',
    image: '/images/slides/2.jpg',
    features: ['Floor-to-Ceiling Pantry Unit', 'Soft-Close Tandem Boxes', 'Concealed Handles (Gola Profile)', 'Heat-Resistant Surfaces'],
    bestFor: 'Joint Families & Large Homes',
    finish: 'Lacquered Glass & Matte PU',
  },
  {
    id: 5,
    category: 'wardrobe',
    title: 'Floor-to-Ceiling Sliding Wardrobe',
    tag: 'Bespoke Bedroom',
    desc: 'Ultra-smooth German sliding system with tinted bronze glass doors, customized velvet jewelry organizers, and sensor lighting.',
    image: '/images/services/7.jpg',
    features: ['Heavy-Duty Soft-Close Sliders', 'Concealed LED Sensor Strips', 'Velvet Lined Accessory Trays', 'Hydraulic Pull-Down Hangers'],
    bestFor: 'Master Bedrooms',
    finish: 'Bronze Tinted Fluted Glass & PU',
  },
  {
    id: 6,
    category: 'l-shape',
    title: 'Minimalist Scandinavian L-Kitchen',
    tag: 'Modern Minimal',
    desc: 'Clean lines with natural wood grain textures paired with matte charcoal finishes for a timeless, calming culinary ambiance.',
    image: '/images/services/4.jpg',
    features: ['Natural Wood Veneer Feel', 'Anti-Static Dust-Repellent', '100% Termite Proof Construction', 'Hafele Heavy Duty Hinges'],
    bestFor: 'Modern Urban Living',
    finish: 'Zero-Gloss Super Matte',
  },
];

const SolutionsSection = ({ onOpenQuote, onViewDetails }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-light-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Architect Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-navy-950">
            Tailored Kitchen Layouts & Solutions
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Every home is unique. Choose from our signature architectural configurations crafted with waterproof marine ply and German hardware.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-60 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/images/slides/1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                
                {/* Floating Tag */}
                <span className="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                  {item.tag}
                </span>

                {/* Best For Chip */}
                <span className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-gray-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-white/20">
                  {item.bestFor}
                </span>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange block">
                    Finish: {item.finish}
                  </span>
                  <h3 className="text-white font-extrabold text-lg leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 mb-6">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-navy-900 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => onOpenQuote && onOpenQuote({ layout: item.title, finish: item.finish })}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm text-center active:scale-95"
                  >
                    Get 3D Design
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenQuote && onOpenQuote({ layout: item.title })}
                    className="p-2.5 rounded-xl border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-gray-600 transition-colors flex items-center justify-center"
                    title="Quick Estimate"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Global Banner below solutions */}
        <div className="mt-14 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-10 border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange block mb-1">
              Have A Specific Architectural Floor Plan?
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              Get A Free 3D Photorealistic Render Before You Spend A Rupee
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl">
              Our interior designers visit your home in Mumbai, Thane, or Navi Mumbai with laser meters and finish sample kits.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="shrink-0 px-8 py-3.5 rounded-xl bg-brand-orange hover:bg-white hover:text-navy-950 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl hover:shadow-brand-orange/30 transition-all active:scale-95"
          >
            Book Free Laser Measurement
          </button>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
