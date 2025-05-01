import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: black;
  color: white;
  padding: 6rem 2rem;
  text-align: left;
  .line {
    width: 100%;
    height: 5px;
    background-color: #ffc800;
  }
  .container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    max-height: 70vh;
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    grid-row: ${({ $big }) => $big && '1/3'};
    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
    }

    &:hover .label {
      background: black;
      color: white;
    }
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
    width: 100%;
    height: 100%;
    background: yellow;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  .label {
    position: absolute;
    bottom: 35px;
    left: 0;
    background: #ffc107;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 0.9rem;
    border-radius: 0 6px 6px 0;
    transition: background 0.3s ease, color 0.3s ease;
    z-index: 2;
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
`;

export default Wrapper;
