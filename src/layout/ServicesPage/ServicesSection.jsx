import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Wrapper from '../../assets/wrappers/ServicesPageWrappers/ServicesSection';
import projects from '../../utils/projects';
import useMediaQuery from '../../utils/useMediaQuery';

const ProjectsSection = () => {
  const isMobile = useMediaQuery('(max-width: 52.5rem)');
  return (
    <>
      <Wrapper className='section-container'>
        <div className='container '>
          <h2 className='title title-medium'>FEATURED PROJECTS</h2>
          {isMobile && (
            <div className='small-screen'>
              <Swiper
                className='card-slide'
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
              >
                {projects.map((proj, i) => (
                  <SwiperSlide>
                    <img className='img' src={proj.img} alt={proj.text} />
                    <div className='overlay' />
                    <div className='label'>{proj.text}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className='grid big-screen'>
            {projects.map((proj, i) => (
              <div className={proj.big ? 'card big-card' : 'card'} key={i}>
                <img className='img' src={proj.img} alt={proj.text} />
                <div className='overlay' />
                <div className='label'>{proj.text}</div>
              </div>
            ))}
          </div>
          <button className='btn'>EXPLORE</button>
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ProjectsSection;
