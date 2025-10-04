'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
      
      {/* Subtle animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Elegant subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
            <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
              Est. 2020
            </span>
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
          </motion.div>

          {/* Main heading with elegant serif font */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#f2f2f2] leading-[1.1] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Exquisite
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-[#d9b061] italic"
            >
              Culinary
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="block"
            >
              Artistry
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-[#bfafaf] text-base md:text-lg leading-relaxed max-w-lg font-light tracking-wide"
          >
            An intimate fine dining experience where tradition meets innovation, 
            crafted by Michelin-trained chefs with locally-sourced seasonal ingredients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-[#d9b061] text-gray-950 font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 hover:bg-[#c0a050]"
            >
              <span className="relative z-10">Explore Menu</span>
              <motion.div
                className="absolute inset-0 bg-[#f2f2f2] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 font-medium">
                Explore Menu
              </span>
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent text-[#d9c4a9] font-medium tracking-wider uppercase text-sm border border-[#d9b061] hover:bg-[#d9b061] hover:text-gray-950 transition-all duration-500"
            >
              Reserve Table
            </a>
          </motion.div>

          {/* Subtle decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-8 pt-8 justify-center lg:justify-start"
          >
            <div className="text-center">
              <div className="text-2xl font-serif text-[#d9b061]">15+</div>
              <div className="text-xs text-[#bfafaf] tracking-widest uppercase mt-1">Awards</div>
            </div>
            <div className="h-12 w-[1px] bg-[#d9b061] opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-serif text-[#d9b061]">2★</div>
              <div className="text-xs text-[#bfafaf] tracking-widest uppercase mt-1">Michelin</div>
            </div>
            <div className="h-12 w-[1px] bg-[#d9b061] opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-serif text-[#d9b061]">10+</div>
              <div className="text-xs text-[#bfafaf] tracking-widest uppercase mt-1">Years</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="relative h-[500px] lg:h-[650px] group"
        >
          {/* Elegant frame effect */}
          <motion.div 
            className="absolute -inset-4 border border-[#d9b061] opacity-30"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Golden glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d9b061]/20 via-transparent to-[#d9b061]/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          {/* Main image container */}
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full"
            >
              <Image
                src="/hero-image.jpg"
                alt="Signature culinary masterpiece"
                fill
                className="object-cover grayscale-[20%] contrast-110 brightness-90"
                priority
              />
            </motion.div>
            
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061] opacity-50"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#bfafaf] text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#d9b061] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
