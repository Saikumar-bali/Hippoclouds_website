
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const services = [
  {
    title: 'Consultancy',
    description: 'Strategy-led guidance to align technology decisions with business outcomes.',
    path: '/consultancy',
    image: '/services/Consultancy  01.png',
  },
  {
    title: 'App Dev & Support',
    description: 'Build and maintain apps with reliability, performance, and clear ownership.',
    path: '/appdevsupport',
    image: '/services/APP DEV.png',
  },
  {
    title: 'Infra Support & Managed Services',
    description: 'Always-on infrastructure monitoring, optimization, and incident response.',
    path: '/infrasupport',
    image: '/services/Infra Support & Managed Services (1).png',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, content, and performance campaigns built to grow qualified demand.',
    path: '/digitalmarketing',
    image: '/services/Digital Marketing.png',
  },
  {
    title: 'Staff Augmentation',
    description: 'Access vetted specialists who integrate seamlessly with your teams.',
    path: '/staffaugmentation',
    image: '/services/Staff Augmentation.png',
  },
  {
    title: 'BPO',
    description: 'Operational support that improves efficiency and protects service quality.',
    path: '/bpo',
    image: '/services/Bpo.png',
  },
  {
    title: 'IT Ops & Support',
    description: 'Reliable systems and processes for stable, secure operations.',
    path: '/itopssupport',
    image: '/services/IT Ops & Support (1).png',
  },
];

const HeroSection = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  isolation: 'isolate',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '80vh',
  color: '#fff',
  padding: theme.spacing(4),
  backgroundImage: `url(${process.env.PUBLIC_URL}/services/Services.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    height: '60vh',
  },
}));

const CardWrapper = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  height: '100%',
  minHeight: '380px',
  cursor: 'pointer',
  '&:hover .card-content': {
    transform: 'translateY(-1px)',
  },
  '&:hover .card-details': {
    maxHeight: '200px',
    opacity: 1,
  },
  '&.is-hovered .card-content': {
    transform: 'translateY(-24px)',
  },
  '&.is-hovered .card-details': {
    maxHeight: '200px',
    opacity: 1,
  },
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
  },
}));

const CardImage = styled(Box)({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '.card-wrapper:hover & img': {
    transform: 'scale(1.05)',
  },
});

const CardContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  right: '16px',
  bottom: '16px',
  padding: '0',
  background: 'transparent',
  zIndex: 2,
  transition: 'transform 0.55s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  transform: 'translateY(0)',
}));

const ServiceTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.1rem',
  color: '#1e293b',
  lineHeight: 1.3,
});

const ServiceDescription = styled(Typography)({
  fontSize: '0.9rem',
  color: '#64748b',
  lineHeight: 1.5,
});

const ExploreButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  color: '#2563eb',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
});

export default function ServicesPage() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="h5" component="p">
              Transforming businesses through innovative solutions.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 2, md: 4 },
            alignItems: 'end',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.18em', color: '#64748b', fontWeight: 700 }}
          >
            Service Overview
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
              lineHeight: 1.1,
              mt: 1,
              color: '#0f172a',
            }}
          >
            Services that feel like an extension of your team
          </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#5f6b7a',
              fontSize: { xs: '1rem', sm: '1.05rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Tell us where you need momentum. Pick a service line below and we will take you to the right team, the right process, and a clear next step.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            borderRadius: { xs: 4, md: 6 },
            background: 'linear-gradient(180deg, #f7f9fc 0%, #eef2f7 100%)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            p: { xs: 2.5, sm: 3.5, md: 5 },
            boxShadow: '0 30px 60px rgba(15, 23, 42, 0.12)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: { xs: 4, md: 6 },
              pointerEvents: 'none',
              boxShadow:
                'inset 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 -20px 40px rgba(15, 23, 42, 0.05)',
            }}
          />

          <Box
            sx={{
              position: 'relative',
              borderRadius: { xs: 3, md: 4 },
              background: '#ffffff',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              p: { xs: 2, sm: 3, md: 4 },
              boxShadow: '0 18px 36px rgba(15, 23, 42, 0.08)',
            }}
          >
            <Grid container spacing={3} justifyContent="center">
              {services.map((service, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={service.title}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    ...(index === 6 && { md: 4 }),
                  }}
                >
                  <CardWrapper
                    className={`card-wrapper ${service.forceHover ? 'is-hovered' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 320, sm: 300, md: 280 },
                    }}
                  >
                    <CardImage>
                      <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.title} />
                    </CardImage>
                    <CardContent className="card-content">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ServiceTitle sx={{ color: '#0f172a' }}>{service.title}</ServiceTitle>
                      </Box>
                      <Box
                        className="card-details"
                        sx={{
                          display: 'grid',
                          gap: 1,
                          maxHeight: 0,
                          opacity: 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.55s ease, opacity 0.55s ease',
                        }}
                      >
                        <ServiceDescription sx={{ color: '#0f172a' }}>{service.description}</ServiceDescription>
                        <ExploreButton
                          component={RouterLink}
                          to={service.path}
                          sx={{ color: '#0f172a' }}
                        >
                          Explore service
                        </ExploreButton>
                      </Box>
                    </CardContent>

                  </CardWrapper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: { xs: '38%', sm: '28%', md: '22%' },
              height: 10,
              background: '#d7dce4',
              borderRadius: 999,
              mx: 'auto',
              mt: { xs: 3, md: 4 },
              boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.08)',
            }}
          />
          <Box
            sx={{
              width: { xs: '56%', sm: '42%', md: '32%' },
              height: 18,
              background: '#c5cbd6',
              borderRadius: 999,
              mx: 'auto',
              mt: 1,
              boxShadow: '0 10px 20px rgba(15,23,42,0.12)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
