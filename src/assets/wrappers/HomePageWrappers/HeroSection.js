import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 2rem;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -2;
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -3;
  }
  .content {
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: var(--white);
  }
  .left {
    flex-direction: column;
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-400);
    line-height: 1;
    text-transform: uppercase;
  }
  .info {
    font-size: 6rem;
    line-height: 0.8;
    font-weight: 550;
  }
  .right {
    flex-direction: column;
    display: flex;
    justify-content: center;

    p {
      max-width: 33rem;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 3px rgb(0, 0, 0);
    }
  }
  @media (max-width: 62rem) {
    margin: 0 auto;
    max-width: 47rem;
    .info {
      font-size: 4.1rem;
      line-height: 1.2;
    }
    .content {
      padding: 0;
    }
  }
  @media (max-width: 44rem) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
    .right {
      align-items: center;
    }
    .info {
      max-width: 32rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      text-align: center;
      font-size: 3.8rem;
    }
    .right {
      p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 86%;
    }
  }
`;

export default Wrapper;
