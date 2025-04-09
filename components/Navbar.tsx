"use client"
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  InputBase, 
  Button,
  Box,
  Badge,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    margin: theme.spacing(2, 0)
  }
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
  },
  [theme.breakpoints.down('md')]: {
    margin: 0,
    justifyContent: 'flex-start',
    width: '100%',
    borderBottom: '1px solid #f0f0f0'
  }
}));

const CartButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: '#000'
  },
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'transparent',
    color: '#000'
  }
}));

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #f0f0f0',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar
}));

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const MobileMenu = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bgcolor: 'background.paper',
        borderBottom: '1px solid #f0f0f0',
        display: mobileMenuOpen ? 'block' : 'none'
      }}
    >
      <LocationButton startIcon={<LocationOnIcon />}>
        Set Location
      </LocationButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search restaurants or food"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#000'
            }
          }}
        >
          SIGN IN
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <NavbarContainer>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Link href="/" passHref>
              <Box 
                sx={{ 
                  position: 'relative', 
                  width: 40, 
                  height: 40, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Image
                  src="/logo-circle-green.svg"
                  alt="HeyFood"
                  width={40}
                  height={40}
                />
              </Box>
            </Link>

            {!isMobile && (
              <LocationButton startIcon={<LocationOnIcon />}>
                Set Location
              </LocationButton>
            )}
          </Box>

          {!isMobile && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search restaurants or food"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isMobile && (
              <Button
                sx={{
                  color: '#000',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                SIGN IN
              </Button>
            )}
            
            <CartButton>
              <Badge 
                badgeContent={0} 
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#00B37A',
                    color: '#fff'
                  }
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </CartButton>
          </Box>
        </Toolbar>
      </NavbarContainer>
      
      {isMobile && <MobileMenu />}
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <Toolbar />
    </>
  );
} 