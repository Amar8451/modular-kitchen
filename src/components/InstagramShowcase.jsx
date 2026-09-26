import React from 'react';
import { ExternalLink, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { instagramPosts, siteConfig } from '../data/siteData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const InstagramShowcase = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Profile Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 text-xs font-bold uppercase tracking-wider mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Follow On Instagram: {siteConfig.instagramHandle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-navy-950 font-heading tracking-tight">
              Direct From Factory To Home
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-xl">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Follow Button & Profile Pill */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500 shadow-md p-0.5 bg-white shrink-0">
              <img
                src="/images/client/insta_logo_cropped.png"
                alt="Laxmi Modular Kitchens Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <span className="text-xs font-black text-navy-950 block">
                {siteConfig.instagramHandle}
              </span>
              <span className="text-[11px] text-gray-500">
                Official Studio Updates
              </span>
            </div>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow Us</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6-Card Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, idx) => (
            <div
              key={post.id}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm card-animated card-border-glow border border-gray-200/80 flex flex-col group cursor-pointer"
            >
              {/* Image Preview with Instagram Overlay & Shimmer Sweep */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-navy-950 card-shimmer">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/15 badge-float z-10">
                  {post.tag}
                </div>

                {/* Instagram Icon Badge with Micro-Rotation */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300 z-10">
                  <InstagramIcon className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Action */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-brand-orange text-[11px]">
                    Direct Factory Build
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-bold text-white hover:text-brand-orange transition-colors"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Caption & Consultation Trigger */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-700 leading-relaxed font-medium line-clamp-3">
                  {post.caption}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400">
                    Call: +91 97300 92726
                  </span>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-brand-orange hover:text-navy-950 transition-colors cursor-pointer"
                  >
                    Get Similar Design &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramShowcase;
