import React from 'react';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

import Wrapper from '../../assets/wrappers/ContactsSection';

export default function Footer() {
  return (
    <Wrapper className='section-container'>
      <div className='contact-top flex-center'>
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
    </Wrapper>
  );
}
