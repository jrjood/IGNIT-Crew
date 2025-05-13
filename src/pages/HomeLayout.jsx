import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 2000;
    const start = Date.now();

    const waitUntilRendered = () => {
      return new Promise((resolve) => {
        const video = document.getElementById('hero-video');
        if (!video) return resolve();

        const check = () => {
          // Check if video has visible dimensions (rendered on screen)
          const rect = video.getBoundingClientRect();
          const visible = rect.width > 0 && rect.height > 0;

          if (visible) {
            requestAnimationFrame(() => resolve());
          } else {
            setTimeout(check, 100); // Keep checking every 100ms
          }
        };

        check();
      });
    };

    const handleRenderComplete = async () => {
      await waitUntilRendered();

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        const hardLoader = document.getElementById('initial-loader');
        if (hardLoader) hardLoader.remove();
        setLoading(false);
      }, remaining);
    };

    handleRenderComplete();
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
