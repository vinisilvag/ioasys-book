import styled from 'styled-components';
import backgroundImage from '../../assets/images/login-background.svg';

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;

  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginContainer = styled.main`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;

  @media (max-width: 1136px) {
    padding: 0 1rem;
  }
`;

export const Form = styled.form`
  margin-top: 3rem;
`;

export const InputContainer = styled.fieldset`
  max-width: 34%;
  width: 100%;
  padding: 0.6rem 1rem;

  background-color: rgba(0, 0, 0, 0.32);
  border: none;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 60%;
  }

  @media (max-width: 728px) {
    max-width: 100%;
  }

  &:first-child {
    margin-bottom: 1rem;
  }

  &:last-child {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const Input = styled.input`
  padding: 0.3rem 0;
  border: none;
  background-color: transparent;
  color: var(--white);
  font-size: 1rem;

  &::placeholder {
    color: var(--white);
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: var(--warning);
`;

export const PasswordWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  height: 2.8rem;

  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);

  background-color: var(--white);
  border: none;
  border-radius: 44px;

  padding: 0 1.4rem;
  margin-left: 1rem;
`;
