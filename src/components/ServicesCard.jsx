import { Link } from 'react-router-dom';

const ServicesCard = ({ services }) => {
  return (
    <div className='grid'>
      {services.map((service, index) => (
        <Link
          className='card flex-center'
          to={service.toLowerCase().replace(/\s+/g, '-')}
          key={index}
        >
          <div className='line-highlight'></div>
          <div className='card-text'>{service}</div>
        </Link>
      ))}
    </div>
  );
};
export default ServicesCard;
