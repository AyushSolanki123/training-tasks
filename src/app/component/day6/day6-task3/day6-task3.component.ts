import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../Item';
import {
  selectItems,
  selectCartItems,
  selectCartItemsCount,
} from '../store/selectors/cart.selectors';
import { CartItem } from '../CartItem';
import {
  addToCart,
  removeFromCart,
  resetState,
} from '../store/actions/cart.actions';

@Component({
  selector: 'app-day6-task3',
  templateUrl: './day6-task3.component.html',
  styleUrls: ['./day6-task3.component.scss'],
})
export class Day6Task3Component implements OnDestroy {
  constructor(private store: Store) {}

  items$: Observable<Item[]> = this.store.select(selectItems);
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);
  cartItemsCount$: Observable<number> = this.store.select(selectCartItemsCount);
  isCart = false;

  addItemToCart(item: Item): void {
    this.store.dispatch(addToCart({ item: item }));
  }

  removeItemFromCart(item: Item): void {
    this.store.dispatch(removeFromCart({ item: item }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetState());
  }
}
