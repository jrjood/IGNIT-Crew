import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Wrapper from '../assets/wrappers/CardsSection';
import useMediaQuery from '../utils/useMediaQuery';

const ProjectsSection = ({ cardsData, gridRows, title, button }) => {
  const isMobile = useMediaQuery('(max-width: 52.5rem)');
  return (
    <>
      <Wrapper className='section-container'>
        <div className='container '>
          <h2 className='title title-medium'>{title}</h2>
          {isMobile && (
            <div className='small-screen'>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
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
          {button && <button className='btn'>{button}</button>}
        </div>
      </Wrapper>
    </>
  );
};

export default ProjectsSection;
