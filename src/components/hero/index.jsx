import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconHero } from '../../icons';
import Button from '../atoms/Button';

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <div>
          <HeroText>Next Step For Advertising </HeroText>
          <HeroSubText>
            Leveraging QR code to get customers to do beyond impression with TV,
            OOH & Newspaper Adverts. Have them Engage.
          </HeroSubText>
        </div>

        <DPIconHero />
      </HeroContainer>

      <Button text="Talk to Us" className="cta-btn" />
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  margin-bottom: 9.3rem;
  .cta-btn {
    padding: 2.7rem 9.6rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHT.bold};
  }
`;
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroText = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xxxlarge};
  margin-bottom: 5.5rem;
`;

const HeroSubText = styled.p`
  max-width: 60rem;
  font-size: ${FONTSIZES.small};
  color: ${COLORS.white};
`;
