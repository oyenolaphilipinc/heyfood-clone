import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const MenuItemCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)'
  }
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '120px',
  height: '120px',
  borderRadius: '8px',
  overflow: 'hidden',
  flexShrink: 0
});

const AddButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 3),
  fontWeight: 500,
  marginTop: 'auto'
}));

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  onAdd?: () => void;
}

export default function MenuItem({ name, description, price, image, onAdd }: MenuItemProps) {
  return (
    <MenuItemCard elevation={1}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ₦{price.toLocaleString()}
        </Typography>
        <AddButton
          variant="contained"
          color="primary"
          onClick={onAdd}
          sx={{ mt: 2 }}
        >
          Add to Cart
        </AddButton>
      </Box>
      <ImageContainer>
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
    </MenuItemCard>
  );
} 