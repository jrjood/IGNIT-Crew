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
      <PageStarter title='projects' imgPath={bgImage} />
      <CardsSection
        title='featured projects'
        cardsData={projects}
        gridRows='grid grid--2--row'
      />
      <InspirationSection quote='ELEVATING POSSIBILITIES' />
    </>
  );
};

export default ProjectsPage;
