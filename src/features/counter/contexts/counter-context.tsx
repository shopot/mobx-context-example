import { createContext, useContext } from 'react';

import { CounterStore, counterStore } from '../stores/counter-store';

export const CounterContext = createContext<CounterStore>(counterStore);

export const useCounter = () => {
  const counter = useContext(CounterContext);

  return counter;
};
