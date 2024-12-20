import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { NavActions } from './NavActions';

export function MainNav() {
  return (
    <div className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold">CORINO</span>
          </Link>
          
          <SearchBar />
          <NavActions />
        </div>
      </div>
    </div>
  );
}