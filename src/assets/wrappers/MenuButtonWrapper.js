import styled from 'styled-components';

const MenuButtonWrapper = styled.button`
  background: transparent;
  border: none;
  color: ${({ $open }) => ($open ? 'black' : 'white')};
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 999;

  ${({ $open }) =>
    $open &&
    `
    transform: rotate(90deg);
  `}
`;
export default MenuButtonWrapper;
