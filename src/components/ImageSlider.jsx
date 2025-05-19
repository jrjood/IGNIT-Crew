import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='slider-container'>
      <img
        className='main-image'
        src={images[current]}
        alt={`Slide ${current}`}
      />
      <div className='arrows'>
        <button className='arrow left' onClick={handlePrev}>
          ‹
        </button>
        <button className='arrow right' onClick={handleNext}>
          ›
        </button>
      </div>

      {/* Thumbnail swiper */}
      <div className='thumbnails'>
        <Swiper
          modules={[Pagination]}
          // modules={[Autoplay]}
          spaceBetween={30}
          loop={false}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            350: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            769: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumb ${index}`}
                className={`thumb ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
