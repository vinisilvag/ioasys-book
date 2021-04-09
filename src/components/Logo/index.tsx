import React from 'react';

import { Container, LogoImage, Title } from './styles';

import logoBlack from '../../assets/images/logo-black.svg';
import logoWhite from '../../assets/images/logo-white.svg';

interface LogoProps {
  variant: string;
}

const Logo: React.FC<LogoProps> = ({ variant }) => (
  <Container>
    <LogoImage src={variant === 'white' ? logoWhite : logoBlack} alt="ioasys" />
    <Title variant={variant}>Books</Title>
  </Container>
);

export default Logo;
