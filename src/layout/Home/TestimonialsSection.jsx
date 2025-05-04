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
    <Wrapper className='section-container'>
      <div className='container'>
        <h2 className='title'>WHAT CLIENTS SAY</h2>
        <p className='subtitle'>
          We build strong relationships with our clients through our work and
          innovation.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            840: {
              slidesPerView: 1,
            },
            850: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard
                path={testimonial.path}
                alt={testimonial.alt}
                name={testimonial.name}
                role={testimonial.role}
                rate={testimonial.rate}
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
