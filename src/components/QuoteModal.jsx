import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, Send, Sparkles } from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteData';

const QuoteModal = ({ isOpen, onClose, preselectedService = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Thane',
    service: 'Modular Kitchen Dealers In Thane',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.title) {
        setFormData((prev) => ({
          ...prev,
          service: preselectedService.title
        }));
      } else if (preselectedService.layout) {
        const msg = `Configuration: ${preselectedService.layout} | Size: ${preselectedService.size || 'Standard'} | Finish: ${preselectedService.finish || 'Acrylic'} | Estimated: ${preselectedService.estimateRange || ''}`;
        setFormData((prev) => ({
          ...prev,
          service: preselectedService.layout,
          message: msg
        }));
      }
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate fast client-side submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: 'Thane',
      service: 'Modular Kitchen Dealers In Thane',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-7 relative border-b border-brand-orange/40">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Laxmi Modular Kitchens & Interiors</span>
          </div>
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
            Request A Free 3D Design & Quote
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Get an exact estimate, free site measurement, and photorealistic 3D plan.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-dark-900">Thank You, {formData.name}!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your consultation request for <strong>{formData.service}</strong> has been received. Our senior design specialist will contact you on <strong>{formData.phone}</strong> shortly.
              </p>
              
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 text-xs text-dark-800 space-y-1">
                <p className="font-semibold text-dark-900">Need immediate assistance?</p>
                <p className="flex items-center justify-center gap-1.5 font-bold text-gold text-sm">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="thm-btn-gold w-full text-xs py-3"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  } focus:outline-none focus:border-gold`}
                />
                {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-gold`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rajesh@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-gold`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-gold bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                    Location / City
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-gold bg-white"
                  >
                    <option value="Thane">Thane</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Kalyan">Kalyan</option>
                    <option value="Ulhasnagar">Ulhasnagar</option>
                    <option value="Dadar / South Mumbai">Dadar / South Mumbai</option>
                    <option value="Andheri / Western Suburbs">Andheri / Western Suburbs</option>
                    <option value="Navi Mumbai (Vashi, Nerul, Kharghar)">Navi Mumbai</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1">
                  Message / Kitchen Dimensions (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. 10x8 L-shaped kitchen, interested in acrylic finish and soft close trolleys."
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full thm-btn-gold text-xs py-3.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Get Free Quote</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
