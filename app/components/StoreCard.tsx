import { Box, Typography, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Store } from '@/types';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: 'none',
  border: '1px solid #f0f0f0',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
}));

const PromoTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: '#00B37A',
  color: 'white',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontSize: '0.875rem',
  fontWeight: 500,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '56.25%', // 16:9 aspect ratio
  backgroundColor: '#f5f5f5',
  overflow: 'hidden'
}));

interface Props {
  store: Store;
}

export default function StoreCard({ store }: Props) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4.0) return '#00B37A';
    if (rating >= 3.0) return '#FFB800';
    return '#FF4B4B';
  };

  return (
    <StyledCard>
      <ImageContainer>
        <CardMedia
          component="img"
          image={store.imageUrl}
          alt={store.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {store.promoTag && (
          <PromoTag>
            <LocalOfferIcon sx={{ fontSize: 16 }} />
            {store.promoTag}
          </PromoTag>
        )}
      </ImageContainer>

      <Box sx={{ p: 2 }}>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            mb: 1, 
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          {store.name}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
          {store.categories.map((category, index) => (
            <Typography
              key={index}
              variant="body2"
              color="text.secondary"
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                '&:not(:last-child):after': {
                  content: '","',
                  marginLeft: '2px'
                }
              }}
            >
              {category}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5,
            color: getRatingColor(store.rating)
          }}>
            <StarIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            <Typography 
              variant="body2" 
              fontWeight="medium"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
            >
              {store.rating.toFixed(1)}
            </Typography>
          </Box>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
          >
            {store.reviewCount}+ Ratings
          </Typography>
        </Box>
      </Box>
    </StyledCard>
  );
} 