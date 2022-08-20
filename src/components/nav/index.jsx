import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconLogo } from '../../icons';
import Button from '../atoms/Button';

const Nav = () => {
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Contacts', path: '/' },
    { text: 'About Us', path: '/' },
  ];
  return (
    <NavWrapper>
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
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 19.6rem;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6.5rem;

  .btn-login {
    font-size: ${FONTSIZES.small};
    border: none;
    outline: none;
    background-color: ${COLORS.white};
    padding: 1.3rem 5rem;
    border-radius: 1.6rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
      transform: scale(0.9);
    }
  }
  .nav-item {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHT.medium};
    color: ${COLORS.white};
    text-decoration: none;

    &:hover {
      color: ${COLORS.black};
    }
  }
`;

const NavLogoText = styled.p`
  font-size: ${FONTSIZES.xxlagre};
  font-weight: ${FONTWEIGHT.bold};
  color: ${COLORS.white};
`;
