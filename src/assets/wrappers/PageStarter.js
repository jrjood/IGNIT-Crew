// import bgImage from '../images/backgrounds/AboutPageImages/about-bg.png'; // background image

import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 5rem;
  height: fit-content;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.06),
      rgba(0, 0, 0, 0.57)
    ),
    url(${(props) => props.$imgPath}) no-repeat;
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    width: 100%;
    height: 62vh;
    align-content: center;
    justify-content: start;
    padding: 0 2rem;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Rama Gothic M';
    font-weight: bold;
    color: var(--primary-400);
    text-transform: uppercase;
    font-size: 5rem;
    text-align: center;
  }

  @media (max-width: 62rem) {
    .info {
      font-size: 4.1rem;
    }
    .content {
      justify-content: center;
    }
  }
  @media (max-width: 44rem) {
    .info {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 3rem;
    }
  }
`;

export default Wrapper;
