import styled, { keyframes } from 'styled-components';

const fadeScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOverlay 0.3s ease forwards;

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .popup-container {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 700px;
    height: fit-content;
    overflow: hidden;
    position: relative;
    animation: ${fadeScaleIn} 0.4s ease forwards;
    transform-origin: center;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.45),
        rgba(0, 0, 0, 0.81)
      ),
      url(${(props) => props.$background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .closeBtn {
    position: absolute;
    top: 12px;
    right: 18px;
    background: none;
    color: var(--white);
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
    /* color: var(--black); */
  }
  .scrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #fdd835;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
  .popup-card {
    position: relative;
    overflow: hidden;
    /* height: 15rem; */
    border-radius: var(--border-radius);
  }
`;

export default Wrapper;
