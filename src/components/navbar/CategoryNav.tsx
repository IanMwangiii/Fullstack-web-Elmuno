import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/products',
    children: [
      { label: 'Whisky', href: '/products?category=whiskey' },
      { label: 'Beer', href: '/products?category=beer' },
      { label: 'Wine', href: '/products?category=wine' },
    ],
  },
  {
    label: 'Blogs',
    href: '/blog',
    children: [
      { label: 'Latest Articles', href: '/blog' },
      { label: 'Drink Recipes', href: '/blog/recipes' },
      { label: 'News', href: '/blog/news' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export function CategoryNav() {
  return (
    <nav className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                to={item.href}
                className="flex items-center gap-1 px-4 py-4 hover:text-amber-500 transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown size={16} />}
              </Link>
              
              {item.children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}