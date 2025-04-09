import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  InputBase, 
  Button,
  Box,
  Badge
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#757575'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    '&::placeholder': {
      color: '#757575'
    }
  },
}));

const LocationButton = styled(Button)(({ theme }) => ({
  color: '#000',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  marginRight: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

export default function Header() {
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ position: 'relative', width: 40, height: 40, mr: 2 }}>
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=40&h=40&fit=crop&q=80"
              alt="HeyFood"
              width={40}
              height={40}
            />
          </Box>

          <LocationButton
            startIcon={<LocationOnIcon sx={{ color: '#000' }} />}
          >
            Set Location
          </LocationButton>
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search restaurants or food"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            sx={{
              mr: 2,
              color: '#000',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            SIGN IN
          </Button>
          
          <IconButton color="inherit">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon sx={{ color: '#000' }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 