import { render } from '@testing-library/react';

import AppBar from './app-bar';

describe('Appbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBar />);
    expect(baseElement).toBeTruthy();
  });
});
