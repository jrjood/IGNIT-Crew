import bgImage from '../assets/images/backgrounds/ProjectsPageImages/projects-bg.jpg'; // background image
import projects from '../utils/projects';

import {
  PageStarter,
  CardsSection,
  InspirationSection,
} from '../layout/ProjectsPage/';

const ProjectsPage = () => {
  return (
    <>
      <PageStarter title='services' imgPath={bgImage} />
      <CardsSection cardsData={projects} gridRows='grid grid--2--row' />
      <InspirationSection />
    </>
  );
};

export default ProjectsPage;
