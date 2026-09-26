import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteData';
import Logo from './Logo';

const Navbar = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinkClasses = ({ isActive }) =>
    `relative h-full flex items-center px-4 text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors duration-200 select-none ${
      isActive
        ? 'text-gold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:bg-gold after:rounded-t-sm'
        : 'text-dark-900 hover:text-gold'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block py-3 px-4 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
      isActive
        ? 'bg-gold/15 text-gold'
        : 'text-dark-900 hover:bg-gray-100 hover:text-gold'
    }`;

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'sticky top-0 bg-white/95 backdrop-blur-md shadow-md'
          : 'relative bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16 md:h-18' : 'h-18 md:h-20'
          }`}
        >
          {/* 1. Brand Logo */}
          <Link to="/" className="shrink-0 flex items-center group py-1">
            <Logo variant="dark" size="md" />
          </Link>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full space-x-1 xl:space-x-2">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Services with Hover Dropdown */}
            <div
              ref={dropdownRef}
              className="relative h-full flex items-center group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <NavLink to="/services" className={navLinkClasses}>
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 text-gold ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </NavLink>

              {/* Mega Dropdown Menu with Hover Bridge */}
              <div
                className={`absolute left-0 top-full pt-2 w-[480px] transition-all duration-200 origin-top transform ${
                  isServicesOpen
                    ? 'opacity-100 scale-y-100 visible pointer-events-auto'
                    : 'opacity-0 scale-y-95 invisible pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-2xl border-2 border-gold/30 p-4 grid grid-cols-2 gap-2 overflow-hidden">
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Our Specializations & Showrooms
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-[11px] font-bold text-dark-900 hover:text-gold transition-colors"
                    >
                      All Services &rarr;
                    </Link>
                  </div>

                  {servicesData.map((item) => (
                    <Link
                      key={item.id}
                      to={`/services#${item.id}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gold/10 text-xs font-semibold text-dark-800 hover:text-gold transition-colors group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 group-hover/item:scale-125 transition-transform shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  ))}

                  <div className="col-span-2 pt-2 mt-1 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                    <span>Free On-Site 3D Consultation</span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsServicesOpen(false);
                        onOpenQuote();
                      }}
                      className="text-gold font-bold hover:underline"
                    >
                      Get Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </nav>

          {/* 3. Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2.5 text-navy-900 hover:text-brand-orange transition-colors font-bold text-xs xl:text-sm group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] text-gray-500 uppercase font-semibold leading-tight">Expert Call</span>
                <span className="text-xs font-black text-navy-950">{siteConfig.phone}</span>
              </div>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 hover:from-brand-navy hover:to-brand-navy text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-brand-orange/30 transition-all cursor-pointer active:scale-95"
            >
              Get Free Quote
            </button>
          </div>

          {/* 4. Mobile Menu Toggle Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="bg-brand-orange hover:bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-sm"
            >
              Quote
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy-950 hover:text-brand-orange transition-colors rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-dark-950/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 6. Mobile Drawer Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-gold shadow-2xl z-50 transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[80vh] ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0'
        }`}
      >
        <div className="p-4 space-y-1.5">
          <NavLink to="/" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>

          {/* Mobile Services Dropdown */}
          <div className="border border-gray-100 rounded-lg overflow-hidden my-1">
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold uppercase tracking-wider text-dark-900 bg-gray-50 hover:bg-gray-100"
            >
              <span>Our Services ({servicesData.length})</span>
              <ChevronDown
                className={`w-4 h-4 text-gold transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isServicesOpen && (
              <div className="bg-white p-2 divide-y divide-gray-50 max-h-60 overflow-y-auto">
                {servicesData.map((item) => (
                  <Link
                    key={item.id}
                    to={`/services#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 text-xs text-gray-700 hover:text-gold hover:bg-gold/5 rounded transition-colors font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>

          {/* Mobile Quick Action Buttons */}
          <div className="pt-4 mt-3 border-t border-gray-100 space-y-2.5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-dark-900 text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Expert: {siteConfig.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-gold hover:bg-gold-500 text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow"
            >
              Get Free 3D Design & Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
