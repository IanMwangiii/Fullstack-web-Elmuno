import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NewProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {['dewar.png', 'glenfiddich.png', 'macallan.png'].map((image, index) => (
                <motion.img
                  key={image}
                  src={`/images/${image}`}
                  alt={`Whisky ${index + 1}`}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              NEW BLENDED<br />
              SCOTCH WHISKY
            </h2>
            <p className="text-gray-600 mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly believable.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products?category=whiskey"
                className="inline-flex items-center px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Explore Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}