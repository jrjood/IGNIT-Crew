import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';

import { Logo, NavLinks } from '../components';
import Wrapper from '../assets/wrappers/Navbar';
import MenuButtonWrapper from '../assets/wrappers/MenuButtonWrapper';
import AsideMenu from '../assets/wrappers/AsideMenu';

const NavBarContext = createContext();

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function toggleSideBar() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, [location.pathname]); // 👈 re-run when route changes

  return (
    <NavBarContext.Provider
      value={{
        toggleSideBar,
      }}
    >
      <Wrapper $isSticky={isSticky}>
        <AsideMenu $open={isOpen}>
          <div className='content'>
            <NavLinks />
          </div>
        </AsideMenu>
        <nav className='navbar '>
          <MenuButtonWrapper
            type='button'
            className='toggle-btn'
            onClick={toggleSideBar}
            $open={isOpen}
          >
            {isOpen ? <AiOutlineClose /> : <IoIosMenu />}
          </MenuButtonWrapper>
          <Link className='logo-container'>
            <Logo />
          </Link>
          <div className='big-bar'>
            <NavLinks />
          </div>
        </nav>
      </Wrapper>
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => useContext(NavBarContext);
export default NavBar;
