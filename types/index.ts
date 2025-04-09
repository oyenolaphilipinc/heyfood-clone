export interface Store {
  id: string;
  name: string;
  categories: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
  promoTag: string | null;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
} 