import React from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const TopBar = () => {
  return (
    <div className="bg-dark-900 text-gray-300 text-xs py-2.5 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Contact info left */}
          <ul className="flex items-center flex-wrap gap-4 lg:gap-6 text-xs tracking-wide">
            <li className="flex items-center gap-2 hover:text-white transition-colors max-w-sm lg:max-w-md truncate">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate">{siteConfig.address}</span>
            </li>
            <li className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[11px] border border-emerald-500/30">
              <span>✓ Delivery Available</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors text-white font-semibold">
                {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>

          {/* Right items */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{siteConfig.workingHoursShort}</span>
            </div>
            
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase transition-all duration-300"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
