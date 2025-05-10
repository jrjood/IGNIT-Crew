import InspirationSection from '../../components/InspirationSection';
import { FiSend } from 'react-icons/fi'; // or use your own icon

const NewsletterForm = () => {
  return (
    <InspirationSection>
      <h2 className='newsletter-title'>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <form>
        <div className='input-wrapper'>
          <input type='email' placeholder='Enter Your Email ...' />
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
