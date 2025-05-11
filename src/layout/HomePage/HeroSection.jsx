import heroVideo from '../../assets/images/backgrounds/HomePageImages/hero-bg.mp4';
import Wrapper from '../../assets/wrappers/HomePageWrappers/HeroSection';

const HeroSection = () => {
  return (
    <Wrapper id='hero' className='section-container'>
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

      <div className='content '>
        <div className='left flex-center'>
          <div className='info'>
            <p>WE</p>
            <p>HELP</p>
            <p>DEVELOP</p>
            <p>BRANDS</p>
          </div>
        </div>
        <div className='right '>
          <p>
            IGNIT Crew is a leading BTL marketing agency in the MENA region with
            over 200 employees, offices in Cairo and Dubai, partnerships with
            over 600 clients, and a privately-owned production house. We are
            proud of our reputation and plan to surpass even higher benchmarks
            in the future.
          </p>
          <button className='btn'>LEARN MORE</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
