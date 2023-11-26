import { makeAutoObservable } from 'mobx';
import { createContext, JSX, PropsWithChildren, useContext } from 'react';

class CounterStore {
  value = 0;
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  get double() {
    return this.value * 2;
  }

  decrement() {
    this.value--;
  }

  increment() {
    this.value++;
  }
}

const counterStore = new CounterStore();

const CounterContext = createContext<CounterStore>(counterStore);

export const CounterProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <CounterContext.Provider value={counterStore}>{children}</CounterContext.Provider>;
};

export const useCounterStore = () => {
  const counter = useContext(CounterContext);

  return counter;
};
