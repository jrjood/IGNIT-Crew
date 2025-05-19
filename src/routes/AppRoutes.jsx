import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Error,
  HomePage,
  AboutPage,
  ProjectsPage,
  ClientsPage,
  ContactPage,
} from '../pages';
import {
  ProjectBiskrem,
  ProjectTotal,
  ProjectPepsi,
  ProjectNissan,
  ProjectBritishPetroleum,
} from '../pages/AllProjects';

const router = createBrowserRouter([
  {
    path: '/IGNIT-Crew',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: '/IGNIT-Crew/projects/proj1', element: <ProjectBiskrem /> },
      { path: '/IGNIT-Crew/projects/proj2', element: <ProjectNissan /> },
      { path: '/IGNIT-Crew/projects/proj3', element: <ProjectPepsi /> },
      {
        path: '/IGNIT-Crew/projects/proj4',
        element: <ProjectBritishPetroleum />,
      },
      { path: '/IGNIT-Crew/projects/proj5', element: <ProjectTotal /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
