import React from 'react';
import { Box, Typography, Container, Grid, Button, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroVideoBackground from '../ui/HeroVideoBackground';
import { motion } from 'framer-motion';
import { Users2, Lightbulb, Building2, BriefcaseBusiness, Banknote, Target, Sparkles, Handshake } from 'lucide-react';

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
      fontSize: { xs: '2.2rem', md: '3rem' },
      fontWeight: 800,
      color: 'grey.900',
      mb: 2,
      textAlign: 'center',
      letterSpacing: '-0.8px',
    }}
  >
    {children}
  </Typography>
);

const SectionSubtitle = ({ children }) => (
  <Typography
    sx={{
      textAlign: 'center',
      color: 'grey.600',
      mb: 8,
      maxWidth: 820,
      mx: 'auto',
      fontSize: '1.08rem',
      lineHeight: 1.8,
    }}
  >
    {children}
  </Typography>
);



const ValueIconWrapper = styled(Box)(({ color }) => ({
  width: 54,
  height: 54,
  borderRadius: 14,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
  boxShadow: `0 12px 24px ${color}40`,
}));

const beneficiaries = [
  {
    icon: Building2,
    color: '#14b8a6',
    title: 'Established MSMEs',
    description: 'Existing small, medium and micro enterprises with a proven record of strong business performance.',
  },
  {
    icon: Lightbulb,
    color: '#22d3ee',
    title: 'High-Potential Founders',
    description: 'Aspiring entrepreneurs with promising ideas and strong growth potential.',
  },
  {
    icon: BriefcaseBusiness,
    color: '#3b82f6',
    title: 'Start-up Teams',
    description: 'Start-ups with bankable project proposals and a clear path to scale.',
  },
  {
    icon: Banknote,
    color: '#6366f1',
    title: 'Key Institutions',
    description: 'Banks, guarantee funds, associations, investment agencies, and SME support bodies.',
  },
];

const focusAreas = [
  {
    icon: Target,
    color: '#14b8a6',
    title: 'Promoting Entrepreneurship',
    description: 'Encouraging new ventures and growth-oriented business thinking.',
  },
  {
    icon: Sparkles,
    color: '#22d3ee',
    title: 'Developing Business Skills',
    description: 'Strengthening operational, financial, and strategic capabilities.',
  },
  {
    icon: Users2,
    color: '#3b82f6',
    title: 'Building People Capacity',
    description: 'Improving leadership, teams, and execution readiness.',
  },
  {
    icon: Handshake,
    color: '#6366f1',
    title: 'Creating Linkages',
    description: 'Connecting SMEs with larger enterprises to unlock investment and jobs.',
  },
];

const TallyXceleratorPage = () => {
  return (
    <Box>
      <HeroSection>
        <HeroVideoBackground />
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Tally Xcelerator
            </Typography>
            <Typography variant="h5" component="p">
              Elevate Tally with real-time collaboration, scalability, and security.
            </Typography>
          </motion.div>
        </Container>
      
      
      
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6} alignItems="start">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              PROGRAM OVERVIEW
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2.5, color: 'grey.900', letterSpacing: '-0.5px' }}>
                Tally Xcelerator - Program Overview
              </Typography>
              <Typography sx={{ color: 'grey.700', mb: 2.5, fontSize: '1.05rem', lineHeight: 1.8 }}>
                Hippo Cloud, as a partner with TallyXcelerator, contributes to an integrated entrepreneurial capacity-building
                program. Our collaboration fosters entrepreneurship development, promoting overall SME growth in the nation.
              </Typography>
              <Typography sx={{ color: 'grey.700', fontSize: '1.05rem', lineHeight: 1.8 }}>
                As a result, the program helps promote the growth of innovative and highly competitive SMEs in India, contributing to
                a dynamic private sector and entrepreneurial culture, and improving the overall business environment.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'grey.900' }}>
                Program Outcomes
              </Typography>
              <Stack spacing={1.5}>
                {[
                  'Promoting entrepreneurship and improving business skills across the SME ecosystem.',
                  'Building people capacity and encouraging employment-creating investment and linkages.',
                  'Strengthening connections among SMEs and between large and small enterprises.',
                ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'baseline', columnGap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', transform: 'translateY(-1px)' }} />
                  <Typography sx={{ color: 'grey.700', lineHeight: 1.7 }}>{item}</Typography>
                </Box>
              ))}
            </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionTitle>Anticipated Beneficiaries</SectionTitle>
        <SectionSubtitle>
          The program is designed for high-impact enterprises, entrepreneurs, and institutions that support SME growth.
        </SectionSubtitle>
        <Grid container spacing={3}>
          {beneficiaries.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr',
                    columnGap: 2,
                    alignItems: 'start',
                    transition: 'transform 0.2s ease, background 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      backgroundColor: 'rgba(15, 23, 42, 0.03)',
                    },
                    '&:hover .benefit-icon': {
                      transform: 'scale(1.06)',
                      boxShadow: `0 12px 24px ${item.color}55`,
                    },
                  }}
                >
                  <ValueIconWrapper
                    color={item.color}
                    className="benefit-icon"
                    sx={{ width: 54, height: 54, minWidth: 54, minHeight: 54 }}
                  >
                    <item.icon size={22} />
                  </ValueIconWrapper>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'grey.900', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'grey.600', lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionTitle>What TallyXcelerator Builds</SectionTitle>
        <SectionSubtitle>
          TallyXcelerator strengthens entrepreneurship, skills, capacity, and linkages to build competitive SMEs.
        </SectionSubtitle>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            columnGap: { xs: 0, md: 4 },
            rowGap: 3,
          }}
        >
          {focusAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  columnGap: 2,
                  alignItems: 'start',
                  minHeight: 96,
                  transition: 'transform 0.2s ease, background 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(15, 23, 42, 0.03)',
                  },
                  '&:hover .focus-icon': {
                    transform: 'scale(1.06)',
                    boxShadow: `0 12px 24px ${item.color}55`,
                  },
                }}
              >
                <ValueIconWrapper
                  color={item.color}
                  className="focus-icon"
                  sx={{ width: 54, height: 54, minWidth: 54, minHeight: 54, alignSelf: 'start' }}
                >
                  <item.icon size={22} />
                </ValueIconWrapper>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'grey.900', mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'grey.600', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <Grid container spacing={6} alignItems="start">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: 'grey.900' }}>
                How TallyXcelerator Works
              </Typography>
              <Typography sx={{ color: 'grey.700', mb: 2, fontSize: '1.05rem', lineHeight: 1.8 }}>
                TallyXcelerator identifies existing and potential entrepreneurs, provides mentoring and coaching aimed at
                strengthening entrepreneurial behaviors and business skills, and assists access to business development services.
              </Typography>
              <Typography sx={{ color: 'grey.700', fontSize: '1.05rem', lineHeight: 1.8 }}>
                It facilitates access to finance, helps arrange mutually beneficial links with larger networks, and puts in place
                long-term support systems to facilitate SME growth.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'grey.900' }}>
                Support Highlights
              </Typography>
              <Stack spacing={1.5}>
                {[
                  'Mentoring and coaching to strengthen entrepreneurial behavior and business skills.',
                  'Access to business development services and guidance.',
                  'Facilitated access to finance and investment readiness.',
                  'Long-term support systems to accelerate SME growth.',
                ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'baseline', columnGap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', transform: 'translateY(-1px)' }} />
                  <Typography sx={{ color: 'grey.700', lineHeight: 1.7 }}>{item}</Typography>
                </Box>
              ))}
            </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
{/* CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              borderRadius: 3,
              p: { xs: 4, md: 6 },
              border: '1px solid',
              borderColor: 'grey.200',
              bgcolor: 'white',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: 'grey.900' }}>
              Ready to Build With TallyXcelerator?
            </Typography>
            <Typography sx={{ mb: 4, fontSize: '1.1rem', color: 'grey.600' }}>
              Collaborate with us to grow innovative, competitive SMEs and strengthen the business ecosystem.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.6,
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: 2.5,
                textTransform: 'none',
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TallyXceleratorPage;

