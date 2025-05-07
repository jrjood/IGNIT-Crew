import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Error, HomePage, AboutPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
