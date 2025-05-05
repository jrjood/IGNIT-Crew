import styled from 'styled-components';

const AsideMenu = styled.aside`
  @media (min-width: 62rem) {
    display: none;
  }
  position: fixed;
  inset: 0;
  background-color: rgb(255, 200, 0);
  color: white;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateY(${({ $open }) => ($open ? '0' : '-100%')});
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
    transition: color 0.2s ease;
    &:hover {
      color: rgba(0, 0, 0, 0.58);
    }
  }

  .active {
    /* color: green; */
  }
  span {
    display: none;
  }
`;
export default AsideMenu;
