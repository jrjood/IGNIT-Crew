import React from 'react';

import { Counter } from '../../components';
import logo2001 from '../../assets/images/logo-2001.png'; // the big transparent 2001
import Wrapper from '../../assets/wrappers/MilestonesSection';

const MilestonesSection = () => {
  return (
    <Wrapper>
      <div className='overlay' />
      <div className='content'>
        <div className='stats-container'>
          <p className='top-text'>
            These projects were executed in Egypt, USA, KSA, Lebanon, Morocco,
            Algeria, Jordan, Qatar, Kuwait, Bahrain, Sudan, Libya, and Syria
          </p>
          <div className='stats'>
            <div className='stat-block'>
              CLIENTS
              <span>
                <Counter start='0' end='300' duration={7} /> +
              </span>
            </div>
            <div className='stat-block'>
              PROJECTS
              <span>
                <Counter start='0' end='2000' duration={7} /> +
              </span>
            </div>
          </div>
          <h2 className='since'>SINCE</h2>
        </div>

        <div className='logo'>
          <img src={logo2001} alt='2001' />
        </div>
      </div>
    </Wrapper>
  );
};

export default MilestonesSection;
