import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 8rem;
  justify-content: space-between;
  background-color: black;
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
    font-size: 0.8rem;
    font-weight: 700;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .mophx-link {
    color: #ff0080;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 300px;
  }
`;
export default Wrapper;
