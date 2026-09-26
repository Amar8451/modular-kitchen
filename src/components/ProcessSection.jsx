import React, { useState } from 'react';
import { Compass, Layers, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Consultation & Laser Measure',
    subtitle: 'Step 1: In-Home Discovery',
    desc: 'Our design consultant visits your home in Mumbai, Thane, or Navi Mumbai with laser measuring tools and physical material swatches (Acrylic, PU, Glass, Quartz).',
    icon: Compass,
    highlights: ['Free On-Site Visit', 'Precise 3D Laser Measurement', 'Understanding Cooking Habits'],
    badge: 'Day 1',
  },
  {
    step: '02',
    title: 'Photorealistic 3D Design',
    subtitle: 'Step 2: Virtual Architecture',
    desc: 'We generate high-resolution 3D renders of your exact space. Walk through layout options (Island, L, Parallel) and customize drawer inserts and lighting before manufacturing.',
    icon: Layers,
    highlights: ['360° Virtual Preview', 'Hardware Customization (Blum/Hettich)', 'Unlimited Design Revisions'],
    badge: 'Day 2 - 3',
  },
  {
    step: '03',
    title: 'Precision CNC Fabrication',
    subtitle: 'Step 3: Factory Craftsmanship',
    desc: 'Your kitchen modules are precision-cut with computerized CNC machinery and sealed with PUR waterproof edge-banding in our Mumbai manufacturing facility.',
    highlights: ['100% Boiling Waterproof Marine Ply', 'Zero Rough Edges / PUR Edge Banding', 'Multi-Stage Quality Audit'],
    icon: Wrench,
    badge: 'Factory Direct',
  },
  {
    step: '04',
    title: '72-Hour Rapid Assembly',
    subtitle: 'Step 4: Turnkey Handover',
    desc: 'Pre-assembled modular units arrive safely packed. Our factory-trained carpenters install the entire kitchen with zero dust and handover your 10-year warranty certificate.',
    highlights: ['Clean, Dust-Free Installation', 'Sink, Chimney & Hob Alignment', '10-Year Comprehensive Warranty'],
    icon: ShieldCheck,
    badge: '72 Hours',
  },
];

const ProcessSection = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Execution Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-navy-950">
            From Blueprint To Handover In 4 Seamless Steps
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            No confusion, no hidden delays. Our structured engineering process guarantees millimeter precision and unmatched luxury.
          </p>
        </div>

        {/* Connecting Progress Line (Desktop) */}
        <div className="relative mb-12 hidden lg:block">
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-12 h-1 bg-brand-orange -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (STEPS.length - 1)) * 88}%` }}
          />

          <div className="relative z-10 grid grid-cols-4 gap-6">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              const isPast = activeStep >= idx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-300 shadow-md ${
                      isCurrent
                        ? 'bg-brand-orange text-white scale-110 shadow-brand-orange/30 ring-4 ring-brand-orange/20'
                        : isPast
                        ? 'bg-brand-navy text-white'
                        : 'bg-white text-gray-500 border-2 border-gray-200 hover:border-brand-orange'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-xs font-bold uppercase tracking-wider text-navy-900">
                    {step.step}. {step.title}
                  </span>
                  <span className="text-[11px] text-gray-500">{step.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Detail Card (Interactive Focus) */}
        <div className="bg-gradient-to-br from-navy-950 via-[#101633] to-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden card-border-glow transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-brand-orange font-heading badge-float">
                  {STEPS[activeStep].step}
                </span>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange block">
                    {STEPS[activeStep].subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {STEPS[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                {STEPS[activeStep].desc}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {STEPS[activeStep].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 transition-all duration-300 hover:bg-white/10 hover:border-brand-orange/40 hover:-translate-y-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-white hover:text-navy-950 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all active:scale-95"
                >
                  Start Step 01 Now (Free Site Visit)
                </button>
              </div>

            </div>

            {/* Step navigation & visual quick tabs */}
            <div className="lg:col-span-4 bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider block mb-3">
                Select Step to View Details:
              </span>
              {STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                    activeStep === idx
                      ? 'bg-brand-orange text-white font-bold shadow-md shadow-brand-orange/30'
                      : 'hover:bg-white/10 text-gray-300 text-xs'
                  }`}
                >
                  <span className="text-xs font-semibold">{s.step}. {s.title}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
