import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #e6e6e6;
  .carousel-container {
    flex-direction: column;
    gap: 2rem;
  }

  .logo-container {
    width: 95%;
    cursor: grab;
  }
  .title {
    color: black;
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
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
  }
`;

export default Wrapper;
