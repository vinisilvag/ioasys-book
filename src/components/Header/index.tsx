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

import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Logo variant="black" />

      <HeaderDetails>
        <HeaderInfo>
          {user.gender === 'F' ? 'Bem-vinda' : 'Bem-vindo'}, <b>{user.name}!</b>
        </HeaderInfo>

        <LogoutButton type="button" onClick={signOut}>
          <LogoutImage src={logoutIcon} alt="Sair do app" />
        </LogoutButton>
      </HeaderDetails>
    </Container>
  );
};

export default Header;
