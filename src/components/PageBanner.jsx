import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageBanner = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <div className="relative bg-dark-950 py-20 md:py-24 overflow-hidden border-b-2 border-gold/40">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/images/slides/1.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          {subtitle && (
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
            {title}
          </h1>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center sm:justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white font-bold">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageBanner;
