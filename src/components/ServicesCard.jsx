import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';
import servicesPopup from '../utils/servicesPopup';

const ServicesCard = ({ services }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (serviceName) => {
    setSelectedData(servicesPopup[serviceName]); // pass one item
    setShowPopup(true);
  };

  return (
    <div className='grid'>
      {services.map((service, index) => (
        <button
          onClick={() => handleClick(service)}
          className='card flex-center'
          key={index}
        >
          <div className='line-highlight'></div>
          <div className='card-text'>{service.replace(/_/g, ' ')}</div>
        </button>
      ))}

      {showPopup && selectedData && (
        <Popup
          onClose={() => {
            setShowPopup(false);
            setSelectedData(null);
          }}
          data={selectedData} // pass as array to match Popup.jsx format
        />
      )}
    </div>
  );
};

export default ServicesCard;
