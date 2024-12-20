import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ProductCategory } from '../../features/products/types';

interface CategoryDropdownProps {
  category: {
    id: ProductCategory | 'all';
    label: string;
    description: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function CategoryDropdown({ category, isActive, onMouseEnter, onMouseLeave }: CategoryDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-amber-500 transition-colors">
        {category.label}
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50"
          >
            <div className="p-4">
              <h3 className="font-semibold mb-2">{category.label}</h3>
              <p className="text-sm text-gray-500 mb-4">{category.description}</p>
              <Link
                to={`/products?category=${category.id}`}
                className="block px-4 py-2 bg-amber-500 text-white rounded-lg text-center hover:bg-amber-600 transition-colors"
              >
                View All
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}