import { render } from '@testing-library/react';

import SystemAuth from './system-auth';

describe('SystemAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SystemAuth />);
    expect(baseElement).toBeTruthy();
  });
});
