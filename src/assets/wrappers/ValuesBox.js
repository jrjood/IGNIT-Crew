import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100%;
  overflow: hidden;

  .card-box {
    padding: 30px;
    position: relative;
    background-color: #ffffff40;
    height: 300px;
    width: 100%;
    transition: 0.3s;
    border-radius: 8px;
  }
  .card-icon {
    transition: all 0.3s ease-in-out;
    svg {
      transition: all 0.3s ease-in-out;
      width: 50px;
      height: 50px;
    }
  }
  .separator {
    margin: 15px 0;
    width: 30%;
    height: 5px;
    background-color: #ffc800;
    position: absolute;
    top: 28%;
    transition: all 0.3s ease-in-out;
  }
  .card-title {
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    font-size: 1.625rem;
    top: 42%;
    transition: all 0.3s ease-in-out;
  }
  .card-text {
    position: absolute;
    line-height: 1.5;
    top: 50%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    max-width: 80%;
  }

  &:hover {
    .card-icon {
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .card-icon {
      opacity: 0;
    }
    .separator {
      position: absolute;
      top: 7%;
    }
    .card-title {
      opacity: 0;
    }
    .card-text {
      position: absolute;
      top: 17%;
      opacity: 1;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      /* font-size: 1.2rem; */
    }
    .card-box {
      display: flex;
      justify-content: center;
      text-align: center;
      /* align-items: center; */
    }
    .card-text {
      max-width: 90%;
    }
  }
`;

export default Wrapper;
