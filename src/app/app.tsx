import { JSX } from 'react';

import { AppProvider } from '@/providers/app-provider';
import { Counter } from '@/features/counter';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <h1>MobX and React Context</h1>
      <Counter />
    </AppProvider>
  );
};
