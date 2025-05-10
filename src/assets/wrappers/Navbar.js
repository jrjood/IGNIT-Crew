import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 4rem; /* Reserve space for navbar */
  width: 100vw;
  height: ${({ $isSticky }) => ($isSticky ? '4rem' : '6rem')};
  padding: 0 4rem;
  position: relative;
  transition: all 0.6s ease-in-out;
  z-index: 10;
  background-color: ${({ $isSticky }) =>
    $isSticky ? 'var(--black)' : 'transparent'};
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
  .logo-container {
    padding-left: 3rem;
  }
  .logo {
    transition: var(--transition);
    width: ${({ $isSticky }) => ($isSticky ? '8rem' : '10rem')};
  }
  .big-bar {
    display: flex;
    gap: 2rem;
    .nav-link {
      color: white;
      font-size: 0.9rem;
    }
    li {
      &:hover {
        span {
          height: 2rem;
        }
        .nav-link {
          color: rgb(211, 211, 211);
        }
      }
      .active {
        color: var(--primary-400);
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
    transition: var(--transition);
    text-decoration: none;
    font-weight: 600;
  }

  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
    transition: var(--transition);
  }

  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: #fff;
    top: -2.5rem;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }

  .toggle-btn {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 62rem) {
    /* .aside-bar {
      display: block;
      position: fixed;
    } */
    .toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
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
