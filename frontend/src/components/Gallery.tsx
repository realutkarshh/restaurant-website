'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const galleryImages = [
    { id: 1, src: '/gallery1.jpg', alt: 'Restaurant interior', span: 'col-span-1 row-span-2' },
    { id: 2, src: '/gallery2.jpg', alt: 'Gourmet dish', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/gallery3.webp', alt: 'Chef preparing meal', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/gallery4.jpg', alt: 'Fine dining table', span: 'col-span-1 row-span-1' },
    { id: 5, src: '/gallery5.jpg', alt: 'Dessert selection', span: 'col-span-1 row-span-1' },
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

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9b061]/5 rounded-full blur-3xl"></div>

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
              Visual Experience
            </span>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6">
            Our <span className="text-[#d9b061] italic">Gallery</span>
          </h2>

          <p className="text-base md:text-lg text-[#bfafaf] max-w-2xl mx-auto leading-relaxed font-light">
            A visual journey through our culinary artistry and elegant ambiance
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[280px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${image.span}`}
            >
              {/* Golden frame border */}
              <div className="absolute inset-0 border-2 border-[#d9b061]/30 group-hover:border-[#d9b061]/60 transition-all duration-500 z-10 pointer-events-none"></div>

              {/* Inner frame effect */}
              <div className="absolute inset-2 border border-[#d9b061]/20 group-hover:border-[#d9b061]/40 transition-all duration-500 z-10 pointer-events-none opacity-0 group-hover:opacity-100"></div>

              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden bg-gray-900">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>

                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Golden glow effect on hover */}
                <div className="absolute inset-0 bg-[#d9b061]/0 group-hover:bg-[#d9b061]/10 transition-all duration-500"></div>

                {/* Image caption overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100"
                >
                  <div className="w-12 h-[1px] bg-[#d9b061] mb-3"></div>
                  <p className="text-[#f2f2f2] text-sm tracking-wider uppercase font-light">
                    {image.alt}
                  </p>
                </motion.div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d9b061] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d9b061] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-[#d9b061]/20 text-center"
        >
          <p className="text-[#bfafaf] text-sm font-light tracking-wider mb-4">
            Experience the essence of fine dining
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d9b061] to-transparent"></div>
            <span className="text-[#d9b061] text-2xl font-serif">✦</span>
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d9b061] to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-[#d9b061]/30 opacity-30"></div>
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-[#d9b061]/30 opacity-30"></div>
    </section>
  );
};

export default Gallery;
