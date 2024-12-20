import { useState } from 'react';
import { useCartStore } from '../../../store/cart';
import { Product } from '../types';

export function useProductActions(product: Product) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
    setQuantity(1);
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    handleAddToCart
  };
}