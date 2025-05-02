import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='social-container'>
        <div className='social-icons'>
          <a className='facebook' href=''>
            <FaFacebookF />
          </a>
          <a className='linkedin' href=''>
            <FaLinkedinIn />
          </a>
          <a className='instagram' href=''>
            <FaInstagram />
          </a>
        </div>

        <div className='copy-text'>
          <p>Ignitrew Crew 2023. All Rights Reserved.</p>
          <p>
            Developed & Designed By
            <span className='mophx-link'> JORDI TECH</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
