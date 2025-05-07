import React from 'react';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/ContactsSection';

export default function Footer() {
  return (
    <Wrapper className='section-container'>
      <div className='contact-top flex-center'>
        <div className='contact-item'>
          <a className='contact-circle' href='mailto:info@ignitrew.com'>
            <IoMdMail />
          </a>
          <h4 className='label'>EMAIL US</h4>
          <a className='info' href='mailto:info@ignitrew.com'>
            info@ignitrew.com
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a
            target='_blank'
            className='contact-circle'
            href='https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook'
          >
            <FaPhone />
          </a>
          <h4 className='label'>CALL US</h4>
          <a
            target='_blank'
            className='info'
            href='https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook'
          >
            +20 10 27883268
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a className='contact-circle' href='#'>
            <FaLocationDot />
          </a>
          <h4 className='label'>VISIT US</h4>
          <a className='info' href='#'>
            Address, Street, Cairo, Egypt
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
