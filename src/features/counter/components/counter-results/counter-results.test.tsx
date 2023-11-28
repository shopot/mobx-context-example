import { render, screen } from '@testing-library/react';

import { CounterResults } from './counter-results';

jest.mock('../../contexts/counter-context', () => {
  return {
    useCounter: jest.fn().mockImplementation(() => ({
      decrement: jest.fn(),
      increment: jest.fn(),
      value: 55555,
      double: 0,
    })),
  };
});

describe('CounterResults', () => {
  it('renders CounterResults component', async () => {
    // ARRANGE
    render(<CounterResults />);

    const headingContainer = screen.getByRole('heading', {
      level: 2,
      name: /55555/i,
    });

    // ASSERT
    expect(headingContainer).toBeInTheDocument();
  });
});
