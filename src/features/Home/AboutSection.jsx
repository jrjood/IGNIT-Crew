import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/about-image.jpg'; // replace with your actual image
import Logo from '../../components/Logo';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  .logo {
    display: flex;
    align-items: center;
    width: 50%;
  }
`;

const Left = styled.div`
  flex: 1;
  align-self: center;
  justify-self: center;
  min-width: 50%;
  img {
    height: 80vh;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 50%;
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  span {
    color: #ffc107;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Highlight = styled.h3`
  color: #ffc107;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
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
`;

const AboutSection = () => {
  return (
    <Section>
      <Left>
        <img src={aboutImage} alt='' />
      </Left>
      <Right>
        <Logo />
        <Text>
          At IGNIT Crew, innovation isn't just a buzzword; it's woven into the
          fabric of everything we do. We're not your typical BTL marketing
          agency. We're the disruptors, the dreamers, and the doers.
        </Text>
        <Highlight>INNOVATION IS OUR DNA</Highlight>
        <Button>GET IN TOUCH</Button>
      </Right>
    </Section>
  );
};

export default AboutSection;
