// components/StoreCard.tsx
import { Box, Typography, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface StoreCardProps {
  store: {
    id: number;
    name: string;
    categories: string[];
    imageUrl?: string;
    rating: number;
    reviewCount: number;
    promoTag?: string;
  };
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover img': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out'
        }
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
        {/* Promo Tag */}
        {store.promoTag && (
          <Chip 
            label={store.promoTag} 
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              fontWeight: 'medium',
              fontSize: '0.75rem',
              height: 'auto',
              borderRadius: 4,
              px: 1,
              py: 0.5
            }}
          />
        )}
        
        {/* Image */}
        <Box
          component="img"
          src={store.imageUrl || "/api/placeholder/400/224"}
          alt={store.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out'
          }}
        />
      </Box>
      
      {/* Content */}
      <Box sx={{ mt: 1.5 }}>
        <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 0.5, fontSize: '1.1rem' }}>
          {store.name}
        </Typography>
        
        <Typography variant="body2" sx={{ display: 'flex', flexWrap: 'wrap', color: 'text.secondary', mb: 0.5 }}>
          {store.categories.join(', ')}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              bgcolor: store.rating >= 3.0 ? '#00C853' : '#FF9800',
              color: 'white',
              borderRadius: 1,
              px: 0.5,
              mr: 1
            }}
          >
            <StarIcon sx={{ fontSize: '0.9rem' }} />
            <Typography variant="body2" fontWeight="medium">
              {store.rating.toFixed(1)}
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            {store.reviewCount}+ Ratings
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}