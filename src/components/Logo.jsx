import React, { useState } from 'react';

const Logo = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light'; // variant 'light' is used on dark backgrounds (e.g. footer)
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: {
      emblem: 'w-8 h-8',
      title: 'text-base',
      subtitle: 'text-[8.5px]'
    },
    md: {
      emblem: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-[9.5px] sm:text-[10px]'
    },
    lg: {
      emblem: 'w-14 h-14',
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-xs'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const emblemSrc = '/images/client/insta_logo_cropped.png';

  return (
    <div className={`inline-flex items-center gap-3 select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}>
      {/* 1. Official Circular Instagram Logo Emblem */}
      <div className={`relative ${currentSize.emblem} rounded-full overflow-hidden shrink-0 border border-gray-200/80 shadow-xs bg-white flex items-center justify-center p-0.5`}>
        {!imageError ? (
          <img
            src={emblemSrc}
            alt="Laxmi Modular Kitchens Logo"
            className="w-full h-full object-contain rounded-full"
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center text-white font-black text-sm">
            L
          </div>
        )}
      </div>

      {/* 2. Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-serif font-black tracking-tight leading-none ${isLight ? 'text-white' : 'text-navy-950'} ${currentSize.title}`}>
          Laxmi
        </span>
        <span className={`font-bold tracking-[0.16em] text-brand-orange uppercase mt-1 leading-none ${currentSize.subtitle}`}>
          Modular Kitchens & Interiors
        </span>
      </div>
    </div>
  );
};

export default Logo;
