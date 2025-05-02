import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { TestimonialCard } from '../../components';
import Wrapper from '../../assets/wrappers/TestimonialsSection';
import testimonials from '../../utils/testimonials';

/* import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; */

// Example client images
import client1 from '../../assets/images/clientsImages/client1.jpg';
import client2 from '../../assets/images/clientsImages//client2.jpg';
import client3 from '../../assets/images/clientsImages//client3.jpg';

const TestimonialsSection = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2 className='title'>WHAT CLIENTS SAY</h2>
        <p className='subtitle'>
          We build strong relationships with our clients through our work and
          innovation.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard
                path={testimonial.path}
                alt={testimonial.alt}
                name={testimonial.name}
                role={testimonial.role}
                feedback={testimonial.feedback}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default TestimonialsSection;
