import styled from 'styled-components';
import bgImage from '../../images/backgrounds/HomePageImages/milestones-bg.jpg'; // background image

const Wrapper = styled.section`
  color: #a9a9a9;
  background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.26)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  /* height: 50vh; */

  .content {
    padding-left: 3rem;
    z-index: 2;
    /* width: 100%; */
    gap: 2rem;
    /* height: 200rem !important; */
  }

  .container {
    /* height: 35rem; */
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
  }
  .stats {
    gap: 3rem;
    /* justify-content: start; */
  }

  .stat-block {
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    color: var(--primary-400);
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
    display: none;
    font-size: 5rem;
    font-family: 'Proxima-Nova', sans-serif;
    font-weight: bold;
    font-weight: 500;
    color: var(--primary-400);
    position: absolute;
    bottom: 4rem;
    left: -5rem;
  }
  .logo-container {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(255, 200, 0, 0.01),
      rgba(128, 127, 127, 0.49)
    );
    img {
      padding-right: 2rem;
      width: 100%;
      height: 100%;
    }
    position: relative;
    &::after {
      content: 'Since';
      font-size: 5rem;
      font-family: 'Rama Gothic M' !important;
      text-transform: uppercase;
      font-weight: bold;
      opacity: 0.3;
      font-weight: 500;
      color: var(--primary-400);
      position: absolute;
      bottom: 4rem;
      right: 2rem;
    }
  }
  .small-screen {
    display: none;
  }
  @media (max-width: 48rem) {
    height: fit-content;

    .stats-container {
      gap: 4rem;
    }
    .since {
      bottom: 3.5rem;
      left: -7rem;
    }

    .stats-container {
      align-self: flex-start;
      gap: 8rem;
    }
    .top-text {
      width: 65%;
    }
  }

  @media (max-width: 52.5rem) {
  }
  @media (max-width: 44rem) {
    .logo-container {
      display: none;
    }
    .content {
      justify-content: center;
      padding-left: 0;
    }
    .stats-container {
      gap: 2rem;
    }
    .small-screen {
      display: flex;
      align-self: center;
      flex-direction: column;
      gap: -1rem;
      .small-since {
        font-size: 4rem;
        font-family: 'Proxima-Nova', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
      .small-date {
        font-size: 7rem;
        font-family: 'Rama Gothic M', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
    }
    .top-text {
      align-self: center;
      justify-self: center;
      text-align: center;
      width: 100%;
    }
    .stats-container {
      width: 80%;
    }
  }
  @media (max-width: 27rem) {
    /* .stats {
      flex-direction: column;
    }
    .stat-block {
      justify-content: center;
      align-items: center;
    } */

    .stat-block {
      font-size: 120%;
    }
  }
`;

export default Wrapper;
