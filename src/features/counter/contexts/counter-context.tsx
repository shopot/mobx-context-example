import { createContext, useContext } from 'react';

import { CounterStore } from '../stores/counter-store';

/**
 * Use an empty object as default value and cast it to the expected context type
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/#type-assertion-as-an-alternative
 */
export const CounterContext = createContext<CounterStore>({} as CounterStore);

export const useCounter = () => useContext(CounterContext);
