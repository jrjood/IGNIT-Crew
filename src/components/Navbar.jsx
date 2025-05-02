import React, { useEffect, useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa';

import { Logo, NavLinks, AsideBar } from '../components';
import Wrapper from '../assets/wrappers/Navbar';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      <AsideBar className='aside-bar' />
      <nav className='navbar'>
        <button type='button' className='toggle-btn'>
          <FaAlignLeft />
        </button>
        <Logo />
        <div className='big-bar'>
          <NavLinks />
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
