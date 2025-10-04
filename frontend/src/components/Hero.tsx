'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience
            <span className="text-orange-600"> Culinary Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Where every dish tells a story of passion, tradition, and innovative flavors crafted by our master chefs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#menu"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Reserve Table
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 lg:h-[500px]"
        >
          <div className="absolute inset-0 bg-orange-600 rounded-full blur-3xl opacity-20"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/images/hero-dish.jpg"
              alt="Signature dish"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
