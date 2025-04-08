'use client';

import { useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Category } from '@/types';

interface CategoryScrollerProps {
  categories: Category[];
}

export default function CategoryScroller({ categories }: CategoryScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <Box sx={{ position: 'relative', mt: 2 }}>
      {/* Left Arrow */}
      {showLeftArrow && (
        <IconButton
          sx={{
            position: 'absolute',
            left: -16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: 32,
            height: 32,
            '&:hover': {
              bgcolor: 'white',
            }
          }}
          onClick={() => scroll('left')}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      )}
      
      {/* Categories */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          py: 2,
          px: 0.5,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          '& > div': {
            flexShrink: 0
          }
        }}
        onScroll={handleScroll}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
                bgcolor: '#F5F5F5'
              }}
            >
              <Box 
                component="img" 
                src="/api/placeholder/24/24" 
                alt={category.name}
                sx={{ width: 24, height: 24 }}
              />
            </Box>
            <Typography variant="body2" align="center">
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
      
      {/* Right Arrow */}
      {showRightArrow && (
        <IconButton
          sx={{
            position: 'absolute',
            right: -16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: 32,
            height: 32,
            '&:hover': {
              bgcolor: 'white',
            }
          }}
          onClick={() => scroll('right')}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}