export interface Store {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  promoTag: string | null;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
} 