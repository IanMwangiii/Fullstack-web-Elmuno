import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductsHeader } from '../components/products/ProductsHeader';
import { ProductGrid } from '../components/products/ProductGrid';
import { products } from '../data/products';
import { PRODUCT_CATEGORIES } from '../features/products/constants/categories';

export function Products() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const category = searchParams.get('category') || 'all';

  const categoryInfo = PRODUCT_CATEGORIES.find(cat => cat.id === category);

  useEffect(() => {
    const filtered = category === 'all'
      ? products
      : products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark-950"
    >
      <ProductsHeader category={categoryInfo?.label} />
      
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {categoryInfo?.label || 'All Products'}
          </h1>
          <p className="text-dark-200 max-w-3xl">
            {categoryInfo?.description || 'Browse our complete collection of premium drinks'}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set('category', cat.id);
                window.history.pushState({}, '', `?${params.toString()}`);
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                category === cat.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </motion.div>
  );
}