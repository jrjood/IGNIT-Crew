import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';

const ContactForm = () => {
  return (
    <Wrapper className='contact-section'>
      <div className='container'>
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
            <textarea placeholder='MESSAGE' rows='12' />
            <button className='btn' type='submit'>
              SEND
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
