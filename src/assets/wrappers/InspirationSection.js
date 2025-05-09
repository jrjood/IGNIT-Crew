import styled from 'styled-components';
import bgImage from '../images/backgrounds/AboutPageImages/Inspiration-bg.svg'; // background image

const Wrapper = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-color: #ffc800;
  background-position-x: 98%;

  .container {
    margin: 0 5rem;
    max-width: 70%;
  }
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 5rem;
  }
  .feature {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .title {
    color: black;
    width: 25%;
    margin-bottom: 5rem;
  }
  .text-box {
    color: white;
    font-size: 1.125rem;
    max-width: 62%;
    line-height: 1.5;
  }
  .quote {
    font-size: 2.5rem;
    font-weight: 700;
  }

  @media (max-width: 62rem) {
  }

  @media (max-width: 52.5rem) {
    .row {
      flex-direction: column;
      gap: 2rem;
    }
    .text-box {
      max-width: 100%;
    }
    .container {
      max-width: 80%;
      margin: auto;
    }
    .title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 44rem) {
  }
  @media (max-width: 27rem) {
  }
`;

export default Wrapper;
