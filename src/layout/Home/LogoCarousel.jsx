import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/LogoCarousel';

/* import 'swiper/css';
import 'swiper/css/autoplay'; */

export default function LogoCarousel() {
  return (
    <Wrapper className='section-container'>
      <div className='carousel-container flex-center container'>
        <h2 className='title'>CLIENTS</h2>
        <div className='logo-container'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              840: {
                slidesPerView: 3,
              },
              850: {
                slidesPerView: 5,
              },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className='logo-item'>
                  <img src={logo.src} alt={logo.alt || `logo-${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className='btn'>SHOW MORE</button>
      </div>
    </Wrapper>
  );
}
