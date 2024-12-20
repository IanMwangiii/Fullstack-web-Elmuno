import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/product';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {products.map((product, index) => {
        const discount = Math.floor(Math.random() * 30) + 5;
        const originalPrice = product.price * (1 + discount/100);
        
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard
              {...product}
              rating={4}
              availability={`${Math.floor(Math.random() * 50)}/100`}
              inStock={Math.random() > 0.1}
              originalPrice={originalPrice}
              discount={discount}
            />
          </motion.div>
        );
      })}
    </div>
  );
}