import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function FeaturedProduct() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              MACALLAN<br />
              12 YRS OLD
            </h2>
            <p className="text-gray-400 mb-8">
              Highland single malt scotch whisky.<br />
              There are many variations of passages of Lorem<br />
              ipsum available.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-2xl font-bold text-white">$60.00</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Buy Now →
              </motion.button>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-full filter blur-xl">
            </div>
            <img
              src="https://www.themacallan.com/sites/default/files/2019-03/12-yo-sherry-oak-bottle.png"
              alt="Macallan 12"
              className="w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}