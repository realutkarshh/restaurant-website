// app/about/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UtensilsCrossed, 
  Menu, 
  X, 
  Trophy, 
  Award, 
  Globe, 
  Heart,
  Sparkles,
  Leaf,
  ChefHat
} from 'lucide-react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const achievements = [
    {
      icon: <Trophy size={60} />,
      title: 'Three Michelin Stars',
      description: 'Recognized for exceptional cuisine and service excellence'
    },
    {
      icon: <ChefHat size={60} />,
      title: 'Award-Winning Chefs',
      description: 'Team of internationally acclaimed culinary masters'
    },
    {
      icon: <Globe size={60} />,
      title: 'Global Recognition',
      description: 'Featured in top culinary publications worldwide'
    },
    {
      icon: <Heart size={60} />,
      title: 'Guest Satisfaction',
      description: 'Consistently rated as the finest dining destination'
    }
  ];

  const values = [
    {
      icon: <Sparkles size={48} />,
      title: 'Excellence',
      description: 'We pursue perfection in every dish, every detail, every moment of your dining experience.'
    },
    {
      icon: <Award size={48} />,
      title: 'Innovation',
      description: 'Blending traditional techniques with modern culinary artistry to create unforgettable flavors.'
    },
    {
      icon: <Leaf size={48} />,
      title: 'Sustainability',
      description: 'Partnering with local farmers and sustainable suppliers to honor our environment.'
    },
    {
      icon: <Heart size={48} />,
      title: 'Authenticity',
      description: 'Staying true to culinary heritage while embracing contemporary gastronomy.'
    }
  ];

  const timeline = [
    { year: '2010', event: 'Le Prestige opens its doors with a vision of redefining luxury dining' },
    { year: '2012', event: 'Awarded first Michelin star for exceptional culinary creativity' },
    { year: '2015', event: 'Expansion to private dining rooms and exclusive tasting experiences' },
    { year: '2018', event: 'Achieved three Michelin stars, joining the world\'s elite restaurants' },
    { year: '2022', event: 'Launched sustainability program with local farm partnerships' },
    { year: '2025', event: 'Celebrating 15 years of culinary excellence and innovation' }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-950">
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

        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
          alt="Restaurant Interior"
          className="absolute w-full h-full object-cover grayscale-[20%] contrast-110 brightness-90"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/70 to-gray-950 z-10"></div>
        
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32">
          {/* Elegant subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
      
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-[#f2f2f2] mb-6"
          >
            {/* <span className="block">A Legacy of</span> */}
            <span className="block text-[#d9b061] italic">Our Story</span>
            {/* <span className="block">Excellence</span> */}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#bfafaf] text-lg md:text-xl font-light tracking-wide max-w-2xl"
          >
            Fifteen years of passion, innovation, and unwavering dedication to the art of fine dining
          </motion.p>
        </div>

      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#d9b061]"></div>
              <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
                Since 2010
              </span>
              <div className="h-[1px] w-12 bg-[#d9b061]"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#f2f2f2]">
              Where Tradition Meets <span className="text-[#d9b061] italic">Innovation</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#bfafaf] leading-relaxed font-light max-w-4xl mx-auto">
              For over fifteen years, Le Prestige has been the pinnacle of fine dining, where culinary artistry meets unparalleled hospitality. Our journey began with a simple vision: to create dining experiences that transcend the ordinary and become cherished memories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#d9b061]">Our Philosophy</h3>
              <p className="text-lg text-[#bfafaf] leading-relaxed mb-6 font-light">
                Every dish that leaves our kitchen is a testament to our unwavering commitment to perfection. We believe that exceptional cuisine is born from the perfect harmony of premium ingredients, masterful technique, and creative inspiration.
              </p>
              <p className="text-lg text-[#bfafaf] leading-relaxed font-light">
                Our chefs travel the world seeking the finest ingredients—from rare Japanese wagyu to fresh Mediterranean seafood, from artisanal cheeses to organic vegetables from local farms. Each element is carefully selected to create dishes that delight all senses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] group"
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
              
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                  alt="Fine Dining"
                  className="w-full h-full object-cover grayscale-[20%] contrast-110 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061] opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061] opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
            <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
              Join Us
            </span>
            <div className="h-[1px] w-12 bg-[#d9b061]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#f2f2f2]">
            Experience <span className="text-[#d9b061] italic">Le Prestige</span>
          </h2>
          <p className="text-lg md:text-xl text-[#bfafaf] leading-relaxed mb-10 font-light max-w-3xl mx-auto">
            Join us for an unforgettable culinary journey where every detail is crafted to perfection. Reserve your table today and discover why we're considered one of the world's finest dining destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </motion.div>
      </section>
    </div>
  );
}
