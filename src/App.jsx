import AppRoutes from './routes/AppRoutes';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const waitForVideo = async () => {
      const video = document.getElementById('hero-video');
      if (video) {
        await new Promise((resolve) => {
          if (video.readyState >= 3) return resolve();
          video.addEventListener('canplaythrough', resolve, { once: true });
        });
      }

      // Now remove loader manually in case it's still there
      const loader = document.getElementById('initial-loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        loader.style.transition = 'opacity 0.4s ease';

        setTimeout(() => {
          loader.remove();
        }, 500);
      }
    };

    waitForVideo();
  }, []);

  return <AppRoutes />;
};

export default App;
