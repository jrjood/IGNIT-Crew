import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink className='nav-link' to={link.path} end>
            {link.text}
          </NavLink>
          <span></span>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
