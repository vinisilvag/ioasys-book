import React from 'react';

import {
  ButtonContainer,
  Container,
  BookNoImage,
  NoPhotoIcon,
  BookImage,
  BookDetails,
  BookHeader,
  BookTitle,
  BookAuthor,
  BookInfo,
  BookInfoItem,
} from './styles';

import { BookData } from '../../pages/Home';

interface BookCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bookData: BookData;
}

const BookCard: React.FC<BookCardProps> = ({ bookData, ...props }) => (
  <ButtonContainer type="button" {...props}>
    <Container>
      {bookData.imageUrl ? (
        <BookImage src={bookData.imageUrl} alt={bookData.title} />
      ) : (
        <BookNoImage>
          <NoPhotoIcon />
        </BookNoImage>
      )}

      <BookDetails>
        <BookHeader>
          <BookTitle>{bookData.title}</BookTitle>
          <BookAuthor>{bookData.authors.join(', ')}</BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoItem>{bookData.pageCount} páginas</BookInfoItem>
          <BookInfoItem>Editora {bookData.publisher}</BookInfoItem>
          <BookInfoItem>Publicado em {bookData.published}</BookInfoItem>
        </BookInfo>
      </BookDetails>
    </Container>
  </ButtonContainer>
);

export default BookCard;
