import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 2000; // Minimum loader duration in ms
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        // Remove fallback loader in public/index.html
        const hardLoader = document.getElementById('initial-loader');
        if (hardLoader) hardLoader.remove();

        setLoading(false);
      }, remaining);
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
