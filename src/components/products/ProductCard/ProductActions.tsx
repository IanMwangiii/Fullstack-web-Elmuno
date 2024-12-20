import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ProductActionsProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  inStock: boolean;
}

export function ProductActions({ quantity, onQuantityChange, onAddToCart, inStock }: ProductActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-dark-700 rounded-lg">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Minus size={16} />
        </motion.button>
        <span className="w-10 text-center text-white">{quantity}</span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Plus size={16} />
        </motion.button>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAddToCart}
        disabled={!inStock}
        className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ADD TO CART
      </motion.button>
    </div>
  );
}