import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/JoinCrewForm';

const JoinCrewForm = () => {
  const [location, setLocation] = useState('CAI');

  return (
    <Wrapper className='join-crew-form'>
      <h2>
        WANNA BE A PART OF <br /> <span>THE CREW?</span>
      </h2>

      <form>
        <div className='radio-group'>
          <label>
            <input
              type='radio'
              name='location'
              value='CAI'
              checked={location === 'CAI'}
              onChange={(e) => setLocation(e.target.value)}
            />
            CAI
          </label>
          <label>
            <input
              type='radio'
              name='location'
              value='DXB'
              checked={location === 'DXB'}
              onChange={(e) => setLocation(e.target.value)}
            />
            DXB
          </label>
        </div>

        <div className='form-grid'>
          <input type='text' placeholder='FULL NAME*' required />
          <input type='text' placeholder='POSITION*' required />
          <input type='email' placeholder='EMAIL ADDRESS*' required />

          <div className='upload-group'>
            <label className='upload-label'>
              ATTACH YOUR RESUME
              <input type='file' />
              <span className='upload-icon'>📎</span>
            </label>
            <p className='or-text'>
              OR SEND YOUR CV AT <br />
              <span className='email'>INFO@INNOVATIONCREW.COM</span>
            </p>
          </div>

          <input
            type='tel'
            placeholder='MOBILE NUMBER*'
            required
            className='full-width'
          />
          <textarea placeholder='MESSAGE' rows='5' className='full-width' />

          <button type='submit' className='submit-btn'>
            SUBMIT
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default JoinCrewForm;
