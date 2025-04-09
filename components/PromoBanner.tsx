'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '200px',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(2)
}));

const BannerSlide = styled(Box)({
  display: 'flex',
  gap: '16px',
  padding: '0 16px',
  overflowX: 'hidden',
  scrollBehavior: 'smooth'
});

const BannerCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 'calc(33.333% - 12px)',
  height: '200px',
  borderRadius: '12px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)'
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'calc(50% - 8px)'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%'
  }
}));

const BannerContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: theme.spacing(3),
  background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
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
  width: 40,
  height: 40,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const banners = [
  {
    id: 1,
    title: 'Jollof Square',
    subtitle: 'Enjoy discounts on your orders',
    details: '10% Agbowo, 5% Sango, 5% Mokola',
    image: '/banners/jollof-square.jpg',
    backgroundColor: '#FF6B00'
  },
  {
    id: 2,
    title: 'Oje Market',
    subtitle: 'FREE DELIVERY',
    details: 'from the market between 12:00 PM - 5:00 PM today',
    image: '/banners/oje-market.jpg',
    backgroundColor: '#2C1810'
  },
  {
    id: 3,
    title: 'Bodija Market',
    subtitle: 'FREE DELIVERY',
    details: 'from the market between 12:00 PM - 5:00 PM today',
    image: '/banners/bodija-market.jpg',
    backgroundColor: '#8B4513'
  }
];

export default function PromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('banner-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScroll = direction === 'left' 
        ? Math.max(container.scrollLeft - scrollAmount, 0)
        : Math.min(container.scrollLeft + scrollAmount, maxScroll);
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });

      setCurrentSlide(Math.round(newScroll / scrollAmount));
    }
  };

  return (
    <BannerContainer>
      <ScrollButton 
        onClick={() => handleScroll('left')} 
        sx={{ left: 16 }}
        disabled={currentSlide === 0}
      >
        <ArrowBackIcon />
      </ScrollButton>

      <BannerSlide id="banner-container">
        {banners.map((banner) => (
          <Link href={`/store/${banner.id}`} key={banner.id} style={{ textDecoration: 'none' }}>
            <BannerCard>
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <BannerContent sx={{ backgroundColor: banner.backgroundColor }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {banner.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                    {banner.subtitle}
                  </Typography>
                  <Typography variant="body2">
                    {banner.details}
                  </Typography>
                </Box>
                <Typography 
                  variant="button" 
                  sx={{ 
                    alignSelf: 'flex-start',
                    bgcolor: 'white',
                    color: 'black',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem'
                  }}
                >
                  Order now
                </Typography>
              </BannerContent>
            </BannerCard>
          </Link>
        ))}
      </BannerSlide>

      <ScrollButton 
        onClick={() => handleScroll('right')} 
        sx={{ right: 16 }}
        disabled={currentSlide === banners.length - 1}
      >
        <ArrowForwardIcon />
      </ScrollButton>
    </BannerContainer>
  );
} 