/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer, on } from '@ngrx/store';
import { Item, items } from '../../Item';
import { CartItem } from '../../CartItem';
import { addToCart, removeFromCart, resetState } from '../actions/cart.actions';

export interface CartState {
  items: Item[];
  cartItems: CartItem[];
}

export const initialState: CartState = {
  items: items,
  cartItems: [],
};

const _cartReducers = createReducer(
  initialState,
  on(addToCart, (state, { item }) => {
    const cartItem = <CartItem>state.cartItems.find((e) => e.itemId == item.id);
    let isPresent = true;
    let itemInCart!: CartItem;
    if (cartItem) {
      itemInCart = {
        itemId: cartItem.itemId,
        quantity: cartItem.quantity + 1,
        totalPrice: cartItem.quantity * item.price,
      };
    } else {
      isPresent = false;
      itemInCart = <CartItem>{
        itemId: item.id,
        quantity: 1,
        totalPrice: item.price,
      };
    }
    console.log(itemInCart);
    return {
      ...state,
      cartItems: isPresent
        ? state.cartItems.map((i) => (i.itemId == item.id ? itemInCart : i))
        : [itemInCart, ...state.cartItems],
    };
  }),
  on(removeFromCart, (state, { item }) => {
    const cartItem = <CartItem>state.cartItems.find((e) => e.itemId == item.id);
    let isZero = false;
    let itemInCart!: CartItem;
    if (cartItem) {
      if (cartItem.quantity == 1) {
        isZero = true;
      } else {
        itemInCart = {
          itemId: cartItem.itemId,
          quantity: cartItem.quantity - 1,
          totalPrice: cartItem.quantity * item.price,
        };
      }
    }
    return {
      ...state,
      cartItems: isZero
        ? state.cartItems.filter((i) => i.itemId != item.id)
        : state.cartItems.map((i) => (i.itemId == item.id ? itemInCart : i)),
    };
  }),
  on(resetState, () => initialState)
);

export const cartReducers = (state: any, action: any) => {
  return _cartReducers(state, action);
};
