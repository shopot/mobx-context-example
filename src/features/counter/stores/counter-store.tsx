import { makeAutoObservable } from 'mobx';

export class CounterStore {
  value = 0;
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  get double() {
    return this.value * 2;
  }

  decrement() {
    this.value -= 1;
  }

  increment() {
    this.value += 1;
  }
}

export const counterStore = new CounterStore();
