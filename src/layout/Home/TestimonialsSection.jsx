import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from '../../components/TestimonialCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Example client images
import client1 from '../../assets/images/clientsImages/client1.jpg';
import client2 from '../../assets/images/clientsImages//client2.jpg';
import client3 from '../../assets/images/clientsImages//client3.jpg';

const Section = styled.section`
  background-color: #ffc107;
  color: white;
  padding: 6rem 2rem;
  text-align: left;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SwiperContainer = styled.div`
  width: 500px;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 3rem;
  color: black;
`;

const TestimonialsSection = () => {
  return (
    <Section>
      <Container>
        <Title>WHAT CLIENTS SAY</Title>
        <Subtitle>
          We build strong relationships with our clients through our work and
          innovation.
        </Subtitle>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <TestimonialCard
              path={client1}
              alt='Client 1'
              name='John Doe'
              role='CEO, Example Inc.'
              rate='⭐⭐⭐⭐⭐'
              feedback='IGNIT Crew helped us achieve fantastic growth with their
                creative marketing strategies.'
            ></TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              path={client2}
              alt='Client 2'
              name='Jane Smith'
              role='Marketing Head, ABC Corp.'
              rate='⭐⭐⭐⭐⭐'
              feedback='Amazing team to work with. Very professional and extremely
                innovative.'
            ></TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              path={client3}
              alt='Client 3'
              name='Mike Johnson'
              role='Product Manager, XYZ Ltd.'
              rate='⭐⭐⭐⭐⭐'
              feedback='Highly recommend their services to anyone looking for branding
                and marketing excellence!'
            ></TestimonialCard>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
