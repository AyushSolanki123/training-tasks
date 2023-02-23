import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducers';

export const selectCartState = createFeatureSelector<CartState>('cartState');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems
);

export const selectItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartItemsCount = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems.length
);

export const selectCartItem = (id: number) =>
  createSelector(selectCartState, (state: CartState) =>
    state.cartItems.filter((e) => e.itemId == id)
  );
