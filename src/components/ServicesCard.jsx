import { Link } from 'react-router-dom';

const ServicesCard = ({ services }) => {
  return (
    <div className='grid'>
      {services.map((service, index) => (
        <Link to={service.toLowerCase().replace(/\s+/g, '-')} key={index}>
          <div className='card'>{service}</div>
        </Link>
      ))}
    </div>
  );
};
export default ServicesCard;
