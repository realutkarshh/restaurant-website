'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredItems = [
    {
      id: 'pasta-carbonara',
      name: 'Pasta Carbonara',
      description: 'Creamy Italian pasta with bacon, eggs, and parmesan',
      price: 18.99,
      image: '/pasta-carbonara.jpg',
      category: 'Main Course',
    },
    {
      id: 'grilled-salmon',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herb butter and vegetables',
      price: 24.99,
      image: '/grilled-salmon.jpg',
      category: 'Main Course',
    },
    {
      id: 'chocolate-lava',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 9.99,
      image: '/choco-lava-cake.jpg',
      category: 'Dessert',
    },
    {
      id: 'caesar-salad',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with house-made Caesar dressing',
      price: 12.99,
      image: '/caesar-salad.jpg',
      category: 'Appetizer',
    },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden py-20" id="menu">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#d9b061]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d9b061]/5 rounded-full blur-3xl"></div>

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
              Culinary Masterpieces
            </span>
            <div className="h-[1px] w-16 bg-[#d9b061]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6">
            Our Signature <span className="text-[#d9b061] italic">Dishes</span>
          </h2>

          <p className="text-base md:text-lg text-[#bfafaf] max-w-2xl mx-auto leading-relaxed font-light">
            Discover our most beloved creations, meticulously crafted with passion and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-gray-950 border border-[#d9b061]/20 overflow-hidden hover:border-[#d9b061]/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gray-950/80 backdrop-blur-sm border border-[#d9b061]/30">
                  <span className="text-[10px] text-[#d9c4a9] font-light tracking-[0.2em] uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Price badge */}
                <div className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center bg-[#d9b061] group-hover:bg-[#c0a050] transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-[10px] text-gray-950 font-light">from</div>
                    <div className="text-sm text-gray-950 font-semibold">${item.price}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Decorative line */}
                <motion.div 
                  className="w-8 h-[1px] bg-[#d9b061] mb-4"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                />

                <h3 className="text-xl md:text-2xl font-serif text-[#f2f2f2] mb-3 group-hover:text-[#d9b061] transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-sm text-[#bfafaf] mb-5 leading-relaxed font-light line-clamp-2">
                  {item.description}
                </p>

                <Link
                  href={`/menu/${item.id}`}
                  className="inline-flex items-center gap-2 text-[#d9c4a9] text-sm tracking-wider uppercase font-light hover:text-[#d9b061] transition-colors duration-300 group/link"
                >
                  <span>View Details</span>
                  <motion.span
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </Link>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#d9b061]/20 group-hover:border-[#d9b061]/50 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center "
        >
          <Link
            href="/menu"
            className="group relative inline-block px-10 py-4 bg-transparent text-[#d9c4a9] border-2 border-[#d9b061] font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 hover:bg-[#d9b061] hover:text-gray-950"
          >
            <motion.div
              className="absolute inset-0 bg-[#d9b061] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-3 ">
              View Full Menu
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </span>
          </Link>

          {/* Optional decorative text below button */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-xs text-[#bfafaf] tracking-widest uppercase font-light"
          >
            Explore Over 50 Signature Creations
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#d9b061]/30"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-[#d9b061]/30"></div>
    </section>
  );
};

export default MenuSection;
