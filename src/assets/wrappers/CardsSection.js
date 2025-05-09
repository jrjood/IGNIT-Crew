import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: black;
  color: white;
  text-align: left;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    max-height: 140vh;
  }
  .grid--3--row {
    grid-template-rows: repeat(3, 1fr);
  }
  .grid--2--row {
    grid-template-rows: repeat(2, 1fr);
  }
  .card-slide {
    width: 100%;
    height: 40vh;
    border-radius: 12px;
  }
  .small-screen {
    border-radius: 12px;
    display: none;
    &:hover .overlay {
      opacity: 0.4;
    }

    &:hover .label {
      background: black;
      color: white;
    }
    .img {
      border-radius: 12px;
    }
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;

    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
    }

    &:hover .label {
      background: black;
      color: white;
    }
  }

  .big-card {
    grid-row: 1/3;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    background: yellow;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  .label {
    position: absolute;
    bottom: 2.1875rem;
    left: 0;
    width: 90%;
    height: 7vh;
    background: #ffc800;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: rgb(15, 15, 15);
    font-size: 1rem;
    border-radius: 0 6px 6px 0;
    text-transform: uppercase;
    transition: background 0.3s ease, color 0.3s ease;
    z-index: 2;
  }
  @media (max-width: 62rem) {
    .label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 52.5rem) {
    .big-screen {
      display: none;
    }
    .small-screen {
      display: block;
    }
    .label {
      width: 70%;
      font-size: 1.3rem;
    }
    @media (max-width: 36rem) {
      .label {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 27rem) {
    .label {
      font-size: 0.75rem;
    }
  }
`;

export default Wrapper;
