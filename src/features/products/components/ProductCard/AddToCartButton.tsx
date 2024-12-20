import React from 'react';
import { motion } from 'framer-motion';

interface AddToCartButtonProps {
  onClick: () => void;
  price: number;
}

export function AddToCartButton({ onClick, price }: AddToCartButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex-1 text-sm"
    >
      Add to cart
    </motion.button>
  );
}