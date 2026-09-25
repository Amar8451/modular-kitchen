import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig, servicesData } from '../data/siteData';
import Logo from './Logo';

const Footer = ({ onOpenQuote }) => {
  return (
    <footer className="bg-dark-900 text-gray-400 pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: About Company */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-2 group">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-xs leading-relaxed text-gray-300">
              Established in 2008 at Mumbai, <strong className="text-white">Lakshmi Modular Kitchen</strong> is a leading trader, manufacturer, and supplier of premium quality kitchen trolleys, wall cabinets, acrylic modules, and bedroom furniture.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="text-white font-bold">10-Year Warranty</p>
                <p className="text-gray-400">100% Waterproof BWP Plywood</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-8 h-0.5 bg-gold inline-block"></span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-gold transition-colors flex items-center gap-2 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  <span>Book Free 3D Design</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Services</span>
              <span className="w-8 h-0.5 bg-gold inline-block"></span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-gold transition-colors flex items-center gap-2 truncate"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Contact Us</span>
              <span className="w-8 h-0.5 bg-gold inline-block"></span>
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-gray-300 hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-white font-bold hover:text-gold transition-colors">
                  +91 {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-gray-300">{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Lakshmi Modular Kitchen. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Ulhasnagar • Mumbai • Thane • Navi Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
