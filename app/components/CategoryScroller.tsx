import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useRef } from 'react';
import { Category } from '@/types';

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

export default function CategoryScroller({ categories }: Props) {
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
    <Box sx={{ position: 'relative', my: 2 }}>
      <ScrollButton 
        onClick={() => scroll('left')} 
        sx={{ left: 8 }}
      >
        <ArrowBackIcon fontSize="small" />
      </ScrollButton>

      <ScrollContainer ref={scrollRef}>
        {categories.map((category) => (
          <CategoryItem key={category.id}>
            <CategoryImage>
              <Image
                src={category.icon}
                alt={category.name}
                fill
                sizes="64px"
                style={{ objectFit: 'cover' }}
              />
            </CategoryImage>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ 
                fontWeight: 500,
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}
            >
              {category.name}
            </Typography>
          </CategoryItem>
        ))}
      </ScrollContainer>

      <ScrollButton 
        onClick={() => scroll('right')} 
        sx={{ right: 8 }}
      >
        <ArrowForwardIcon fontSize="small" />
      </ScrollButton>
    </Box>
  );
} 