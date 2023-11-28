import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterForm } from './counter-form';

const decrement = jest.fn();
const increment = jest.fn();

jest.mock('../../contexts/counter-context', () => {
  return {
    useCounter: jest.fn().mockImplementation(() => ({
      decrement,
      increment,
      value: 0,
      double: 0,
    })),
  };
});

describe('CounterForm', () => {
  const user = userEvent.setup();

  it('should calls onClick with decrement', async () => {
    // ARRANGE
    render(<CounterForm />);

    // ACT
    await user.click(
      screen.getByRole('button', {
        name: 'Decrement',
      })
    );

    // ASSERT
    expect(decrement).toHaveBeenCalledTimes(1);
  });

  it('should calls onClick with increment', async () => {
    // ARRANGE
    render(<CounterForm />);

    // ACT
    await user.click(
      screen.getByRole('button', {
        name: 'Increment',
      })
    );

    // ASSERT
    expect(increment).toHaveBeenCalledTimes(1);
  });
});
