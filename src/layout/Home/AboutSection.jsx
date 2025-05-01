import React from 'react';
import aboutImage from '../../assets/images/backgrounds/about-bg.jpg'; // replace with your actual image
import Logo from '../../components/Logo';
import Wrapper from '../../assets/wrappers/AboutSection';

const AboutSection = () => {
  return (
    <Wrapper>
      <div className='left'>
        <img src={aboutImage} alt='' />
      </div>
      <div className='right'>
        <Logo />
        <p className='text'>
          At IGNIT Crew, innovation isn't just a buzzword; it's woven into the
          fabric of everything we do. We're not your typical BTL marketing
          agency. We're the disruptors, the dreamers, and the doers.
        </p>
        <p className='highlight'>INNOVATION IS OUR DNA</p>
        <button className='btn'>GET IN TOUCH</button>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
