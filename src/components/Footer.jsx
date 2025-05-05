import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='social-container'>
        <div className='social-icons'>
          <a className='facebook' href='#'>
            <FaFacebookF />
          </a>
          <a className='linkedin' href='#'>
            <FaLinkedinIn />
          </a>
          <a className='instagram' href='#'>
            <FaInstagram />
          </a>
        </div>

        <div className='copy-text'>
          <p className='developed-by'>
            IGNITCREW 2023. All Rights Reserved. Developed & Designed By{' '}
            <a href='#' className='designer-link'>
              JORDI
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
