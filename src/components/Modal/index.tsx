import React from 'react';

import {
  Container,
  ModalCloseButton,
  CloseImage,
  ModalContent,
  BookImage,
  BookDetails,
  BookHeader,
  BookInfo,
  BookReview,
  BookTitle,
  BookAuthor,
  BookInfoSectionTitle,
  BookInfoSection,
  BookInfoItem,
  ReviewContainer,
  ReviewIcon,
  ReviewText,
} from './styles';

import modalCloseIcon from '../../assets/icons/x.svg';
import quotesIcon from '../../assets/icons/quotes.svg';

interface ModalProps {
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalIsOpen, toggleModalFunction }) => (
  <Container modalIsOpen={modalIsOpen}>
    <ModalCloseButton type="button" onClick={toggleModalFunction}>
      <CloseImage src={modalCloseIcon} alt="Fechar" />
    </ModalCloseButton>

    <ModalContent>
      <BookImage
        src="https://avatars.githubusercontent.com/u/58532241?v=4"
        alt="Livro"
      />
      <BookDetails>
        <BookHeader>
          <BookTitle>Change By Design</BookTitle>
          <BookAuthor>Tim Brown, Julie Zhuo, Fried Maximiilian</BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoSectionTitle>Informações</BookInfoSectionTitle>

          <BookInfoSection>
            <BookInfoItem>
              <span>Páginas</span>
              <span>304 páginas</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Editora</span>
              <span>Editora Loyola</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Publicação</span>
              <span>2020</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Idioma</span>
              <span>Inglês</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Título Original</span>
              <span>Change By Design</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-10</span>
              <span>0062856626</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-13</span>
              <span>978-0062856623</span>
            </BookInfoItem>
          </BookInfoSection>
        </BookInfo>

        <BookReview>
          <BookInfoSectionTitle>Resenha da Editora</BookInfoSectionTitle>

          <ReviewContainer>
            <ReviewText>
              <ReviewIcon src={quotesIcon} alt="Aspas" />
              The subject of “design thinking” is the rage at business schools,
              throughout corporations, and increasingly in the popular press—due
              in large part to the work of IDEO, a leading design firm, and its
              celebrated CEO, Tim Brown, who uses this book to show how the
              techniques and strategies of design belong at every level of
              business.
            </ReviewText>
          </ReviewContainer>
        </BookReview>
      </BookDetails>
    </ModalContent>
  </Container>
);

export default Modal;
