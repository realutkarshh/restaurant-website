'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'Absolutely amazing experience! The food was exceptional and the service was impeccable. Every dish is a masterpiece that tells a story of passion and dedication.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Best fine dining restaurant in the city! The culinary expertise is unmatched. An unforgettable gastronomic journey that exceeded all expectations.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      comment: 'Perfect ambiance for a romantic dinner. The chef truly knows how to create magic with every dish. A luxurious experience from start to finish.',
    },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gray-950 relative overflow-hidden py-20">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Header Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6">
            Guest <span className="text-[#d9b061] italic">Experiences</span>
          </h2>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>
        </motion.div>

        {/* Testimonials - Cleaner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Quote icon - smaller and more subtle */}
              <Quote size={40} className="text-[#d9b061] opacity-30 mb-6" />

              {/* Testimonial text - larger and more prominent */}
              <p className="text-[#d9c4a9] text-lg leading-relaxed mb-8 font-light">
                {testimonial.comment}
              </p>

              {/* Name - simple and elegant */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#d9b061]"></div>
                <p className="text-[#f2f2f2] font-serif text-base">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
