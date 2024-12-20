import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';
import { Product } from '../types/product';

interface ProductCardProps extends Product {}

export function ProductCard({ id, name, price, description, image, category, alcohol }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, quantity });
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="relative group h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <span className="text-amber-500 font-bold">{formatPrice(price)}</span>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="text-gray-400">
            <span className="text-amber-500 font-semibold">{alcohol}%</span> Alcohol
          </div>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 capitalize">
            {category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Minus size={20} />
            </button>
            <span className="w-12 text-center text-white">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}