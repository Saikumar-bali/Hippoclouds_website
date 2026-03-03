import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const VIDEO_URL = 'https://fluentgrid.com/wp-content/uploads/2025/08/Grid-Modernization-Home.mp4';
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
}));

const lineMaskBase = (theme) => ({
  position: 'absolute',
  left: 126,
  overflow: 'hidden',
  textAlign: 'left',
  zIndex: 3,
  [theme.breakpoints.down(778)]: {
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
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
    top: 76,
    width: '92%',
    height: 48,
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
    width: '92%',
    height: 60,
  },
  [theme.breakpoints.down(480)]: {
    top: 134,
    width: '92%',
    height: 45,
  },
}));

const LineThreeMask = styled(Box)(({ theme }) => ({
  ...lineMaskBase(theme),
  top: 305,
  height: 80,
  width: 960,
  [theme.breakpoints.down(1024)]: {
    top: 294,
    width: 903,
    height: 70,
  },
  [theme.breakpoints.down(778)]: {
    top: 248,
    width: '94%',
    height: 60,
  },
  [theme.breakpoints.down(480)]: {
    top: 186,
    width: '94%',
    height: 45,
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
  color: theme.palette.common.white,
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 800,
  fontSize: 54,
  lineHeight: '95px',
  [theme.breakpoints.down(1024)]: {
    fontSize: 60,
    lineHeight: '95px',
  },
  [theme.breakpoints.down(778)]: {
    fontSize: 48,
    lineHeight: '70px',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 34,
    lineHeight: '48px',
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
    fontSize: 54,
    lineHeight: '60px',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 42,
    lineHeight: '45px',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: 126,
  top: 404,
  maxWidth: 911,
  width: 'min(911px, calc(100% - 252px))',
  padding: '2px 6px',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.black, 0.44),
  fontFamily: '"Roboto", sans-serif',
  fontSize: 18,
  lineHeight: '30px',
  zIndex: 3,
  [theme.breakpoints.down(1024)]: {
    maxWidth: 921,
    width: 'min(921px, calc(100% - 252px))',
  },
  [theme.breakpoints.down(778)]: {
    left: '50%',
    top: 332,
    transform: 'translateX(-50%)',
    maxWidth: 721,
    width: 'min(721px, calc(100% - 48px))',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: '24px',
  },
  [theme.breakpoints.down(480)]: {
    top: 246,
    maxWidth: 446,
    width: 'min(446px, calc(100% - 32px))',
    lineHeight: '18px',
  },
}));

const ButtonsRow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 126,
  top: 485,
  display: 'flex',
  gap: 66,
  zIndex: 3,
  [theme.breakpoints.down(1024)]: {
    left: 27,
    top: 530,
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
              Powering
            </PoweringText>
          </LineOneMask>

          <LineTwoMask>
            <AccentHeading component="h2" $animate={animate}>
              The Last Mile of
            </AccentHeading>
          </LineTwoMask>

          <LineThreeMask>
            <AccentHeading component="h2" $animate={animate}>
              Grid Modernization with AI
            </AccentHeading>
          </LineThreeMask>

          <DescriptionText component="p">
            hippocloud technologies helps utilities modernize grid operations, by unlocking value from AMI data,
            and delivering exceptional customer experiences with enterprise-grade COTS products.
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
              endIcon={<ChevronRightRoundedIcon fontSize="small" />}
              aria-label="Talk to an Expert"
            >
              Talk to an Expert
            </HeroButton>
          </ButtonsRow>
        </ContentInner>
      </ContentLayer>
    </HeroRoot>
  );
};

export default HeroSection;
