import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 4rem; /* Reserve space for navbar */

  @media (min-width: 992px) {
    .aside-bar {
      display: none;
    }
    .toggle-btn {
      display: none;
    }
    .big-bar {
      display: flex !important;
    }
  }
  .navbar {
    @media (min-width: 992px) {
      justify-content: space-between;
    }
    width: 100vw;
    height: 4rem;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    transition: all 0.5s ease-in-out;
    /* z-index: 1000; */
    background-color: ${({ $isSticky }) =>
      $isSticky ? 'black' : 'transparent'};
    position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    right: 0;
    box-shadow: ${({ $isSticky }) =>
      $isSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'};
    .logo {
      display: flex;
      align-items: center;
      width: 150px;
      margin-left: 5rem;
      transition: all 0.5s ease-in-out;
    }
  }
  .big-bar {
    display: none;
    gap: 2rem;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
  .toggle-btn {
    position: absolute;
    top: 0;
    left: 0;
  }
  .aside-bar {
    position: fixed;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
    transition: all 0.15s ease-in-out;

    &:hover span {
      position: absolute;
      width: 5px;
      height: 25px;
      background-color: #fff;
      top: -25px;
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
    top: -25px;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }
`;
export default Wrapper;
