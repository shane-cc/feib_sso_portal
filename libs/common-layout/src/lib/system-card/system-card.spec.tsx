import { render } from '@testing-library/react';

import SystemCard from './system-card';

describe('SystemCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SystemCard />);
    expect(baseElement).toBeTruthy();
  });
});
