import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconBars, DPIconLogo } from '../../icons';
import Button from '../atoms/Button';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Contacts', path: '/' },
    { text: 'About Us', path: '/' },
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
    <NavWrapper>
      <div className={`nav-links ${openNav ? 'active' : ''}`}>
        {links?.map(({ text, path }, idx) => (
          <NavLink to={path} key={idx} className="nav-links__mobile">
            {text}
          </NavLink>
        ))}
      </div>
      <NavLogo>
        <DPIconLogo />
        <NavLogoText>Logo</NavLogoText>
      </NavLogo>
      <NavLinksWrapper>
        {links?.map(({ text, path }, idx) => (
          <NavLink to={path} key={idx} className="nav-item">
            {text}
          </NavLink>
        ))}
        <Button text="Login" className="btn-login" />
      </NavLinksWrapper>

      <NavLinkMobile>
        <DPIconBars
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 19.6rem;

  .nav-links {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 15.6rem;
    left: 0;
    height: 0%;
    background-color: ${COLORS['smoky-black']};
    overflow: hidden;
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;

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
  .active {
    height: 45%;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: 520px) {
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
    flex-direction: column;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  .btn-login {
    font-size: ${FONTSIZES.xsmall};
    border: none;
    outline: none;
    background-color: ${COLORS.white};
    padding: 0.9rem 3.5rem;
    border-radius: 1.6rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
      transform: scale(0.9);
    }
  }
  .nav-item {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHT.medium};
    color: ${COLORS.white};
    text-decoration: none;

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
    display: block;
  }
`;

const NavLogoText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHT.bold};
  color: ${COLORS.white};
`;
