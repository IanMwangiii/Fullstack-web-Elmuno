export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'whiskey' | 'beer' | 'spirits' | 'gin' | 'vodka' | 'wine' | 'tequila' | 'brandy' | 'energy-drinks';
  alcohol: number;
}