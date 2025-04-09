// FoodBanner.tsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '280px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: '#000',
  '&:hover': {
    '& img': {
      transform: 'scale(1.05)'
    }
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 1
}));

const StyledImage = styled(Image)({
  transition: 'transform 0.3s ease-in-out'
});

interface DiscountInfo {
  percent: string;
  location: string;
}

interface FoodBannerProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
  imageSrc: string;
  freeDelivery?: boolean;
  deliveryTimeFrom?: string;
  deliveryTimeTo?: string;
  discounts?: DiscountInfo[];
  onOrderNow?: () => void;
}

/**
 * Food Delivery Banner Component
 */
const FoodBanner: React.FC<FoodBannerProps> = ({
  title,
  subtitle,
  bgColor = "#FF7A00",
  textColor = "#FFFFFF",
  imageSrc,
  freeDelivery = false,
  deliveryTimeFrom,
  deliveryTimeTo,
  discounts = [],
  onOrderNow = () => {}
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Use different Unsplash images based on the title
  const getImageUrl = (title: string) => {
    switch (title.toLowerCase()) {
      case 'jollof square':
        return 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=600&fit=crop';
      case 'oje market':
        return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop';
      case 'bodija market':
        return 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop';
    }
  };

  return (
    <BannerContainer>
      <StyledImage
        src={imageSrc}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <BannerContent sx={{ bgcolor: `${bgColor}40` }}>
        <Box>
          <Typography 
            variant="h5" 
            sx={{ 
              color: textColor,
              fontWeight: 'bold',
              mb: 1
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: textColor,
                mb: 2,
                opacity: 0.9
              }}
            >
              {subtitle}
            </Typography>
          )}
          {discounts && discounts.length > 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {discounts.map((discount, index) => (
                <Typography 
                  key={index}
                  variant="body2"
                  sx={{ 
                    color: textColor,
                    opacity: 0.8
                  }}
                >
                  {discount.percent} off in {discount.location}
                </Typography>
              ))}
            </Box>
          )}
          {freeDelivery && deliveryTimeFrom && deliveryTimeTo && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: textColor,
                opacity: 0.8
              }}
            >
              Free delivery {deliveryTimeFrom} - {deliveryTimeTo}
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          onClick={onOrderNow}
          sx={{
            mt: 2,
            bgcolor: 'white',
            color: 'black',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)'
            },
            alignSelf: 'flex-start',
            textTransform: 'none',
            px: 3
          }}
        >
          Order now
        </Button>
      </BannerContent>
    </BannerContainer>
  );
};

export default FoodBanner;