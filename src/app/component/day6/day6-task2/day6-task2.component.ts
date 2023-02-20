import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import {
  selectError,
  selectProducts,
} from '../store/selectors/product.selectors';
import { GET_ALL_PRODUCTS } from '../store/actions/product.actions';

@Component({
  selector: 'app-day6-task2',
  templateUrl: './day6-task2.component.html',
  styleUrls: ['./day6-task2.component.scss'],
})
export class Day6Task2Component implements OnInit {
  constructor(private store: Store<AppState>) {}

  products$: Observable<Product[]> = this.store.select(selectProducts);
  errorMessage$: Observable<string> = this.store.select(selectError);

  ngOnInit(): void {
    this.store.dispatch({ type: GET_ALL_PRODUCTS });
  }
}
