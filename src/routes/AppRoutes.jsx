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
import { AllProjectsSection } from '../layout/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/IGNIT-Crew',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'projects',
        element: <ProjectsPage />,
        children: [
          {
            index: true,
            element: <AllProjectsSection />, // default: all projects
          },
          {
            path: ':category',
            element: <AllProjectsSection />, // show filtered projects
          },
        ],
      },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
