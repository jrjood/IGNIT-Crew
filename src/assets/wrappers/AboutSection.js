import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  .logo {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .left {
    flex: 1;
    align-self: center;
    justify-self: center;
    min-width: 50%;
    img {
      height: 80vh;
      width: 100%;
    }
  }
  .right {
    flex: 1;
    min-width: 50%;
    background-color: #000;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem;
  }
  .text {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  .highlight {
    color: #ffc107;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
  .btn {
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
`;

export default Wrapper;
