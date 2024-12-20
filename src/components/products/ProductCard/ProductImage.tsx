import React from 'react';
import { Heart, Search, ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductImageProps {
  src: string;
  alt: string;
  discount?: number;
}

export function ProductImage({ src, alt, discount }: ProductImageProps) {
  return (
    <div className="relative group">
      {discount && (
        <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded-md z-10">
          -{discount}%
        </span>
      )}
      
      <img 
        src={src} 
        alt={alt}
        className="w-full h-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80';
        }}
      />
      
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
        >
          <Heart size={18} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
        >
          <Search size={18} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
        >
          <ArrowLeftRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}