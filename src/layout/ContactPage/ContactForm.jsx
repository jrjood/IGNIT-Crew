import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';

const ContactForm = () => {
  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <h2 className='form-title'>GET IN TOUCH</h2>
        <form
          className='contact-form'
          action='https://api.web3forms.com/submit'
          method='POST'
        >
          <input
            type='hidden'
            name='access_key'
            value='ee1fbee7-4e02-4817-9ac5-c090294e2761'
          />
          <div className='left-fields'>
            <input
              type='text'
              name='fullName'
              placeholder='FULL NAME*'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='EMAIL ADDRESS*'
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='MOBILE NUMBER*'
              required
            />
            <input
              type='text'
              name='jobTitle'
              placeholder='JOB TITLE (OPTIONAL)'
            />
            <input type='text' name='companyName' placeholder='COMPANY NAME' />
          </div>
          <div className='right-fields'>
            <textarea name='message' placeholder='MESSAGE' rows='15' />
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
