import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wine, Beer, GlassWater, Martini, Grape, Zap } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../features/products/constants/categories';

const categoryIcons = {
  wine: Wine,
  beer: Beer,
  spirits: GlassWater,
  gin: Martini,
  vodka: Martini,
  tequila: Martini,
  brandy: Grape,
  'energy-drinks': Zap,
};

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.filter(cat => cat.id !== 'all').map((category, index) => {
            const Icon = categoryIcons[category.id] || Wine;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mb-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300"
                    >
                      <Icon size={32} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                      {category.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}