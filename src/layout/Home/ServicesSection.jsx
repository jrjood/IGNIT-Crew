import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/backgrounds/services-bg.jpg';

const Section = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  padding: 6rem 2rem;
  color: white;
  text-align: center;
  min-height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #111, transparent);
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ffc800;
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 6rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  color: white;
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: #ffc107;
    margin-bottom: 1rem;
    transition: background 0.3s ease;
  }

  &:hover {
    background-color: #ffc107;
    color: black;

    &::before {
      background: black;
    }
  }
`;

const ServicesSection = () => {
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

  return (
    <>
      <Section>
        <Overlay />
        <Container>
          <Title>SERVICES</Title>
          <Grid>
            {services.map((service, index) => (
              <StyledLink
                to={service.toLowerCase().replace(/\s+/g, '-')}
                key={index}
              >
                <Card>{service}</Card>
              </StyledLink>
            ))}
          </Grid>
        </Container>
      </Section>
      <Line />
    </>
  );
};

export default ServicesSection;
