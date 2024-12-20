import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ProductsHeaderProps {
  category?: string;
}

export function ProductsHeader({ category }: ProductsHeaderProps) {
  return (
    <div className="relative h-[300px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1609767839019-c2a6b3e1ea1e?auto=format&fit=crop&q=80"
          alt="Products Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <Link 
              to="/"
              className="hover:text-amber-500 transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={16} />
            <Link 
              to="/products"
              className="hover:text-amber-500 transition-colors"
            >
              Shop
            </Link>
            {category && (
              <>
                <ChevronRight size={16} />
                <span className="text-amber-500">{category}</span>
              </>
            )}
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-white mb-4"
          >
            PRODUCTS
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-xl"
          >
            Discover our premium selection of spirits, wines, and beers. 
            From rare finds to popular favorites, we have something for every taste.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"
      />
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white transform -skew-y-2" />
    </div>
  );
}