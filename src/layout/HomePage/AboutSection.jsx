import { Logo } from '../../components';
import Wrapper from '../../assets/wrappers/HomePageWrappers/AboutSection';
import aboutImage from '../../assets/images/backgrounds/HomePageImages/about-bg.jpg';

const AboutSection = () => {
  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img ' aria-label='img'></div>

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
