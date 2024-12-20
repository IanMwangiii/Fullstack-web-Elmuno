import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-1">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onDecrease}
        className="p-1 hover:bg-gray-700 rounded-md transition-colors"
      >
        <Minus size={16} className="text-gray-300" />
      </motion.button>
      
      <span className="text-white min-w-[20px] text-center">{quantity}</span>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onIncrease}
        className="p-1 hover:bg-gray-700 rounded-md transition-colors"
      >
        <Plus size={16} className="text-gray-300" />
      </motion.button>
    </div>
  );
}