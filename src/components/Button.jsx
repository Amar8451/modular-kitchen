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
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 relative group overflow-hidden select-none';

  const variants = {
    gold: 'bg-gold hover:bg-dark-900 text-white border-2 border-gold hover:border-gold shadow-md hover:shadow-xl',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-gold hover:border-gold hover:text-white',
    outlineDark: 'bg-transparent text-dark-900 border-2 border-dark-900 hover:bg-gold hover:border-gold hover:text-white',
    dark: 'bg-dark-900 hover:bg-gold text-white border-2 border-dark-900 hover:border-gold shadow-md'
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
