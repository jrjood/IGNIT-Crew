import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 8rem;
  justify-content: space-between;
  background-color: black;
  padding-bottom: 4rem;
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .social-icons {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    a {
      color: white;
      transition: all 0.3s ease-in-out;
    }
    .facebook:hover {
      color: #1877f2;
    }
    .linkedin:hover {
      color: #0077b5;
    }
    .instagram:hover {
      color: #ee2a7b;
    }
  }
  .copy-text {
    font-size: 1.1rem;
    font-family: 'Proxima Nova Condensed', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #ccc;
    display: flex;
    /* flex-direction: column; */
    align-items: end;
  }
  .designer-link {
    color: #ff0080;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 18rem;
  }
  @media (max-width: 52.5rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 16rem;
  }
  .social-container {
    align-items: center;
  }
  .social-icons {
    gap: 3rem;
  }
`;
export default Wrapper;
