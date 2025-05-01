import React from 'react';
import styled from 'styled-components';
import proj1 from '../../assets/images/projectsImages/proj1.jpg';
import proj2 from '../../assets/images/projectsImages/proj2.jpg';
import proj3 from '../../assets/images/projectsImages/proj3.jpg';
import proj4 from '../../assets/images/projectsImages/proj4.jpg';
import proj5 from '../../assets/images/projectsImages/proj5.jpg';
import Wrapper from '../../assets/wrappers/ProjectsSection';

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 6rem 2rem;
  text-align: left;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ffc800;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-height: 70vh;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  grid-row: ${({ $big }) => $big && '1/3'};
  cursor: pointer;

  &:hover .overlay {
    opacity: 0.4;
  }

  &:hover .label {
    background: black;
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: yellow;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const Label = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0;
  background: #ffc107;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 0 6px 6px 0;
  transition: background 0.3s ease, color 0.3s ease;
  z-index: 2;
`;

const Button = styled.button`
  background-color: #ffc107;
  border: none;
  align-self: flex-end;
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

const ProjectsSection = () => {
  const projects = [
    { img: proj1, text: 'BISKREM-2024 - الحلو بيكمل أحلى', big: 'true' },
    { img: proj2, text: 'NISSAN-DARING AFRICA-2024' },
    { img: proj3, text: 'PEPSI-THE HOUSE OF FIZZ-2023' },
    { img: proj4, text: 'BRITISH PETROLEUM - LAUNCH EVENT' },
    { img: proj5, text: 'TOTAL ENERGIES - YLT FINAL' },
  ];

  return (
    <>
      <Wrapper>
        <div className='container'>
          <h2 className='title'>FEATURED PROJECTS</h2>
          <div className='grid'>
            {projects.map((proj, i) => (
              <div className='card' key={i} $big={proj.big}>
                <img className='img' src={proj.img} alt={proj.text} />
                <div className='overlay' />
                <div className='label'>{proj.text}</div>
              </div>
            ))}
          </div>
          <button className='btn'>EXPLORE</button>
        </div>
      </Wrapper>
      <dive className='line' />
    </>
  );
};

export default ProjectsSection;
