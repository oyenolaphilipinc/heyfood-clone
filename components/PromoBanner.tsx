import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PromoBanner({ title, emoji }: { title: string, emoji?: string }) {
  return (
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h5" fontWeight="bold" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
        {title} {emoji && <span role="img" aria-label="emoji" style={{ marginLeft: '8px' }}>{emoji}</span>}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography 
          variant="body1" 
          component="span" 
          sx={{ mr: 2, fontWeight: 'medium', cursor: 'pointer' }}
        >
          See all
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ 
              minWidth: 'unset',
              width: 32,
              height: 32,
              borderRadius: '50%',
              p: 0,
              border: '1px solid #e0e0e0',
              color: 'text.secondary'
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ 
              minWidth: 'unset',
              width: 32,
              height: 32,
              borderRadius: '50%',
              p: 0,
              border: '1px solid #e0e0e0',
              color: 'text.secondary'
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}