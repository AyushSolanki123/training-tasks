import { createAction, props } from '@ngrx/store';
import { Item } from '../../Item';

export const LIST_ITEMS = '[Cart Component] LIST_ITEMS';
export const VIEW_CART = '[Cart Component] VIEW_CART';
export const ADD_TO_CART = '[Cart Component] ADD_TO_CART';
export const REMOVE_FROM_CART = '[Cart Component] REMOVE_FROM_CART';
export const RESET_STATE = '[Cart Component] RESET_STATE';

export const listItems = createAction(LIST_ITEMS);
export const viewCart = createAction(VIEW_CART);
export const addToCart = createAction(ADD_TO_CART, props<{ item: Item }>());
export const removeFromCart = createAction(
  REMOVE_FROM_CART,
  props<{ item: Item }>()
);
export const resetState = createAction(RESET_STATE);
