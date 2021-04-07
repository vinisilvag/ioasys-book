import React from 'react';

import {
  Container,
  HeaderDetails,
  HeaderInfo,
  LogoutButton,
  LogoutImage,
} from './styles';

import logoutIcon from '../../assets/icons/logout.svg';

import Logo from '../../components/Logo';

const Header: React.FC = () => {
  const handleSignOut = () => {
    console.log('sign out');
  };

  return (
    <Container>
      <Logo variant="black" />

      <HeaderDetails>
        <HeaderInfo>
          Bem-vindo, <b> Guilherme!</b>
        </HeaderInfo>

        <LogoutButton type="button" onClick={handleSignOut}>
          <LogoutImage src={logoutIcon} alt="Sair do app" />
        </LogoutButton>
      </HeaderDetails>
    </Container>
  );
};

export default Header;
