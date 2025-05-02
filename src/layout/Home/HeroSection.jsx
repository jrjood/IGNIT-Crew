import React from 'react';

import heroVideo from '../../assets/images/backgrounds/hero-bg.mp4';
import Wrapper from '../../assets/wrappers/HeroSection';

const HeroSection = () => {
  return (
    <Wrapper id='hero'>
      <div>
        <div className='overlay' />
        <video
          className='background-video'
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
          type='video/mp4'
        ></video>
      </div>

      <div className='content'>
        <div className='left'>
          <div>
            <div>WE</div>
            <div>HELP</div>
            <div>DEVELOP</div>
            <div>BRANDS</div>
          </div>
        </div>
        <div className='right'>
          <p>
            IGNIT Crew is a leading BTL marketing agency in the MENA region with
            over 200 employees, offices in Cairo and Dubai, partnerships with
            over 600 clients, and a privately-owned production house. We are
            proud of our reputation and plan to surpass even higher benchmarks
            in the future.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
