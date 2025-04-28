import React from 'react';
import styled from 'styled-components';
import heroVideo from '../../assets/hero-video.mp4'; // Replace with your actual video file

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: start;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  z-index: -2;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 2rem;
  /* flex-wrap: wrap; */
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: #ffc107;
  line-height: 1;
  text-transform: uppercase;
  div {
    font-size: 6rem;
    line-height: 0.8;
    display: flex;
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  button {
    background-color: #ffc107;
    border: none;
    align-self: flex-start;
    padding: 0.75rem 2rem;
    width: 15rem;
    border-radius: 999px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    color: black;
    border: 2px solid transparent;
    transition: all ease-in-out 0.5s;
    &:hover {
      background-color: transparent;
      color: #ffc107;
      border: 2px solid #ffc800;
    }
  }
`;

const HeroSection = () => {
  return (
    <Section id='hero'>
      <div>
        <Overlay />
        <BackgroundVideo
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
          type='video/mp4'
        ></BackgroundVideo>
      </div>

      <Content>
        <Left>
          <div>
            <div>WE</div>
            <div>HELP</div>
            <div>DEVELOP</div>
            <div>BRANDS</div>
          </div>
        </Left>
        <Right>
          <p>
            IGNIT Crew is a leading BTL marketing agency in the MENA region with
            over 200 employees, offices in Cairo and Dubai, partnerships with
            over 600 clients, and a privately-owned production house. We are
            proud of our reputation and plan to surpass even higher benchmarks
            in the future.
          </p>
          <button>LEARN MORE</button>
        </Right>
      </Content>
    </Section>
  );
};

export default HeroSection;
