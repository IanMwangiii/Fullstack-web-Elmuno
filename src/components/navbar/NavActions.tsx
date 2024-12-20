import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cart';

export function NavActions() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-4">
      <Link to="/account">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:text-amber-500 transition-colors"
        >
          <User size={24} />
        </motion.div>
      </Link>
      
      <Link to="/wishlist">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:text-amber-500 transition-colors"
        >
          <Heart size={24} />
        </motion.div>
      </Link>
      
      <Link to="/cart" className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:text-amber-500 transition-colors"
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </motion.div>
      </Link>
    </div>
  );
}