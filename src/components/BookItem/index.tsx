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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BookItem: React.FC<ButtonProps> = ({ ...props }) => (
  <ButtonContainer type="button" {...props}>
    <Container>
      <BookImage
        src="https://avatars.githubusercontent.com/u/58532241?v=4"
        alt="Livro"
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
