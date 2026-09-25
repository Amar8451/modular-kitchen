import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroSlides } from '../data/siteData';
import Button from './Button';

const HeroSlider = ({ onOpenQuote }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[540px] sm:h-[620px] md:h-[700px] lg:h-[760px] bg-dark-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with slight scale animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out transform ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/70 to-dark-950/40" />
            </div>

            {/* Slide Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-left py-12">
                
                {/* Subtitle Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-4 transition-all duration-700 delay-100 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{slide.subtitle}</span>
                </div>

                {/* Main Heading */}
                <h1
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4 transition-all duration-700 delay-300 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {slide.title.includes('LAXMI') || slide.title.includes('LAKSHMI') || slide.title.includes('EXCLUSIVE') ? (
                    <>
                      Welcome To <br />
                      <span className="text-brand-orange">LAXMI MODULAR KITCHENS</span> & INTERIORS
                    </>
                  ) : (
                    <>
                      Leading Service Provider Of <br />
                      <span className="text-brand-orange">Modular Kitchen Designing</span>
                    </>
                  )}
                </h1>


                {/* Subtitle / Description */}
                <p
                  className={`text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-500 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {slide.description}
                </p>

                {/* Buttons */}
                <div
                  className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-700 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Button to={slide.ctaPrimary.link} variant="gold" size="lg">
                    {slide.ctaPrimary.text}
                  </Button>
                  <Button to={slide.ctaSecondary.link} variant="outline" size="lg">
                    {slide.ctaSecondary.text}
                  </Button>
                  <button
                    onClick={onOpenQuote}
                    className="hidden sm:inline-flex items-center text-xs font-bold uppercase tracking-wider text-gold hover:text-white underline underline-offset-4 ml-2"
                  >
                    Quick Estimate &rarr;
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-dark-900/60 hover:bg-gold text-white flex items-center justify-center border border-white/20 transition-all duration-300 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-dark-900/60 hover:bg-gold text-white flex items-center justify-center border border-white/20 transition-all duration-300 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              current === i ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
