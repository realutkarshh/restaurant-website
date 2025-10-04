'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationHours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hours = [
    { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 9:00 PM' },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-b from-[#1a2937] to-[#0f1b27] relative overflow-hidden py-20">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#d9b061]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#d9b061]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Decorative subtitle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
            <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
              Find Us
            </span>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6">
            Visit <span className="text-[#d9b061] italic">Us</span>
          </h2>

          <p className="text-base md:text-lg text-[#bfafaf] max-w-2xl mx-auto leading-relaxed font-light">
            Experience culinary excellence in the heart of the city
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map - Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] lg:h-[550px] group"
          >
            {/* Outer elegant border frame */}
            <div className="absolute -inset-4 border-2 border-[#d9b061]/30 group-hover:border-[#d9b061]/50 transition-all duration-500"></div>
            
            {/* Inner frame */}
            <div className="absolute inset-0 border border-[#d9b061]/20 bg-[#0f1b27] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784968459395!3d40.748817379328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061]"></div>
          </motion.div>

          {/* Info Cards - Luxury Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative bg-[#0f1b27] border border-[#d9b061]/20 p-6 hover:border-[#d9b061]/50 transition-all duration-500"
            >
              {/* Icon background */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#d9b061]/10 flex items-center justify-center group-hover:bg-[#d9b061]/20 transition-colors duration-500">
                <MapPin className="text-[#d9b061]" size={20} />
              </div>

              <div className="relative">
                <h3 className="text-xl font-serif text-[#f2f2f2] mb-4 group-hover:text-[#d9b061] transition-colors duration-300">
                  Address
                </h3>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-4"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  123 Culinary Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#d9b061]/20 group-hover:border-[#d9b061]/50 transition-colors duration-500"></div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative bg-[#0f1b27] border border-[#d9b061]/20 p-6 hover:border-[#d9b061]/50 transition-all duration-500"
            >
              {/* Icon background */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#d9b061]/10 flex items-center justify-center group-hover:bg-[#d9b061]/20 transition-colors duration-500">
                <Clock className="text-[#d9b061]" size={20} />
              </div>

              <div className="relative">
                <h3 className="text-xl font-serif text-[#f2f2f2] mb-4 group-hover:text-[#d9b061] transition-colors duration-300">
                  Opening Hours
                </h3>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-4"></div>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between text-[#bfafaf] font-light text-sm">
                      <span>{item.day}</span>
                      <span className="text-[#d9c4a9]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#d9b061]/20 group-hover:border-[#d9b061]/50 transition-colors duration-500"></div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative bg-[#0f1b27] border border-[#d9b061]/20 p-6 hover:border-[#d9b061]/50 transition-all duration-500"
            >
              {/* Icon background */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#d9b061]/10 flex items-center justify-center group-hover:bg-[#d9b061]/20 transition-colors duration-500">
                <Phone className="text-[#d9b061]" size={20} />
              </div>

              <div className="relative">
                <h3 className="text-xl font-serif text-[#f2f2f2] mb-4 group-hover:text-[#d9b061] transition-colors duration-300">
                  Contact
                </h3>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-4"></div>
                <div className="space-y-3">
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center gap-3 text-[#bfafaf] hover:text-[#d9b061] transition-colors font-light group/link"
                  >
                    <Phone size={16} className="text-[#d9b061]" />
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a 
                    href="mailto:info@restaurant.com" 
                    className="flex items-center gap-3 text-[#bfafaf] hover:text-[#d9b061] transition-colors font-light group/link"
                  >
                    <Mail size={16} className="text-[#d9b061]" />
                    <span>info@restaurant.com</span>
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#d9b061]/20 group-hover:border-[#d9b061]/50 transition-colors duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#d9b061]/30 opacity-30"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-[#d9b061]/30 opacity-30"></div>
    </section>
  );
};

export default LocationHours;
