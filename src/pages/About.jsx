import React from 'react';
import {
  Award,
  Palette,
  CheckCircle2,
  Trophy,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Users,
  Building,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import BrandPartners from '../components/BrandPartners';
import Button from '../components/Button';
import { siteConfig, whyChooseUs, companyFacts } from '../data/siteData';

const iconMap = {
  Award,
  Palette,
  CheckCircle2,
  Trophy,
  ClipboardCheck,
  Headphones
};

const About = ({ onOpenQuote }) => {
  return (
    <div>
      {/* Page Header */}
      <PageBanner
        title="About Us"
        subtitle="Our Journey & Craftsmanship"
        breadcrumb={[{ name: 'About Us' }]}
      />

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-gold inline-block"></span>
                <span className="text-gold font-bold text-xs uppercase tracking-widest">
                  Our Mission & Profile
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-dark-900 tracking-tight mb-6">
                About Laxmi Modular Kitchens & Interiors
              </h2>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-4 leading-snug">
                We Have The Right Products to Fit Your Needs — Laxmi Modular Kitchens & Interiors
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Established in the year <strong className="text-dark-900 font-semibold">2008</strong> at Mumbai, Maharashtra, we <strong>Laxmi Modular Kitchens & Interiors</strong> are a renowned Trader, Manufacturer, and Supplier of premium quality Kitchen Trolleys, Wall Cabinets, Acrylic Shutters, Island Counters, and contemporary Bedroom Sets.
                </p>
                <p>
                  In their development process, we assure that only top-notch basic materials are used by our skilled professionals along with ultra-modern machinery, computerized edge-banders, and high-precision CNC routers. Besides, we examine each module on rigorous parameters before final dispatch and on-site assembly at our customers' destination.
                </p>
                <p>
                  Our customized furniture pieces are acclaimed across Mumbai, Thane, Kalyan, Dombivli, and Navi Mumbai for their flawless finish, smooth drawer runners, high load endurance, termite resistance, and long service life.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button onClick={onOpenQuote} variant="gold" size="md">
                  Book Free Site Measurement
                </Button>
                <Button to="/services" variant="outlineDark" size="md">
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-dark-900">
                <img
                  src="/images/about/mission.jpg"
                  alt="Laxmi Modular Kitchens Workshop"
                  className="w-full h-80 sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/images/slides/2.jpg';
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-dark-900 text-white p-6 rounded-2xl shadow-xl border-2 border-gold max-w-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-gold shrink-0" />
                  <div>
                    <h4 className="text-sm font-extrabold uppercase text-white">Quality Assured</h4>
                    <p className="text-xs text-gray-300">Grade 304 Stainless Steel & Marine Grade Plywood</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="The Laxmi Advantage"
            title="Why Choose Laxmi Modular Kitchens"
          />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <div
                  key={item.id}
                  className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-dark-950 transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-extrabold uppercase text-dark-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interesting Facts / Company Milestones */}
      <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Milestones & Overview"
            title="Interesting Facts"
            dark={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {companyFacts.map((fact, index) => (
              <div
                key={index}
                className="p-6 bg-dark-800/80 rounded-xl border border-white/10 text-center flex flex-col justify-center items-center hover:border-gold transition-colors duration-300"
              >
                <span className="text-gold text-2xl sm:text-3xl font-black mb-2">
                  {fact.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <BrandPartners />

      {/* Callout */}
      <section className="py-16 bg-gold text-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              Ready to create your dream kitchen?
            </h3>
            <p className="text-sm font-medium mt-1">
              Contact our modular kitchen specialists today for a free design consultation.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={onOpenQuote} variant="dark" size="lg">
              Get A Quote
            </Button>
            <Button to="/contact" variant="outlineDark" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
