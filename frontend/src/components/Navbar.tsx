"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "T&C", href: "/terms" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-gray-950 shadow-lg border-b border-[#d9b061]/20"
            : "bg-gray-950/95 backdrop-blur-md border-b border-[#d9b061]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative group z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start"
              >
                <span className="text-2xl md:text-3xl font-serif text-[#d9b061] tracking-wider">
                  KAP'S
                </span>
                <div className="flex items-center gap-2 -mt-1">
                  <div className="h-[1px] w-8 bg-[#d9b061]"></div>
                  <span className="text-[10px] text-[#d9c4a9] tracking-[0.3em] uppercase font-light">
                    Café
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="group relative px-4 py-2 text-[#d9c4a9] hover:text-[#d9b061] transition-colors duration-300 text-sm tracking-wider uppercase font-light"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-1 left-1/2 w-0 h-[1px] bg-[#d9b061] group-hover:w-1/2 group-hover:left-0 transition-all duration-300"></span>
                    <span className="absolute bottom-1 right-1/2 w-0 h-[1px] bg-[#d9b061] group-hover:w-1/2 group-hover:right-0 transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  href="#contact"
                  className="ml-6 px-6 py-2.5 bg-[#d9b061] text-gray-950 text-xs tracking-widest uppercase font-medium hover:bg-[#c0a050] transition-all duration-300 border border-[#d9b061]"
                >
                  Reserve
                </Link>
              </motion.div>
            </div>

            {/* Spacer for mobile button */}
            <div className="md:hidden w-10 h-10"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - OUTSIDE navbar, separate layer */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-5 right-6 text-[#d9c4a9] focus:outline-none z-[9999] w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={28} className="text-[#d9b061]" strokeWidth={2.5} />
        ) : (
          <Menu size={28} className="text-[#d9c4a9]" strokeWidth={2.5} />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-950/95 backdrop-blur-md z-[9990]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-gray-950 border-l border-[#d9b061]/20 z-[9995] overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col h-full pt-32 pb-8 px-8">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d9b061]"></div>
                  <span className="text-[#d9c4a9] text-xs tracking-[0.3em] uppercase">
                    Menu
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group block py-4 px-4 text-[#d9c4a9] hover:text-[#d9b061] hover:bg-gray-900 transition-all duration-300 border-l-2 border-transparent hover:border-[#d9b061]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg tracking-wider uppercase font-light">
                            {link.name}
                          </span>
                          <span className="text-[#d9b061] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 pt-8 border-t border-[#d9b061]/20"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center bg-[#d9b061] text-gray-950 text-sm tracking-widest uppercase font-medium hover:bg-[#c0a050] transition-all duration-300"
                  >
                    Reserve a Table
                  </Link>

                  <div className="flex justify-center gap-8 mt-8">
                    <div className="text-center">
                      <div className="text-xl font-serif text-[#d9b061]">2★</div>
                      <div className="text-[9px] text-[#bfafaf] tracking-widest uppercase mt-1">
                        Michelin
                      </div>
                    </div>
                    <div className="h-10 w-[1px] bg-[#d9b061] opacity-30"></div>
                    <div className="text-center">
                      <div className="text-xl font-serif text-[#d9b061]">10+</div>
                      <div className="text-[9px] text-[#bfafaf] tracking-widest uppercase mt-1">
                        Years
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
