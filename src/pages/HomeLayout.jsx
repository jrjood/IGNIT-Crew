import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 7000; // 👈 2 seconds minimum
    const start = Date.now();

    const handleLoad = () => {
      const timePassed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - timePassed, 0);

      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
