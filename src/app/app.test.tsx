import { JSX, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';

import { App } from './app';

jest.mock('@/features/counter', () => ({
  Counter: (): JSX.Element => <h1>It renders App component</h1>,
}));

jest.mock('@/providers/app-provider', () => ({
  AppProvider: ({ children }: PropsWithChildren): JSX.Element => <div>{children}</div>,
}));

describe('App', () => {
  it('renders App component', async () => {
    // ARRANGE
    render(<App />);

    // ACT
    const headingContainer = await screen.getByRole('heading', {
      level: 1,
      name: 'It renders App component',
    });

    // ASSERT
    expect(headingContainer).toBeInTheDocument();
  });
});
