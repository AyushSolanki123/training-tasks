import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.scss'],
})
export class Day7Component {
  data: Task = {
    name: 'Day 7',
    route: '/day7',
    tasks: [
      {
        id: 1,
        task: 'RxJs - Product List Task',
        route: '/day7/task1',
      },
      {
        id: 2,
        task: 'RxJs - Candidate List Task',
        route: '/day7/task2',
      },
    ],
  };
}
