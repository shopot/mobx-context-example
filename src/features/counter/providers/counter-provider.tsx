import { JSX, PropsWithChildren } from 'react';

import { CounterContext } from '../contexts/counter-context';
import { CounterStore } from '../stores/counter-store';

export const CounterProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <CounterContext.Provider value={new CounterStore()}>{children}</CounterContext.Provider>;
};
