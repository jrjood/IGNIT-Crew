import bgImage from '../assets/images/backgrounds/ServicesPageImages/services-bg.jpg'; // background image
import services from '../utils/services';

import {
  PageStarter,
  CardsSection,
  InspirationSection,
} from '../layout/ServicesPage/';

const ServicesPage = () => {
  return (
    <>
      <PageStarter title='services' imgPath={bgImage} />
      <CardsSection
        title='featured services'
        cardsData={services}
        gridRows='big-screen grid grid--3--row'
      />
      <InspirationSection quote='IGNITING CREATIVE SPARKS' />
    </>
  );
};

export default ServicesPage;
