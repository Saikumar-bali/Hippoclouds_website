
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Icons
import HandshakeIcon from '@mui/icons-material/Handshake';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const MotionCard = motion(Card);

const services = [
  {
    title: 'Consultancy',
    description: 'Strategy-led guidance to align technology decisions with business outcomes.',
    icon: <HandshakeIcon sx={{ fontSize: 26 }} />,
    path: '/consultancy',
  },
  {
    title: 'App Dev & Support',
    description: 'Build and maintain apps with reliability, performance, and clear ownership.',
    icon: <DeveloperBoardIcon sx={{ fontSize: 26 }} />,
    path: '/appdevsupport',
  },
  {
    title: 'Infra Support & Managed Services',
    description: 'Always-on infrastructure monitoring, optimization, and incident response.',
    icon: <SupportAgentIcon sx={{ fontSize: 26 }} />,
    path: '/infrasupport',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, content, and performance campaigns built to grow qualified demand.',
    icon: <CampaignIcon sx={{ fontSize: 26 }} />,
    path: '/digitalmarketing',
  },
  {
    title: 'Staff Augmentation',
    description: 'Access vetted specialists who integrate seamlessly with your teams.',
    icon: <GroupWorkIcon sx={{ fontSize: 26 }} />,
    path: '/staffaugmentation',
  },
  {
    title: 'BPO',
    description: 'Operational support that improves efficiency and protects service quality.',
    icon: <BusinessCenterIcon sx={{ fontSize: 26 }} />,
    path: '/bpo',
  },
  {
    title: 'IT Ops & Support',
    description: 'Reliable systems and processes for stable, secure operations.',
    icon: <WorkspacesIcon sx={{ fontSize: 26 }} />,
    path: '/itopssupport',
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

        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={service.title}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  boxShadow: '0 16px 30px rgba(15, 23, 42, 0.06)',
                  overflow: 'hidden',
                  background: '#ffffff',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 220 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(15, 23, 42, 0.06)',
                        color: '#0f172a',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: '#0f172a' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5f6b7a',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '3.6em',
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Button
                    component={RouterLink}
                    to={service.path}
                    variant="text"
                    sx={{
                      mt: 'auto',
                      pt: 2.5,
                      px: 0,
                      textTransform: 'none',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    Explore service
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
