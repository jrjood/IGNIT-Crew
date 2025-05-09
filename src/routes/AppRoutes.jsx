import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Error,
  HomePage,
  AboutPage,
  ServicesPage,
  ProjectsPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
