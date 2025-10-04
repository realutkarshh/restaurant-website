import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden border-t border-[#d9b061]/20">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d9c4a9 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d9b061] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <div className="flex flex-col items-start">
                <span className="text-3xl font-serif text-[#d9b061] tracking-wider group-hover:text-[#c0a050] transition-colors duration-300">
                  KAP'S
                </span>
                <div className="flex items-center gap-2 -mt-1">
                  <div className="h-[1px] w-8 bg-[#d9b061]"></div>
                  <span className="text-[10px] text-[#d9c4a9] tracking-[0.3em] uppercase font-light">
                    Café
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-[#bfafaf] text-sm leading-relaxed font-light mb-6">
              Experience culinary excellence with our carefully crafted dishes and warm hospitality.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-[#d9b061]/30 flex items-center justify-center hover:border-[#d9b061] hover:bg-[#d9b061]/10 transition-all duration-300 group"
              >
                <Facebook size={18} className="text-[#d9c4a9] group-hover:text-[#d9b061] transition-colors duration-300" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#d9b061]/30 flex items-center justify-center hover:border-[#d9b061] hover:bg-[#d9b061]/10 transition-all duration-300 group"
              >
                <Instagram size={18} className="text-[#d9c4a9] group-hover:text-[#d9b061] transition-colors duration-300" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#d9b061]/30 flex items-center justify-center hover:border-[#d9b061] hover:bg-[#d9b061]/10 transition-all duration-300 group"
              >
                <Twitter size={18} className="text-[#d9c4a9] group-hover:text-[#d9b061] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-[#f2f2f2] mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-[#d9b061]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#bfafaf] hover:text-[#d9b061] transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="w-0 h-[1px] bg-[#d9b061] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#bfafaf] hover:text-[#d9b061] transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="w-0 h-[1px] bg-[#d9b061] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#bfafaf] hover:text-[#d9b061] transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="w-0 h-[1px] bg-[#d9b061] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#bfafaf] hover:text-[#d9b061] transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="w-0 h-[1px] bg-[#d9b061] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-[#f2f2f2] mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-[#d9b061]"></div>
            </h4>
            <ul className="space-y-4 text-[#bfafaf]">
              <li className="flex items-start space-x-3 group">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#d9b061]" />
                <span className="text-sm font-light leading-relaxed">
                  123 Culinary Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-[#d9b061]" />
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-[#d9b061] transition-colors duration-300 text-sm font-light"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-[#d9b061]" />
                <a 
                  href="mailto:info@restaurant.com" 
                  className="hover:text-[#d9b061] transition-colors duration-300 text-sm font-light"
                >
                  info@restaurant.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif text-[#f2f2f2] mb-6 relative inline-block">
              Opening Hours
              <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-[#d9b061]"></div>
            </h4>
            <ul className="space-y-3 text-[#bfafaf]">
              <li className="flex justify-between text-sm font-light">
                <span>Mon - Thu</span>
                <span className="text-[#d9c4a9]">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-sm font-light">
                <span>Fri - Sat</span>
                <span className="text-[#d9c4a9]">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-sm font-light">
                <span>Sunday</span>
                <span className="text-[#d9c4a9]">10:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-6 my-12">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d9b061]/30 to-transparent"></div>
          <span className="text-[#d9b061] text-xl font-serif">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d9b061]/30 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#bfafaf] text-sm font-light">
            © 2025 KAP'S Café. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link 
              href="/terms" 
              className="text-[#bfafaf] hover:text-[#d9b061] text-sm font-light transition-colors duration-300 tracking-wide"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/privacy" 
              className="text-[#bfafaf] hover:text-[#d9b061] text-sm font-light transition-colors duration-300 tracking-wide"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d9b061]/20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d9b061]/20"></div>
    </footer>
  );
};

export default Footer;
