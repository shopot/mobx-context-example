import { JSX, PropsWithChildren } from 'react';

import { CounterContext } from '../contexts/counter-context';
import { counterStore } from '../stores/counter-store';

export const CounterProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <CounterContext.Provider value={counterStore}>{children}</CounterContext.Provider>;
};
