import bgImage from '../assets/images/backgrounds/ProjectsPageImages/projects-bg.jpg'; // background image

import {
  PageStarter,
  AllProjectsSection,
  InspirationSection,
} from '../layout/ProjectsPage/';

const ProjectsPage = () => {
  return (
    <>
      <PageStarter title='projects' imgPath={bgImage} />
      <AllProjectsSection />
      <InspirationSection quote='ELEVATING POSSIBILITIES' />
    </>
  );
};

export default ProjectsPage;
