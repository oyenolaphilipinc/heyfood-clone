import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Category } from '@/types';

const TabButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  fontWeight: 500,
  fontSize: '1rem',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const TabContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(1, 2),
  borderBottom: '1px solid #f0f0f0',
  backgroundColor: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1)
  }
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'hidden',
  position: 'relative',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
  scrollBehavior: 'smooth',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    padding: theme.spacing(1)
  }
}));

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  minWidth: '80px',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const CategoryImage = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: '#f5f5f5',
  [theme.breakpoints.down('sm')]: {
    width: '56px',
    height: '56px'
  }
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  border: '1px solid #e0e0e0',
  '&:hover': {
    backgroundColor: 'white'
  },
  zIndex: 1,
  width: 32,
  height: 32,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

interface Props {
  categories: Category[];
}

export default function NavigationTabs({ categories }: Props) {
  const [activeTab, setActiveTab] = useState('restaurants');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ 
      position: 'sticky', 
      top: 64, // Height of the navbar
      backgroundColor: '#fff',
      zIndex: 1000,
      borderBottom: '1px solid #f0f0f0'
    }}>
      {/* Tabs */}
      <TabContainer>
        <TabButton
          startIcon={<RestaurantIcon />}
          onClick={() => setActiveTab('restaurants')}
          sx={{
            backgroundColor: activeTab === 'restaurants' ? '#000' : 'transparent',
            color: activeTab === 'restaurants' ? '#fff' : '#000',
            '&:hover': {
              backgroundColor: activeTab === 'restaurants' ? '#000' : 'transparent'
            }
          }}
        >
          Restaurants
        </TabButton>
        
        <TabButton
          startIcon={<LocalGroceryStoreIcon />}
          onClick={() => setActiveTab('grocery')}
          sx={{
            backgroundColor: activeTab === 'grocery' ? '#000' : 'transparent',
            color: activeTab === 'grocery' ? '#fff' : '#000',
            '&:hover': {
              backgroundColor: activeTab === 'grocery' ? '#000' : 'transparent'
            }
          }}
        >
          Grocery
        </TabButton>
      </TabContainer>

      {/* Categories */}
      <Box sx={{ position: 'relative', my: 1 }}>
        <ScrollButton 
          onClick={() => scroll('left')} 
          sx={{ left: 8 }}
        >
          <ArrowBackIcon fontSize="small" />
        </ScrollButton>

        <ScrollContainer ref={scrollRef}>
          {categories.map((category) => (
            <Button
              key={category.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                minWidth: '80px',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'transparent'
                },
                p: 0,
                textTransform: 'none'
              }}
            >
              <CategoryImage>
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={64}
                  height={64}
                  style={{ objectFit: 'cover' }}
                />
              </CategoryImage>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  textAlign: 'center'
                }}
              >
                {category.name}
              </Typography>
            </Button>
          ))}
        </ScrollContainer>

        <ScrollButton 
          onClick={() => scroll('right')} 
          sx={{ right: 8 }}
        >
          <ArrowForwardIcon fontSize="small" />
        </ScrollButton>
      </Box>
    </Box>
  );
} 