import projects from '../utils/projects';

import {
  HeroSection,
  AboutSection,
  MilestonesSection,
  ServicesSection,
  CardsSection,
  LogoCarousel,
  TestimonialsSection,
  ContactsSection,
} from '../layout/HomePage/';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <ServicesSection />
      <CardsSection
        title='featured projects'
        cardsData={projects}
        gridRows='big-screen grid grid--2--row'
        button='EXPLORE'
      />
      <LogoCarousel />
      <TestimonialsSection />
      <ContactsSection />
    </>
  );
};

export default HomePage;
