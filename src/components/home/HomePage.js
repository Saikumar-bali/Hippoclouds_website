import React, { useRef } from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import ProductCards from './ProductCards';

const HomePage = () => {
  const servicesCardsRef = useRef(null);

  return (
    <>
      <HeroSection />

      <Box id="OS" ref={servicesCardsRef}>
        <ProductCards />
      </Box>
    </>
  );
};

export default HomePage;
