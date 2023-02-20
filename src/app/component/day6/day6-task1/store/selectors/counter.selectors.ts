import { createSelector } from '@ngrx/store';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  counter: FeatureState;
}

export const selectFeature = (state: AppState) => {
  return state.counter;
};

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
