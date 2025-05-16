import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import useMediaQuery from '../utils/useMediaQuery';

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
                <div className='card-slide'>
                  <img className='img' src={proj.img} alt={proj.text} />
                  <div className='overlay' />
                  <div className='label'>{proj.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className={gridRows}>
        {cardsData.map((proj, i) => (
          <div className={proj.big ? 'card big-card' : 'card'} key={i}>
            <img className='img' src={proj.img} alt={proj.text} />
            <div className='overlay' />
            <div className='label'>{proj.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
