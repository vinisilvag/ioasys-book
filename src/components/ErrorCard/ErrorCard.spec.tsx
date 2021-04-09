import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

import ErrorCard from '.';

const mockMessage = faker.lorem.words();

describe('ErrorCard Component', () => {
  it('should correctly render on the screen', () => {
    const { getByTestId } = render(<ErrorCard message={mockMessage} />);
    const errorCard = getByTestId('card');
    expect(errorCard).toBeTruthy();
  });

  it('should correctly render the message on the screen', () => {
    render(<ErrorCard message={mockMessage} />);
    expect(screen.getByTestId('message')).toHaveTextContent(mockMessage);
  });
});
