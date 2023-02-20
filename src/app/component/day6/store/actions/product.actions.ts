import { createAction, props } from '@ngrx/store';
import { Product } from '../../Product';

export const CREATE = '[Product Component] CREATE';
export const UPDATE = '[Product Component] UPDATE';
export const DELETE = '[Product Component] DELETE';
export const GET_ALL_PRODUCTS = '[Product Component] GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS =
  '[Product Component] GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE =
  '[Product Component] GET_ALL_PRODUCTS_FAILURE';

export const createProduct = createAction(
  CREATE,
  props<{ product: Product }>()
);
export const updateProduct = createAction(
  UPDATE,
  props<{ id: number; data: any }>()
);
export const deleteProduct = createAction(DELETE, props<{ id: number }>());
export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const getAllProductsSuccess = createAction(
  GET_ALL_PRODUCTS_SUCCESS,
  props<{ allProducts: Product[] }>()
);
export const getAllProductsFailure = createAction(
  GET_ALL_PRODUCTS_FAILURE,
  props<{ errorMessage: string }>()
);
