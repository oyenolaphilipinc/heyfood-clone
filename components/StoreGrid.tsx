'use client';

import { Box, Chip } from '@mui/material';
import { Store } from '@/types';
import StoreCard from '../app/components/StoreCard';

interface StoreGridProps {
  stores: Store[];
  showClosingTime?: boolean;
}

export default function StoreGrid({ stores, showClosingTime }: StoreGridProps) {
  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      },
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