import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--black);
  color: var(--white);
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
    border-radius: var(--border-radius);
  }
  .small-screen {
    border-radius: var(--border-radius);
    display: none;
    &:hover .overlay {
      opacity: 0.4;
    }

    &:hover .label {
      background: var(--black);
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
    }
    .img {
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);

    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: var(--black);
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
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
    transition: var(--transition);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: var(--transition);
    z-index: 1;
  }
  .label {
    position: absolute;
    bottom: 3rem;
    left: 0;
    width: 90%;
    /* height: 7vh; */
    height: 2.5rem;
    background: var(--primary-400);
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: rgb(15, 15, 15);
    font-size: 1rem;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    text-transform: uppercase;
    transition: var(--transition);
    z-index: 2;
  }
  .btn-container {
    align-self: flex-end;
  }
  @media (max-width: 62rem) {
    .label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 48rem) {
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
    .btn {
      position: absolute;
      top: 0;
      right: 10%;
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
