import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductImage } from './ProductImage';
import { ProductRating } from './ProductRating';
import { ProductPrice } from './ProductPrice';
import { ProductActions } from './ProductActions';
import { useCartStore } from '../../../store/cart';
import { Product } from '../../../types/product';

interface ProductCardProps extends Product {
  rating: number;
  availability: string;
  inStock: boolean;
  discount?: number;
  originalPrice?: number;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  availability,
  inStock,
  discount,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, quantity });
    setQuantity(1);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
    >
      <ProductImage src={image} alt={name} discount={discount} />
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white hover:text-amber-500 transition-colors cursor-pointer line-clamp-2">
          {name}
        </h3>
        
        <ProductRating rating={rating} />
        
        <ProductPrice price={price} originalPrice={originalPrice} />
        
        <div className="flex items-center justify-between text-sm">
          <span className={`${inStock ? 'text-green-400' : 'text-red-400'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <span className="text-dark-300">
            Available: {availability}
          </span>
        </div>
        
        <ProductActions
          quantity={quantity}
          onQuantityChange={setQuantity}
          onAddToCart={handleAddToCart}
          inStock={inStock}
        />
      </div>
    </motion.div>
  );
}