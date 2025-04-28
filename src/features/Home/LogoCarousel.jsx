import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import logos from '../../assets/logos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const Section = styled.section`
  background-color: #e6e6e6;
  padding: 6rem 2rem;
`;
const CarouselContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 1200px;
  cursor: grab;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: black;
  align-self: flex-start;
`;
const Button = styled.button`
  background-color: #ffc107;
  border: none;
  align-self: flex-end;
  padding: 0.75rem 2rem;
  width: 15rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  border: 2px solid transparent;
  transition: all ease-in-out 0.5s;
  &:hover {
    background-color: transparent;
    color: #ffc107;
    border: 2px solid #ffc800;
  }
`;

const LogoItem = styled.div`
  user-select: none; /* prevent text‐select while dragging */
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

export default function LogoCarousel() {
  return (
    <Section>
      <CarouselContainer>
        <Title>CLIENTS</Title>
        <LogoContainer>
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
                <LogoItem>
                  <img src={logo.src} alt={logo.alt || `logo-${i}`} />
                </LogoItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </LogoContainer>
        <Button>SHOW MORE</Button>
      </CarouselContainer>
    </Section>
  );
}
