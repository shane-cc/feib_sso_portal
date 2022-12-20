import { render } from '@testing-library/react';

import ActionHistory from './action-history';

describe('ActionHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionHistory />);
    expect(baseElement).toBeTruthy();
  });
});
