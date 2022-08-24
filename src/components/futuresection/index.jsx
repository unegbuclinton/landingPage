import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import { DPIconQrCode } from '../../icons';

const FutureSection = () => {
  const cards = [
    {
      header: 'Engagement',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exdoloremque id illo molestiae atque alias saepe inventore accusantium. Adipisci.',
    },
    {
      header: 'Collect Data',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exdoloremque id illo molestiae atque alias saepe inventore accusantium. Adipisci.',
    },
    {
      header: 'Insight',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exdoloremque id illo molestiae atque alias saepe inventore accusantium. Adipisci.',
    },
    {
      header: 'Creative interaction',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exdoloremque id illo molestiae atque alias saepe inventore accusantium. Adipisci.',
    },
  ];
  return (
    <FutureWrapper>
      <FutureText>Future of Advertising</FutureText>
      <FutureSubtext>
        Building a bridge for Non digital adverts to become digital so we can
        track customers interaction while making the ads fun.
      </FutureSubtext>

      <CardContainer>
        <CardItems>
          {cards?.map(({ header, text }) => (
            <div className="card-item">
              <div className="card-item__header">
                <DPIconQrCode />
                <CardText>{header}</CardText>
              </div>
              <CardText>{text}</CardText>
            </div>
          ))}
        </CardItems>
      </CardContainer>
    </FutureWrapper>
  );
};

export default FutureSection;

const FutureWrapper = styled.section`
  margin-bottom: 14.8rem;
`;

const FutureText = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xxxlarge};
  margin-bottom: 5.5rem;
`;

const FutureSubtext = styled.h1`
  max-width: 60rem;
  font-size: ${FONTSIZES.small};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHT.normal};
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12rem;
`;

const CardItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  .card-item {
    min-height: 32.7rem;
    background-color: ${COLORS.black};
    border-radius: 1.6rem;
    box-shadow: 5px 2px 4px rgba(0, 0, 0, 0.47);
    padding: 1.8rem 1.6rem 2.4rem 2.7rem;

    &__header {
      display: flex;
      align-items: center;
      gap: 2.8rem;
      margin-bottom: 4.6rem;
    }
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const CardText = styled.p`
  font-size: ${FONTSIZES.small};
  color: ${COLORS.white};
`;
