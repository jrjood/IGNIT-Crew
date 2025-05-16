import projects from '../utils/projects';

import {
  HeroSection,
  AboutSection,
  MilestonesSection,
  ServicesSection,
  LogoCarousel,
  TestimonialsSection,
  ContactsSection,
  ProjectsSection,
} from '../layout/HomePage/';

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
      <ContactsSection />
    </>
  );
};

export default HomePage;
