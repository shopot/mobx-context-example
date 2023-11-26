import { JSX } from 'react';

import { useCounterStore } from '../stores/counter-store';

export const CounterForm = (): JSX.Element => {
  const { decrement, increment } = useCounterStore();

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
