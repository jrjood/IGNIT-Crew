import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 4rem; /* Reserve space for navbar */
  width: 100vw;
  height: ${({ $isSticky }) => ($isSticky ? '4rem' : '6rem')};
  padding: 0 8rem;
  position: relative;
  transition: all 0.6s ease-in-out;
  z-index: 10;
  background-color: ${({ $isSticky }) => ($isSticky ? 'black' : 'transparent')};
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  box-shadow: ${({ $isSticky }) =>
    $isSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'};

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    transition: all 0.3s ease-in-out;
    width: ${({ $isSticky }) => ($isSticky ? '8rem' : '12rem')};
  }
  .big-bar {
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      color: white;
      font-weight: 500;
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
  }
  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
    transition: all 0.15s ease-in-out;

    &:hover span {
      position: absolute;
      width: 5px;
      height: 35px;
      background-color: #fff;
      top: -40px;
      left: 50%;
      transform: translate(-50%);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: #fff;
    top: -40px;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }
  .aside-bar {
    display: none;
  }
  .toggle-btn {
    display: none;
  }

  @media (max-width: 62rem) {
    .aside-bar {
      display: none;
      position: fixed;
    }
    .toggle-btn {
      display: block;
      position: fixed;
      top: 2rem;
      left: 2rem;
      background: transparent;
      border-color: transparent;
      font-size: 2rem;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .big-bar {
      display: none;
    }
    .logo {
      display: none;
    }
    position: absolute;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }
`;
export default Wrapper;
