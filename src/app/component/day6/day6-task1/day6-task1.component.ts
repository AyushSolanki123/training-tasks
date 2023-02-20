import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  multiply,
  multiplyby2,
  reset,
} from '../store/actions/counter.actions';
import { AppState } from '../store/index';
import { selectCounter } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-day6-task1',
  templateUrl: './day6-task1.component.html',
  styleUrls: ['./day6-task1.component.scss'],
})
export class Day6Task1Component implements OnInit {
  count$: Observable<any> | undefined;
  multiplyBy!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(selectCounter);
    console.log(this.count$);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  multiplyByTwo() {
    this.store.dispatch(multiplyby2());
  }

  multiply() {
    this.store.dispatch(multiply({ multiply: Number(this.multiplyBy) }));
  }
}
