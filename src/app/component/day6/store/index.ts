import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './reducers/counter.reducers';
import { ProductState, productReducer } from './reducers/product.reducers';

export interface AppState {
  counterState: CounterState;
  productState: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  counterState: counterReducer,
  productState: productReducer,
};
