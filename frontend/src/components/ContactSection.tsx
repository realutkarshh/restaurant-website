'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Simulate form submission (you'll add API route later)
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gray-950 relative overflow-hidden py-20" id="contact">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d9b061]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative subtitle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
            <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
              Reach Out
            </span>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6">
            Get In <span className="text-[#d9b061] italic">Touch</span>
          </h2>

          <p className="text-base md:text-lg text-[#bfafaf] max-w-2xl mx-auto leading-relaxed font-light">
            Have questions or special requests? We'd love to hear from you and create an unforgettable dining experience.
          </p>
        </motion.div>

        {/* Form Container - Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gray-900 border border-[#d9b061]/20 p-8 md:p-12"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061]"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[#d9c4a9] font-light text-sm tracking-wider uppercase mb-3">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-4 bg-gray-950 border border-[#d9b061]/30 text-[#f2f2f2] placeholder-[#bfafaf] focus:border-[#d9b061] focus:outline-none transition-all duration-300 font-light"
                  placeholder="Your name"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d9b061] transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#d9c4a9] font-light text-sm tracking-wider uppercase mb-3">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-4 bg-gray-950 border border-[#d9b061]/30 text-[#f2f2f2] placeholder-[#bfafaf] focus:border-[#d9b061] focus:outline-none transition-all duration-300 font-light"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-[#d9c4a9] font-light text-sm tracking-wider uppercase mb-3">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-950 border border-[#d9b061]/30 text-[#f2f2f2] placeholder-[#bfafaf] focus:border-[#d9b061] focus:outline-none transition-all duration-300 resize-none font-light"
                  placeholder="Tell us about your inquiry, special requests, or reservations..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 bg-[#d9b061] text-gray-950 font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 hover:bg-[#c0a050] flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Status Message */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#d9b061]/10 border border-[#d9b061]/30">
                  <span className="text-[#d9b061] text-sm tracking-wider font-light">
                    {status}
                  </span>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d9b061] to-transparent"></div>
          <span className="text-[#d9b061] text-2xl font-serif">✦</span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d9b061] to-transparent"></div>
        </motion.div>

        {/* Additional Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-[#bfafaf] text-sm font-light mt-8 tracking-wide"
        >
          For immediate reservations, call us at <a href="tel:+15551234567" className="text-[#d9b061] hover:underline">+1 (555) 123-4567</a>
        </motion.p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#d9b061]/30 opacity-30"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-[#d9b061]/30 opacity-30"></div>
    </section>
  );
};

export default ContactSection;
