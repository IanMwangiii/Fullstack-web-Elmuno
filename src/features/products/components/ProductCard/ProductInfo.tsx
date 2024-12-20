import React from 'react';
import { formatPrice } from '../../../../lib/utils';

interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
}

export function ProductInfo({ name, description, price }: ProductInfoProps) {
  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      <p className="text-orange-500 font-semibold">{formatPrice(price)}</p>
    </div>
  );
}