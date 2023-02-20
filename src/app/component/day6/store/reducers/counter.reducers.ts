import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  multiplyby2,
  multiply,
} from '../actions/counter.actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(multiplyby2, (state) => {
    return { ...state, counter: state.counter * 2 };
  }),
  on(multiply, (state, arg: any) => {
    return { ...state, counter: arg.multiply * state.counter };
  }),
  on(reset, (state) => initialState)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
