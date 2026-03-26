import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroVideoBackground from '../ui/HeroVideoBackground';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Clock, Headphones, Settings, Wrench, CloudLightning, FileText } from 'lucide-react';

const HeroSection = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  isolation: 'isolate',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '60vh',
  color: '#fff',
  padding: theme.spacing(4),
  backgroundImage: `url(${process.env.PUBLIC_URL}/banner-sample.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const SectionTitle = ({ children }) => (
  <Typography
    variant="h3"
    component="h2"
    sx={{
      fontSize: { xs: '2.5rem', md: '3.2rem' },
      fontWeight: 800,
      color: 'grey.900',
      mb: 2,
      textAlign: 'center',
      letterSpacing: '-1px',
    }}
  >
    {children}
  </Typography>
);

const ModernValueCard = styled(Card)(({ color }) => ({
  height: '100%',
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid #f0f0f0',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: `0 20px 40px -10px ${color}25`,
    borderColor: color,
  },
}));

const ValueIconWrapper = styled(Box)(({ color }) => ({
  width: 56,
  height: 56,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundColor: color,
  marginBottom: '1.5rem',
  boxShadow: `0 8px 16px ${color}30`,
}));

const services = [
  {
    icon: Headphones,
    color: '#0ea5e9',
    title: '24/7 Priority Support',
    description: 'Round-the-clock technical assistance to ensure your business operations never face a downtime.',
  },
  {
    icon: ShieldCheck,
    color: '#10b981',
    title: 'Data Security',
    description: 'Advanced backup solutions and security audits to keep your financial data protected and compliant.',
  },
  {
    icon: Settings,
    color: '#6366f1',
    title: 'Custom Implementation',
    description: 'Tailored Tally configurations that align perfectly with your unique business workflows and requirements.',
  },
  {
    icon: Clock,
    color: '#f43f5e',
    title: 'Regular Updates',
    description: 'Proactive maintenance and timely updates to keep your system running with the latest features and compliance.',
  },
];

const TallyCarePage = () => {
  return (
    <Box>
      <HeroSection>
        <HeroVideoBackground />
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Tally Care
            </Typography>
            <Typography variant="h5" component="p">
              Premium Tally support and maintenance services for growing businesses.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 15 }}>
        <SectionTitle>Our Care Services</SectionTitle>
        <Typography sx={{ textAlign: 'center', color: 'grey.600', mb: 10, maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
          Comprehensive support solutions tailored to meet the needs of modern businesses.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModernValueCard color={service.color}>
                  <CardContent sx={{ p: 4 }}>
                    <ValueIconWrapper color={service.color}>
                      <service.icon size={28} />
                    </ValueIconWrapper>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'grey.900' }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: 'grey.600', lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </ModernValueCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 15, bgcolor: 'grey.50', borderRadius: 8, p: { xs: 4, md: 8 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'grey.900' }}>
                Why Choose Tally Care?
              </Typography>
              <Typography sx={{ color: 'grey.600', mb: 4, fontSize: '1.1rem' }}>
                We don't just fix problems; we prevent them. Our proactive approach ensures your Tally system is always optimized for performance.
              </Typography>
              <Grid container spacing={2}>
                {[
                  { icon: Wrench, text: 'Expert Troubleshooting' },
                  { icon: CloudLightning, text: 'Instant Remote Help' },
                  { icon: FileText, text: 'Compliance Audits' },
                  { icon: HeartPulse, text: 'System Health Checks' },
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <item.icon size={20} style={{ color: '#10b981' }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/scalable-icon-support.png"}
                sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'block', opacity: 0.8 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* CTA */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: 6,
              p: { xs: 6, md: 8 },
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
              Experience Premium Care
            </Typography>
            <Typography sx={{ mb: 5, fontSize: '1.2rem', opacity: 0.9 }}>
              Get in touch with our experts today and ensure your business continuity with Tally Care.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'success.main',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              Contact Support
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TallyCarePage;
