import { Link } from 'react-router-dom';
import { Cards } from '../../components';
import projects from '../../utils/projects';
import Wrapper from '../../assets/wrappers/CardsSection';

const ProjectsSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        <div className='container '>
          <h2 className='title title-medium'>Featured Projects</h2>
          <Cards cardsData={projects} gridRows='big-screen grid grid--2--row' />

          <Link className='btn-container' to='projects'>
            <button className='btn'>Explore more</button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default ProjectsSection;
