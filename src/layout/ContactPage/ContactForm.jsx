import React from 'react';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';

const ContactForm = () => {
  return (
    <Wrapper className='contact-section'>
      <h2 className='form-title'>GET IN TOUCH</h2>
      <form className='contact-form'>
        <div className='left-fields'>
          <input type='text' placeholder='FULL NAME*' required />
          <input type='email' placeholder='EMAIL ADDRESS*' required />
          <input type='tel' placeholder='MOBILE NUMBER*' required />
          <input type='text' placeholder='JOB TITLE (OPTIONAL)' />
          <input type='text' placeholder='COMPANY NAME' />
        </div>
        <div className='right-fields'>
          <textarea placeholder='MESSAGE' rows='8' />
          <button type='submit'>SEND</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactForm;
