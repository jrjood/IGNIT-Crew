import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #e6e6e6;
  padding: 6rem 2rem;
  .carousel-container {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
  }
  .logo-container {
    width: 1200px;
    cursor: grab;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    color: black;
    align-self: flex-start;
  }
  .btn {
    background-color: #ffc107;
    border: none;
    align-self: flex-end;
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
  .logo-item {
    user-select: none; /* prevent text‐select while dragging */
    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }
`;

export default Wrapper;
