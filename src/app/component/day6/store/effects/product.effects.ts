import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../day6-task2/product.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_ALL_PRODUCTS),
      mergeMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) => ({
            type: GET_ALL_PRODUCTS_SUCCESS,
            allProducts: products,
          })),
          catchError(() =>
            of({
              type: GET_ALL_PRODUCTS_FAILURE,
              errorMessage: 'No Products Found',
            })
          )
        )
      )
    )
  );
}
