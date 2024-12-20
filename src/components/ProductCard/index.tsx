import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import { formatPrice } from '../../lib/utils';
import { Product } from '../../types/product';

interface ProductCardProps extends Product {
  className?: string;
}

export function ProductCard({ id, name, price, description, image, category }: ProductCardProps) {
  const [quantity, setQuantity] = React.useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, quantity });
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-navy-900 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 relative">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80';
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
          <div className="text-amber-500 font-bold mb-3">
            {formatPrice(price)}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-navy-800 rounded-lg">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Minus size={16} />
              </motion.button>
              <span className="w-8 text-center text-white">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Plus size={16} />
              </motion.button>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="flex-1 bg-coral-500 text-white px-4 py-2 rounded-lg hover:bg-coral-600 transition-colors text-sm font-medium"
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}