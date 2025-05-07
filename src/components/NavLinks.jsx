import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useNavBarContext } from './NavBar';

const NavLinks = () => {
  const { toggleSideBar } = useNavBarContext();
  return (
    <ul className='nav-links'>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            onClick={toggleSideBar}
            className='nav-link'
            to={link.path}
            end
          >
            {link.text}
          </NavLink>
          <span></span>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
