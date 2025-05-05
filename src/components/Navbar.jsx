import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';

import { Logo, NavLinks } from '../components';
import Wrapper from '../assets/wrappers/Navbar';
import MenuButtonWrapper from '../assets/wrappers/MenuButtonWrapper';
import AsideMenu from '../assets/wrappers/AsideMenu';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    if (!heroSection) {
      console.error('Hero section not found');
      return;
    }

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

    return () => observer.unobserve(heroSection);
  }, []);

  return (
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
          onClick={() => setIsOpen((prev) => !prev)}
          $open={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <IoIosMenu />}
        </MenuButtonWrapper>
        <Link>
          <Logo />
        </Link>
        <div className='big-bar'>
          <NavLinks />
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
