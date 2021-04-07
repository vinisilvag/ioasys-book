import React from 'react';

import {
  Wrapper,
  Container,
  Main,
  PaginationContainer,
  PaginationSpan,
  ButtonsContainer,
  PaginationButton,
  PaginationButtonImage,
} from './styles';

import Header from '../../components/Header';
import BookItem from '../../components/BookItem';

import chevronDisabled from '../../assets/icons/chevron-disabled.svg';
import chevronEnabled from '../../assets/icons/chevron-enabled.svg';

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <Header />

      <Main>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </Main>

      <PaginationContainer>
        <PaginationSpan>
          Página <b> 1 </b> de <b> 100</b>
        </PaginationSpan>

        <ButtonsContainer>
          <PaginationButton type="button">
            <PaginationButtonImage src={chevronDisabled} alt="Voltar" />
          </PaginationButton>

          <PaginationButton type="button">
            <PaginationButtonImage src={chevronEnabled} alt="Avançar" />
          </PaginationButton>
        </ButtonsContainer>
      </PaginationContainer>
    </Container>
  </Wrapper>
);

export default Home;
