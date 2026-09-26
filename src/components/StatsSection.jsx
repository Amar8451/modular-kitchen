import React, { useEffect, useState, useRef } from 'react';
import { Award, ShieldCheck, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const statsData = [
  {
    id: 1,
    value: 2500,
    suffix: '+',
    label: 'Kitchens & Interiors Delivered',
    sublabel: 'Across Mumbai, Thane & Navi Mumbai',
    icon: Users,
    color: 'from-brand-orange to-orange-500',
  },
  {
    id: 2,
    value: 16,
    suffix: '+ Years',
    label: 'Craftsmanship Heritage',
    sublabel: 'Established in 2008 in Mumbai',
    icon: Award,
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 3,
    value: 10,
    suffix: ' Years',
    label: 'Comprehensive Warranty',
    sublabel: '100% BWP Marine Grade Core',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    value: 72,
    suffix: ' Hours',
    label: 'Fast Turnkey Installation',
    sublabel: 'Precision CNC factory fabricated',
    icon: Clock,
    color: 'from-blue-500 to-indigo-600',
  },
];

const CounterItem = ({ item, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = item.value;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, item.value]);

  const Icon = item.icon;

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform`}>
          <div className="w-full h-full rounded-[10px] bg-navy-950 flex items-center justify-center text-white">
            <Icon className="w-6 h-6 text-brand-orange" />
          </div>
        </div>
        <span className="text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase">
          Verified
        </span>
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-heading">
        {count.toLocaleString()}{item.suffix}
      </div>

      <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-1">
        {item.label}
      </h4>

      <p className="text-xs text-gray-400 leading-relaxed">
        {item.sublabel}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-navy-950 via-[#0c1025] to-navy-900 border-y border-white/10 text-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            Crafting Dream Kitchens Across Mumbai
          </h2>
          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            Delivering precision engineered German fittings, 100% boiling waterproof marine plywood, and bespoke interior setups since 2008.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <CounterItem key={stat.id} item={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
