import React from 'react';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/InspirationSection';

const InspirationSection = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='content '>
          <div className='row'>
            <h3 className='title title-extra'>mission</h3>
            <div className='text-box'>
              <p>
                We inspire our clients with a vast array of original concepts,
                complemented by top-notch production, so that they may stand out
                in a crowded marketplace and create lasting impressions.
              </p>
            </div>
          </div>
          <div className='row'>
            <h3 className='title title-extra'>vision</h3>
            <div className='text-box'>
              <p>
                At the core of our vision is the aim to use innovation to craft
                remarkable experiences for our top-tier brands, and in doing so,
                establish ourselves as the preeminent BTL agency in the MENA
                region
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
