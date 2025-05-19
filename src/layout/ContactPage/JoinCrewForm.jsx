import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import axios from 'axios';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/JoinCrewForm';

const JoinCrewForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    location: 'CAI',
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.position ||
      !formData.email ||
      !formData.phone
    ) {
      return alert('Please fill in all required fields.');
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (resume) data.append('resume', resume);

    try {
      await axios.post('http://localhost:5000/api/apply', data);
      alert('Application submitted successfully!');
      setFormData({
        fullName: '',
        position: '',
        email: '',
        phone: '',
        message: '',
        location: 'CAI',
      });
      setResume(null);
    } catch (err) {
      console.error(err);
      alert('Failed to submit application.');
    }
  };

  return (
    <Wrapper className='join-crew-form'>
      <div className='container'>
        <h2 className='form-title'>
          WANNA BE A PART OF <br /> <span>THE CREW?</span>
        </h2>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='radio-group'>
            <label>
              <input
                type='radio'
                name='location'
                value='CAI'
                checked={formData.location === 'CAI'}
                onChange={handleChange}
              />
              CAI
            </label>
            <label>
              <input
                type='radio'
                name='location'
                value='DXB'
                checked={formData.location === 'DXB'}
                onChange={handleChange}
              />
              DXB
            </label>
          </div>

          <div className='form-grid'>
            <input
              type='text'
              name='fullName'
              placeholder='FULL NAME*'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='position'
              placeholder='POSITION*'
              value={formData.position}
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

            <div className='upload-group'>
              <label className='upload-label'>
                <span className='label-title'>ATTACH YOUR RESUME</span>
                <input type='file' onChange={handleFileChange} />
                <span className='upload-icon'>
                  <GrAttachment />
                </span>
              </label>
              <div className='or-text'>
                <p>
                  OR SEND YOUR CV AT <br />
                  <span className='email'>INFO@IGNITNCREW.COM</span>
                </p>
              </div>
            </div>

            <input
              type='tel'
              name='phone'
              placeholder='MOBILE NUMBER*'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='MESSAGE'
              rows='10'
              className='full-width'
              value={formData.message}
              onChange={handleChange}
            />

            <button type='submit' className='btn full-width'>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default JoinCrewForm;
