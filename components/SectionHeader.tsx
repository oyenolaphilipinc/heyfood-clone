'use client';

import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface SectionHeaderProps {
  title: string;
  emoji?: string;
}

export default function SectionHeader({ title, emoji }: SectionHeaderProps) {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      mb: 3
    }}>
      <Typography variant="h5" component="h2" sx={{ 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        {title} {emoji && <span role="img" aria-label="emoji">{emoji}</span>}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 500,
            cursor: 'pointer',
            color: '#00B37A',
            '&:hover': { opacity: 0.8 }
          }}
        >
          See all
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            size="small"
            sx={{ 
              width: 32,
              height: 32,
              border: '1px solid #e0e0e0',
              color: 'text.secondary',
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{ 
              width: 32,
              height: 32,
              border: '1px solid #e0e0e0',
              color: 'text.secondary',
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
} 