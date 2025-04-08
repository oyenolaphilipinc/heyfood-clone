import { Store, Category } from '@/types';

// Mock data for stores
export async function fetchStores(): Promise<Store[]> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      name: 'MunchLunch Cafe',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3.4,
      reviewCount: 27,
      categories: ['Chicken', 'Fastfood', 'Rice'],
      promoTag: '5% off order'
    },
    {
      id: '2',
      name: 'Westmead Royal Bites - Bodija',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3.7,
      reviewCount: 40,
      categories: ['Rice', 'Pounded Yam'],
      promoTag: 'Free delivery, up to ₦500'
    },
    {
      id: '3',
      name: 'Calabar Igbo Restaurant Ringroad',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 0.5,
      reviewCount: 1,
      categories: ['Rice', 'Goat meat', 'Fastfood'],
      promoTag: '₦500 off order'
    },
    {
      id: '4',
      name: 'Lolu\'s Cuisine On The Go',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.2,
      reviewCount: 32,
      categories: ['Fastfood', 'Spaghetti', 'Seafood'],
      promoTag: null
    },
    {
      id: '5',
      name: 'Bankyloolas Mobile Ace maxima',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3.9,
      reviewCount: 18,
      categories: ['Small Chops', 'Chicken', 'Grills'],
      promoTag: null
    },
    {
      id: '6',
      name: 'Pasta Pan Ringroad',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      reviewCount: 53,
      categories: ['Chicken', 'Fastfood'],
      promoTag: null
    }
  ];
}

// Mock data for categories
export async function fetchCategories(): Promise<Category[]> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      name: 'All',
      icon: 'restaurant'
    },
    {
      id: '2',
      name: 'Fast Food',
      icon: 'fastfood'
    },
    {
      id: '3',
      name: 'Rice',
      icon: 'rice'
    },
    {
      id: '4',
      name: 'Chicken',
      icon: 'poultry'
    },
    {
      id: '5',
      name: 'Pizza',
      icon: 'local_pizza'
    },
    {
      id: '6',
      name: 'Burgers',
      icon: 'lunch_dining'
    },
    {
      id: '7',
      name: 'Drinks',
      icon: 'local_cafe'
    }
  ];
}