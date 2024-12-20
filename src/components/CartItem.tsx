import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartItem({ id, name, price, quantity, image }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={image} alt={name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">{formatPrice(price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(id, Math.max(0, quantity - 1))}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Minus size={20} />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Plus size={20} />
        </button>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}