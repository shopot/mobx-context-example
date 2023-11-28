import React from 'react';
import { renderHook } from '@testing-library/react';

import { useCounter } from './counter-context';

describe('CounterContext', () => {
  // Mock the useContext hook
  jest.spyOn(React, 'useContext').mockImplementation(() => ({ value: 777 }));

  it('should returns context value', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current).toEqual({ value: 777 });
  });
});
