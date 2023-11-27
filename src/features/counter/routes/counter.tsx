import { JSX } from 'react';

import { CounterResults } from '../components/counter-results';
import { CounterForm } from '../components/counter-form';

export const Counter = (): JSX.Element => {
  return (
    <>
      <h1>MobX and React Context</h1>
      <CounterResults />
      <CounterForm />
    </>
  );
};
