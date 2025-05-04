import styled from 'styled-components';
import bgImage from '../images/backgrounds/milestones-bg.jpg'; // background image

const Wrapper = styled.section`
  color: #a9a9a9;
  background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.26)),
    url(${bgImage});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;

  .content {
    padding-left: 3rem;
    z-index: 2;
    /* width: 100vw !important; */
    /* width: 100%; */
    gap: 2rem;
  }

  .stats-container {
    display: flex;
    justify-content: start;
    align-self: flex-start;
    padding: 4rem 0;
    height: 100%;
    width: 50%;
    flex-direction: column;
    gap: 8rem;
    font-weight: bold;
    position: relative;
  }
  .top-text {
    font-size: 0.8rem;
    line-height: 1.6;
    /* max-width: 700px; */
  }
  .stats {
    gap: 3rem;
    justify-content: start;
  }

  .stat-block {
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #ffc800;
    span {
      gap: 0.2rem;
      font-size: 2rem;
      font-weight: bold;
      color: #a9a9a9;
      display: flex;
      /* margin-top: 0.5rem; */
    }
  }
  .since {
    font-size: 5rem;
    font-family: 'Proxima Nova Condensed', sans-serif;
    font-weight: bold;
    font-weight: 500;
    color: #ffc107;
    position: absolute;
    bottom: 4rem;
    left: -5rem;
  }
  .logo-container {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(255, 200, 0, 0.01),
      rgba(255, 200, 0, 0.1)
    );
    img {
      padding-right: 2rem;
      width: 100%;
      height: 100vh;
    }
  }

  @media (max-width: 62rem) {
    margin: 0 auto;
    height: 80vh;
    .stats-container {
      gap: 4rem;
    }
    .since {
      bottom: 4rem;
      left: -6rem;
    }
    .logo-container {
      img {
        height: 80vh;
      }
    }
    .stats-container {
      align-self: center;
    }
  }

  @media (max-width: 52.5rem) {
    .stats-container {
      align-self: flex-start;
      gap: 8rem;
    }
    .since {
      bottom: 3.5rem;
      left: -7rem;
    }
    .top-text {
      width: 65%;
    }
  }
`;

export default Wrapper;
