import React from 'react';

import {
  ButtonContainer,
  Container,
  BookImage,
  BookDetails,
  BookHeader,
  BookTitle,
  BookAuthor,
  BookInfo,
  BookInfoItem,
} from './styles';

const BookItem: React.FC = () => (
  <ButtonContainer type="button">
    <Container>
      <BookImage
        src="https://avatars.githubusercontent.com/u/58532241?v=4"
        alt="Book"
      />

      <BookDetails>
        <BookHeader>
          <BookTitle>Crossing the Chasm</BookTitle>
          <BookAuthor>Geoffrey A. Moore</BookAuthor>
        </BookHeader>

        <BookInfo>
          <BookInfoItem>150 páginas</BookInfoItem>
          <BookInfoItem>Editora Loyola</BookInfoItem>
          <BookInfoItem>Publicado em 2020</BookInfoItem>
        </BookInfo>
      </BookDetails>
    </Container>
  </ButtonContainer>
);

export default BookItem;
