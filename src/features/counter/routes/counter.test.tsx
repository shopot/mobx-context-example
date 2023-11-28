import { render, screen } from '@testing-library/react';

import { Counter } from './counter';

jest.mock('../components/counter-results', () => ({
  CounterResults: () => {
    return <></>;
  },
}));

jest.mock('../components/counter-form', () => ({
  CounterForm: () => {
    return <></>;
  },
}));

describe('Counter', () => {
  it('renders Counter component', async () => {
    // ARRANGE
    render(<Counter />);

    // ACT
    const headingContainer = await screen.getByRole('heading', {
      level: 1,
      name: 'MobX and React Context',
    });

    // ASSERT
    expect(headingContainer).toBeInTheDocument();
  });
});
