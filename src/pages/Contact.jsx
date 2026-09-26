import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Truck,
  Navigation
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { siteConfig, servicesData } from '../data/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Modular Kitchen Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or kitchen requirements';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Modular Kitchen Enquiry',
      message: ''
    });
  };

  return (
    <div>
      {/* Page Header */}
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch with our Kitchen Specialists"
        breadcrumb={[{ name: 'Contact Us' }]}
      />

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Let's Discuss Your Dream Project"
            title="Send Your Message"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Corporate Office Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-gold">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Main Showroom & Studio</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Delivery Available</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold uppercase text-dark-900 mb-6">
                  Ulhasnagar Showroom
                </h3>

                <ul className="space-y-6 text-sm">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Showroom Address</span>
                      <p className="text-dark-900 font-semibold leading-relaxed mt-1">
                        {siteConfig.address}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                          <strong>Located in:</strong> {siteConfig.locatedIn}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 font-mono text-[11px] border border-sky-200">
                          <Navigation className="w-3 h-3" />
                          <span>{siteConfig.plusCode}</span>
                        </span>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Service & Logistics</span>
                      <p className="text-dark-900 font-bold text-sm mt-0.5 flex items-center gap-1 text-emerald-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>✓ Direct Home Delivery & Complete Installation</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Serving Ulhasnagar, Kalyan, Dombivli, Thane, Navi Mumbai, Mumbai & Pune.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Direct Call / WhatsApp</span>
                      <p className="text-dark-900 font-extrabold text-lg mt-1 tracking-wide">
                        <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors font-mono">
                          {siteConfig.phoneDisplay}
                        </a>
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Alternate: <a href={`tel:${siteConfig.altPhone}`} className="hover:text-gold font-medium">{siteConfig.altPhoneDisplay}</a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Store Operating Hours</span>
                      <p className="text-emerald-700 font-bold text-sm mt-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{siteConfig.workingHoursShort}</span>
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {siteConfig.workingHours}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Email Inquiry</span>
                      <p className="text-dark-900 font-medium mt-1">
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                          {siteConfig.email}
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Direct WhatsApp & Google Profile Callouts */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <a
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-gray-50 text-dark-900 border border-gray-300 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-200"
                  >
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>View on Google Maps / Reviews</span>
                  </a>
                </div>
              </div>

              {/* Founder Contact Badge */}
              <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white p-6 rounded-2xl shadow-md border border-white/10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange shrink-0 bg-white/10">
                  <img
                    src="/images/client/n11-modified.png"
                    alt="Founder Naresh Desai"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                    Studio Founder & Lead Designer
                  </span>
                  <h4 className="text-base font-extrabold text-white">Naresh Desai</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    "We respect deadlines and ensure every kitchen is built with utmost precision and customer happiness."
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-extrabold uppercase text-dark-900 mb-2">
                  Send Your Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-8">
                  Fill in your details below and our kitchen architect will contact you within 2 business hours.
                </p>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-dark-900">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Laxmi Modular Kitchens & Interiors. We have logged your request and our team will get in touch shortly on <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="thm-btn-gold text-xs py-3 px-8"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name*"
                          className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          } focus:outline-none focus:border-gold`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Mail*"
                          className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          } focus:outline-none focus:border-gold`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                          Your Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number*"
                          className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border ${
                            errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          } focus:outline-none focus:border-gold`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                          Subject / Requirement
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-gold bg-white"
                        >
                          <option value="Modular Kitchen Enquiry">Modular Kitchen Enquiry</option>
                          <option value="Bedroom Sets & Wardrobes">Bedroom Sets & Wardrobes</option>
                          <option value="Kitchen Trolleys & Accessories">Kitchen Trolleys & Accessories</option>
                          <option value="Free Site Measurement">Free Site Measurement</option>
                          <option value="Showroom Visit Booking">Showroom Visit Booking</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                        Your Message / Kitchen Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, kitchen shape (L-shape, U-shape, etc.), or question here..."
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:border-gold`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="thm-btn-gold text-xs py-4 px-8 cursor-pointer flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="mt-16 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 bg-dark-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Showroom Map: Furniture market, 1143, near Ritik hardware, Press Bazar, Ulhasnagar 421002</span>
              </div>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-orange hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                <span>Open in Google Maps / Reviews</span>
                <span>&rarr;</span>
              </a>
            </div>
            <iframe
              title="Laxmi Modular Kitchens & Interiors Location Map"
              src="https://maps.google.com/maps?q=Furniture+market+1143+near+Ritik+hardware+Press+Bazar+Ulhasnagar+Maharashtra+421002&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
