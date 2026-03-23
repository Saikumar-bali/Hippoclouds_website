import React from 'react';
import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const FOOTER_GROUPS = [
  {
    title: 'Company',
    links: [
      { label: 'About Hippoclouds', href: '/about' },
      { label: 'Why Hippoclouds ?', href: '/about' },
      { label: 'Join Us', href: '/internships' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Services Overview', href: '/services' },
      { label: 'Consultancy', href: '/consultancy' },
      { label: 'IT Ops & Support', href: '/itopssupport' },
      { label: 'Digital Marketing', href: '/digitalmarketing' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'ERPNext', href: '/erpnext' },
      { label: 'HippoHRM', href: '/hippohrm' },
      { label: 'HippoCRM', href: '/hippocrm' },
      { label: 'HippoMint', href: '/hippomint' },
    ],
  },
];

const FooterContainer = styled(Box)({
  width: '100%',
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #050B16 0%, #091A33 52%, #0E2A4A 100%)',
  color: '#E8F0FF',
  borderTop: `1px solid ${alpha('#B2C5E6', 0.2)}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -260,
    right: -160,
    width: 520,
    height: 520,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha('#2E79FF', 0.2)} 0%, transparent 70%)`,
    pointerEvents: 'none',
  },
});

const FooterInner = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1320,
  margin: '0 auto',
  padding: '56px 24px 22px',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.between('md', 'lg')]: {
    padding: '56px 16px 22px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 16px 18px',
  },
}));

const BrandLogo = styled('img')({
  width: 210,
  height: 'auto',
  display: 'block',
});

const BrandText = styled(Typography)({
  marginTop: 16,
  maxWidth: 360,
  color: alpha('#F4F8FF', 0.8),
  fontSize: 14,
  lineHeight: '24px',
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontSize: 13,
  lineHeight: '16px',
  fontWeight: 700,
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  marginBottom: 12,
});

const FooterLink = styled(Link)({
  color: alpha('#F3F7FF', 0.82),
  textDecoration: 'none',
  fontSize: 14,
  lineHeight: '22px',
  transition: 'color 180ms ease, transform 180ms ease',
  '&:hover': {
    color: '#8EC5FF',
    transform: 'translateX(2px)',
  },
});

const SocialRow = styled(Box)({
  marginTop: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const SocialIcon = styled(IconButton)({
  width: 36,
  height: 36,
  borderRadius: 12,
  color: alpha('#F4F8FF', 0.9),
  border: `1px solid ${alpha('#D7E4FF', 0.2)}`,
  backgroundColor: alpha('#FFFFFF', 0.03),
  transition: 'background-color 180ms ease, border-color 180ms ease, color 180ms ease',
  '&:hover': {
    backgroundColor: alpha('#66B2FF', 0.16),
    borderColor: alpha('#9FD0FF', 0.5),
    color: '#FFFFFF',
  },
});

const LocationsTitle = styled(Typography)({
  color: '#FFFFFF',
  fontSize: 16,
  lineHeight: '20px',
  fontWeight: 700,
  letterSpacing: '0.8px',
  textTransform: 'uppercase',
  marginBottom: 14,
});

const LocationCard = styled(Box)(({ theme }) => ({
  padding: '8px 0 0',
  color: alpha('#EFF5FF', 0.86),
  fontSize: 13,
  lineHeight: '20px',
  [theme.breakpoints.down('md')]: {
    paddingTop: 0,
  },
}));

const ContactLine = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  marginBottom: 10,
  color: alpha('#EFF5FF', 0.86),
  fontSize: 13,
  lineHeight: '20px',
  overflowWrap: 'anywhere',
});

const MapContainer = styled(Box)({
  borderRadius: 12,
  overflow: 'hidden',
  border: `1px solid ${alpha('#D3E2FF', 0.2)}`,
  boxShadow: `0 16px 40px ${alpha('#01070F', 0.45)}`,
  minHeight: 210,
  '& iframe': {
    width: '100%',
    height: '100%',
    border: 0,
    display: 'block',
    filter: 'saturate(0.92) contrast(1.04)',
  },
});

const FooterBottom = styled(Box)(({ theme }) => ({
  marginTop: 28,
  paddingTop: 16,
  borderTop: `1px solid ${alpha('#D3E2FF', 0.18)}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export default function Footer() {
  return (
    <FooterContainer component="footer">
      <FooterInner>
        <Grid
          container
          rowSpacing={{ xs: 4, md: 5 }}
          columnSpacing={{ xs: 3, md: 1 }}
          alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{
              minWidth: 0,
              flexBasis: { md: '22%', lg: 'auto' },
              maxWidth: { md: '22%', lg: 'none' },
            }}
          >
            <BrandLogo src={`${process.env.PUBLIC_URL}/Hippo_Logo_White.png`} alt="Hippocloud Technologies" />
            <BrandText>
              Enterprise-grade technology services and digital products designed to accelerate operations, reduce delivery risk, and scale growth.
            </BrandText>
            <SocialRow>
              <SocialIcon aria-label="Facebook" component="a" href="https://www.facebook.com/hippocloud/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Twitter" component="a" href="https://x.com/hippoclouds" target="_blank" rel="noopener noreferrer">
                <TwitterIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn" component="a" href="https://www.linkedin.com/company/hippoclouds/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Instagram" component="a" href="https://www.instagram.com/hippoclouds/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="YouTube" component="a" href="https://www.youtube.com/@hippocloudsoftwaretraining8074/videos" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon fontSize="small" />
              </SocialIcon>
            </SocialRow>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ minWidth: 0 }}>
            <Grid container spacing={{ xs: 3, sm: 4 }}>

              {FOOTER_GROUPS.map((group) => (
                <Grid key={group.title} item xs={6} sm={4}>
                  <SectionTitle>{group.title}</SectionTitle>
                  <Stack spacing={0.8}>
                    {group.links.map((item) => (
                      <FooterLink key={item.label} component={RouterLink} to={item.href}>
                        {item.label}
                      </FooterLink>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <LocationCard >
                  <SectionTitle sx={{ mb: 1 }}>Head Office</SectionTitle>
                  <ContactLine>
                    <LocationOnOutlinedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <Box component="span">
                      2nd floor, CBM Compound, 
                      <br />
                      Asilmetta, Visakhapatnam,
                      <br />
                      Andhra Pradesh 530003.

                    </Box>                  </ContactLine>
                  <ContactLine>
                    <LocalPhoneOutlinedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <Box component="span">+91 93478 62547</Box>
                  </ContactLine>
                  <ContactLine sx={{ mb: 0 }}>
                    <MailOutlineRoundedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <FooterLink href="mailto:info@hippoclouds.com" underline="none">
                      info@hippoclouds.com
                    </FooterLink>
                  </ContactLine>
                </LocationCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <LocationCard>
                  <SectionTitle sx={{ mb: 1 }}>Madhurawada Branch</SectionTitle>
                  <ContactLine>
                    <LocationOnOutlinedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <Box component="span">
                      122, D, No 3-73/2B, H. I. G,
                      <br />
                      near S F S school, Madhilapuri
                      <br />
                      Vuda Colony, Madhurawada,
                      <br />
                      Visakhapatnam,
                      <Box component="br" sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }} />
                      Andhra Pradesh 530041
                    </Box>
                  </ContactLine>
                  <ContactLine>
                    <LocalPhoneOutlinedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <Box component="span">+91 93478 62547</Box>
                  </ContactLine>
                  <ContactLine sx={{ mb: 0 }}>
                    <MailOutlineRoundedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                    <FooterLink href="mailto:info@hippoclouds.com" underline="none">
                      info@hippoclouds.com
                    </FooterLink>
                  </ContactLine>
                </LocationCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <LocationsTitle>OUR LOCATION</LocationsTitle>
            <MapContainer
              sx={{
                flex: 1,
                maxWidth: { md: 240, lg: 'none' },
                ml: { md: 'auto', lg: 0 },
                minHeight: { xs: 200, sm: 220, md: 210 },
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3608297953783!2d83.30957121117216!3d17.727629583148765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436951934c95%3A0xe19863490a0f8065!2sHIPPOCLOUD%20TECHNOLOGIES%20.!5e0!3m2!1sen!2sin!4v1760584245361!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HippoClouds Technologies Location"
              />
            </MapContainer>
          </Grid>
        </Grid>

        <FooterBottom>
          <Typography sx={{ color: alpha('#F3F8FF', 0.74), fontSize: 13, lineHeight: '20px' }}>
            Copyright (c) {new Date().getFullYear()} HippoClouds. All rights reserved.
          </Typography>
          <Typography sx={{ color: alpha('#DFECFF', 0.64), fontSize: 12, lineHeight: '18px' }}>
            Built for scalable digital transformation.
          </Typography>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}
