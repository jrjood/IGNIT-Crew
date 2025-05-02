import React from 'react';

import Wrapper from '../../assets/wrappers/ProjectsSection';
import projects from '../../utils/projects';

const ProjectsSection = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <h2 className='title'>FEATURED PROJECTS</h2>
          <div className='grid'>
            {projects.map((proj, i) => (
              <div className={proj.big ? 'card big-card' : 'card'} key={i}>
                <img className='img' src={proj.img} alt={proj.text} />
                <div className='overlay' />
                <div className='label'>{proj.text}</div>
              </div>
            ))}
          </div>
          <button className='btn'>EXPLORE</button>
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ProjectsSection;
