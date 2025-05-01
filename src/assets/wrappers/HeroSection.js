import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: start;
  z-index: 1;
  .overly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    z-index: -2;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: white;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 4rem;
    font-weight: bold;
    color: #ffc107;
    line-height: 1;
    text-transform: uppercase;
    div {
      font-size: 6rem;
      line-height: 0.8;
      display: flex;
      flex-direction: column;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }

    button {
      background-color: #ffc107;
      border: none;
      align-self: flex-start;
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
    }
  }
`;

export default Wrapper;
