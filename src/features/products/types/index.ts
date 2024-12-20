export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ProductCategory;
  alcohol: number;
}

export type ProductCategory = 
  | 'whiskey' 
  | 'beer' 
  | 'spirits' 
  | 'gin' 
  | 'vodka' 
  | 'wine' 
  | 'tequila' 
  | 'brandy' 
  | 'energy-drinks';