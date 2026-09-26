import React from 'react';
import {
  Award,
  Palette,
  CheckCircle2,
  Trophy,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Eye,
  Target,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import BrandPartners from '../components/BrandPartners';
import CallToAction from '../components/CallToAction';
import Button from '../components/Button';
import { siteConfig, whyChooseUs, companyFacts } from '../data/siteData';

const iconMap = {
  Award,
  Palette,
  CheckCircle2,
  Trophy,
  ClipboardCheck,
  Headphones,
  ShieldCheck
};

const About = ({ onOpenQuote }) => {
  return (
    <div>
      {/* Page Header */}
      <PageBanner
        title="About Us"
        subtitle="Where Innovation Meets Elegant Interiors"
        breadcrumb={[{ name: 'About Us' }]}
      />

      {/* Main Story & Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-brand-orange inline-block"></span>
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                  Our Story & Profile
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-navy-950 tracking-tight mb-4 font-heading">
                About Laxmi Modular Interior Studio
              </h2>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-4 leading-snug">
                Crafting Modular Kitchens and Interiors That Inspire Everyday Living ✨
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  At <strong className="text-navy-900 font-semibold">{siteConfig.name}</strong> (also known as <em>{siteConfig.subtitle}</em>), we create elegant interiors and modular kitchens that combine innovative design, smart space planning, and exceptional craftsmanship.
                </p>
                <p>
                  Founded by <strong className="text-navy-900 font-semibold">{siteConfig.founder}</strong>, our studio is dedicated to crafting bespoke spaces tailored to each family's unique lifestyle. Located conveniently at <strong className="text-navy-900">{siteConfig.landmark} in Ulhasnagar</strong>, we cater to discerning homeowners across Ulhasnagar, Kalyan, Dombivli, Thane, Navi Mumbai, Mumbai, and Pune.
                </p>
                <p>
                  Every cabinet and module is constructed using certified Boiling Water Proof (BWP) marine-grade plywood, precision computer-guided edge banding, and globally trusted fittings from Hafele, Blum, Hettich, and Godrej.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button onClick={onOpenQuote} variant="gold" size="md">
                  Book Free Site Measurement
                </Button>
                <Button to="/services" variant="outlineDark" size="md">
                  Explore Services & Gallery
                </Button>
              </div>
            </div>

            {/* Visual Image & Founder Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy-950">
                <img
                  src="/images/client/imglaxmi__1_.jpeg"
                  alt="Laxmi Modular Kitchens Studio Project"
                  className="w-full h-80 sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/images/client/new1.jpeg';
                  }}
                />
              </div>

              {/* Founder Floating Card */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-sm">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange shrink-0 bg-navy-900">
                  <img
                    src="/images/client/n11-modified.png"
                    alt="Founder Naresh Desai"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                    Studio Founder
                  </span>
                  <h4 className="text-sm font-extrabold text-navy-950">Naresh Desai</h4>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                    "We respect deadlines and ensure every kitchen reflects true dedication and durability."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Purpose & Philosophy"
            title="Vision & Mission"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-navy-950 mb-3 font-heading">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To become the most trusted modular interior studio by creating stylish, functional, and timeless living spaces that enhance every lifestyle through innovation, quality, and personalized design.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-navy-950 mb-3 font-heading">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Building elegant modular kitchens and interiors with creativity, quality craftsmanship, honest factory pricing, and 100% customer satisfaction across every single home we touch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="The Laxmi Advantage"
            title="Why Homeowners Choose Us"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <div
                  key={item.id}
                  className="bg-slate-50 p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-extrabold uppercase text-navy-950 mb-2">
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
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Milestones & Numbers"
            title="Studio Highlights"
            dark={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {companyFacts.map((fact, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col justify-center items-center hover:border-brand-orange transition-colors duration-300 backdrop-blur-sm"
              >
                <span className="text-brand-orange text-2xl sm:text-3xl font-black mb-2 font-heading">
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

      {/* Modern High Conversion Call To Action */}
      <CallToAction onOpenQuote={onOpenQuote} />
    </div>
  );
};

export default About;
