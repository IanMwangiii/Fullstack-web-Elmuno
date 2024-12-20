import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  maxRating?: number;
}

export function ProductRating({ rating, maxRating = 5 }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300 fill-gray-300'
          }`}
        />
      ))}
    </div>
  );
}