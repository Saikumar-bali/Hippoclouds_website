import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Grid, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseIcon from '@mui/icons-material/Close';

const VIDEO_URL = `${process.env.PUBLIC_URL}/WEB HERO (1).mp4`;
const FALLBACK_IMAGE_URL = 'https://fluentgrid.com/wp-content/uploads/revslider/video-media/Grid-Modernization-Home_74.jpeg';
const ACCENT_COLOR = '#74ffe0';
const BORDER_COLOR = '#41618a';
const CONTENT_MAX_WIDTH = 1280;

const HeroRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 610,
  overflow: 'hidden',
  backgroundColor: theme.palette.common.black,
}));

const MediaLayer = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

const FallbackImage = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const BackgroundVideo = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ContentLayer = styled(Box)({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  height: '100%',
});

const ContentInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  margin: '0 auto',
  height: '100%',
  padding: '0 24px',
  [theme.breakpoints.down(1024)]: {
    padding: '0 20px',
  },
  [theme.breakpoints.down(778)]: {
    padding: '0 12px',
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-20px",
    fontSize: "12px",
  }
}));



const lineMaskBase = (theme) => ({
  position: 'absolute',
  left: 126,
  overflow: 'hidden',
  textAlign: 'left',
  zIndex: 3,
  fontSize: "34px",
  [theme.breakpoints.down(778)]: {
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontSize: "22px",
  },
});

const LineOneMask = styled(Box)(({ theme }) => ({
  ...lineMaskBase(theme),
  top: 155,
  height: 95,
  width: 661,
  [theme.breakpoints.down(1024)]: {
    top: 142,
    width: 661,
  },
  [theme.breakpoints.down(778)]: {
    top: 110,
    width: '90%',
    height: 70,
  },
  [theme.breakpoints.down(480)]: {
    top: 95,
    width: '100%',
    height: 48,
    marginLeft: -60,
  },
}));

const LineTwoMask = styled(Box)(({ theme }) => ({
  ...lineMaskBase(theme),
  top: 233,
  height: 80,
  width: 780,
  [theme.breakpoints.down(1024)]: {
    top: 224,
    width: 620,
    height: 70,
  },
  [theme.breakpoints.down(778)]: {
    top: 184,
    width: '100%',
    height: 60,
  },
  [theme.breakpoints.down(480)]: {
    top: 134,
    width: '92%',
    height: 45,
    marginLeft: -60,
  },
}));

const LineThreeMask = styled(Box)(({ theme }) => ({
  ...lineMaskBase(theme),
  top: 305,
  height: 140,
  right: 60,
  width: 'auto',
  maxWidth: 'none',
  overflow: 'visible',
  [theme.breakpoints.down(1024)]: {
    top: 294,
    right: 36,
    width: 'auto',
    maxWidth: 'none',
    height: 120,
  },
  [theme.breakpoints.down(778)]: {
    top: 248,
    width: '94%',
    height: 60,
  },
  [theme.breakpoints.down(480)]: {
    top: 166,
    width: '94%',
    height: 45,
    marginLeft: -60,
  },
}));

const RevealLine = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$animate',
})(({ $animate }) => ({
  margin: 0,
  transform: $animate ? 'translateY(0)' : 'translateY(100%)',
  transition: 'transform 1500ms ease-in-out 400ms',
  willChange: 'transform',
  '@media (prefers-reduced-motion: reduce)': {
    transform: 'translateY(0)',
    transition: 'none',
  },
}));

const PoweringText = styled(RevealLine)(({ theme }) => ({
  color: ACCENT_COLOR,
  // color: theme.palette.common.white,
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 800,
  fontSize: 54,
  lineHeight: '95px',
  [theme.breakpoints.down(1024)]: {
    fontSize: 60,
    lineHeight: '95px',
  },
  [theme.breakpoints.down(778)]: {
    fontSize: 34,
    lineHeight: '40px',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 26,
    lineHeight: '32px',
  },
}));

const AccentHeading = styled(RevealLine)(({ theme }) => ({
  color: ACCENT_COLOR,
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 800,
  fontSize: 64,
  lineHeight: '80px',
  [theme.breakpoints.down(1024)]: {
    fontSize: 65,
    lineHeight: '70px',
  },
  [theme.breakpoints.down(778)]: {
    fontSize: 36,
    lineHeight: '40px',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 28,
    lineHeight: '32px',
  },
}));

const AccentHeadingLong = styled(AccentHeading)(({ theme }) => ({
  fontSize: 50,
  lineHeight: '58px',
  whiteSpace: 'normal',
  maxWidth: '100%',
  wordBreak: 'break-word',
  [theme.breakpoints.down(1200)]: {
    fontSize: 42,
    lineHeight: '50px',
    whiteSpace: 'normal',
  },
  [theme.breakpoints.down(778)]: {
    fontSize: 36,
    lineHeight: '40px',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 28,
    lineHeight: '32px',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: 126,
  top: 430,
  maxWidth: 911,
  width: 'min(911px, calc(100% - 252px))',
  padding: '2px 6px',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.black, 0.44),
  fontFamily: '"Roboto", sans-serif',
  fontSize: 18,
  lineHeight: '30px',
  zIndex: 3,
  [theme.breakpoints.down(1200)]: {
    top: 420,
  },
  [theme.breakpoints.down(1024)]: {
    top: 380,
    maxWidth: 921,
    width: 'min(921px, calc(100% - 252px))',
  },
  [theme.breakpoints.down(778)]: {
    left: '50%',
    top: 370,
    transform: 'translateX(-50%)',
    maxWidth: 721,
    width: 'min(721px, calc(100% - 48px))',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: '24px',
    marginTop: 12,
    padding: 0,
  },
  [theme.breakpoints.down(480)]: {
    top: 290,
    maxWidth: 446,
    width: 'min(446px, calc(100% - 32px))',
    lineHeight: '18px',
    marginTop: 0,
    padding: 0,
  },
}));

const ButtonsRow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 126,
  top: 510,
  display: 'flex',
  gap: 66,
  zIndex: 3,
  [theme.breakpoints.down(1200)]: {
    top: 510,
  },
  [theme.breakpoints.down(1024)]: {
    left: 27,
    top: 480,
    gap: 48,
  },
  [theme.breakpoints.down(778)]: {
    left: '50%',
    top: 520,
    transform: 'translateX(-50%)',
    width: 'calc(100% - 48px)',
    justifyContent: 'center',
    gap: 16,
  },
  [theme.breakpoints.down(480)]: {
    top: 400,
    width: 'calc(100% - 40px)',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  minWidth: 265,
  borderRadius: 10,
  border: `2px solid ${BORDER_COLOR}`,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  padding: '10px 30px',
  fontFamily: '"Roboto", sans-serif',
  fontSize: 14,
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    borderColor: ACCENT_COLOR,
    boxShadow: 'none',
  },
  [theme.breakpoints.down(778)]: {
    minWidth: 240,
    padding: '8px 22px',
  },
  [theme.breakpoints.down(480)]: {
    width: '100%',
    minWidth: 0,
    maxWidth: 320,
  },
}));

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Inquiry:', formData);
    // Add your submission logic here (e.g., API call)
    handleCloseDialog();
    alert('Thank you! Your inquiry has been sent.');
  };

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => setAnimate(true));
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <HeroRoot component="section" aria-label="Grid modernization hero section">
      <MediaLayer>
        <FallbackImage src={FALLBACK_IMAGE_URL} alt="Grid modernization background" />
        {!videoFailed && (
          <BackgroundVideo
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={FALLBACK_IMAGE_URL}
            onError={() => setVideoFailed(true)}
          >
            <source src={VIDEO_URL} type="video/mp4" onError={() => setVideoFailed(true)} />
          </BackgroundVideo>
        )}
      </MediaLayer>

      <ContentLayer>
        <ContentInner>
          <LineOneMask>
            <PoweringText component="h1" $animate={animate}>
              Engineering
            </PoweringText>
          </LineOneMask>

          <LineTwoMask>
            <AccentHeading component="h2" $animate={animate}>
              the Future with AI,
            </AccentHeading>
          </LineTwoMask>

          <LineThreeMask>
            <AccentHeadingLong component="h2" $animate={animate}>
              Innovation & Scalable Technology Solutions
            </AccentHeadingLong>
          </LineThreeMask>

          <DescriptionText component="p">
            We help businesses transform ideas into powerful digital products through Artificial Intelligence, Offshore Development Centers, Mobile Applications, and Enterprise Solutions.
          </DescriptionText>

          <ButtonsRow>
            <HeroButton
              component="a"
              href="#OS"
              endIcon={<ChevronRightRoundedIcon fontSize="small" />}
              aria-label="Explore Our Solutions"
            >
              Explore Our Solutions
            </HeroButton>
            <HeroButton
              onClick={handleOpenDialog}
              endIcon={<ChevronRightRoundedIcon fontSize="small" />}
              aria-label="Talk to an Expert"
            >
              Start Your Project
            </HeroButton>
          </ButtonsRow>
        </ContentInner>
      </ContentLayer>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 24,
            padding: 0,
            backgroundColor: '#ffffff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        }}
      >
        <DialogTitle sx={{
          m: 0,
          p: 4,
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#11181C', letterSpacing: '-0.02em' }}>
            Start Your Project
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', fontSize: '1rem' }}>
            Tell us about your vision, and let's build something extraordinary together.
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 24,
              top: 32,
              color: '#11181C',
              backgroundColor: '#F3F4F6',
              '&:hover': { backgroundColor: '#E5E7EB' }
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 4, pt: 1 }}>
          <Box component="form" sx={{ mt: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  placeholder="John Doe"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  placeholder="+91 98765 43210"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  sx={{
                    width: '242px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB',
                      height: '56px', // force same height as other inputs
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
                >
                  <MenuItem value="AI & ML">AI & Machine Learning</MenuItem>
                  <MenuItem value="Mobile App">Mobile App Development</MenuItem>
                  <MenuItem value="Web Dev">Web Development</MenuItem>
                  <MenuItem value="Enterprise">Enterprise Solutions</MenuItem>
                  <MenuItem value="Cloud">Cloud Services</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Project Description"
                  name="message"
                  multiline
                  rows={4}
                  placeholder="Briefly describe your project goals and requirements..."
                  variant="outlined"
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{
                    width: '242px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB',
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Estimated Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  sx={{
                    width: '242px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: '#F9FAFB',
                      height: '56px', // force same height as other inputs
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
                >
                  <MenuItem value="< 1L">Below ₹1 Lakh</MenuItem>
                  <MenuItem value="1L - 5L">₹1 Lakh - ₹5 Lakhs</MenuItem>
                  <MenuItem value="5L - 15L">₹5 Lakhs - ₹15 Lakhs</MenuItem>
                  <MenuItem value="15L - 50L">₹15 Lakhs - ₹50 Lakhs</MenuItem>
                  <MenuItem value="50L+">₹50 Lakhs +</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 4, pt: 0, justifyContent: 'space-between' }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: '#666',
              fontWeight: 600,
              '&:hover': { backgroundColor: 'transparent', color: '#11181C' }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#11181C',
              color: '#fff',
              px: 6,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: ACCENT_COLOR,
                color: '#000',
                boxShadow: `0 10px 20px -5px ${alpha(ACCENT_COLOR, 0.4)}`
              }
            }}
          >
            Launch Project
          </Button>
        </DialogActions>
      </Dialog>
    </HeroRoot>
  );
};

export default HeroSection;
