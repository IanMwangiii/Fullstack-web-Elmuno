```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Minus size={16} />
      </motion.button>

      <span className="w-8 text-center font-medium">{quantity}</span>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Plus size={16} />
      </motion.button>
    </div>
  );
}
```