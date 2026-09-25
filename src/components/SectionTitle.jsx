import React from 'react';

const SectionTitle = ({
  subtitle,
  title,
  align = 'center', // 'center' | 'left'
  dark = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
          {isCenter && <span className="w-8 h-[2px] bg-gold inline-block"></span>}
          <span className="text-gold font-bold text-xs uppercase tracking-widest">
            {subtitle}
          </span>
          <span className="w-8 h-[2px] bg-gold inline-block"></span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 ${dark ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>

      {/* Decorative divider matching reference site styling */}
      <div className={`flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-1 bg-gold rounded-full inline-block"></span>
        <span className="w-2.5 h-2.5 bg-gold rotate-45 inline-block"></span>
        <span className="w-12 h-1 bg-gold rounded-full inline-block"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
