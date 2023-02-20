import { createAction, props } from '@ngrx/store';

export const INCREMENT = '[Counter Component] INCREMENT';
export const DECREMENT = '[Counter Component] DECREMENT';
export const RESET = '[Counter Component] RESET';
export const MULTIPLYBY2 = '[Counter Component] MULTIPLYBY2';
export const MULTIPLY = '[Counter Component] MULTIPLY';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
export const multiplyby2 = createAction(MULTIPLYBY2);
export const multiply = createAction(MULTIPLY, props<{ multiply: number }>());
