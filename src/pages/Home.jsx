import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Compass,
  Layers,
  Wrench,
  Shield,
  Sparkles,
  MapPin
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BrandPartners from '../components/BrandPartners';
import Button from '../components/Button';
import { siteConfig, servicesData, processSteps, regionalQuickLinks } from '../data/siteData';

const Home = ({ onOpenQuote, onSelectService, onViewDetails }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Slider */}
      <HeroSlider onOpenQuote={onOpenQuote} />

      {/* 2. Welcome / About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Images Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/welcome/main-gallery.jpg"
                  alt="Lakshmi Modular Kitchen Interior"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/images/slides/1.jpg';
                  }}
                />
              </div>

              {/* Overlapping secondary image badge */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-dark-900">
                <img
                  src="/images/welcome/1.jpg"
                  alt="Crafted Kitchen Cabinet"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/services/2.jpg';
                  }}
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-6 -left-6 bg-gold text-dark-950 font-extrabold px-6 py-4 rounded-xl shadow-xl flex items-center gap-3">
                <span className="text-3xl font-black">16+</span>
                <span className="text-xs uppercase tracking-wider font-bold leading-tight">
                  Years Of <br />Excellence
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 lg:pl-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-gold inline-block"></span>
                <span className="text-gold font-bold text-xs uppercase tracking-widest">
                  Welcome to Lakshmi Modular Kitchen
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 uppercase tracking-tight mb-4">
                Established In The Year 2008 At Mumbai
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                We <strong className="text-dark-900 font-semibold">Lakshmi Modular Kitchen</strong> are a leading Trader and Supplier of premium quality Kitchen Trolleys, Wall Cabinets, Acrylic Modules, and Bedroom Furniture. In our manufacturing and design process, we assure that only top-notch raw material is used along with ultra-modern machinery and precision tools.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "100% Boiling Water Proof (BWP) Plywood",
                  "German Soft-Close Tandem Hardware",
                  "Free 3D Design Layout & Measurements",
                  "10-Year Comprehensive Warranty",
                  "Customized Storage & Ergonomics",
                  "Direct Factory Prices with No Middlemen"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Request Quote Card & CTA */}
              <div className="p-5 bg-gold/10 border-l-4 border-gold rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                    Direct Email Support
                  </span>
                  <p className="text-sm sm:text-base font-bold text-dark-900 flex items-center gap-2 mt-0.5">
                    <Mail className="w-4 h-4 text-gold" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>

                <Button onClick={onOpenQuote} variant="gold" size="sm">
                  Request Quote
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Offer"
            title="Services We Do"
          />

          <p className="max-w-2xl mx-auto text-center text-sm text-gray-600 -mt-6 mb-12">
            Tailor-made modular kitchens, stainless steel trolleys, acrylic shutters, and luxury bedroom wardrobes across Mumbai, Thane, and Navi Mumbai.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEnquire={onSelectService}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

          {/* View all services CTA */}
          <div className="text-center mt-12">
            <Button to="/services" variant="dark" size="lg" icon={ArrowRight}>
              Explore All 12+ Locations & Services
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Our Working Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="How We Work"
            title="Our Working Process"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
            {/* Step 1 */}
            <div className="bg-light-100 p-8 rounded-2xl border-2 border-transparent hover:border-gold transition-all duration-300 relative group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold text-dark-900 font-extrabold text-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-extrabold uppercase text-dark-900 mb-3">
                Search Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Explore our catalog of parallel, L-shaped, U-shaped, and island layouts. Schedule a free site visit for laser-accurate measurements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-light-100 p-8 rounded-2xl border-2 border-transparent hover:border-gold transition-all duration-300 relative group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-dark-900 text-gold font-extrabold text-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-extrabold uppercase text-dark-900 mb-3">
                Book Cover Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Review your personalized 3D design render. Choose high-gloss acrylic, PU, or laminate finishes and precision fittings from Hettich or Blum.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-light-100 p-8 rounded-2xl border-2 border-transparent hover:border-gold transition-all duration-300 relative group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold text-dark-900 font-extrabold text-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-extrabold uppercase text-dark-900 mb-3">
                Make Your Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Precision manufacturing in our Mumbai facility, delivered safely to your home, and completely installed with zero dust within 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authentic Slogan / Callout Banner */}
      <section className="relative py-16 bg-dark-950 text-white overflow-hidden border-y-2 border-gold/40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('/images/slides/2.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">
              Transform Your Cooking Space
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
              MAKING BEAUTIFUL OUR KITCHEN
            </h2>
            <p className="text-gray-300 text-sm sm:text-base italic">
              "Quality is what we pursue, We know what we do"
            </p>
            <p className="text-sm font-semibold text-gold mt-3 flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-4 h-4" />
              <span>Contact Us Now: <a href={`tel:${siteConfig.phone}`} className="hover:underline font-bold text-white">+{siteConfig.phone}</a></span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={onOpenQuote} variant="gold" size="lg">
              Get Free Consultation
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Brand Hardware Partners */}
      <BrandPartners />

      {/* 7. Regional Locations Quick Directory */}
      <section className="py-12 bg-light-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-base font-extrabold uppercase text-dark-900 tracking-wider">
              Serving Across Mumbai, Thane & Navi Mumbai
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Select your region to explore local modular kitchen installations and showrooms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {regionalQuickLinks.map((region, idx) => (
              <Link
                key={idx}
                to={region.path}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-gold hover:text-white text-dark-800 text-xs font-semibold shadow-sm transition-all duration-200 border border-gray-200 hover:border-gold"
              >
                {region.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
