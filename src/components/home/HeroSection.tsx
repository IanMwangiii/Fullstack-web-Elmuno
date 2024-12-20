import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#gradient)" />
        </svg>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
        </defs>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              THE BEST IDEAS<br />
              COMES FROM<br />
              <span className="text-amber-500">THE SIMPLICITY</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg">
              Discover our premium collection of fine spirits and wines.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Check Collection
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-full filter blur-xl">
            </div>
            <img
              src="https://www.ballantines.com/wp-content/uploads/2020/10/ballantines-finest-bottle.png"
              alt="Featured Product"
              className="w-full h-auto max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}