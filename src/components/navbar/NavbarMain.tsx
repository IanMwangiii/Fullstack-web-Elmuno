import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';
import { NavbarDropdown } from './NavbarDropdown';
import { products } from '../../data/products';
import { NavbarSearch } from './NavbarSearch';
import { NavbarCart } from './NavbarCart';
import { NavbarUser } from './NavbarUser';

export function NavbarMain() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-amber-500" />
            <span className="font-bold text-xl">ELMUNO LIQUOR</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavbarDropdown 
              title="Whiskey" 
              products={products} 
              category="whiskey" 
            />
            <NavbarDropdown 
              title="Wine" 
              products={products} 
              category="wine" 
            />
            <NavbarDropdown 
              title="Beer" 
              products={products} 
              category="beer" 
            />
            <NavbarDropdown 
              title="Spirits" 
              products={products} 
              category="spirits" 
            />
            <Link 
              to="/offers" 
              className="text-gray-700 hover:text-amber-500 transition-colors"
            >
              Offers
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <NavbarSearch />
            <NavbarCart />
            <NavbarUser />
          </div>
        </div>
      </div>
    </nav>
  );
}