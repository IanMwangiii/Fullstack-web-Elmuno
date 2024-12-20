import React from 'react';
import { motion } from 'framer-motion';

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <motion.div 
      className="relative w-24 h-24 md:w-32 md:h-32"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80';
        }}
      />
    </motion.div>
  );
}