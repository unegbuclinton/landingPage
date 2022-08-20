import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Button = ({ text, className }) => {
  return <ButttonComp className={className}>{text}</ButttonComp>;
};

export default Button;

const ButttonComp = styled.button`
  border: none;
  outline: none;
  background-color: ${COLORS.white};
  border-radius: 1.6rem;
  cursor: pointer;
`;
