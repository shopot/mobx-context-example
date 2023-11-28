import { useContext } from 'react';
import { render, screen } from '@testing-library/react';

import { CounterStore } from '../stores/counter-store';
import { CounterProvider } from './counter-provider';
import { CounterContext } from '../contexts/counter-context';

jest.mock('../stores/counter-store');

const TestingComponent = () => {
  const { value } = useContext(CounterContext);

  return <div data-testid="value-id">{value}</div>;
};

describe('CounterProvider', () => {
  beforeAll(() => {
    (CounterStore as jest.Mock).mockImplementation(() => {
      return {
        value: 333,
      };
    });
  });

  it('should provides expected CounterContext to child elements', async () => {
    // ARRANGE

    render(
      <CounterProvider>
        <TestingComponent />
      </CounterProvider>
    );

    // ACT
    const valueContainer = await screen.getByTestId('value-id');

    // ASSERT
    expect(valueContainer).toBeInTheDocument();
    expect(valueContainer.textContent).toEqual('333');
  });
});
