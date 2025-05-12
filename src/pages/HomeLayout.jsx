import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader'; // 👈 create this component

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Listen for the page to fully load
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // 👈 loading screen component
      ) : (
        <>
          <NavBar />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
