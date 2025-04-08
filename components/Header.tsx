'use client';

import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  Button, 
  InputBase, 
  Container,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Category } from '@/types';
import { fetchCategories } from '@/lib/api';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  
  // Load categories when search dialog opens
  const handleSearchOpen = async () => {
    setSearchOpen(true);
    if (categories.length === 0) {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
  };
  
  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #EAEAEA' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '70px' }}>
            {/* Mobile Menu Icon */}
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Logo */}
            <Box 
              component={Link} 
              href="/"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                mr: 2
              }}
            >
              <Box 
                component="img" 
                src="/logo-circle-green.svg"
                alt="HeyFood" 
                sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  bgcolor: '#ffffff'
                }} 
              />
            </Box>
            
            {/* Location Button */}
            <Button 
              startIcon={<LocationOnOutlinedIcon />} 
              sx={{ 
                color: 'text.primary',
                fontWeight: 'bold',
                textTransform: 'none',
                mr: 2
              }}
            >
              Set Location
            </Button>
            
            {/* Search Bar */}
            <Box 
              onClick={handleSearchOpen}
              sx={{ 
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#F5F5F5',
                borderRadius: 50,
                px: 2,
                height: 40,
                cursor: 'pointer'
              }}
            >
              <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <InputBase
                placeholder="Search restaurants or food"
                readOnly
                sx={{ 
                  flex: 1,
                  fontSize: '0.9rem',
                  color: 'text.secondary'
                }}
              />
            </Box>
            
            {/* Auth & Cart */}
            <Box sx={{ display: 'flex', ml: 2 }}>
              <Button 
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  mr: 1
                }}
              >
                SIGN IN
              </Button>
              
              <Button 
                variant="contained" 
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: 50,
                  '&:hover': {
                    bgcolor: 'black',
                    opacity: 0.9
                  }
                }}
              >
                CART • 0
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Service Tabs (Restaurant/Grocery) */}
      <Box sx={{ borderBottom: '1px solid #EAEAEA', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={Link}
              href="/"
              sx={{
                bgcolor: '#000',
                color: '#fff',
                borderRadius: 50,
                px: 3,
                textTransform: 'none',
                fontWeight: 'medium',
                '&:hover': {
                  bgcolor: '#000',
                  opacity: 0.9
                }
              }}
              startIcon={<RestaurantIcon />}
            >
              Restaurants
            </Button>
            
            <Button
              sx={{
                color: '#000',
                textTransform: 'none',
                fontWeight: 'medium'
              }}
              startIcon={
                <Box 
                  component="svg" 
                  sx={{ width: 24, height: 24 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 12H8v-1h8v1zm0-3H8v-1h8v1zm0-3H8v-1h8v1zm-10-5V4h8v3h-8z" />
                </Box>
              }
            >
              Grocery
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Search Dialog */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={searchOpen}
        onClose={handleSearchClose}
        sx={{
          '& .MuiDialog-paper': {
            m: 0,
            width: '100%',
            maxWidth: '100%',
            position: 'absolute',
            top: 0,
            borderRadius: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
          <SearchIcon sx={{ color: 'text.secondary', mx: 1 }} />
          <InputBase
            autoFocus
            placeholder="Search restaurants or food"
            sx={{ 
              flex: 1,
              fontSize: '1rem'
            }}
          />
          <IconButton onClick={handleSearchClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ p: 2 }}>
          <List>
            {categories.map((category) => (
              <ListItem 
                key={category.id} 
                button 
                sx={{ 
                  py: 2,
                  borderBottom: '1px solid #F5F5F5'
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <RestaurantIcon />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {['Home', 'Restaurants', 'Grocery', 'My Orders', 'Profile', 'Help'].map((text) => (
              <ListItem button key={text} onClick={() => toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
