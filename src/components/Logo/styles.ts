/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoImage = styled.img``;

export const Title = styled.h2<{ variant: string }>`
  font-weight: 300;
  font-size: 2rem;

  margin-left: 1rem;

  color: ${(props) =>
    props.variant === 'white' ? 'var(--white)' : 'var(--light-black)'};
`;
