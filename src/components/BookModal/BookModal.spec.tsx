/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

import BookModal from '.';

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
    const { getByTestId } = render(
      <BookModal
        book={mockBook}
        modalIsOpen={true}
        toggleModalFunction={jest.fn()}
      />,
    );
    const bookModal = getByTestId('modal');
    expect(bookModal).toBeTruthy();
  });

  it('should render with the correct values', () => {
    render(
      <BookModal
        book={mockBook}
        modalIsOpen={true}
        toggleModalFunction={jest.fn()}
      />,
    );

    expect(screen.getByTestId('modalTitle')).toHaveTextContent(mockBook.title);
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
    expect(screen.getByTestId('language')).toHaveTextContent(mockBook.language);
    expect(screen.getByTestId('isbn10')).toHaveTextContent(mockBook.isbn10);
    expect(screen.getByTestId('isbn13')).toHaveTextContent(mockBook.isbn13);
    expect(screen.getByTestId('publisher')).toHaveTextContent(
      mockBook.publisher,
    );
    expect(screen.getByTestId('published')).toHaveTextContent(
      String(mockBook.published),
    );
  });
});
