import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  Main,
  PaginationContainer,
  PaginationWrapper,
  PaginationSpan,
  PaginationButton,
  PaginationButtonImage,
} from './styles';

import Header from '../../components/Header';
import BookItem from '../../components/BookItem';
import Modal from '../../components/Modal';

import chevronDisabled from '../../assets/icons/chevron-disabled.svg';
import chevronEnabled from '../../assets/icons/chevron-enabled.svg';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Header />

          <Main>
            <BookItem onClick={toggleModal} />
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
            <PaginationWrapper>
              <PaginationSpan>
                Página <b> 1 </b> de <b> 100</b>
              </PaginationSpan>

              <PaginationButton type="button">
                <PaginationButtonImage src={chevronDisabled} alt="Voltar" />
              </PaginationButton>
            </PaginationWrapper>

            <PaginationButton type="button">
              <PaginationButtonImage src={chevronEnabled} alt="Avançar" />
            </PaginationButton>
          </PaginationContainer>
        </Container>
      </Wrapper>

      <Modal modalIsOpen={showModal} toggleModalFunction={toggleModal} />
    </>
  );
};

export default Home;
