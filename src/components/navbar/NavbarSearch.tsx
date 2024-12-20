import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function NavbarSearch() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex-1 max-w-xl">
      <div className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
        isFocused ? 'border-amber-500' : 'border-gray-300'
      }`}>
        <input
          type="text"
          placeholder="Search for drinks..."
          className="w-full px-4 py-2 outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
          <Search size={20} />
        </button>
      </div>
      
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50"
          >
            <div className="p-4">
              <p className="text-gray-500">Start typing to search...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}