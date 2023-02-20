import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducers';

export const selectCounterState =
  createFeatureSelector<CounterState>('counterState');

export const selectCounter = createSelector(
  selectCounterState,
  (state: CounterState) => state.counter
);
