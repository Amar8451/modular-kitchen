import React, { useState, useId } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

const LAYOUTS = [
  { id: 'l-shape', name: 'L-Shaped Kitchen', multiplier: 1.0, icon: '📐', desc: 'Most popular layout for modern 2BHK/3BHK apartments.' },
  { id: 'parallel', name: 'Parallel (Galley)', multiplier: 1.15, icon: '⏸️', desc: 'Maximum counter space and ergonomic cooking triangle.' },
  { id: 'island', name: 'Island Kitchen', multiplier: 1.45, icon: '🏝️', desc: 'Luxury centerpiece counter with bar stools & storage.' },
  { id: 'u-shape', name: 'U-Shaped Kitchen', multiplier: 1.35, icon: '🧲', desc: 'Ideal for large independent kitchen spaces.' },
  { id: 'straight', name: 'Straight Line', multiplier: 0.85, icon: '📏', desc: 'Compact & efficient design for studio apartments.' },
];

const SIZES = [
  { id: 'compact', name: 'Compact', sqft: '60 - 75 sq.ft', basePrice: 110000, desc: 'Ideal for 1BHK / Compact 2BHK' },
  { id: 'standard', name: 'Standard', sqft: '85 - 110 sq.ft', basePrice: 165000, desc: 'Most popular for 2BHK & 3BHK' },
  { id: 'grand', name: 'Grand / Luxury', sqft: '120 - 160+ sq.ft', basePrice: 240000, desc: 'Large 3BHK, 4BHK & Penthouses' },
];

const FINISHES = [
  { id: 'acrylic', name: 'High-Gloss Acrylic', add: 25000, desc: 'Glass-like reflective mirror finish, anti-scratch' },
  { id: 'matte-pu', name: 'Super-Matte PU Polish', add: 35000, desc: 'Ultra-luxurious velvety soft-touch European look' },
  { id: 'laminate', name: 'Textured BWP Laminate', add: 0, desc: 'Highly durable, budget-friendly & scratch resistant' },
  { id: 'glass-profile', name: 'Glass & Fluted Profile', add: 48000, desc: 'Black-tinted architectural fluted glass with LED' },
];

const HARDWARE = [
  { id: 'hettich', name: 'Hettich Germany (Soft Close)', add: 15000 },
  { id: 'blum', name: 'Blum Austria (Tip-On Tandem)', add: 28000 },
  { id: 'hafele', name: 'Hafele Premium Hardware', add: 12000 },
];

const KitchenCostCalculator = ({ onOpenQuote }) => {
  const [selectedLayout, setSelectedLayout] = useState(LAYOUTS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [selectedHardware, setSelectedHardware] = useState(HARDWARE[0]);
  const uniqueId = useId();

  // Price Calculation
  const base = selectedSize.basePrice * selectedLayout.multiplier;
  const finishAdd = selectedFinish.add;
  const hardwareAdd = selectedHardware.add;

  const totalMin = Math.round((base + finishAdd + hardwareAdd) * 0.95);
  const totalMax = Math.round((base + finishAdd + hardwareAdd) * 1.08);

  const formatPrice = (num) => {
    return '₹' + num.toLocaleString('en-IN');
  };

  const handleApplyEstimate = () => {
    if (onOpenQuote) {
      onOpenQuote({
        layout: selectedLayout.name,
        size: selectedSize.name,
        finish: selectedFinish.name,
        hardware: selectedHardware.name,
        estimateRange: `${formatPrice(totalMin)} - ${formatPrice(totalMax)}`,
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-[#0d122d] to-navy-900 text-white relative overflow-hidden border-y border-white/10">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy-light/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Calculate Your Modular Kitchen Cost
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Configure your dream kitchen layout, size, and premium finishes to get an instant transparent factory-direct cost estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            
            {/* Step 1: Select Layout */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={`${uniqueId}-layout`} className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                  <span>1. Choose Kitchen Layout</span>
                </label>
                <span className="text-[11px] text-gray-400">Selected: {selectedLayout.name}</span>
              </div>
              <div id={`${uniqueId}-layout`} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {LAYOUTS.map((layout) => (
                  <button
                    key={layout.id}
                    type="button"
                    onClick={() => setSelectedLayout(layout)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedLayout.id === layout.id
                        ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/30 scale-102'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">{layout.icon}</span>
                    <span className="text-xs font-bold leading-tight">{layout.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={`${uniqueId}-size`} className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                  <span>2. Kitchen Size & Area</span>
                </label>
                <span className="text-[11px] text-gray-400">{selectedSize.sqft}</span>
              </div>
              <div id={`${uniqueId}-size`} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedSize.id === size.id
                        ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/25'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm">{size.name}</span>
                      <span className="text-[11px] opacity-80">{size.sqft}</span>
                    </div>
                    <p className="text-[11px] opacity-75">{size.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Shutter Finish */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={`${uniqueId}-finish`} className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                  <span>3. Surface Finish Material</span>
                </label>
                <span className="text-[11px] text-gray-400">10-Year Anti-Scratch</span>
              </div>
              <div id={`${uniqueId}-finish`} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FINISHES.map((finish) => (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedFinish.id === finish.id
                        ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/25'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold text-xs mb-0.5">{finish.name}</div>
                    <p className="text-[11px] opacity-75 leading-tight">{finish.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Hardware Brand */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={`${uniqueId}-hardware`} className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                  <span>4. German Soft-Close Fittings</span>
                </label>
              </div>
              <div id={`${uniqueId}-hardware`} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {HARDWARE.map((hw) => (
                  <button
                    key={hw.id}
                    type="button"
                    onClick={() => setSelectedHardware(hw)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedHardware.id === hw.id
                        ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs font-bold">{hw.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#182046] to-navy-950 p-6 sm:p-7 rounded-3xl border-2 border-brand-orange/40 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-2 text-brand-orange text-xs font-extrabold uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Price Range</span>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
                  {formatPrice(totalMin)} - {formatPrice(totalMax)}*
                </div>
                <p className="text-[11px] text-gray-300 mt-1">
                  *All-inclusive: 100% BWP Marine Plywood Carcass, Drawers, Finish Shutters, German Fittings & Professional Installation.
                </p>
              </div>

              {/* Specification Breakdown List */}
              <div className="space-y-2.5 border-t border-white/10 py-4 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span className="opacity-75">Layout:</span>
                  <span className="font-bold text-white">{selectedLayout.name}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="opacity-75">Area:</span>
                  <span className="font-bold text-white">{selectedSize.sqft}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="opacity-75">Finish:</span>
                  <span className="font-bold text-white">{selectedFinish.name}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="opacity-75">Hardware:</span>
                  <span className="font-bold text-white">{selectedHardware.name}</span>
                </div>
                <div className="flex justify-between text-emerald-400 pt-2 border-t border-white/10 font-bold">
                  <span>Warranty Included:</span>
                  <span>10 Years BWP</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleApplyEstimate}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 hover:from-brand-navy hover:to-brand-navy text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
                >
                  <span>Book Free Site 3D Design</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Zero Obligation • Laser Accurate Site Measure</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KitchenCostCalculator;
