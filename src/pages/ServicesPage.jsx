import bgImage from '../assets/images/backgrounds/ServicesPageImages/services-bg.jpg'; // background image
import { PageStarter, ServicesSection } from '../layout/ServicesPage/';

const ServicesPage = () => {
  return (
    <>
      <PageStarter title='services' imgPath={bgImage} />
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
