import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { QuantitySelector } from './QuantitySelector';
import { AddToCartButton } from './AddToCartButton';
import { useCartStore } from '../../../../store/cart';
import { Product } from '../../types';

interface ProductCardProps extends Product {}

export function ProductCard({ id, name, price, description, image }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, quantity });
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-800/80 transition-colors"
    >
      <ProductImage src={image} alt={name} />
      
      <div className="flex flex-col flex-1 min-w-0">
        <ProductInfo 
          name={name}
          description={description}
          price={price}
        />
        
        <div className="flex items-center gap-4 mt-4">
          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
          <AddToCartButton 
            onClick={handleAddToCart}
            price={price}
          />
        </div>
      </div>
    </motion.div>
  );
}