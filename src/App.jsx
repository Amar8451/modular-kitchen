import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState(null);
  const [detailService, setDetailService] = useState(null);

  const handleOpenQuote = (service = null) => {
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteService(null);
  };

  const handleViewDetails = (service) => {
    setDetailService(service);
  };

  const handleCloseDetails = () => {
    setDetailService(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      
      {/* 1. Header & Navigation */}
      <TopBar />
      <Navbar onOpenQuote={() => handleOpenQuote(null)} />

      {/* 2. Main Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenQuote={() => handleOpenQuote(null)}
                onSelectService={(svc) => handleOpenQuote(svc)}
                onViewDetails={handleViewDetails}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenQuote={() => handleOpenQuote(null)} />}
          />
          <Route
            path="/services"
            element={
              <Services
                onOpenQuote={() => handleOpenQuote(null)}
                onSelectService={(svc) => handleOpenQuote(svc)}
                onViewDetails={handleViewDetails}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {/* 3. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote(null)} />

      {/* 4. Global Modals & Floating Features */}
      <FloatingActions />
      
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={quoteService}
      />

      <ServiceDetailModal
        service={detailService}
        onClose={handleCloseDetails}
        onEnquire={(svc) => handleOpenQuote(svc)}
      />
    </div>
  );
}

export default App;
