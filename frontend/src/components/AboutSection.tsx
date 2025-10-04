'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gray-950 relative overflow-hidden" id="about">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Header Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#f2f2f2] mb-8">
            Our <span className="text-[#d9b061] italic">Story</span>
          </h2>

          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-[#bfafaf] max-w-3xl mx-auto leading-relaxed font-light"
          >
            For over two decades, we've been dedicated to serving authentic flavors 
            with a modern twist. Our passion for culinary excellence and unwavering 
            commitment to using fresh, locally-sourced ingredients sets us apart in 
            the world of fine dining.
          </motion.p>
        </motion.div>

        {/* Feature Cards - Cleaner, No Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { 
              title: 'Fresh Ingredients', 
              description: 'Sourced daily from local farms and sustainable suppliers',
            },
            { 
              title: 'Expert Chefs', 
              description: 'Michelin-trained with 20+ years of culinary mastery',
            },
            { 
              title: 'Authentic Recipes', 
              description: 'Traditional methods harmonized with modern innovation',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
              className="text-center"
            >
              {/* Small decorative line */}
              <motion.div 
                className="w-12 h-[1px] bg-[#d9b061] mb-6 mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
              />

              <h3 className="text-2xl lg:text-3xl font-serif text-[#f2f2f2] mb-4">
                {item.title}
              </h3>

              <p className="text-[#bfafaf] leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
