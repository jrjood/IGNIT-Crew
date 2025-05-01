import React from 'react';
import HeroSection from '../layout/Home/HeroSection';
import AboutSection from '../layout/Home/AboutSection';
import MilestonesSection from '../layout/Home/MilestonesSection';
import ServicesSection from '../layout/Home/ServicesSection';
import ProjectsSection from '../layout/Home/ProjectsSection';
import LogoCarousel from '../layout/Home/LogoCarousel';
import TestimonialsSection from '../layout/Home/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <ServicesSection />
      <ProjectsSection />
      <LogoCarousel />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
