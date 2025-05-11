// import React, { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';

import Wrapper from '../../assets/wrappers/ContactPageWrappers/JoinCrewForm';

const JoinCrewForm = () => {
  // const [location, setLocation] = useState('CAI');

  return (
    <Wrapper className='join-crew-form'>
      <div className='container'>
        <h2 className='form-title'>
          WANNA BE A PART OF <br /> <span>THE CREW?</span>
        </h2>

        <form className='contact-form'>
          <div className='radio-group'>
            <label>
              <input
                type='radio'
                name='location'
                value='CAI'
                // checked={location === 'CAI'}
                // onChange={(e) => setLocation(e.target.value)}
              />
              CAI
            </label>
            <label>
              <input
                type='radio'
                name='location'
                value='DXB'
                // checked={location === 'DXB'}
                // onChange={(e) => setLocation(e.target.value)}
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
                <span className='label-title'>ATTACH YOUR RESUME</span>
                <input type='file' />
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

            <input type='tel' placeholder='MOBILE NUMBER*' required />
            <textarea placeholder='MESSAGE' rows='10' className='full-width' />

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
