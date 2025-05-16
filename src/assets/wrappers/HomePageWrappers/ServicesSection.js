import styled from 'styled-components';
import bgImage from '../../../assets/images/backgrounds/HomePageImages/services-bg.jpg';

const Wrapper = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  color: var(--white);
  text-align: center;
  /* height: 65vh; */
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
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;
  }

  .title {
    align-self: flex-start;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    /* align-content: center; */
    gap: 1rem;
    width: 100%;
    height: 80%;
  }

  .card {
    /* display: flex; */
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0.9rem;
    border-radius: var(--border-radius);
    font-weight: bold;
    color: var(--white);
    font-size: 1.2rem;
    flex-direction: column;
    gap: 1rem;
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: var(--transition);
    width: 100%;
    height: 100%;
    min-height: 10rem;
    border: none;
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
      background: var(--primary-400);
      margin-bottom: 1rem;
      transition: var(--transition);
    }

    &:hover {
      background-color: var(--primary-400);
      color: var(--black);

      .line-highlight {
        background: var(--black);
      }
    }
  }
  @media (max-width: 48rem) {
    width: 100%;
    height: 100%;
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 52.5rem) {
  }
  @media (max-width: 27rem) {
    .card {
      width: 90%;
    }
    .card-text {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;
