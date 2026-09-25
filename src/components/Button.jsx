import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  variant = 'gold', // 'gold' | 'outline' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 relative group overflow-hidden select-none rounded-lg';

  const variants = {
    gold: 'bg-brand-orange hover:bg-brand-navy text-white border-2 border-brand-orange hover:border-brand-navy shadow-md hover:shadow-brand-orange/30 active:scale-[0.98]',
    outline: 'bg-transparent text-white border-2 border-white/90 hover:bg-brand-orange hover:border-brand-orange hover:text-white active:scale-[0.98]',
    outlineDark: 'bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-brand-orange hover:border-brand-orange hover:text-white active:scale-[0.98]',
    dark: 'bg-brand-navy hover:bg-brand-orange text-white border-2 border-brand-navy hover:border-brand-orange shadow-md active:scale-[0.98]'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-7 py-3 gap-2',
    lg: 'text-base px-9 py-4 gap-2.5'
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.gold} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {content}
    </button>
  );
};

export default Button;
