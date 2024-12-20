import React from 'react';
import { formatPrice } from '../../../lib/utils';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-amber-500">
        {formatPrice(price)}
      </span>
      {originalPrice && (
        <span className="text-sm text-gray-400 line-through">
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}