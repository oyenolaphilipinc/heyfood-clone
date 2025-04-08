// pages/StoresPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Store, Category } from '@/types';
import { fetchStores, fetchCategories } from '@/lib/api';
import CategoryScroller from '@/components/CategoryScroller';
import StoreCard from '@/components/StoreCard';

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sortOption, setSortOption] = useState('popular');
  const [isLoading, setIsLoading] = useState(true);
  
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

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  // Sample store data for demonstration (use this if your API isn't ready)
  const sampleStores = [
    {
      id: 1,
      name: "MunchLunch Cafe",
      categories: ["Chicken", "Fastfood", "Rice"],
      imageUrl: "/api/placeholder/400/224",
      rating: 3.4,
      reviewCount: 27,
      promoTag: "5% off order"
    },
    {
      id: 2,
      name: "Westmead Royal Bites",
      categories: ["Rice", "Pounded Yam"],
      imageUrl: "/api/placeholder/400/224",
      rating: 3.7,
      reviewCount: 401,
      promoTag: "Free delivery, up to ₦500"
    },
    {
      id: 3,
      name: "Calabar Igbo Restaurant",
      categories: ["Rice", "Goat meat", "Fastfood"],
      imageUrl: "/api/placeholder/400/224",
      rating: 0.5,
      reviewCount: 1,
      promoTag: "₦500 off order"
    },
    {
      id: 4,
      name: "Lolu's Cuisine On The Go",
      categories: ["Fastfood", "Spaghetti", "Seafood"],
      imageUrl: "/api/placeholder/400/224",
      rating: 4.1,
      reviewCount: 123
    },
    {
      id: 5,
      name: "Bankylolas Mobile Ace",
      categories: ["Small Chops", "Chicken", "Grills"],
      imageUrl: "/api/placeholder/400/224", 
      rating: 4.3,
      reviewCount: 89
    },
    {
      id: 6,
      name: "Pasta Pan Ringroad",
      categories: ["Chicken", "Fastfood"],
      imageUrl: "/api/placeholder/400/224",
      rating: 3.9,
      reviewCount: 55
    }
  ];

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Left Sidebar */}
      <Box sx={{ 
        width: 200, 
        p: 2,
        borderRight: '1px solid #f0f0f0',
        display: { xs: 'none', md: 'block' }
      }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Sort
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup 
            value={sortOption} 
            onChange={(e) => handleSortChange(e.target.value)}
            sx={{ '& .MuiFormControlLabel-root': { mb: 2 } }}
          >
            <FormControlLabel 
              value="popular" 
              control={
                <Radio 
                  sx={{ 
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }} 
                />
              } 
              label={
                <Typography variant="body1" fontWeight={sortOption === 'popular' ? 'bold' : 'regular'}>
                  Most Popular
                </Typography>
              } 
            />
            <FormControlLabel 
              value="nearest" 
              control={
                <Radio 
                  sx={{ 
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }} 
                />
              } 
              label={
                <Typography variant="body1" fontWeight={sortOption === 'nearest' ? 'bold' : 'regular'}>
                  Nearest
                </Typography>
              } 
            />
            <FormControlLabel 
              value="highest" 
              control={
                <Radio 
                  sx={{ 
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }} 
                />
              } 
              label={
                <Typography variant="body1" fontWeight={sortOption === 'highest' ? 'bold' : 'regular'}>
                  Highest rated
                </Typography>
              } 
            />
            <FormControlLabel 
              value="newest" 
              control={
                <Radio 
                  sx={{ 
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }} 
                />
              } 
              label={
                <Typography variant="body1" fontWeight={sortOption === 'newest' ? 'bold' : 'regular'}>
                  Newest
                </Typography>
              } 
            />
            <FormControlLabel 
              value="rated" 
              control={
                <Radio 
                  sx={{ 
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }} 
                />
              } 
              label={
                <Typography variant="body1" fontWeight={sortOption === 'rated' ? 'bold' : 'regular'}>
                  Most Rated
                </Typography>
              } 
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, p: 2 }}>
        {/* Stores Header */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" fontWeight="bold" component="h1">
            All Stores
          </Typography>
          <Typography color="text.secondary" variant="body1">
            (634 Stores)
          </Typography>
        </Box>

        {/* Stores Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {(stores.length ? stores : sampleStores).slice(3, 6).map((store) => (
            <Box key={store.id} sx={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '300px' }}>
              <StoreCard store={store} />
            </Box>
          ))}
        </Box>
        
        {/* Promo Banner */}
        <Box sx={{ 
          my: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Typography variant="h5" fontWeight="bold" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
            Free drinks for you! <span role="img" aria-label="cheers" style={{ marginLeft: '8px' }}>🍻</span>
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="body1" 
              component="span" 
              sx={{ mr: 2, fontWeight: 'medium', cursor: 'pointer' }}
            >
              See all
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                sx={{ 
                  width: 32,
                  height: 32,
                  border: '1px solid #e0e0e0',
                  color: 'text.secondary'
                }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ 
                  width: 32,
                  height: 32,
                  border: '1px solid #e0e0e0',
                  color: 'text.secondary'
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        
        {/* More Stores */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {(stores.length ? stores : sampleStores).slice(3, 6).map((store) => (
            <Box key={store.id} sx={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '300px' }}>
              <StoreCard store={store} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}