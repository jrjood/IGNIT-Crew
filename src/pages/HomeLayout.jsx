import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';

export default function HomeLayout() {
  useEffect(() => {
    const MIN_DURATION = 3000;
    const start = Date.now();

    const waitForVideoRender = () => {
      return new Promise((resolve) => {
        const video = document.getElementById('hero-video');
        if (!video) return resolve();

        const check = () => {
          const isVisible = video.offsetWidth > 0 && video.offsetHeight > 0;
          if (isVisible && video.readyState >= 3) {
            requestAnimationFrame(resolve);
          } else {
            setTimeout(check, 100);
          }
        };

        check();
      });
    };

    const revealApp = async () => {
      await waitForVideoRender();

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        const loader = document.getElementById('initial-loader');
        if (loader) loader.remove();

        const appRoot = document.getElementById('root');
        if (appRoot) {
          appRoot.style.display = 'block';
          appRoot.style.opacity = '0';
          appRoot.style.transition = 'opacity 0.5s ease';
          requestAnimationFrame(() => {
            appRoot.style.opacity = '1';
          });
        }
      }, remaining);
    };

    revealApp();
  }, []);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
