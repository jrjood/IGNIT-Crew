import styled from 'styled-components';

const Wrapper = styled.footer`
  background: black;
  color: white;
  padding: 6rem 2rem 3rem;

  .contact-top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap;
    transform: translateY(-10.5rem);
  }
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .contact-circle {
    width: 8rem;
    height: 8rem;
    background: #ffc107;
    border-radius: 50%;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2.1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-size: 2.6rem;
      transform: rotate(-20deg);
    }
  }
  .label {
    margin: 0.5rem 0;
  }
  .info {
    color: #00aaff;
    font-size: 0.9rem;
    text-decoration: none;
    &:hover {
      color: #0075af;
    }
  }
  .divider {
    width: 1px;
    height: 80px;
    background: white;
    opacity: 0.2;
    margin: 0 1rem;
    margin-bottom: -6rem;
  }
`;

export default Wrapper;
