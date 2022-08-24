import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconChecked } from '../../icons';

const NextStep = () => {
  const info = [
    { text: 'Have customers engage with ads by scanning with the QR code' },
    { text: 'Creative 2-way interaction between customers and brands' },
    {
      text: 'Insight to brands on customers that interact with ads, their location and how long they interacted.',
    },
  ];
  return (
    <NextStepSection>
      <NextStepHeader>
        Why a Next Step in TV, Newspaper & OOH Ads:
      </NextStepHeader>
      <NextStepContainer>
        <div className="right-section">
          {info?.map(({ text }, idx) => (
            <div className="info-container" key={idx}>
              <DPIconChecked />
              <p className="info-container__text">{text}</p>
            </div>
          ))}
        </div>
      </NextStepContainer>
    </NextStepSection>
  );
};

export default NextStep;

const NextStepSection = styled.section`
  margin-bottom: 16.3rem;
`;

const NextStepHeader = styled.h1`
  font-size: ${FONTSIZES.xxxlarge};
  font-weight: ${FONTWEIGHT.bold};
  color: ${COLORS.white};
  margin-bottom: 3.9rem;
`;

const NextStepContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 2.3rem 1.4rem 2.8rem;
  border-radius: 1.3rem;
  box-shadow: 2px 3px 20px #000000;
  background-color: ${COLORS.black};

  .right-section {
    .info-container {
      display: flex;
      align-items: center;
      gap: 4.8rem;
      margin-bottom: 4.2rem;
      &__text {
        font-size: ${FONTSIZES.xsmall};
        color: ${COLORS.white};
      }
    }
  }
`;
