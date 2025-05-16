import Wrapper from '../../assets/wrappers/HomePageWrappers/ServicesSection';
import { ServicesCard } from '../../components';

const services = [
  'Activation',
  'Events',
  'Exhibitions',
  'Roadshows',
  'POS_Marketing',
  'Stunts',
  'Team_Building',
  'Digital_Marketing',
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        <div className='overlay' />
        <div className='container'>
          <h2 className='title title-medium'>SERVICES</h2>
          <ServicesCard services={services} />
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ServicesSection;
