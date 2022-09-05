import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconBars, DPIconLogo } from '../../icons';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const ChangeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', ChangeNavbar);

  const links = [
    { text: 'Home', path: 'home' },
    { text: 'About Us', path: 'about' },
    { text: 'Contacts', path: 'contact' },
  ];
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openNav && ref.current && !ref.current.contains(e.target)) {
        setOpenNav(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openNav]);

  return (
    <NavWrapper navbar={navbar}>
      <div className={`nav-links ${openNav ? 'active-menu' : ''}`}>
        {links?.map(({ text, path }, idx) => (
          <Link to={path} key={idx} className="nav-links__mobile">
            {text}
          </Link>
        ))}
      </div>
      <NavLogo navbar={navbar}>
        <DPIconLogo fill={navbar ? '#000' : '#fff'} />
        <NavLogoText navbar={navbar}>Market Quadrant</NavLogoText>
      </NavLogo>
      <NavLinksWrapper navbar={navbar}>
        {links?.map(({ text, path }, idx) => (
          <Link
            spy={true}
            smooth={true}
            to={path}
            key={idx}
            className="nav-item"
          >
            {text}
          </Link>
        ))}
      </NavLinksWrapper>

      <NavLinkMobile>
        <DPIconBars
          fill={navbar ? '#000' : '#fff'}
          className="hambuger"
          onClick={() => setOpenNav((prev) => !prev)}
          ref={ref}
        />
      </NavLinkMobile>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.6rem;
  padding: 0.5rem 3.2rem 0 3.2rem;
  background: ${({ navbar }) => (navbar ? COLORS.white : 'transparent')};
  z-index: 2;
  .nav-links {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 10.6rem;
    left: 0;
    height: 0%;
    background-color: ${COLORS['smoky-black']};
    overflow: hidden;
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
    z-index: 3;

    &__mobile {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHT.medium};
      color: ${COLORS.white};
      text-decoration: none;
      padding: 2rem;

      &:hover {
        background-color: ${COLORS.white};
        color: ${COLORS.black};
      }
    }
  }
  .active-menu {
    height: 23rem;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: 520px) {
    margin-bottom: 19.6rem;
    padding: 1.5rem 7.2rem;
    .nav-links {
      display: none;
    }
  }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 520px) {
    flex-direction: ${({ navbar }) => (navbar ? 'row' : 'column')};
    align-items: flex-start;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  .nav-item {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHT.medium};
    color: ${({ navbar }) => (navbar ? COLORS.black : COLORS.white)};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${COLORS.black};
    }
  }

  @media only screen and (max-width: 785px) {
    display: none;
  }
`;

const NavLinkMobile = styled.div`
  display: none;
  .hambuger {
    cursor: pointer;
  }
  @media only screen and (max-width: 785px) {
    margin-top: 2rem;
    display: block;
  }
`;

const NavLogoText = styled.p`
  font-size: ${FONTSIZES.xxsmall};
  font-weight: ${FONTWEIGHT.normal};
  color: ${({ navbar }) => (navbar ? COLORS.black : COLORS.white)};

  @media only screen and (max-width: 520px) {
    font-size: ${FONTSIZES.xxsmall};
    transform: ${({ navbar }) =>
      navbar ? ' translatex(-240%)' : ' translateX(0)'};
    transition: transform 0.4s ease-in-out;
  }
`;
