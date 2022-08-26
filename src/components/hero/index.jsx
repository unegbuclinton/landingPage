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

        <DPIconHero className="icon" />
      </HeroContainer>

      <Button text="Talk to Us" className="cta-btn" />
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  margin-bottom: 9.3rem;
  .cta-btn {
    color: ${COLORS.black};
    padding: 2rem 6.2rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHT.bold};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
      -webkit-text-fill-color: ${COLORS.white};
      transform: scale(0.9);
    }
  }

  @media only screen and (max-width: 520px) {
    .cta-btn {
      padding: 2rem 3.2rem;
      font-size: ${FONTSIZES.xsmall};
    }
  }
`;
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  .icon {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: center;

    .icon {
      margin-bottom: 4rem;
    }
  }
`;

const HeroText = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xxxlarge};
  margin-bottom: 4rem;
`;

const HeroSubText = styled.p`
  max-width: 60rem;
  font-size: ${FONTSIZES.small};
  color: ${COLORS.white};
`;
