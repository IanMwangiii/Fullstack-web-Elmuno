```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import { formatPrice } from '../../lib/utils';
import { QuantitySelector } from './QuantitySelector';

export function CartItems() {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-500">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Price</div>
          <div className="col-span-2 text-right">Total</div>
        </div>

        <div className="divide-y">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-4 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {formatPrice(item.price)} each
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex justify-center">
                <QuantitySelector
                  quantity={item.quantity}
                  onChange={(qty) => updateQuantity(item.id, qty)}
                />
              </div>

              <div className="col-span-2 text-right font-medium text-gray-900">
                {formatPrice(item.price)}
              </div>

              <div className="col-span-2 text-right font-medium text-gray-900">
                {formatPrice(item.price * item.quantity)}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```