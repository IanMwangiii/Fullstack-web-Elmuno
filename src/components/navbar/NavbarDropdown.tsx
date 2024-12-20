import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Product } from '../../types/product';

interface NavbarDropdownProps {
  title: string;
  products: Product[];
  category: string;
}

export function NavbarDropdown({ title, products, category }: NavbarDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 py-2 text-gray-700 hover:text-amber-500 transition-colors">
        {title}
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute hidden group-hover:block left-0 top-full w-[500px] bg-white shadow-xl rounded-lg z-50"
      >
        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular {title}</h3>
            <ul className="space-y-2">
              {products
                .filter(p => p.category === category)
                .slice(0, 5)
                .map(product => (
                  <li key={product.id}>
                    <Link 
                      to={`/products/${product.id}`}
                      className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg group"
                    >
                      <div className="w-12 h-12">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-amber-500 transition-colors">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {product.alcohol}% ABV
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to={`/products?category=${category}&sort=price-low`}
                className="p-3 bg-gray-50 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Budget Friendly
              </Link>
              <Link 
                to={`/products?category=${category}&sort=price-high`}
                className="p-3 bg-gray-50 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Premium
              </Link>
              <Link 
                to={`/products?category=${category}&new=true`}
                className="p-3 bg-gray-50 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                New Arrivals
              </Link>
              <Link 
                to={`/products?category=${category}&featured=true`}
                className="p-3 bg-gray-50 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Featured
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}