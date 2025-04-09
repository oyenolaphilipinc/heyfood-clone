import { Box, Button } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Navigation() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: 2, 
        py: 1,
        px: 2,
        borderBottom: '1px solid #f0f0f0'
      }}
    >
      <Button
        variant="contained"
        startIcon={<RestaurantIcon />}
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          textTransform: 'none',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#000'
          }
        }}
      >
        Restaurants
      </Button>
      
      <Button
        startIcon={<LocalGroceryStoreIcon />}
        sx={{
          color: '#000',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}
      >
        Grocery
      </Button>
    </Box>
  );
} 