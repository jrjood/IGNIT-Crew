import bgImage from '../assets/images/backgrounds/ProjectsPageImages/projects-bg.jpg'; // background image
import { Outlet } from 'react-router-dom';

import {
  PageStarter,
  AllProjectsSection,
  InspirationSection,
} from '../layout/ProjectsPage/';

const ProjectsPage = () => {
  return (
    <>
      <PageStarter title='projects' imgPath={bgImage} />
      <Outlet /> {/* ✅ This lets child routes render dynamically */}
      <InspirationSection quote='ELEVATING POSSIBILITIES' />
    </>
  );
};

export default ProjectsPage;
