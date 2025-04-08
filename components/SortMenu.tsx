import { Box, IconButton, Typography } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

interface SortMenuProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortMenu({ value, onChange }: SortMenuProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton 
        sx={{ mr: 1, p: 0.5 }}
        aria-label="sort"
      >
        <SortIcon />
      </IconButton>
      <Typography variant="body1" fontWeight="medium">
        Sort
      </Typography>
    </Box>
  );
}