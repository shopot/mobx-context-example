import { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useCounter } from '../../contexts/counter-context';

export const CounterResults = observer((): JSX.Element => {
  const { value, double } = useCounter();

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
