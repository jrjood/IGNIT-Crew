import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #e6e6e6;
  .carousel-container {
    flex-direction: column;
    gap: 2rem;
  }

  .logo-container {
    width: 100%;
    cursor: grab;
  }
  .title {
    color: var(--black);
    align-self: flex-start;
  }
  .btn {
    align-self: flex-end;
  }

  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none; /* prevent text‐select while dragging */
    img {
      width: 7.5rem;
      height: 7.5rem;
      object-fit: contain;
    }
  }
  @media (max-width: 36rem) {
    .logo-item {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

export default Wrapper;
