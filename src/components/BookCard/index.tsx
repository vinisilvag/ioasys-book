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
  <ButtonContainer type="button" {...props} data-testid="card">
    <Container>
      {bookData.imageUrl ? (
        <BookImage
          src={bookData.imageUrl}
          alt={bookData.title}
          data-testid="image"
        />
      ) : (
        <BookNoImage>
          <NoPhotoIcon />
        </BookNoImage>
      )}

      <BookDetails>
        <BookHeader>
          <BookTitle data-testid="title">{bookData.title}</BookTitle>
          <BookAuthor data-testid="authors">
            {bookData.authors.join(', ')}
          </BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoItem data-testid="pageCount">
            {bookData.pageCount} páginas
          </BookInfoItem>
          <BookInfoItem data-testid="publisher">
            Editora {bookData.publisher}
          </BookInfoItem>
          <BookInfoItem data-testid="published">
            Publicado em {bookData.published}
          </BookInfoItem>
        </BookInfo>
      </BookDetails>
    </Container>
  </ButtonContainer>
);

export default BookCard;
