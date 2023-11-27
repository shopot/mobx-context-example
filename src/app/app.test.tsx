import { render, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  it('renders App component', async () => {
    // ARRANGE
    render(<App />);

    // ACT
    const headingContainer = await screen.getByRole('heading', {
      level: 1,
      name: 'MobX and React Context',
    });

    // ASSERT
    expect(headingContainer).toBeInTheDocument();
  });
});
