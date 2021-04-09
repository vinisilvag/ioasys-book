import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '.';

describe('Spinner Component', () => {
  it('should correctly render on the screen', () => {
    const { getByTestId } = render(<Spinner />);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });
});
