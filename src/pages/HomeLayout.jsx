import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 2000;
    const start = Date.now();

    const waitUntilVisible = () => {
      return new Promise((resolve) => {
        const video = document.getElementById('hero-video');
        if (!video) return resolve();

        const checkPlay = () => {
          const isPlaying = !!(
            video.currentTime > 0 &&
            !video.paused &&
            !video.ended &&
            video.readyState >= 3
          );

          if (isPlaying) {
            // Give browser one frame to render
            requestAnimationFrame(() => resolve());
          } else {
            setTimeout(checkPlay, 100);
          }
        };

        checkPlay();
      });
    };

    const runLoaderLogic = async () => {
      await waitUntilVisible();

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        const hardLoader = document.getElementById('initial-loader');
        if (hardLoader) hardLoader.remove();
        setLoading(false);
      }, remaining);
    };

    runLoaderLogic();
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
