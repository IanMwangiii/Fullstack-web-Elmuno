import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../lib/utils';

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProducts = products.filter(p => p.category === 'whiskey').slice(0, 5);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="relative h-[600px]">
          <AnimatePresence mode="wait">
            {featuredProducts.map((product, index) => (
              index === currentIndex && (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-between"
                >
                  <div className="w-1/2 pr-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl font-bold text-white mb-4"
                    >
                      {product.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 mb-6"
                    >
                      {product.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-6 mb-8"
                    >
                      <div className="bg-gray-800 px-4 py-2 rounded-lg">
                        <span className="text-gray-400 text-sm">Alcohol</span>
                        <p className="text-white font-bold">{product.alcohol}%</p>
                      </div>
                      <div className="bg-gray-800 px-4 py-2 rounded-lg">
                        <span className="text-gray-400 text-sm">Size</span>
                        <p className="text-white font-bold">{product.name.split(' ').pop()}</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-6"
                    >
                      <span className="text-3xl font-bold text-amber-500">
                        {formatPrice(product.price)}
                      </span>
                      <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors transform hover:scale-105">
                        Buy Now
                      </button>
                    </motion.div>
                  </div>
                  <div className="w-1/2 relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-full filter blur-xl">
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[300px] h-[500px] object-contain mx-auto"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-amber-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}