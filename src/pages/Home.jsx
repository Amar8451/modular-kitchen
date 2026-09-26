import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import ModernHero from '../components/ModernHero';
import StatsSection from '../components/StatsSection';
import SolutionsSection from '../components/SolutionsSection';
import KitchenCostCalculator from '../components/KitchenCostCalculator';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BrandPartners from '../components/BrandPartners';
import InstagramShowcase from '../components/InstagramShowcase';
import CallToAction from '../components/CallToAction';
import Button from '../components/Button';
import { siteConfig, servicesData, regionalQuickLinks } from '../data/siteData';

const Home = ({ onOpenQuote, onSelectService, onViewDetails }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. Modern Interactive Hero with 3D Island & Particle Canvas */}
      <ModernHero onOpenQuote={() => onOpenQuote()} />

      {/* 2. Animated Achievements / Stats Counter Section */}
      <StatsSection />

      {/* 3. Business Introduction: About The Firm */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Images Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy-950">
                <img
                  src="/images/client/imglaxmi__1_.jpeg"
                  alt="Laxmi Modular Interior Studio"
                  className="w-full h-80 sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/images/client/new1.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                
                {/* Embedded Floating Trust Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">10-Year Warranty Certified</h4>
                    <p className="text-[11px] text-gray-300">Boiling Water Proof BWP Marine Plywood Core</p>
                  </div>
                </div>
              </div>

              {/* Overlapping secondary image badge - Founder */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-navy-900">
                <img
                  src="/images/client/n11-modified.png"
                  alt="Founder Naresh Desai"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/client/new1.jpeg';
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-950/90 text-center py-1 rounded text-[10px] text-brand-orange font-bold">
                  Founder: Naresh Desai
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-brand-orange to-orange-600 text-white font-extrabold px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="text-3xl font-black font-heading">12+</span>
                <span className="text-xs uppercase tracking-wider font-bold leading-tight">
                  Years Of <br />Excellence
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 lg:pl-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-brand-orange inline-block"></span>
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                  Welcome to Laxmi Modular Interior Studio
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 uppercase tracking-tight mb-4 font-heading">
                Where Innovation Meets Elegant Interiors ✨
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Led by Founder <strong className="text-navy-900 font-semibold">{siteConfig.founder}</strong>, we at <strong className="text-navy-900 font-semibold">{siteConfig.name}</strong> are a premier studio crafting customized luxury modular kitchens, stainless steel trolleys, acrylic modules, and bespoke bedroom furniture. With our flagship showroom in Ulhasnagar (Furniture Market, Press Bazar) and manufacturing facilities in Pune, we deliver directly to your doorstep with zero dealer markups, laser precision, and certified marine-grade waterproof materials.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "100% Boiling Water Proof (BWP) Plywood",
                  "German Soft-Close Tandem Hardware (Blum/Hettich)",
                  "Free 3D Photorealistic Design & Measurements",
                  "10-Year Written Comprehensive Warranty",
                  "Ergonomic Magic Corners & Tall Pantries",
                  "Direct Factory Prices with No Middlemen"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-navy-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Request Quote Card & CTA */}
              <div className="p-5 bg-brand-orange/5 border-l-4 border-brand-orange rounded-r-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                    Direct Consultation With Naresh Desai
                  </span>
                  <p className="text-sm sm:text-base font-bold text-navy-950 flex items-center gap-2 mt-0.5">
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-orange transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>

                <Button onClick={() => onOpenQuote()} variant="gold" size="sm">
                  Request Free Quote
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Solutions & Layouts Explorer */}
      <SolutionsSection onOpenQuote={onOpenQuote} onViewDetails={onViewDetails} />

      {/* 5. Interactive Kitchen Cost Estimator / Configurator */}
      <KitchenCostCalculator onOpenQuote={onOpenQuote} />

      {/* 6. Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Showroom Specializations"
            title="Our Premier Services & Locations"
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

      {/* 7. Working Process Section (Interactive 4 Steps) */}
      <ProcessSection onOpenQuote={() => onOpenQuote()} />

      {/* 8. Why Choose Us Section */}
      <WhyChooseUsSection onOpenQuote={() => onOpenQuote()} />

      {/* 9. Verified Customer Testimonials Carousel */}
      <TestimonialsSection />

      {/* 10. Official Instagram Posts & Real Projects Showcase */}
      <InstagramShowcase onOpenQuote={() => onOpenQuote()} />

      {/* 11. Hardware Partners */}
      <BrandPartners />

      {/* 11. Regional Locations Directory */}
      <section className="py-12 bg-light-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange block mb-1">
                Regional Hubs & Coverage
              </span>
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-navy-950">
                Serving Ulhasnagar, Kalyan, Thane, Mumbai, Pune & Greater Maharashtra
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {regionalQuickLinks.map((loc, i) => (
                <Link
                  key={i}
                  to={loc.path || `/services#${loc.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-brand-orange hover:text-white text-xs font-semibold text-gray-700 transition-colors border border-gray-200 shadow-2xs"
                >
                  {loc.label || loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final Call-to-Action Section */}
      <CallToAction onOpenQuote={() => onOpenQuote()} />

    </div>
  );
};

export default Home;
