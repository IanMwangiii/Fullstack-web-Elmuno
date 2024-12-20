import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../features/products/constants/categories';

interface NavbarCategoriesProps {
  isScrolled: boolean;
}

export function NavbarCategories({ isScrolled }: NavbarCategoriesProps) {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {PRODUCT_CATEGORIES.filter(cat => cat.id !== 'all').map((category) => (
        <motion.div
          key={category.id}
          className="relative group"
          whileHover={{ y: -2 }}
        >
          <Link
            to={`/products?category=${category.id}`}
            className={`flex items-center gap-1 transition-colors ${
              isScrolled ? 'text-gray-900 hover:text-amber-500' : 'text-white hover:text-amber-500'
            }`}
          >
            {category.label}
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute hidden group-hover:block top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="py-2">
              <p className="px-4 py-2 text-sm text-gray-500">{category.description}</p>
              <Link
                to={`/products?category=${category.id}`}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                View All
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}