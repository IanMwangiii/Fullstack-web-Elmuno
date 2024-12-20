import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function ProductQuantitySelector({ quantity, onQuantityChange }: ProductQuantitySelectorProps) {
  return (
    <div className="flex items-center bg-gray-800 rounded-lg">
      <button
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        className="p-2 text-gray-400 hover:text-white transition-colors"
      >
        <Minus size={20} />
      </button>
      <span className="w-12 text-center text-white">{quantity}</span>
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        className="p-2 text-gray-400 hover:text-white transition-colors"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}