import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
