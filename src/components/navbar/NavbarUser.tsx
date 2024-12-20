import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Heart, Settings } from 'lucide-react';

export function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="py-2">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                <Heart size={18} />
                <span>Wishlist</span>
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                <Settings size={18} />
                <span>Settings</span>
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-red-600">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}