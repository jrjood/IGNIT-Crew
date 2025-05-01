import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavLink from './NavLinks';
import Logo from '../components/Logo';

const NavWrapper = styled.div`
  height: 4rem; /* Reserve space for navbar */
`;

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
  z-index: 1000;
  background-color: ${({ $isSticky }) => ($isSticky ? 'black' : 'transparent')};
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${({ $isSticky }) =>
    $isSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'};
  .logo {
    display: flex;
    align-items: center;
    width: 150px;
    margin-left: 5rem;
    transition: all 0.5s ease-in-out;

    /* margin-top: 2rem; */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

const Navbar = () => {
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
    <NavWrapper>
      <Nav $isSticky={isSticky}>
        <Logo />
        <NavLinks $isSticky={isSticky}>
          <NavLink
            links={[
              { name: 'home', path: '#home' },
              { name: 'about', path: '#about' },
              { name: 'services', path: '#services' },
              { name: 'projects', path: '#projects' },
              { name: 'clients', path: '#clients' },
              { name: 'blogs', path: '#blogs' },
              { name: 'contact', path: '#contact' },
            ]}
          />
        </NavLinks>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
