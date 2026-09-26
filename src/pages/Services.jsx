import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BrandPartners from '../components/BrandPartners';
import KitchenCostCalculator from '../components/KitchenCostCalculator';
import CallToAction from '../components/CallToAction';
import Button from '../components/Button';
import { servicesData } from '../data/siteData';

const Services = ({ onOpenQuote, onSelectService, onViewDetails }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Handle hash scrolling if a specific service is linked (e.g. /services#thane)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-gold', 'ring-offset-4');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-gold', 'ring-offset-4');
          }, 3000);
        }, 200);
      }
    }
  }, [location.hash]);

  const filteredServices = servicesData.filter((item) => {
    const matchesCategory =
      filter === 'all'
        ? true
        : filter === 'kitchen'
        ? item.category === 'kitchen'
        : filter === 'bedroom'
        ? item.category === 'bedroom'
        : filter === 'interior'
        ? item.category === 'interior'
        : filter === 'furniture'
        ? item.category === 'furniture'
        : true;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title="Our Services"
        subtitle="Modular Kitchens, Wardrobes & Complete Home Interiors"
        breadcrumb={[{ name: 'Services' }]}
      />

      <section className="py-20 bg-light-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Expert Craftsmanship Across Pune, Wagholi & Greater Maharashtra"
            title="Modular Kitchens & Interior Solutions"
          />

          {/* Filter Bar & Search */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { label: 'All Services', key: 'all' },
                { label: 'Modular Kitchens', key: 'kitchen' },
                { label: 'Complete Interiors', key: 'interior' },
                { label: 'Wardrobes & Beds', key: 'bedroom' },
                { label: 'Custom Furniture', key: 'furniture' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    filter === tab.key
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search area (e.g. Thane, Dadar)..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-dark-900 focus:outline-none focus:border-gold focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-dark-900"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="text-lg font-bold text-gray-700">No services found matching "{searchQuery}"</p>
              <p className="text-xs text-gray-500 mt-2">Try searching for Thane, Kalyan, Dombivli, Andheri, or Bedroom.</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 bg-gold text-white rounded-lg text-xs font-bold uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} id={service.id} className="transition-all duration-300">
                  <ServiceCard
                    service={service}
                    onEnquire={onSelectService}
                    onViewDetails={onViewDetails}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Consultation CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white border border-brand-orange/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-2">
                Need a Custom Layout?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Can't find your exact location?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                We service the entire Mumbai Metropolitan Region (MMR). Book a free on-site design consultation and our senior interior architect will visit your property.
              </p>
            </div>
            <Button onClick={onOpenQuote} variant="gold" size="lg">
              Book Free Site Visit
            </Button>
          </div>

        </div>
      </section>

      {/* Interactive Kitchen Cost Estimator on Services Page */}
      <KitchenCostCalculator onOpenQuote={onOpenQuote} />

      <BrandPartners />

      {/* Modern High Conversion Call To Action */}
      <CallToAction onOpenQuote={onOpenQuote} />
    </div>
  );
};

export default Services;

