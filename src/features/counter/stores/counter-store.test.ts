import { CounterStore } from './counter-store';

describe('CounterStore', () => {
  it('changes counter value', () => {
    // ARRANGE
    const store = new CounterStore();

    // ACT
    store.increment();
    store.increment();
    store.decrement();

    // ASSERT
    expect(store.value).toBe(1);
    expect(store.double).toBe(2);
  });
});
