import React from 'react';

import Wrapper from '../assets/wrappers/InspirationSection';

const InspirationSection = ({ quote }) => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='content '>
          <div className='feature'>
            <h2 className='quote'>{quote}</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
