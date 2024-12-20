import React from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';
import { CategoryNav } from './CategoryNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainNav />
      <CategoryNav />
      <MobileNav />
    </header>
  );
}