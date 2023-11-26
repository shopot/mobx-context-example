import { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useCounterStore } from '../stores/counter-store';

export const CounterResults = observer((): JSX.Element => {
  const { value, double } = useCounterStore();

  console.log('<CounterResults />');

  return (
    <div className="counter-results">
      <h2>
        Value: {value}
        <br />
        Double: {double}
      </h2>
    </div>
  );
});
