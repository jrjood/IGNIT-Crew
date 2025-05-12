import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;

  .logo {
    width: 20rem;
    opacity: 0;
    transform: translateY(-10rem);
    animation: fadeSlideIn 1s ease forwards;
    /* animation-delay: 0.2s; */
  }

  .spinner {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top-color: #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-top: 1.5rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(-8rem);
    }
  }
`;

const Loader = () => {
  return (
    <Wrapper className='loader-container'>
      <Logo />
      <div className='spinner'></div>
    </Wrapper>
  );
};
export default Loader;
