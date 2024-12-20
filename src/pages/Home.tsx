import React from 'react';
import { HeroSlideshow } from '../components/home/HeroSlideshow';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CategoryShowcase } from '../components/home/CategoryShowcase';

export function Home() {
  return (
    <div>
      <HeroSlideshow />
      <CategoryShowcase />
      <FeaturedProducts />
    </div>
  );
}