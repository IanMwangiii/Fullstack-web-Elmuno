import { ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: Array<{
  id: ProductCategory | 'all';
  label: string;
  description: string;
}> = [
  { id: 'all', label: 'All Products', description: 'Browse our complete collection' },
  { id: 'whiskey', label: 'Whiskey', description: 'Premium whiskeys from around the world' },
  { id: 'beer', label: 'Beer', description: 'Refreshing beers and lagers' },
  { id: 'spirits', label: 'Spirits', description: 'Quality spirits for every occasion' },
  { id: 'gin', label: 'Gin', description: 'Classic and flavored gins' },
  { id: 'vodka', label: 'Vodka', description: 'Premium vodkas and flavored variants' },
  { id: 'wine', label: 'Wine', description: 'Fine wines for every palate' },
  { id: 'tequila', label: 'Tequila', description: 'Premium tequilas and mezcals' },
  { id: 'brandy', label: 'Brandy', description: 'Smooth and aged brandies' },
  { id: 'energy-drinks', label: 'Energy Drinks', description: 'Energizing beverages' },
];