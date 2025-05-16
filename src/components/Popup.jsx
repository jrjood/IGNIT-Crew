import { useEffect, useRef } from 'react';
import Wrapper from '../assets/wrappers/Popup';
import { Link } from 'react-router-dom';

const Popup = ({ onClose, data }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <Wrapper $background={data.image}>
      <div className='popup-container' ref={popupRef}>
        <button className='closeBtn' onClick={onClose}>
          &times;
        </button>
        <h2 className='title'>{data.title}</h2>

        <div className='scrollContainer'>
          <div className='popup-card'>
            {/* <img className='img' src={data.image} alt={data.text} /> */}
            {/* <div className='overlay' /> */}
            {/* <div className='label'> {data.text}</div> */}
            <p>{data.text}</p>
          </div>
        </div>
        <Link to={data.link}>
          <button className='btn'>show more</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Popup;
