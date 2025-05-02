import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/LogoCarousel';

/* import 'swiper/css';
import 'swiper/css/autoplay'; */

export default function LogoCarousel() {
  return (
    <Wrapper>
      <div className='carousel-container'>
        <h2 className='title'>CLIENTS</h2>
        <div className='logo-container'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
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
