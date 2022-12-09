import { render } from '@testing-library/react';

import ActionHistorySummary from './action-history-summary';

describe('ActionHistorySummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionHistorySummary />);
    expect(baseElement).toBeTruthy();
  });
});
