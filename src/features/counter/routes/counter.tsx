import { JSX } from 'react';

import { CounterResults } from '../components/counter-results';
import { CounterForm } from '../components/counter-form';

export const Counter = (): JSX.Element => {
  return (
    <>
      <CounterResults />
      <CounterForm />
    </>
  );
};
