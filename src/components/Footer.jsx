import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // for social icons
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/Footer';

export default function Footer() {
  return (
    <Wrapper>
      <div className='contact-top'>
        <div className='contact-item'>
          <a className='contact-circle' href='#'>
            <IoMdMail />
          </a>
          <h4 className='label'>EMAIL US</h4>
          <a className='info' href='mailto:info@ignitrew.com'>
            info@ignitrew.com
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a className='contact-circle' href='#'>
            <FaPhone />
          </a>
          <h4 className='label'>CALL US</h4>
          <a className='info' href='tel:+20233035518'>
            +202 33035518
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a className='contact-circle' href='#'>
            <FaLocationDot />
          </a>
          <h4 className='label'>VISIT US</h4>
          <a className='info' href='#'>
            34 Al-Quds Al-Shareef Street, <br />
            Lebanon Square, Mohandeseen
          </a>
        </div>
      </div>

      <div className='bottom-bar'>
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
      </div>
    </Wrapper>
  );
}
