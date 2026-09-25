import React from 'react';

const Logo = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light'; // on dark backgrounds (e.g. footer)

  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8',
      title: 'text-base',
      subtitle: 'text-[9px]'
    },
    md: {
      icon: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-lg sm:text-xl md:text-2xl',
      subtitle: 'text-[10px] sm:text-[11px]'
    },
    lg: {
      icon: 'w-12 h-12 sm:w-14 sm:h-14',
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-xs'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Premium Stylized Emblem */}
      <div className={`relative ${currentSize.icon} shrink-0 rounded-xl bg-gradient-to-br from-gold-300 via-gold to-gold-600 p-[2px] shadow-md group-hover:shadow-gold/30 transition-all duration-300`}>
        <div className={`w-full h-full rounded-[10px] ${isLight ? 'bg-dark-900' : 'bg-white'} flex items-center justify-center relative overflow-hidden`}>
          {/* Subtle background golden flare */}
          <div className="absolute inset-0 bg-gold/10 pointer-events-none" />
          
          {/* Kitchen Icon Emblem SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-3/5 h-3/5 text-gold"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant Kitchen Layout + Monogram L */}
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
            <path d="M12 2v4" stroke="#d5ac63" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-heading font-black tracking-wider leading-none uppercase ${
            isLight ? 'text-white' : 'text-dark-900'
          } ${currentSize.title}`}
        >
          LAKSHMI
        </span>
        <span
          className={`font-semibold tracking-[0.22em] text-gold uppercase mt-1 leading-none ${currentSize.subtitle}`}
        >
          Modular Kitchen
        </span>
      </div>
    </div>
  );
};

export default Logo;
