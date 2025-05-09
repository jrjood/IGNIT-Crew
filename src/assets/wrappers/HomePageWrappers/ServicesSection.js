import styled from 'styled-components';
import bgImage from '../../../assets/images/backgrounds/HomePageImages/services-bg.jpg';

const Wrapper = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  color: white;
  text-align: center;
  width: 100vw;
  height: 100vh;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #111, transparent);
    top: 0;
    left: 0;
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    align-self: flex-start;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
    gap: 1rem;
    width: 100%;
  }

  .card {
    /* display: flex; */
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0.9rem;
    border-radius: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    flex-direction: column;
    gap: 1rem;
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    width: 100%;
    height: 20vh;
    cursor: pointer;
    .card-text {
      display: flex;
      align-items: center;
      height: 1rem;
    }

    .line-highlight {
      display: block;
      width: 5rem;
      height: 0.3rem;
      background: #ffc800;
      margin-bottom: 1rem;
      transition: background 0.3s ease;
    }

    &:hover {
      background-color: #ffc800;
      color: black;

      .line-highlight {
        background: black;
      }
    }
  }
  @media (max-width: 62rem) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 52.5rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 27rem) {
    .card {
      width: 90%;
      height: 20vh;
    }
    .card-text {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;
