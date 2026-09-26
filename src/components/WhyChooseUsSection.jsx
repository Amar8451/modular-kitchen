import React from 'react';
import { Award, Palette, CheckCircle2, Trophy, ClipboardCheck, Headphones, ShieldCheck, Sparkles } from 'lucide-react';
import { whyChooseUs } from '../data/siteData';

const iconMap = {
  Award: Award,
  Palette: Palette,
  CheckCircle2: CheckCircle2,
  Trophy: Trophy,
  ClipboardCheck: ClipboardCheck,
  Headphones: Headphones,
};

const WhyChooseUsSection = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Laxmi Standard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-navy-950 font-heading">
            Why Homeowners Choose Laxmi Modular Kitchens
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            We eliminate the headaches of traditional carpenters: zero dust, factory-precision CNC finishing, transparent pricing, and 10-year warranty.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="p-8 rounded-3xl bg-gradient-to-b from-white to-light-100 border border-gray-100 hover:border-brand-orange/40 shadow-sm card-animated card-border-glow flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-md group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-gray-200 group-hover:text-brand-orange/50 group-hover:scale-110 transition-all duration-300 font-heading">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-navy-950 mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange transition-transform duration-300 group-hover:scale-110" />
                  <span>Certified Craftsmanship</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
