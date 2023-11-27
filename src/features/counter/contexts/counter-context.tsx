import { createContext, useContext } from 'react';

import { CounterStore } from '../stores/counter-store';

export const CounterContext = createContext<CounterStore>(null!);

export const useCounter = () => {
  const counter = useContext(CounterContext);

  return counter as CounterStore;
};
