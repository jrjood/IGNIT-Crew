import React from 'react';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/AboutSection';

const AboutSection = () => {
  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img ' aria-label='img'></div>

      <div className='right'>
        <h3 className='title title-big'>WHO WE ARE</h3>
        <p className='text'>
          Since our establishment in 2001, we have persistently grown to become
          one of the leading below-the-line (BTL) agencies in the MENA region.
          Our journey began in Cairo with just a handful of employees and
          clients, but we have now expanded to over 200 talented individuals,
          established offices in Cairo and Dubai, and secured partnerships with
          over 100 top-tier clients. Our creative potential knows no bounds, and
          we excel at transforming imaginative concepts into reality with our
          artisanal craftsmanship, thanks to our privately-owned production
          house. We are extremely proud to have built and maintained our
          reputation for more than two decades.
        </p>
        <p className='highlight'>
          our plan for the future is to exceed even higher benchmarks.
        </p>
        <button className='btn'>start campaign</button>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
