import React from 'react';
import HeroSection from '../features/Home/HeroSection';
import AboutSection from '../features/Home/AboutSection';
import MilestonesSection from '../features/Home/MilestonesSection';
import ServicesSection from '../features/Home/ServicesSection';
import ProjectsSection from '../features/Home/ProjectsSection';
import LogoCarousel from '../features/Home/LogoCarousel';
import TestimonialsSection from '../features/Home/TestimonialsSection';

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
