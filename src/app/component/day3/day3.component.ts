import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss'],
})
export class Day3Component {
  data: Task = {
    name: 'Day 3',
    route: '/day3',
    tasks: [
      {
        id: 1,
        task: 'Reactive Forms - Employee Registration',
        route: '/day3/task1',
      },
      {
        id: 2,
        task: 'TDF - Login Form',
        route: '/day3/task2',
      },
      {
        id: 3,
        task: 'TDF - Validation',
        route: '/day3/task3',
      },
    ],
  };
}
