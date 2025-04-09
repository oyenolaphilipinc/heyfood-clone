import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  backgroundColor: '#fff',
  padding: theme.spacing(3),
  position: 'sticky',
  top: 120, // Height of navbar + navigation tabs
  maxHeight: 'calc(100vh - 140px)', // Viewport height minus top offset
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '350px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  }
}));

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: '280px',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const SortHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: 20
  }
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  padding: theme.spacing(1),
  '&.Mui-checked': {
    color: '#00B37A'
  }
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: -theme.spacing(1),
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    color: '#666'
  }
}));

interface Props {
  totalStores: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function Sidebar({ totalStores, sortBy, onSortChange }: Props) {
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              All Stores
            </Typography>
            <Typography color="text.secondary" variant="body2">
              ({totalStores} Store{totalStores !== 1 ? 's' : ''})
            </Typography>
          </Box>

          <SortHeading>
            <FilterListIcon />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Sort
            </Typography>
          </SortHeading>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="sort"
              name="sort-options"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <StyledFormControlLabel
                value="mostPopular"
                control={<StyledRadio />}
                label="Most Popular"
              />
              <StyledFormControlLabel
                value="nearest"
                control={<StyledRadio />}
                label="Nearest"
              />
              <StyledFormControlLabel
                value="highestRated"
                control={<StyledRadio />}
                label="Highest rated"
              />
              <StyledFormControlLabel
                value="newest"
                control={<StyledRadio />}
                label="Newest"
              />
              <StyledFormControlLabel
                value="mostRated"
                control={<StyledRadio />}
                label="Most Rated"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </SidebarContainer>
    </SidebarWrapper>
  );
} 