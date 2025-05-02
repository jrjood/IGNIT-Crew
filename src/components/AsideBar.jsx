import { FaTimes } from 'react-icons/fa';

import { NavLinks } from '../components';
import Wrapper from '../assets/wrappers/AsideBar';

const AsideBar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button type='button' className='close-btn'>
            <FaTimes />
          </button>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default AsideBar;
