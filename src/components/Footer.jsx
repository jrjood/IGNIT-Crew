import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='social-container'>
        <div className='social-icons'>
          <a
            target='_blank'
            className='facebook'
            href='https://www.facebook.com/profile.php?id=61575004481629'
          >
            <FaFacebookF />
          </a>
          <a
            target='_blank'
            className='whatsapp'
            href='https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook'
          >
            <FaWhatsapp />
          </a>
          <a
            target='_blank'
            className='instagram'
            href='https://www.instagram.com/ignitcrew/'
          >
            <FaInstagram />
          </a>
        </div>

        <div className='copy-text'>
          <p className='developed-by'>
            IGNITCREW 2023. All Rights Reserved. Developed & Designed By.
            <a
              target='_blank'
              href='https://portfolio-webpage-jrd.vercel.app/'
              className='designer-link'
            >
              JORDI
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
