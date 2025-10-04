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
      image: '/images/menu/carbonara.jpg',
      category: 'Main Course',
    },
    {
      id: 'grilled-salmon',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herb butter and vegetables',
      price: 24.99,
      image: '/images/menu/salmon.jpg',
      category: 'Main Course',
    },
    {
      id: 'chocolate-lava',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 9.99,
      image: '/images/menu/chocolate.jpg',
      category: 'Dessert',
    },
    {
      id: 'caesar-salad',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with house-made Caesar dressing',
      price: 12.99,
      image: '/images/menu/salad.jpg',
      category: 'Appetizer',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with passion and the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${item.price}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-orange-600 font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Link
                  href={`/menu/${item.id}`}
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
