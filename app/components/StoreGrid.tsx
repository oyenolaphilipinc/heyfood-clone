'use client';

import { Box, Chip, useTheme, useMediaQuery } from '@mui/material';
import { Store } from '@/types';
import StoreCard from './StoreCard';

interface StoreGridProps {
  stores: Store[];
  showClosingTime?: boolean;
}

export default function StoreGrid({ stores, showClosingTime }: StoreGridProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: 3
    }}>
      {stores.map((store) => (
        <Box key={store.id} sx={{ position: 'relative' }}>
          {showClosingTime && (
            <Chip
              label="Closes at 08:30 PM"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 1,
                backgroundColor: '#00B37A',
                color: 'white',
                fontWeight: 500
              }}
            />
          )}
          <StoreCard store={store} />
        </Box>
      ))}
    </Box>
  );
} 