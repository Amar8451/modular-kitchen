import React from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const CallToAction = ({ onOpenQuote }) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-navy-950 via-[#101638] to-navy-950 text-white overflow-hidden border-t-2 border-brand-orange">
      {/* Background image & gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('/images/slides/2.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/80" />

      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready To Begin?</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight font-heading">
              Let's Design Your Dream <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-[#FFA585]">
                Modular Kitchen Today
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
              Book a complimentary in-home laser measurement session with our senior interior architects in Mumbai, Thane, or Navi Mumbai. Get a photorealistic 3D render with no obligation.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>10-Year BWP Marine Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span>72-Hour Rapid Installation</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 hover:from-white hover:to-white hover:text-navy-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-2xl hover:shadow-brand-orange/40 transition-all flex items-center justify-center gap-2 active:scale-95 group cursor-pointer"
            >
              <span>Book Free 3D Design Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Expert</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
