import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import useMediaQuery from '../utils/useMediaQuery';
import { Link } from 'react-router-dom';

const Cards = ({ gridRows, cardsData }) => {
  const isMobile = useMediaQuery('(max-width: 48rem)');

  return (
    <>
      {isMobile && (
        <div className='small-screen'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {cardsData.map((proj, i) => (
              <SwiperSlide>
                <>
                  <Link to={proj.link} key={i} className='card-slide'>
                    <img className='img' src={proj.img} alt={proj.text} />
                    <div className='overlay' />
                    <div className='label'>{proj.text}</div>
                  </Link>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className={gridRows}>
        {cardsData.map((proj, i) => (
          <Link
            to={proj.link}
            key={i}
            className={proj.big ? 'card big-card' : 'card'}
          >
            <img className='img' src={proj.img} alt={proj.text} />
            <div className='overlay' />
            <div className='label'>{proj.text}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Cards;
