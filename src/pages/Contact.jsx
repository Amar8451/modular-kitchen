import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles
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
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Showroom & Workshop</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase text-dark-900 mb-6">
                  Corporate Office
                </h3>

                <ul className="space-y-6 text-sm">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Address</span>
                      <p className="text-dark-900 font-medium leading-relaxed mt-1">
                        {siteConfig.address}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Direct Call / WhatsApp</span>
                      <p className="text-dark-900 font-bold text-base mt-1">
                        <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">
                          +91 {siteConfig.phone}
                        </a>
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

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Business Hours</span>
                      <p className="text-dark-900 font-medium mt-1">
                        {siteConfig.workingHours}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Direct WhatsApp Callout */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
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
                      Thank you for contacting Lakshmi Modular Kitchen. We have logged your request and our team will get in touch shortly on <strong>{formData.phone}</strong>.
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
            <div className="p-4 bg-dark-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Showroom Location Map: Furniture Bazar, Ulhasnagar, Maharashtra</span>
              </div>
              <a
                href="https://maps.google.com/?q=Furniture+Bazar+Ulhasnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:underline font-semibold"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
            <iframe
              title="Lakshmi Modular Kitchen Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1235686001093!2d73.15174427503148!3d19.233405782006325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79427b58c5417%3A0xc3cf9c9889417cb3!2sFurniture%20Bazar%2C%20Ulhasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
