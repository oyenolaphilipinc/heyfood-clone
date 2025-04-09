'use client';

import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { Store, Category } from '@/types';
import { fetchStores, fetchCategories } from '@/lib/api';
import NavigationTabs from '@/components/NavigationTabs';
import SectionHeader from '@/components/SectionHeader';
import StoreGrid from '@/components/StoreGrid';
import Sidebar from '@/components/Sidebar';

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('mostPopular');
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const storesData = await fetchStores();
        const categoriesData = await fetchCategories();
        setStores(storesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Sample categories data
  const sampleCategories: Category[] = [
    { id: "1", name: "Rice", icon: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=128&h=128&fit=crop&q=80" },
    { id: "2", name: "Chicken", icon: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=128&h=128&fit=crop&q=80" },
    { id: "3", name: "Shawarma", icon: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=128&h=128&fit=crop&q=80" },
    { id: "4", name: "Juice", icon: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=128&h=128&fit=crop&q=80" },
    { id: "5", name: "Goat Meat", icon: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=128&h=128&fit=crop&q=80" },
    { id: "6", name: "Amala", icon: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=128&h=128&fit=crop&q=80" },
    { id: "7", name: "Fastfood", icon: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=128&h=128&fit=crop&q=80" },
    { id: "8", name: "Soup Bowl", icon: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=128&h=128&fit=crop&q=80" },
    { id: "9", name: "Sandwich", icon: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=128&h=128&fit=crop&q=80" },
    { id: "10", name: "Grills", icon: "https://images.unsplash.com/photo-1544025162-d76694265947?w=128&h=128&fit=crop&q=80" },
    { id: "11", name: "Grocery", icon: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=128&h=128&fit=crop&q=80" },
    { id: "12", name: "Ice Cream", icon: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=128&h=128&fit=crop&q=80" }
  ];

  // Sample store data
  const sampleStores: Store[] = [
    {
      id: "1",
      name: "MunchLunch Cafe",
      categories: ["Chicken", "Fastfood", "Rice"],
      imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=224&fit=crop&q=80",
      rating: 3.4,
      reviewCount: 27,
      promoTag: "5% off order"
    },
    {
      id: "2",
      name: "Westmead Royal Bites",
      categories: ["Rice", "Pounded Yam"],
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=224&fit=crop&q=80",
      rating: 3.7,
      reviewCount: 401,
      promoTag: "Free delivery, up to ₦500"
    },
    {
      id: "3",
      name: "Calabar Igbo Restaurant",
      categories: ["Rice", "Goat meat", "Fastfood"],
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=224&fit=crop&q=80",
      rating: 0.5,
      reviewCount: 1,
      promoTag: "₦500 off order"
    }
  ];

  // Local Delicacies data
  const localDelicacies: Store[] = [
    {
      id: "7",
      name: "Ola Mummy",
      categories: ["Chicken", "Rice", "Soup bowl", "Vegetable"],
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=224&fit=crop&q=80",
      rating: 4.2,
      reviewCount: 6528,
      promoTag: null
    },
    {
      id: "8",
      name: "Iya Meta",
      categories: ["Juice", "Pounded Yam", "Rice", "Spaghetti"],
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=224&fit=crop&q=80",
      rating: 4.3,
      reviewCount: 27142,
      promoTag: null
    },
    {
      id: "9",
      name: "Amala Skye (Ose Olorun Complex)",
      categories: ["Goat meat", "Pounded Yam", "Soup bowl"],
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=224&fit=crop&q=80",
      rating: 4.3,
      reviewCount: 5799,
      promoTag: null
    }
  ];

  // All Restaurants data
  const allRestaurants: Store[] = [
    {
      id: "10",
      name: "Cravings cuisine",
      categories: ["Rice", "Chicken", "Goat meat"],
      imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=224&fit=crop&q=80",
      rating: 5.0,
      reviewCount: 0,
      promoTag: null
    },
    {
      id: "11",
      name: "Julia foods",
      categories: ["Rice", "Chicken", "Pastries"],
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=224&fit=crop&q=80",
      rating: 5.0,
      reviewCount: 0,
      promoTag: null
    },
    {
      id: "12",
      name: "Habib/Rufaidah yoghurt & ice cream",
      categories: ["Yoghurt"],
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=224&fit=crop&q=80",
      rating: 4.7,
      reviewCount: 3,
      promoTag: null
    },
    {
      id: "13",
      name: "Item 7 Go Iwo-Road",
      categories: ["Local Dishes"],
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=224&fit=crop&q=80",
      rating: 4.5,
      reviewCount: 3149,
      promoTag: null
    },
    {
      id: "14",
      name: "Try Best Taste Spot",
      categories: ["Local Dishes", "Fast Food"],
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=224&fit=crop&q=80",
      rating: 5.0,
      reviewCount: 0,
      promoTag: null
    },
    {
      id: "15",
      name: "TopSuccess Bar & Lounge",
      categories: ["Juice"],
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=224&fit=crop&q=80",
      rating: 5.0,
      reviewCount: 0,
      promoTag: null
    }
  ];

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Implement sorting logic here
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <NavigationTabs categories={categories.length ? categories : sampleCategories} />
      
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Sidebar 
            totalStores={635} 
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
          
          <Box sx={{ flex: 1 }}>
            {/* Free Drinks Section */}
            <Box sx={{ mb: 4 }}>
              <SectionHeader title="Free drinks for you!" emoji="🍻" />
              <StoreGrid stores={sampleStores.slice(0, 3)} />
            </Box>

            {/* Local Delicacies Section */}
            <Box sx={{ mb: 4 }}>
              <SectionHeader title="Local Delicacies" emoji="🍜" />
              <StoreGrid stores={localDelicacies} showClosingTime />
            </Box>

            {/* All Restaurants Section */}
            <Box sx={{ mb: 4 }}>
              <SectionHeader title="All Restaurants" />
              <StoreGrid stores={allRestaurants} showClosingTime />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}