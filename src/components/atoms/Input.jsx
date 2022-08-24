import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const InputField = ({ className, type, placeholder, name }) => {
  return (
    <Input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
    ></Input>
  );
};

export default InputField;

const Input = styled.input`
  width: 100%;
  height: 6.4rem;
  padding: 1.4rem;
  border: none;
  outline: none;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
`;
