import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSection';
import { ServicesCard } from '../../components';

const services = [
  'Activation',
  'Events',
  'Exhibitions',
  'Roadshows',
  'POS Marketing',
  'Stunts',
  'Team Building',
  'Digital Marketing',
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper>
        <div className='overlay' />
        <div className='container'>
          <h2 className='title'>SERVICES</h2>
          <ServicesCard services={services} />
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ServicesSection;
