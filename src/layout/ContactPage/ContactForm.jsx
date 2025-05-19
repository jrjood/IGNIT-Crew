import { useState } from 'react';
import axios from 'axios';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobTitle: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        jobTitle: '',
        companyName: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <h2 className='form-title'>GET IN TOUCH</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='left-fields'>
            <input
              type='text'
              name='fullName'
              placeholder='FULL NAME*'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='EMAIL ADDRESS*'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='MOBILE NUMBER*'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='jobTitle'
              placeholder='JOB TITLE (OPTIONAL)'
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <input
              type='text'
              name='companyName'
              placeholder='COMPANY NAME'
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className='right-fields'>
            <textarea
              name='message'
              placeholder='MESSAGE'
              rows='12'
              value={formData.message}
              onChange={handleChange}
            />
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
