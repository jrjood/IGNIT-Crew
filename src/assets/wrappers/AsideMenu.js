import styled from 'styled-components';

const AsideMenu = styled.aside`
  @media (max-width: 48rem) {
    display: flex;
  }
  display: none;
  position: fixed;
  inset: 0;
  background-color: var(--primary-400);
  color: var(--white);
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  .content {
    padding: 4rem 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0;
  }

  .nav-link {
    margin: 1rem 0;
    font-family: 'Rama Gothic M';
    color: rgba(0, 0, 0, 0.75);
    font-size: 2rem;
    transition: var(--transition);
    &:hover {
    }
  }
  li {
    &:hover {
      .nav-link {
        color: rgba(0, 0, 0, 0.58);
      }
    }
    .active {
      color: rgb(211, 211, 211);
    }
  }

  span {
    display: none;
  }
`;
export default AsideMenu;
