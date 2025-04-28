import styled from 'styled-components';

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1rem;

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
  a {
    display: block;
    text-decoration: none;
    background: 0 0;
    border: 0;
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

const NavLink = ({ links }) => {
  return (
    <LinksContainer>
      {links.map((link) => (
        <li>
          <a href={link.path}>{link.name}</a>
          <span></span>
        </li>
      ))}
    </LinksContainer>
  );
};
export default NavLink;
