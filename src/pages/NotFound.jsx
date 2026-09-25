import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-light-100 px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="w-24 h-24 mx-auto rounded-full bg-gold/15 text-gold font-black text-4xl flex items-center justify-center">
          404
        </div>
        <h1 className="text-3xl font-extrabold uppercase text-dark-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          The modular kitchen page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="gold" size="md" icon={Home}>
            Back To Home
          </Button>
          <Button to="/services" variant="outlineDark" size="md">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
