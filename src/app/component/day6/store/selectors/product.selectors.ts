import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducers';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.allProducts
);
export const selectError = createSelector(
  selectProductState,
  (state: ProductState) => state.errorMessage
);
