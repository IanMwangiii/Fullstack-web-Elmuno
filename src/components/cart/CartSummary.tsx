```tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cart';
import { formatPrice } from '../../lib/utils';

export function CartSummary() {
  const [discountCode, setDiscountCode] = useState('');
  const items = useCartStore((state) => state.items);
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.1; // 10% discount
  const deliveryFee = 200; // KES 200 delivery fee
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Discount (10%)</span>
          <span>-{formatPrice(discount)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery fee</span>
          <span>{formatPrice(deliveryFee)}</span>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Discount voucher"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Apply
            </motion.button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          Checkout Now
        </motion.button>

        <div className="text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>90 Day Limited Warranty</span>
            <button className="text-amber-500 hover:underline">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
```