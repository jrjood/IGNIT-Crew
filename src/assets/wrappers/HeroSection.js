import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
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
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: white;
  }
  .left {
    flex: 1;
    flex-direction: column;
    font-size: 4rem;
    font-weight: bold;
    color: #ffc107;
    line-height: 1;
    text-transform: uppercase;
    h1 {
      font-size: 6rem;
      line-height: 0.8;
      font-weight: 550;
    }
  }
  .right {
    flex: 1;
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
    .left {
      h1 {
        font-size: 4.1rem;
        line-height: 1.2;
      }
    }
    .content {
      padding: 0;
    }
  }
`;

export default Wrapper;
