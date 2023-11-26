import { JSX, PropsWithChildren } from 'react';

import { CounterProvider } from '@/features/counter';

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <CounterProvider>{children}</CounterProvider>;
};
