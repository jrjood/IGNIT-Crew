import { useState } from 'react';
import InspirationSection from '../../components/InspirationSection';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateEmail(email)) return alert('Invalid email format.');

    try {
      await axios.post('http://localhost:5000/api/newsletter', { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert('Subscription failed.');
    }
  };

  return (
    <InspirationSection>
      <h2 className='newsletter-title'>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input
            type='email'
            placeholder='Enter Your Email ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className='email-icon'>
            <FiSend size={20} />
          </span>
        </div>
        <button type='submit' className='send-btn'>
          SEND
        </button>
      </form>
    </InspirationSection>
  );
};

export default NewsletterForm;
