import { FC } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartIndicator: FC = () => {
  return (
    <Link to="/cart" className="relative">
      <ShoppingBag size={24} />
      <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        0
      </span>
    </Link>
  );
}; 