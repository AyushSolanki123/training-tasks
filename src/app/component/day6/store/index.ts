import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './reducers/counter.reducers';
import { ProductState, productReducer } from './reducers/product.reducers';
import { CartState, cartReducers } from './reducers/cart.reducers';

export interface AppState {
  counterState: CounterState;
  productState: ProductState;
  cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  counterState: counterReducer,
  productState: productReducer,
  cartState: cartReducers,
};
