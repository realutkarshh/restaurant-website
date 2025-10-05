// app/menu/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/data/menuItems';
import { Search } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'appetizer', label: 'Appetizers' },
    { value: 'main', label: 'Main Course' },
    { value: 'dessert', label: 'Desserts' },
    { value: 'beverage', label: 'Beverages' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
            <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
              Culinary Excellence
            </span>
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-[#f2f2f2] mb-6">
            Our <span className="text-[#d9b061] italic">Menu</span>
          </h1>

          <p className="text-[#bfafaf] text-lg font-light tracking-wide max-w-2xl mx-auto">
            Explore our carefully curated collection of exquisite dishes
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d9c4a9] group-hover:text-[#d9b061] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-[#d9b061]/20 text-[#f2f2f2] placeholder-[#bfafaf] focus:border-[#d9b061] focus:outline-none transition-all duration-500 font-light tracking-wide hover:border-[#d9b061]/40"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.value)}
              className={`relative px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-500 ${
                selectedCategory === category.value
                  ? 'bg-[#d9b061] text-gray-950 shadow-lg shadow-[#d9b061]/20'
                  : 'bg-transparent text-[#d9c4a9] border border-[#d9b061]/40 hover:border-[#d9b061]'
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {selectedCategory === category.value && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[#d9b061]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12 }}
                className="relative bg-gray-900 overflow-hidden group cursor-pointer"
              >
                {/* Animated border effect */}
                <motion.div 
                  className="absolute inset-0 border border-[#d9b061] opacity-20"
                  whileHover={{ opacity: 60 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061] opacity-40"
                  whileHover={{ scale: 1.1, opacity: 80 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061] opacity-40"
                  whileHover={{ scale: 1.1, opacity: 80 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Image Container with parallax effect */}
                <div className="relative h-72 w-full overflow-hidden">
                  {/* Golden glow animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-[#d9b061]/30 via-transparent to-[#d9b061]/30 blur-3xl opacity-0 z-20"
                    whileHover={{ opacity: 60 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover grayscale-[30%] contrast-110 brightness-95"
                    />
                  </motion.div>

                  {/* Price Badge with animation */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="absolute top-4 right-4 bg-[#d9b061] text-gray-950 px-5 py-2 text-sm font-semibold tracking-wider z-30 shadow-lg"
                  >
                    ${item.price}
                  </motion.div>

                  {/* Dietary Tags with stagger animation */}
                  <div className="absolute top-4 left-4 flex gap-2 z-30">
                    {item.isVegetarian && (
                      <motion.span 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-950/90 backdrop-blur-sm text-[#d9c4a9] px-3 py-1.5 text-xs font-light tracking-widest border border-[#d9b061]/40"
                      >
                        VEG
                      </motion.span>
                    )}
                    {item.isGlutenFree && (
                      <motion.span 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-950/90 backdrop-blur-sm text-[#d9c4a9] px-3 py-1.5 text-xs font-light tracking-widest border border-[#d9b061]/40"
                      >
                        GF
                      </motion.span>
                    )}
                  </div>

                  {/* Gradient overlay with animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent z-10"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content with slide-up animation */}
                <motion.div 
                  className="relative p-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <motion.h3 
                    className="text-2xl md:text-3xl font-serif text-[#f2f2f2] mb-4 group-hover:text-[#d9b061] transition-colors duration-500"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.h3>
                  
                  {/* Decorative line with scale animation */}
                  <motion.div 
                    className="w-12 h-[1px] bg-[#d9b061] mb-5"
                    whileHover={{ width: "4rem" }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.p 
                    className="text-[#bfafaf] text-sm md:text-base leading-relaxed mb-8 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* View Details Button */}
                  <Link href={`/menu/${item.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative inline-block overflow-hidden "
                    >
                      <motion.div
                        className="relative px-8 py-3 bg-transparent text-[#d9c4a9] font-light tracking-wider uppercase text-sm border border-[#d9b061] hover:bg-[#d9b061] hover:text-gray-950 transition-colors duration-500"
                        whileHover={{ borderColor: "#d9b061" }}
                      >
                        <span className="relative z-10">View Details</span>
                        <motion.div
                          className="absolute inset-0 bg-[#d9b061] origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Animated shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d9b061]/10 to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                className="h-[1px] w-12 bg-[#d9b061]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
                No Results
              </span>
              <motion.div 
                className="h-[1px] w-12 bg-[#d9b061]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <p className="text-[#bfafaf] text-lg font-light">
              No items found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
