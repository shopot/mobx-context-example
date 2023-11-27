import { JSX } from 'react';

import { useCounter } from '../../contexts/counter-context';

export const CounterForm = (): JSX.Element => {
  const { decrement, increment } = useCounter();

  console.log('<CounterForm />');

  return (
    <div className="counter-form">
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};
