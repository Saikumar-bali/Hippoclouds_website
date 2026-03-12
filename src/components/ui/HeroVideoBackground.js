import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DEFAULT_VIDEO_URL = 'https://fluentgrid.com/wp-content/uploads/2025/08/Grid-Modernization-Home.mp4';
const DEFAULT_FALLBACK_IMAGE_URL = 'https://fluentgrid.com/wp-content/uploads/revslider/video-media/Grid-Modernization-Home_74.jpeg';

const BackgroundVideo = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -2,
});

const VideoFallback = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -2,
});

const HeroOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(10, 18, 32, 0.56) 0%, rgba(10, 18, 32, 0.42) 100%)',
  zIndex: -1,
});

export default function HeroVideoBackground({
  videoUrl = DEFAULT_VIDEO_URL,
  fallbackImageUrl = DEFAULT_FALLBACK_IMAGE_URL,
}) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <>
      {!videoFailed && (
        <BackgroundVideo autoPlay loop muted playsInline preload="metadata" poster={fallbackImageUrl} onError={() => setVideoFailed(true)}>
          <source src={videoUrl} type="video/mp4" />
        </BackgroundVideo>
      )}
      {videoFailed && <VideoFallback src={fallbackImageUrl} alt="" aria-hidden="true" />}
      <HeroOverlay aria-hidden="true" />
    </>
  );
}
