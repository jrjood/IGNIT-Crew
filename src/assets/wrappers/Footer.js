import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 2.5rem 4rem;
  justify-content: space-between;
  background-color: var(--black);
  padding-bottom: 4rem;
  border-top: 0.1px solid rgba(255, 255, 255, 0.23);
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    a {
      color: var(--white);
      transition: var(--transition);
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
    font-family: 'Proxima-Nova', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 20rem;
    text-align: right;
  }
  .designer-link {
    color: #ff0080;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 20%;
    min-width: 8.125rem;
    max-width: 25rem;
    margin-bottom: 0.5rem;
  }

  /*   @media (max-width: 52.5rem) {
    .copy-text {
      max-width: 12rem;
    }
    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  } */
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-container {
      align-items: center;
    }

    .copy-text {
      text-align: center;
    }

    .designer-link {
      align-self: center;
    }

    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  }
`;
export default Wrapper;
