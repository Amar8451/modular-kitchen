import React, { useState } from 'react';

const Logo = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light'; // variant 'light' is used on dark backgrounds (e.g. footer)
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: {
      img: 'h-9 sm:h-10 w-auto',
      title: 'text-base',
      subtitle: 'text-[9px]'
    },
    md: {
      img: 'h-11 sm:h-13 md:h-14 w-auto',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-[10px] sm:text-[11px]'
    },
    lg: {
      img: 'h-14 sm:h-16 md:h-18 w-auto',
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-xs'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const logoSrc = isLight
    ? '/images/resources/logo-dark-footer.png'
    : '/images/resources/logo-transparent.png';

  return (
    <div className={`inline-flex items-center gap-2 select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}>
      {!imageError ? (
        <img
          src={logoSrc}
          alt="Laxmi Modular Kitchens & Interiors"
          className={`${currentSize.img} object-contain transition-opacity duration-300 drop-shadow-sm`}
          onError={() => setImageError(true)}
          loading="eager"
        />
      ) : (
        /* Crisp Vector Fallback if image fails to load */
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 p-0.5 shadow-md shadow-brand-orange/20">
            <div className={`w-full h-full rounded-[10px] ${isLight ? 'bg-brand-navy-900' : 'bg-white'} flex items-center justify-center`}>
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <path d="M25 80V30L55 10L85 30V45" stroke="#E85025" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40 80H75" stroke="#E85025" strokeWidth="8" strokeLinecap="round"/>
                <rect x="52" y="38" width="16" height="18" rx="3" stroke="#E85025" strokeWidth="5" fill="#E85025" fillOpacity="0.15"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-serif font-black tracking-wide leading-none ${isLight ? 'text-white' : 'text-brand-navy-900'} ${currentSize.title}`}>
              Laxmi
            </span>
            <span className={`font-semibold tracking-[0.2em] text-brand-orange uppercase mt-1 leading-none ${currentSize.subtitle}`}>
              Modular Kitchens & Interiors
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;

