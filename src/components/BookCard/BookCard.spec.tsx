import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

import BookCard from '.';

const mockBook = {
  id: faker.datatype.uuid(),
  title: faker.lorem.words(),
  description: faker.lorem.paragraph(),
  authors: Array(faker.name.firstName()),
  pageCount: faker.datatype.number(),
  category: faker.lorem.word(),
  imageUrl: faker.internet.url(),
  isbn10: faker.lorem.word(),
  isbn13: faker.lorem.word(),
  language: faker.lorem.word(),
  publisher: faker.lorem.word(),
  published: faker.datatype.number(),
};

describe('BookCard Component', () => {
  it('should render correctly on the screen', () => {
    const { getByTestId } = render(<BookCard bookData={mockBook} />);
    const bookCard = getByTestId('card');
    expect(bookCard).toBeTruthy();
  });

  it('should render with the correct values', () => {
    render(<BookCard bookData={mockBook} />);

    expect(screen.getByTestId('image')).toHaveAttribute(
      'src',
      mockBook.imageUrl,
    );
    expect(screen.getByTestId('title')).toHaveTextContent(mockBook.title);
    expect(screen.getByTestId('authors')).toHaveTextContent(
      mockBook.authors.join(', '),
    );
    expect(screen.getByTestId('pageCount')).toHaveTextContent(
      `${mockBook.pageCount} páginas`,
    );
    expect(screen.getByTestId('publisher')).toHaveTextContent(
      `Editora ${mockBook.publisher}`,
    );
    expect(screen.getByTestId('published')).toHaveTextContent(
      `Publicado em ${mockBook.published}`,
    );
  });
});
