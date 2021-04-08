import React from 'react';

import {
  Container,
  ModalCloseButton,
  CloseImage,
  ModalContent,
  BookNoImage,
  NoPhotoIcon,
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

import { BookData } from '../../pages/Home';

import modalCloseIcon from '../../assets/icons/x.svg';
import quotesIcon from '../../assets/icons/quotes.svg';

interface BookModalProps {
  book: BookData | null;
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
}

const BookModal: React.FC<BookModalProps> = ({
  book,
  modalIsOpen,
  toggleModalFunction,
}) => (
  <Container modalIsOpen={modalIsOpen}>
    <ModalCloseButton type="button" onClick={toggleModalFunction}>
      <CloseImage src={modalCloseIcon} alt="Fechar" />
    </ModalCloseButton>

    <ModalContent>
      {book?.imageUrl ? (
        <BookImage src={book?.imageUrl} alt={book?.title} />
      ) : (
        <BookNoImage>
          <NoPhotoIcon />
        </BookNoImage>
      )}
      <BookDetails>
        <BookHeader>
          <BookTitle>{book?.title}</BookTitle>
          <BookAuthor>{book?.authors.join(', ')}</BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoSectionTitle>Informações</BookInfoSectionTitle>

          <BookInfoSection>
            <BookInfoItem>
              <span>Páginas</span>
              <span>{book?.pageCount} páginas</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Editora</span>
              <span>{book?.publisher}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Publicação</span>
              <span>{book?.published}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Idioma</span>
              <span>{book?.language}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Título Original</span>
              <span>{book?.title}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-10</span>
              <span>{book?.isbn10}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-13</span>
              <span>{book?.isbn13}</span>
            </BookInfoItem>
          </BookInfoSection>
        </BookInfo>

        <BookReview>
          <BookInfoSectionTitle>Resenha da Editora</BookInfoSectionTitle>

          <ReviewContainer>
            <ReviewText>
              <ReviewIcon src={quotesIcon} alt="Aspas" />
              {book?.description}
            </ReviewText>
          </ReviewContainer>
        </BookReview>
      </BookDetails>
    </ModalContent>
  </Container>
);

export default BookModal;
