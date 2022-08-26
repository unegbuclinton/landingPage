import emailjs from '@emailjs/browser';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHT } from '../../constants/fonts';
import Button from '../atoms/Button';
import InputField from '../atoms/Input';

const ContactSection = () => {
  const emailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_juo0hny',
        'template_2f5vc7w',
        e.target,
        'SEDXk114_MP97sFbM'
      )
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );

    e.target.reset();
  };
  return (
    <ContactWrapper onSubmit={emailSubmit}>
      <ContactHeader>Reach out to us</ContactHeader>
      <ContactContainer>
        <InputField
          placeholder="Name"
          className="input-field"
          type="text"
          name="from_name"
        />
        <InputField
          placeholder="Email"
          className="input-field"
          type="email"
          name="email"
        />
      </ContactContainer>

      <ContactTextArea placeholder="Drop us a message" name="message" />

      <div className="btn-container">
        <Button className="contact-btn" text="Send" type="submit" />
      </div>
    </ContactWrapper>
  );
};

export default ContactSection;

const ContactWrapper = styled.form`
  max-width: 90rem;
  margin: 0 auto;
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .contact-btn {
      padding: 2.4rem 6.8rem;
      font-size: ${FONTSIZES.small};
      border-radius: 0.6rem;
      margin-top: 3rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${COLORS.black};
        color: ${COLORS.white};
        transform: scale(0.9);
      }

      @media only screen and (max-width: 520px) {
        padding: 1.4rem 3.8rem;
      }
    }
  }
`;

const ContactHeader = styled.h1`
  font-size: ${FONTSIZES.xxxlarge};
  font-weight: ${FONTWEIGHT.bold};
  color: ${COLORS.white};
  margin-bottom: 3.9rem;
  text-align: center;
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 4rem;
  .input-field {
    border-radius: 1.6rem;

    &:hover {
      background-color: rgba(225, 225, 225, 0.2);
    }
  }

  @media only screen and (max-width: 520px) {
    flex-wrap: wrap;
  }
`;

const ContactTextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  background-color: ${COLORS.black};
  padding: 2.4rem;
  border-radius: 1.6rem;
  color: ${COLORS.white};
`;
