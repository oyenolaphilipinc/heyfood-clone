'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  // Define styled components inside the component
  const FooterSection = styled('footer')(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(6, 0),
    marginTop: 'auto',
    borderTop: `1px solid ${theme.palette.divider}`
  }));

  const FooterHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(2)
  }));

  const FooterLink = styled(MuiLink)(({ theme }) => ({
    color: theme.palette.text.secondary,
    display: 'block',
    marginBottom: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  }));

  const SocialIcon = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  }));

  const StoreButton = styled(Link)(({ theme }) => ({
    display: 'inline-block',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& img': {
      height: 40,
      cursor: 'pointer'
    }
  }));

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Link href="/" passHref>
            <Box sx={{ display: 'inline-block', mb: 2 }}>
              <Image
                src="/logo-long.svg"
                alt="Heyfood"
                width={145}
                height={40}
                style={{ cursor: 'pointer' }}
              />
            </Box>
          </Link>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
            Your food delivered within minutes.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 1fr'
          },
          gap: 4,
          mb: 6
        }}>
          <Box>
            <Box sx={{ display: 'flex', mb: 3 }}>
              <StoreButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play-badge.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </StoreButton>
              <StoreButton href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </StoreButton>
            </Box>
            <Box sx={{ display: 'flex', mb: 3 }}>
              <SocialIcon>
                <FacebookIcon sx={{ color: '#fff' }} />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon sx={{ color: '#fff' }} />
              </SocialIcon>
              <SocialIcon>
                <InstagramIcon sx={{ color: '#fff' }} />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon sx={{ color: '#fff' }} />
              </SocialIcon>
            </Box>
          </Box>

          <Box>
            <FooterHeading variant="h6">Get To Know Us</FooterHeading>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </Box>

          <Box>
            <FooterHeading variant="h6">Let Us Help You</FooterHeading>
            <FooterLink href="/account">Your Account</FooterLink>
            <FooterLink href="/orders">Your Orders</FooterLink>
            <FooterLink href="/help">Help Center</FooterLink>
          </Box>

          <Box>
            <FooterHeading variant="h6">Doing Business</FooterHeading>
            <FooterLink href="/partner">Become a Partner</FooterLink>
            <FooterLink href="/courier">Become a Courier</FooterLink>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                src="/google-play-badge.svg"
                alt="Scan to download app"
                width={80}
                height={80}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'flex-start' }
        }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Heyfood. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
} 