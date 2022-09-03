import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconLogo } from '../../icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <DPIconLogo />
        <FooterLogoText>
          Market <br /> Quadrant
        </FooterLogoText>
      </FooterLogo>
      <div className="footer-info__container">
        <FooterContainer>
          <FooterHeaderText>Product</FooterHeaderText>
          <FooterText>Advertising</FooterText>
          <FooterText>Reach</FooterText>
          <FooterText>Awareness</FooterText>
        </FooterContainer>
        <FooterContainer>
          <FooterHeaderText>Company</FooterHeaderText>
          <FooterText>About</FooterText>
          <FooterText>Blog</FooterText>
          <FooterText>Contact Us</FooterText>
        </FooterContainer>
        <FooterContainer>
          <FooterHeaderText>Help</FooterHeaderText>
          <FooterText>Talk to Support</FooterText>
        </FooterContainer>
      </div>
      <div className="privacy-text">Terms and conditions. Priivacy Plicy</div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  background-color: ${COLORS.black};
  padding-top: 3.2rem;
  padding-bottom: 0.6rem;
  padding-left: 7.2rem;

  .footer-info__container {
    display: flex;
    gap: 18rem;
    margin: 5.1rem 0;

    @media only screen and (max-width: 785px) {
      flex-wrap: wrap;
      gap: 8.5rem;
    }
  }

  .privacy-text {
    width: 100%;
    text-align: center;
    color: ${COLORS.white};
  }

  @media only screen and (max-width: 785px) {
    padding-left: 4.2rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLogoText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHT.normal};
  color: ${COLORS.white};
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterHeaderText = styled.p`
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHT.bold};
  color: ${COLORS['grey-200']};
  margin-bottom: 1.2rem;
`;

const FooterText = styled.p`
  font-size: ${FONTSIZES.xxsmall};
  color: ${COLORS.white};
  margin-bottom: 1.2rem;
`;
