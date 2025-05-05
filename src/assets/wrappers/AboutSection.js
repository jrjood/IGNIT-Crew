import styled from 'styled-components';
import aboutImage from '../../assets/images/backgrounds/about-bg.jpg';

const Wrapper = styled.section`
  display: flex;
  background-color: black;
  gap: 5rem;
  height: 100vh;
  width: 100vw;
  .logo {
    display: flex;
    align-items: center;
    width: 60%;
  }

  .image-box {
    margin: auto 0;
    height: 80%;
    width: 100%;
    display: block;
    background-image: url(${aboutImage});
    background-size: cover;
    background-position: center;
  }
  .right {
    flex: 1;
    min-width: 40%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    font-size: 1.625rem;
  }
  .text {
    line-height: 1.5;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    color: #ffc107;
    /* font-size: 1.25rem; */
    margin-bottom: 1.5rem;
  }
  @media (max-width: 62rem) {
    position: relative;

    z-index: -2;
    height: 80vh;
    width: 100%;
    padding-bottom: 2rem;

    .image-box {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: -1;
      background-image: linear-gradient(
          to right bottom,
          rgba(17, 17, 17, 0.45),
          rgba(0, 0, 0, 0.81)
        ),
        url(${aboutImage});
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      max-width: 95%;
      font-size: 1.4rem;
    }
    .highlight {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
      font-size: 1.6rem;
    }
  }
`;

export default Wrapper;
