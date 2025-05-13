import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar, Footer, ScrollToTop } from '../components';
import Loader from '../components/Loader';

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 3000; // optional delay
    const start = Date.now();

    const waitForMedia = async () => {
      // 👇 Wait for a specific video or image to load (adjust selector as needed)
      const bgVideo = document.querySelector('#hero-video');

      if (bgVideo) {
        await new Promise((resolve) => {
          if (bgVideo.readyState >= 3) {
            resolve(); // Already loaded
          } else {
            bgVideo.addEventListener('loadeddata', resolve, { once: true });
          }
        });
      }

      // You can also wait for background images or other elements here

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        const hardLoader = document.getElementById('initial-loader');
        if (hardLoader) hardLoader.remove();

        setLoading(false);
      }, remaining);
    };

    waitForMedia();
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
