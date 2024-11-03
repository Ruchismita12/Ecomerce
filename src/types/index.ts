export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory: string;
  image: string;
  rating: number;
  reviews: number;
  bestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'best-sellers';