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
    <ModalCloseButton
      type="button"
      onClick={toggleModalFunction}
      data-testid="modal"
    >
      <CloseImage src={modalCloseIcon} alt="Fechar" />
    </ModalCloseButton>

    <ModalContent>
      {book?.imageUrl ? (
        <BookImage src={book?.imageUrl} alt={book?.title} data-testid="image" />
      ) : (
        <BookNoImage>
          <NoPhotoIcon />
        </BookNoImage>
      )}
      <BookDetails>
        <BookHeader>
          <BookTitle data-testid="modalTitle">{book?.title}</BookTitle>
          <BookAuthor data-testid="authors">
            {book?.authors.join(', ')}
          </BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoSectionTitle>Informações</BookInfoSectionTitle>

          <BookInfoSection>
            <BookInfoItem>
              <span>Páginas</span>
              <span data-testid="pageCount">{book?.pageCount} páginas</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Editora</span>
              <span data-testid="publisher">{book?.publisher}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Publicação</span>
              <span data-testid="published">{book?.published}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Idioma</span>
              <span data-testid="language">{book?.language}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>Título Original</span>
              <span data-testid="title">{book?.title}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-10</span>
              <span data-testid="isbn10">{book?.isbn10}</span>
            </BookInfoItem>

            <BookInfoItem>
              <span>ISBN-13</span>
              <span data-testid="isbn13">{book?.isbn13}</span>
            </BookInfoItem>
          </BookInfoSection>
        </BookInfo>

        <BookReview>
          <BookInfoSectionTitle>Resenha da Editora</BookInfoSectionTitle>

          <ReviewContainer>
            <ReviewText>
              <ReviewIcon src={quotesIcon} alt="Citação" />
              {book?.description}
            </ReviewText>
          </ReviewContainer>
        </BookReview>
      </BookDetails>
    </ModalContent>
  </Container>
);

export default BookModal;
