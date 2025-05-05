import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
          <a target='_blank' className='linkedin' href='#'>
            <FaLinkedinIn />
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
