import React from 'react';
import { motion } from 'framer-motion';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilters({ selectedCategory, onCategoryChange }: ProductFiltersProps) {
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'whiskey', label: 'Whiskey' },
    { id: 'beer', label: 'Beer' },
    { id: 'spirits', label: 'Spirits' },
    { id: 'gin', label: 'Gin' },
    { id: 'vodka', label: 'Vodka' },
    { id: 'wine', label: 'Wine' },
    { id: 'tequila', label: 'Tequila' },
    { id: 'brandy', label: 'Brandy' },
    { id: 'energy-drinks', label: 'Energy Drinks' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(({ id, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === id
                ? 'bg-amber-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}