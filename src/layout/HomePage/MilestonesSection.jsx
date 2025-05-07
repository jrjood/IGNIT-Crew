import React from 'react';

import { Counter } from '../../components';
import logo2001 from '../../assets/images/logo-2001.png'; // the big transparent 2001
import Wrapper from '../../assets/wrappers/HomePageWrappers/MilestonesSection';

const MilestonesSection = () => {
  return (
    <Wrapper className='flex-center '>
      <div className='content flex-center'>
        <div className='stats-container'>
          <p className='top-text'>
            These projects were executed in Egypt, USA, KSA, Lebanon, Morocco,
            Algeria, Jordan, Qatar, Kuwait, Bahrain, Sudan, Libya, and Syria
          </p>
          <div className='stats flex-center'>
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
          <div className='small-screen'>
            <span className='small-since'>Since</span>
            <span className='small-date'>2001</span>
          </div>
        </div>

        <div className='logo-container'>
          <h2 className='since'>SINCE</h2>
          <img src={logo2001} alt='2001' />
        </div>
      </div>
    </Wrapper>
  );
};

export default MilestonesSection;
