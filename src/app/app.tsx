import { JSX } from 'react';

import { AppProvider } from '@/providers/app-provider';
import { Counter } from '@/features/counter';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
};
