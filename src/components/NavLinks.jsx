import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggle }) => {
  return (
    <ul className='nav-links'>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink onClick={toggle} className='nav-link' to={link.path} end>
            {link.text}
            <span></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
