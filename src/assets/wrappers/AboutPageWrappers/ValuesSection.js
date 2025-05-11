import styled from 'styled-components';
import bgImage from '../../../assets/images/backgrounds/AboutPageImages/valuesSection-bg.png';

const Wrapper = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  color: var(--white);
  width: 100%;
  height: fit-content;
  background-color: var(--black);

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
    column-gap: 1.5rem;
    row-gap: 1rem;
    width: 100%;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.35rem;
    }
  }
`;

export default Wrapper;
