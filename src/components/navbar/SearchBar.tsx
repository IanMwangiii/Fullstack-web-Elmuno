import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  'All Categories',
  'Whiskey',
  'Beer',
  'Wine',
  'Vodka',
  'Gin',
  'Tequila'
];

export function SearchBar() {
  const [category, setCategory] = useState('All Categories');
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
      <div className="flex">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 bg-gray-100 border-r border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Start your search here..."
          className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-2 bg-amber-500 text-white rounded-r-lg hover:bg-amber-600 transition-colors"
        >
          <Search size={20} />
        </motion.button>
      </div>
    </form>
  );
}