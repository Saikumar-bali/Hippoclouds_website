import React from 'react';
import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
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
  background: 'linear-gradient(135deg, #081325 0%, #0A1C36 50%, #102A4D 100%)',
  color: '#E8F0FF',
  borderTop: `1px solid ${alpha('#B2C5E6', 0.22)}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -220,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha('#4E9BFF', 0.2)} 0%, transparent 70%)`,
    pointerEvents: 'none',
  },
});

const FooterInner = styled(Box)({
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',
  padding: '64px 24px 24px',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 1,
});

const BrandLogo = styled('img')({
  width: 210,
  height: 'auto',
  display: 'block',
});

const BrandText = styled(Typography)({
  marginTop: 16,
  maxWidth: 360,
  color: alpha('#F4F8FF', 0.82),
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
  borderRadius: 10,
  color: alpha('#F4F8FF', 0.9),
  border: `1px solid ${alpha('#D7E4FF', 0.2)}`,
  backgroundColor: alpha('#FFFFFF', 0.04),
  transition: 'background-color 180ms ease, border-color 180ms ease, color 180ms ease',
  '&:hover': {
    backgroundColor: alpha('#66B2FF', 0.18),
    borderColor: alpha('#9FD0FF', 0.5),
    color: '#FFFFFF',
  },
});

const InfoCard = styled(Box)({
  padding: '18px 16px',
  borderRadius: 14,
  border: `1px solid ${alpha('#D3E2FF', 0.18)}`,
  backgroundColor: alpha('#FFFFFF', 0.05),
  backdropFilter: 'blur(2px)',
  marginLeft: '30px',
});

const ContactLine = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  marginBottom: 10,
  color: alpha('#EFF5FF', 0.86),
  fontSize: 13,
  lineHeight: '20px',
});

const MapContainer = styled(Box)({
  marginTop: 12,
  borderRadius: 14,
  overflow: 'hidden',
  border: `1px solid ${alpha('#D3E2FF', 0.2)}`,
  boxShadow: `0 16px 40px ${alpha('#01070F', 0.36)}`,
  '& iframe': {
    width: '100%',
    height: 170,
    border: 0,
    display: 'block',
    filter: 'saturate(0.85) contrast(1.02)',
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
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid item xs={12} lg={4}>
            <BrandLogo src={`${process.env.PUBLIC_URL}/Hippo_Logo_White.png`} alt="Hippocloud Technologies" />
            <BrandText>
              Enterprise-grade technology services and digital products designed to accelerate operations, reduce delivery risk, and scale growth.
            </BrandText>
            <SocialRow>
              <SocialIcon aria-label="Facebook">
                <FacebookIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Twitter">
                <TwitterIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn">
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Instagram">
                <InstagramIcon fontSize="small" />
              </SocialIcon>
            </SocialRow>
          </Grid>

          <Grid item xs={12} lg={5}>
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
          </Grid>

          <Grid item xs={12} lg={3}>
            <InfoCard>
              <SectionTitle sx={{ mb: 1.25 }}>Contact</SectionTitle>
              <ContactLine>
                <LocationOnOutlinedIcon sx={{ fontSize: 18, mt: '1px', color: '#9FD0FF' }} />
                <Box component="span">Visakhapatnam, Andhra Pradesh, India</Box>
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
            </InfoCard>

            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3608297953783!2d83.30957121117216!3d17.727629583148765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436951934c95%3A0xe19863490a0f8065!2sHIPPOCLOUD%20TECHNOLOGIES%20.!5e0!3m2!1sen!2sin!4v1760584245361!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HippoClouds Technologies Location"
                style={{ marginLeft: '30px' }}
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
